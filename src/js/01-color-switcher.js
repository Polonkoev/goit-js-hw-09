const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;

function startFoo() {
  startBtn.setAttribute('disabled', 'disabled');
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

startBtn.addEventListener('click', startFoo);

stopBtn.addEventListener('click', () => {
  startBtn.removeAttribute('disabled');
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
