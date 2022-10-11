import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
const firstDelay = document.querySelector('[name=delay]');
const delayStep = document.querySelector('[name=step]');
const amountEl = document.querySelector('[name=amount]');

formEl.addEventListener('submit', counter);

function counter(event) {
  event.preventDefault();
  let delay = parseInt(firstDelay.value);
  const step = parseInt(delayStep.value);
  const amount = parseInt(amountEl.value);
  

  for (let i = 0; i < amount; i += 1){
let position = 1
  setTimeout(()=>{
    position +=i
    createPromise(position, delay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
   })
   
   delay += step
  })
  
}
 

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
setTimeout(()=>{
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    resolve({ position, delay });
  } else {
    // Reject
    reject({ position, delay });
  }
},delay );

})

   
}

