const throttle = (func, delay) => {
    let isThrottled = false;

    return function(...args) {
        if(!isThrottled) {
            func.apply(this, args);
            isThrottled = true;

            setTimeout(() => {
                isThrottled = false;
            }, delay)
        }
    }
}

// const log = () => {
//     console.log('throttle is logged !!')
// }

// const throttleHandler = throttle(log, 2000);
// setInterval(throttleHandler, 500);

const button = document.getElementById('btn');
console.log(button.disabled);

const handleClick = () => {
    button.disabled = true;
}

const clickHandler =  throttle(handleClick, 3000);


const enableButton = (e) => {
    console.log('throttle is called')
    e.target.disabled = false
}

