import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formElem = document.querySelector('form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const onSubmit = event => {
  event.preventDefault();

  const formData = new FormData(formElem);
  const delay = parseInt(formData.get('delay'));
  const step = parseInt(formData.get('step'));
  const amount = parseInt(formData.get('amount'));

  for (let position = 0; position < amount; position++) {
    const promiseDelay = delay + step * position;

    createPromise(position + 1, promiseDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        return position;
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        return position;
      });
  }
};

formElem.addEventListener('submit', onSubmit);
