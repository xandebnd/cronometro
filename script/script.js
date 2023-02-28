const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const millisecondsEl = document.querySelector('#milliseconds');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resetBtn = document.querySelector('#resetBtn');
const resumeBtn = document.querySelector('#resumeBtn');

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', resumeTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer () {
  interval = setInterval(() => {

    if(!isPaused) {
      milliseconds += 10;

      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }

      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }

      minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
      secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
      millisecondsEl.textContent =  milliseconds < 100 ? String(milliseconds).padStart(3, '0') : milliseconds;
    }
  }, 10);

  startBtn.style.display = 'none';
  pauseBtn.style.display = 'block';
  resumeBtn.style.display = 'none';
  resetBtn.style.display = 'block';
}

function pauseTimer () {
  isPaused = true;
  pauseBtn.style.display = 'none';
  resumeBtn.style.display = 'block';
  resetBtn.style.display = 'block';
}

function resumeTimer () {
  isPaused = false;
  pauseBtn.style.display = 'block';
  resumeBtn.style.display = 'none';
  resetBtn.style.display = 'block';
}

function resetTimer () {
  clearInterval(interval);
  isPaused = false;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  minutesEl.textContent = '00';
  secondsEl.textContent = '00';
  millisecondsEl.textContent = '000';

  startBtn.style.display = 'block';
  pauseBtn.style.display = 'none';
  resumeBtn.style.display = 'none';
  resetBtn.style.display = 'none';
}
