self.onmessage = function(e) {
    console.log('Worker received', e.data);

    const result = e.data.reduce((acc, el) => acc + el, 0);

    self.postMessage(result);
}