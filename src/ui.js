// Start screen, opening captions and the always-visible data credit.
// Caption wording is placeholder copy for Cyril to rewrite; every fact in it
// is sourced in references/europa.md.

// The opening facts (Europa, Jupiter fixed in the sky, low gravity, no
// steering in a jump) used to play here as timed captions. They are now
// taught one at a time by the training (src/game/training.js), where the
// child does each thing as it is explained, so nothing is timed here.
const CAPTIONS = [];

export function createUI(controls) {
  const start = document.getElementById('start');
  const caption = document.getElementById('caption');
  const crosshair = document.getElementById('crosshair');
  let playing = false;
  let t = 0;
  let shown = -1;

  // Something to play before the very first step outside (the intro video
  // and the dangers briefing, game/prelude.js; set from main.js). It is given
  // a function to call when it is over, and says whether it has started.
  let playFirst = null;
  const cta = start.querySelector('.cta');
  start.addEventListener('click', () => {
    const playing = playFirst && playFirst(() => {
      cta.textContent = 'Click to step outside';
      start.classList.remove('hidden');
    });
    if (playing) start.classList.add('hidden');
    else controls.lock();
  });
  controls.addEventListener('lock', () => {
    start.classList.add('hidden');
    crosshair.classList.add('show');
    playing = true;
  });
  controls.addEventListener('unlock', () => {
    start.classList.remove('hidden');
    crosshair.classList.remove('show');
    start.querySelector('.cta').textContent = 'Click to continue';
  });

  function update(dt) {
    if (!playing || !CAPTIONS.length) return;
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

  return {
    update,
    before(play) {
      playFirst = play;
      cta.textContent = 'Click to begin';
    },
  };
}
