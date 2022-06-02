import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');

const currentDate = Date.now();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < currentDate) {
      window.alert('Please choose a date in the future');
    } else {
      btnStart.disabled = false;
      btnStart.addEventListener('click', timer(selectedDates[0]));
    }
  },
};

flatpickr(input, options);

function convertMs(ms) {
  console.log(`convertMs: ${ms}`);
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  console.log(
    `days: ${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`
  );

  return { days, hours, minutes, seconds };
}

const showTime = targetTime => {
  console.log(`showTime: ${targetTime}`);
  //input.value = string;
};

const timer = selectedDate => {
  console.log('timer');
  setInterval(() => {
    const ms = selectedDate - new Date();
    result = convertMs(ms);

    const UItimer = input.value;
    showTime(UItimer);
  }, 1000);
};

//btnStart.addEventListener('click', timer);
