// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const formEl = document.querySelector('.form')
// const firstDelay = document.querySelector("[name=delay]")
// const delayStep = document.querySelector('[name=step]')
// const amountEl = document.querySelector('[name=amount]')
// const submitBtn = document.querySelector('[type="submit"]')

// formEl.addEventListener('submit', counter);

// function counter(event){
// event.preventDefault()
// const delay = parseInt(firstDelay.value)
// const amount = parseInt(amountEl.value)
// const step = parseInt(delayStep.value)

//   for (let i = 0; i < amount; i+= 1){

    
// setTimeout(()=>{
//  setTimeout(()=>{
//   createPromise(i + 1, delay )
//  },step * i)
// },delay)}

// createPromise()
//   .then(({ position, delay }) => {
//     Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
//   })
//   .catch(({ position, delay }) => {
//     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
// }





// function createPromise(position, delay) {
//   const delay = parseInt(firstDelay.value)
//   const amount = parseInt(amountEl.value)
//   const step = parseInt(delayStep.value)
  
//     for (let i = 0; i < amount; i+= 1){
  
      
//   setTimeout(()=>{
//    setTimeout(()=>{
//     createPromise(i + 1, delay )
//    },step * i)
//   },delay)}
//   return new Promise((resolve,reject) => {const shouldResolve = Math.random() > 0.3;
//     if (shouldResolve) {
//       // Fulfill
//       // resolve(Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
//       resolve('succes')
      
//     } else {
//       // Reject
//       // reject('error')
//       // reject( Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
//     }})
 
// }



