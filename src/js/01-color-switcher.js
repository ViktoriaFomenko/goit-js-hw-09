const body = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop');
let timeoutId = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

timeoutId = changeColor = () => {
  setTimeout(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};
btnStart.addEventListener('click', changeColor);
btnStop.addEventListener('click', clearTimeout(timeoutId));
