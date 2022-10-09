import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const inputDate = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
let addedDate = 0;

startBtn.setAttribute('disabled', 'disabled');


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notify.warning('Please choose a date in the future');

      startBtn.setAttribute('disabled', 'disabled');
    } else {
      startBtn.removeAttribute('disabled', 'disabled');
    }
    addedDate = selectedDates[0];
    console.log(selectedDates[0]);
  },
};
function addLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, '0');
}

flatpickr(inputDate, options);

function startHandler() {
  const intervalFoo = setInterval(() => {
    const timer = convertMs(addedDate - new Date());
    daysEl.textContent = addLeadingZeros(timer.days, 2);
    hoursEl.textContent = addLeadingZeros(timer.hours, 2);
    minutesEl.textContent = addLeadingZeros(timer.minutes, 2);
    secondsEl.textContent = addLeadingZeros(timer.seconds, 2);

    if (getMsByObj() === 0) {
      clearInterval(intervalFoo);
    }
  }, 1000);

  function getMsByObj() {
    const timeObj = convertMs(addedDate - new Date());
    const dayMs = timeObj.days * 24 * 60 * 60 * 1000;
    const hourMs = timeObj.hours * 60 * 60 * 1000;
    const minutesMs = timeObj.minutes * 60 * 1000;
    const secondsMs = timeObj.seconds * 1000;
    const timeMs = dayMs + hourMs + minutesMs + secondsMs;

    return timeMs;
  }
}

startBtn.addEventListener('click', startHandler);



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  // return { days, hours, minutes, seconds };
  return { days, hours, minutes, seconds };
}
