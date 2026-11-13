'use strict';

// Mobile menu; the four navigation links are normal page links and work without JavaScript.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');
if (menuButton && navigation) {
  const setMenuOpen = (open) => {
    navigation.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  };
  menuButton.addEventListener('click', () => setMenuOpen(!navigation.classList.contains('is-open')));
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenuOpen(false); });
  document.addEventListener('click', event => {
    if (!navigation.contains(event.target) && !menuButton.contains(event.target)) setMenuOpen(false);
  });
}

// Accurate weight-based yardage estimate for rectangular/flat crochet projects.
const form = document.getElementById('yardage-form');
if (form) {
  const yardsOutput = document.getElementById('result-yards');
  const gramsOutput = document.getElementById('result-grams');
  const skeinsOutput = document.getElementById('result-skeins');
  const feedback = document.getElementById('calculator-message');
  const round1 = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 });
  const whole = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

  function calculate(event) {
    if (event) event.preventDefault();
    const names = ['swatchWidth', 'swatchHeight', 'swatchWeight', 'projectWidth', 'projectHeight', 'skeinYards', 'skeinGrams', 'buffer'];
    const fields = Object.fromEntries(names.map(name => [name, Number(form.elements.namedItem(name).value)]));
    const positives = names.filter(name => name !== 'buffer');
    const valid = positives.every(name => Number.isFinite(fields[name]) && fields[name] > 0) &&
      Number.isFinite(fields.buffer) && fields.buffer >= 0 && fields.buffer <= 200;

    if (!valid) {
      yardsOutput.textContent = '—';
      gramsOutput.textContent = '—';
      skeinsOutput.textContent = '—';
      feedback.textContent = 'Enter positive measurements and a waste allowance between 0% and 200%.';
      feedback.classList.add('error');
      return;
    }

    const swatchArea = fields.swatchWidth * fields.swatchHeight;
    const projectArea = fields.projectWidth * fields.projectHeight;
    const baseGrams = fields.swatchWeight * (projectArea / swatchArea);
    const neededGrams = baseGrams * (1 + fields.buffer / 100);
    const neededYards = neededGrams * (fields.skeinYards / fields.skeinGrams);
    const skeins = Math.ceil(neededGrams / fields.skeinGrams);
    if (![neededGrams, neededYards, skeins].every(Number.isFinite)) {
      feedback.textContent = 'The measurements are too large to calculate. Try smaller values.';
      feedback.classList.add('error');
      return;
    }

    yardsOutput.textContent = whole.format(Math.ceil(neededYards));
    gramsOutput.textContent = `${round1.format(neededGrams)} g`;
    skeinsOutput.textContent = `${whole.format(skeins)} ${skeins === 1 ? 'skein' : 'skeins'}`;
    feedback.classList.remove('error');
    feedback.textContent = `Estimate includes ${fields.buffer}% extra yarn. Buy enough from the same dye lot when possible.`;
  }
  form.addEventListener('submit', calculate);
  form.addEventListener('input', calculate);
  form.addEventListener('reset', () => requestAnimationFrame(() => calculate()));
  calculate();
}

// All printable pattern instructions are written directly in the HTML.
document.querySelectorAll('.print-button').forEach(button => {
  button.addEventListener('click', () => window.print());
});
