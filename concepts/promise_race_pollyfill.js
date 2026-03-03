function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    if(!Array.isArray(promises)) {
      reject('Argument must be iterable !');
    }
    
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch(reject)
    })
  })
}


promiseRace(promises)
  .then(val => console.log(val))
  .catch(err => console.error(err))
