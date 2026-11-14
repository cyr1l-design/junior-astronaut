import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

// Stylised finish: bloom on lights, a gentle colour grade (richer colour,
// cooler shadows, warmer highlights) and a soft vignette. No haze or fog:
// Europa has no air. Every step multiplies the picture, never adds to it, so
// the black sky stays truly black.
const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uSaturation: { value: 1.2 },
    uVignette: { value: 0.3 },
  },
  vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse; uniform float uSaturation; uniform float uVignette; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      c.rgb = max(mix(vec3(l), c.rgb, uSaturation), 0.0);
      c.rgb *= mix(vec3(0.90, 0.97, 1.12), vec3(1.02, 1.0, 0.97), smoothstep(0.03, 0.55, l));
      float v = smoothstep(0.95, 0.25, length(vUv - 0.5));
      c.rgb *= mix(1.0 - uVignette, 1.0, v);
      gl_FragColor = c;
    }`,
};

export function createComposer(renderer, scene, camera) {
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  // Only things brighter than white glow: lamps, windows, the Sun, the cave,
  // the melt shaft and Jupiter's sunlit clouds. Plain sunlit ice does not.
  const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.42, 0.5, 1.02);
  composer.addPass(bloom);
  composer.addPass(new ShaderPass(GradeShader));
  composer.addPass(new OutputPass());
  // Cheap edge smoothing (the bloom pipeline has no built-in antialiasing).
  const fxaa = new ShaderPass(FXAAShader);
  composer.addPass(fxaa);

  function setSize(width, height, pixelRatio) {
    composer.setPixelRatio(pixelRatio);
    composer.setSize(width, height);
    fxaa.material.uniforms.resolution.value.set(1 / (width * pixelRatio), 1 / (height * pixelRatio));
  }
  setSize(innerWidth, innerHeight, renderer.getPixelRatio());
  return { composer, bloom, setSize };
}
