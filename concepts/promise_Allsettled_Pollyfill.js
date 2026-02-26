function promiseAllSettled(promises) {
  
  if(promises.length === 0) {
    return Promise.resolve([]);
  }
  
  let result = [];
  let completed = 0;
  
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
        result[index] = {
          value: value,
          status: 'fulfilled'
        }
//         result.push(obj);
//         completed++;
        
//         if(completed === promises.length) {
//           resolve(result);
//         }
      }).catch((err) => {
        result[index] = {
          reason: err,
          status: 'rejected'
        }
//         result.push(obj);
//         completed++;
        
//         if(completed === promises.length) {
//           resolve(result);
//         }
        
      }).finally(() => {
        completed++;
        if(completed === promises.length) {
          resolve(result);
        }
      })
    })
  })
}
const p1 = Promise.resolve(1);
const p2 = new Promise(res => setTimeout(() => res(2), 1000));
const p3 = 3;
const p4 = Promise.reject(4);

promiseAllSettled([]).then((res) => console.log(res));
promiseAllSettled([p1,p2,p3,p4]).then((res) => console.log(res));
