document.querySelector('#canvas').addEventListener('click', (event) => {
    console.log(event);
    const div = document.createElement('div');

    div.classList.add('circle');
    const size = Math.random() * 50 + 25;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.left = `${event.clientX}px`;
    div.style.top = `${event.clientY}px`;
    document.getElementById('canvas').appendChild(div);
})