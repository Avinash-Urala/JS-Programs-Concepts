/** Throttling is a technique that limits execution of a function
 * to once in every specific time interval
 * 
 * throttle function limits the number of times a function can be executed in a specified time frame
 */

window.addEventListener('resize', () => {
    throttleUpdateLayout();
});

const throttleUpdateLayout = throttle(updateLayout, 1000);

const throttle = (func, delay) => {
    let isRunning = false;

    return function(...args) {
        if(!isRunning) {
            isRunning = true;
            func.apply(this, args)

            setTimeout(() => {
                isRunning = false
            }, delay)
        }
    }
}

function updateLayout() {
    // logic here
}