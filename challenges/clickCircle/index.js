document.querySelector('#canvas').addEventListener('click', (event) => {
    console.log(event);
    const div = document.createElement('div');
    div.setAttribute('id', 'circle');
    div.classList.add('circle');
    const size = Math.random() * 50 + 25;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor

    if(event.target.id === 'circle') {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        div.style.border = `1px solid #${randomColor}`;
    }
    div.style.left = `${event.clientX}px`;
    div.style.top = `${event.clientY}px`;
    document.getElementById('canvas').appendChild(div);
})