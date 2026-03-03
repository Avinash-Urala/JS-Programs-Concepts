function promiseAny(promises) {
  
  return new Promise((resolve, reject) => {
    if(!Array.isArray(promises)) {
      reject('Argument must be iterable!')
    }
    let rejectedCount = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
      .then(resolve)
      .catch(error => {
        rejectedCount++;
        if(rejectedCount === promises.length) {
          reject('All promises rejected')
        }
      })
    })
  })
}

const promise1 = Promise.reject(new Error("error"));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, "quick"));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 500, "slow"));

const promises = [promise1, promise2, promise3];

promiseAny(promises)
  .then(res => console.log(res))
  .catch(err => console.error(err));
