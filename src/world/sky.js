import * as THREE from 'three';
import { SKY } from './layout.js';
import { seededRandom } from './noise.js';

const SKY_DIST = 6000;

// Black, airless sky: sharp stars, real-size Jupiter with NASA's Cassini map,
// Io, a tiny bright Sun, and a faint false-colour aurora band.
export function createSky(sunLight) {
  const group = new THREE.Group();
  group.name = 'sky';

  group.add(createStars());

  const jupiter = createJupiter();
  group.add(jupiter);

  const io = createIo();
  group.add(io);

  const sun = createSun();
  group.add(sun);

  const aurora = createAurora();
  group.add(aurora);

  // Everything in the sky follows the camera so it never gets closer.
  const stars = group.children[0];
  const update = (camera, time, pixelRatio = 1) => {
    group.position.copy(camera.position);
    jupiter.rotation.y = time * 0.004; // bands drift; Jupiter really spins every ~10 h
    jupiter.material.uniforms.uCamPos.value.copy(camera.position);
    aurora.material.uniforms.uTime.value = time;
    stars.material.uniforms.uScale.value = pixelRatio;
  };

  return { group, update, jupiter, io, sun, aurora };
}

function createStars() {
  const rand = seededRandom(7);
  const bright = 5000;
  const band = 7000; // the Milky Way: a denser belt of faint stars
  const count = bright + band;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const c = new THREE.Color();
  const tilt = new THREE.Euler(1.05, 0.4, 0.3);
  const v = new THREE.Vector3();
  const R = SKY_DIST * 1.2;
  for (let i = 0; i < count; i++) {
    const inBand = i >= bright;
    let u = rand() * 2 - 1;
    if (inBand) u = (rand() + rand() + rand() - 1.5) * 0.22; // squeezed toward a great circle
    const t = rand() * Math.PI * 2;
    const s = Math.sqrt(1 - u * u);
    v.set(s * Math.cos(t), u, s * Math.sin(t));
    if (inBand) v.applyEuler(tilt);
    positions.set([v.x * R, v.y * R, v.z * R], i * 3);
    const temp = rand();
    c.setHSL(temp < 0.3 ? 0.6 : temp < 0.6 ? 0.1 : 0.0, temp < 0.6 ? 0.55 : 0.0, inBand ? 0.5 + rand() * 0.25 : 0.85);
    colors.set([c.r, c.g, c.b], i * 3);
    sizes[i] = inBand ? 0.9 + rand() * 0.7 : Math.pow(rand(), 7) * 3.2 + 1.0;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
  const mat = new THREE.ShaderMaterial({
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    uniforms: { uScale: { value: 1 } },
    // No twinkling: stars only twinkle through air, and Europa has none.
    vertexShader: /* glsl */ `
      attribute float size; uniform float uScale; varying vec3 vColor; varying float vBig;
      void main(){ vColor = color; vBig = size; vec4 mv = modelViewMatrix * vec4(position,1.0);
        gl_PointSize = max(size * uScale, 1.0); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: /* glsl */ `
      varying vec3 vColor; varying float vBig;
      void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.05, d);
        gl_FragColor = vec4(vColor * (1.0 + 0.35 * vBig), a); }`,
  });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false;
  return pts;
}

function createJupiter() {
  const radius = SKY_DIST * Math.tan(THREE.MathUtils.degToRad(SKY.jupiterAngularDiameterDeg / 2));
  const geo = new THREE.SphereGeometry(radius, 96, 64);
  const mat = planetMaterial(null, 2.1, 1.0);
  // NASA/JPL/Space Science Institute, Cassini cylindrical map (PIA07782).
  // Colours are boosted a little for the stylised look; the bands are real.
  new THREE.TextureLoader().load(`${import.meta.env.BASE_URL}textures/jupiter-cassini-PIA07782.jpg`, (tex) => {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    mat.uniforms.uMap.value = saturate(tex, 1.6, 1.12);
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.copy(SKY.jupiterDir).multiplyScalar(SKY_DIST);
  mesh.name = 'jupiter';
  return mesh;
}

// Planets are lit ONLY by the Sun (not by the scene's fill lights), so their
// phase is exactly right: the lit half always faces the Sun.
function planetMaterial(map, brightness, atmosphere) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uMap: { value: map },
      uSunDir: { value: SKY.sunDir.clone() },
      uBrightness: { value: brightness },
      uAtmosphere: { value: atmosphere }, // Jupiter has deep air, Io almost none
      uCamPos: { value: new THREE.Vector3() },
      uBehind: { value: 0 }, // 1 while the Sun is hidden behind this planet (an eclipse)
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv; varying vec3 vN; varying vec3 vW;
      void main(){ vUv = uv; vN = normalize(mat3(modelMatrix) * normal);
        vec4 wp = modelMatrix * vec4(position,1.0); vW = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp; }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D uMap; uniform vec3 uSunDir; uniform float uBrightness; uniform float uAtmosphere; uniform vec3 uCamPos; uniform float uBehind;
      varying vec2 vUv; varying vec3 vN; varying vec3 vW;
      void main(){
        vec3 tex = texture2D(uMap, vUv).rgb;
        vec3 N = normalize(vN);
        vec3 S = normalize(uSunDir);
        float l = dot(N, S);
        // Day side, with a soft edge where day turns to night (thick air
        // blurs it on Jupiter).
        float lit = smoothstep(-0.08, 0.32, l) * (0.62 + 0.38 * max(l, 0.0));
        // The edge of a gas planet looks darker: you look through more air.
        float mu = clamp(dot(N, normalize(uCamPos - vW)), 0.0, 1.0); // never above 1: pow(1.0 - mu, ...) below must not go negative
        float limb = mix(1.0, pow(mu, 0.45), uAtmosphere);
        vec3 col = tex * lit * limb * uBrightness;
        // Sunlit haze right at the edge of the day side.
        col += uAtmosphere * vec3(1.0, 0.82, 0.60) * pow(1.0 - mu, 4.0) * smoothstep(-0.02, 0.35, l) * 0.9;
        // Night side: almost black, a touch of deep blue so the disc reads.
        col += tex * vec3(0.010, 0.014, 0.030) * (1.0 - lit);
        // Eclipse: with the Sun right behind it, sunlight bends through the
        // planet's air and outlines it with a thin bright ring (spacecraft in
        // Jupiter's shadow have photographed this).
        col += uAtmosphere * uBehind * vec3(1.0, 0.72, 0.42) * (pow(1.0 - mu, 9.0) * 5.0 + pow(1.0 - mu, 3.0) * 0.12);
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
}

function saturate(texture, sat, contrast) {
  const img = texture.image;
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.filter = `saturate(${sat}) contrast(${contrast})`;
  ctx.drawImage(img, 0, 0);
  const out = new THREE.CanvasTexture(canvas);
  out.colorSpace = THREE.SRGBColorSpace;
  out.anisotropy = texture.anisotropy;
  return out;
}

function createIo() {
  const radius = SKY_DIST * Math.tan(THREE.MathUtils.degToRad(SKY.ioAngularDiameterDeg / 2));
  // Placeholder look: sulfur yellow-orange with darker volcanic spots.
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#e8c45a';
  ctx.fillRect(0, 0, 256, 128);
  const rand = seededRandom(3);
  for (let i = 0; i < 90; i++) {
    ctx.fillStyle = ['#c9852f', '#f3e08a', '#7a3d1c', '#d9a441'][i % 4];
    ctx.beginPath();
    ctx.arc(rand() * 256, rand() * 128, rand() * 7 + 1, 0, Math.PI * 2);
    ctx.fill();
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 32, 16), planetMaterial(tex, 2.0, 0.0));
  mesh.position.copy(SKY.ioDir).multiplyScalar(SKY_DIST);
  mesh.name = 'io';
  return mesh;
}

function createSun() {
  // From Europa the Sun is a tiny, fierce point: a fifth of the width we see
  // from Earth. The thin spikes are a camera-style glint, not a bigger Sun.
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const h = size / 2;
  ctx.globalCompositeOperation = 'lighter';
  const glow = ctx.createRadialGradient(h, h, 0, h, h, h);
  glow.addColorStop(0, 'rgba(255,246,230,0.55)');
  glow.addColorStop(0.05, 'rgba(255,236,210,0.16)');
  glow.addColorStop(0.25, 'rgba(255,225,195,0.03)');
  glow.addColorStop(1, 'rgba(255,220,190,0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, size, size);
  const spike = (angle, length, width, alpha) => {
    ctx.save();
    ctx.translate(h, h);
    ctx.rotate(angle);
    const g = ctx.createLinearGradient(-length, 0, length, 0);
    g.addColorStop(0, 'rgba(255,240,220,0)');
    g.addColorStop(0.5, `rgba(255,248,236,${alpha})`);
    g.addColorStop(1, 'rgba(255,240,220,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(-length, 0); ctx.lineTo(0, -width); ctx.lineTo(length, 0); ctx.lineTo(0, width);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  };
  spike(0, h * 0.95, 2.2, 0.8);
  spike(Math.PI / 2, h * 0.6, 2.2, 0.7);
  spike(Math.PI / 4, h * 0.28, 1.6, 0.4);
  spike(-Math.PI / 4, h * 0.28, 1.6, 0.4);
  const core = ctx.createRadialGradient(h, h, 0, h, h, 7);
  core.addColorStop(0, 'rgba(255,255,255,1)');
  core.addColorStop(0.6, 'rgba(255,255,255,1)');
  core.addColorStop(1, 'rgba(255,250,240,0)');
  ctx.fillStyle = core;
  ctx.fillRect(h - 8, h - 8, 16, 16);
  const tex = new THREE.CanvasTexture(canvas);
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, blending: THREE.AdditiveBlending, depthWrite: false, color: 0xffffff }));
  sprite.material.color.multiplyScalar(5); // only the tiny core is bright enough to bloom
  sprite.scale.setScalar(SKY_DIST * 0.16);
  sprite.position.copy(SKY.sunDir).multiplyScalar(SKY_DIST);
  sprite.name = 'sun';
  return sprite;
}

// Faint curtain of false-colour aurora near the horizon. The real glow is
// ultraviolet and invisible; the game labels the purple as artistic colour.
// uIntensity rises during plasma-sheet crossings (event system, later).
function createAurora() {
  const geo = new THREE.CylinderGeometry(SKY_DIST * 0.9, SKY_DIST * 0.9, SKY_DIST * 0.22, 160, 1, true, 0, Math.PI * 1.3);
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    uniforms: { uTime: { value: 0 }, uIntensity: { value: 0.55 } },
    vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: /* glsl */ `
      varying vec2 vUv; uniform float uTime; uniform float uIntensity;
      float h(float x){ return fract(sin(x*127.1)*43758.5453); }
      float n(float x){ float i=floor(x), f=fract(x); return mix(h(i), h(i+1.), f*f*(3.-2.*f)); }
      void main(){
        float x = vUv.x * 66.0;
        // Slow folds of the curtain, and fine rays inside it.
        float fold = n(x*0.35 + uTime*0.05) * 0.65 + n(x*1.1 - uTime*0.08) * 0.35;
        float rays = 0.55 + 0.45 * n(x*7.0 + uTime*0.25) * n(x*17.0 - uTime*0.4 + 3.0);
        // The curtain's lower edge wanders up and down and is sharp; the
        // light fades upward.
        float base = 0.10 + 0.22 * n(x*0.5 + 4.0 + uTime*0.03);
        float y = vUv.y;
        float lower = smoothstep(base - 0.02, base + 0.05, y);
        float upper = exp(-(y - base) * (3.2 + 2.0 * fold));
        float edges = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        float a = (0.25 + 0.75*fold) * rays * lower * upper * edges * uIntensity;
        vec3 col = mix(vec3(1.0,0.35,0.85), vec3(0.50,0.22,1.0), smoothstep(base, base + 0.45, y));
        col = mix(col, vec3(0.30,0.45,1.0), smoothstep(0.55, 1.0, y));
        gl_FragColor = vec4(col * a * 1.4, a);
      }`,
  });
  const mesh = new THREE.Mesh(geo, mat);
  // Rotate the open arc to face the aurora direction, sitting on the horizon.
  const yaw = Math.atan2(SKY.auroraCenterDir.x, SKY.auroraCenterDir.z);
  mesh.rotation.y = yaw - Math.PI * 0.65; // centre of the arc points along auroraCenterDir
  mesh.position.y = SKY_DIST * 0.15;
  mesh.name = 'aurora';
  return mesh;
}
