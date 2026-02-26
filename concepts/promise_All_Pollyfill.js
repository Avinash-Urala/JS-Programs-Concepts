function promiseAll(promises) {
  let result = [];
  let completed = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(value => {
        result[index] = value
        completed++;
        
        if(completed === promises.length) {
          resolve(result);
        }
      }).catch(reject)
    })
  })
}


const p1 = Promise.resolve(1);
const p2 = new Promise(res => setTimeout(() => res(2), 1000));
const p3 = 3;
const p4 = Promise.reject(4);

promiseAll([p1, p2, p3, p4])
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
