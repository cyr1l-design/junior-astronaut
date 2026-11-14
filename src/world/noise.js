// Small deterministic value noise, used for terrain heights and placement.
// The ground's colour noise lives in the shader (terrain.js); this one only
// needs to be stable so the player's feet match the ground mesh.

function hash(x, z) {
  const s = Math.sin(x * 127.1 + z * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

export function valueNoise(x, z) {
  const xi = Math.floor(x);
  const zi = Math.floor(z);
  const xf = x - xi;
  const zf = z - zi;
  const u = xf * xf * (3 - 2 * xf);
  const v = zf * zf * (3 - 2 * zf);
  const a = hash(xi, zi);
  const b = hash(xi + 1, zi);
  const c = hash(xi, zi + 1);
  const d = hash(xi + 1, zi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

export function fbm(x, z, octaves = 5) {
  let value = 0;
  let amp = 0.5;
  for (let i = 0; i < octaves; i++) {
    value += amp * valueNoise(x, z);
    x *= 2.03;
    z *= 2.03;
    amp *= 0.5;
  }
  return value;
}

// Seeded random for placing rocks and blades the same way every load.
export function seededRandom(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}
