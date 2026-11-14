// Start screen, opening captions and the always-visible data credit.
// Caption wording is placeholder copy for Cyril to rewrite; every fact in it
// is sourced in references/europa.md.

const CAPTIONS = [
  { t: 1.0, text: 'Europa, an ice moon of Jupiter.' },
  { t: 6.5, text: 'Jupiter never moves in this sky: one side of Europa always faces it.' },
  { t: 13.0, text: 'Gravity here is about 13% of Earth’s. Try a jump (Space).' },
];

export function createUI(controls) {
  const start = document.getElementById('start');
  const caption = document.getElementById('caption');
  let playing = false;
  let t = 0;
  let shown = -1;

  start.addEventListener('click', () => controls.lock());
  controls.addEventListener('lock', () => {
    start.classList.add('hidden');
    playing = true;
  });
  controls.addEventListener('unlock', () => {
    start.classList.remove('hidden');
    start.querySelector('.cta').textContent = 'Click to continue';
  });

  function update(dt) {
    if (!playing) return;
    t += dt;
    const next = CAPTIONS.findLastIndex((c) => t >= c.t);
    if (next !== shown) {
      shown = next;
      caption.classList.remove('show');
      setTimeout(() => {
        caption.textContent = CAPTIONS[next].text;
        caption.classList.add('show');
      }, 400);
    }
    if (shown === CAPTIONS.length - 1 && t > CAPTIONS[shown].t + 7) caption.classList.remove('show');
  }

  return { update };
}
