document.querySelector('#button').addEventListener('mouseover', (event) => {
   console.log(event);
    // const left = Math.random() * 50 + event.clientX;
    // const top = Math.random() * 50 + event.clientY;

    const button = document.getElementById('button');
    button.classList.add('btn');
    button.style.position = 'absolute';

    const left = Math.random() * window.innerWidth;
    const top = Math.random() * window.innerHeight;
   
    button.style.left = `${left}px`
    button.style.top = `${top}px`

})