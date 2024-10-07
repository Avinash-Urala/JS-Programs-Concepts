const promise1 = new Promise((resolve, reject) => {
  const isSuccess = false;
  if (isSuccess) {
    resolve("promise1 successful");
  } else {
    reject("promise1 failure");
  }
});

const promise2 = new Promise((resolve, reject) => {
  const isSuccess = true;
  setTimeout(() => {
    if (isSuccess) {
        resolve("promise2 successful");
      } else {
        reject("promise2 failure");
      }
  }, 1000)
  
});

// Promise.all([promise1, promise2]).then((data) => {
//     console.log(data);
// })

// Promise.allSettled([promise1, promise2]).then((data) => {
//         console.log(data);
//     })

// Promise.race([promise1, promise2]).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

Promise.any([promise1, promise2]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})
