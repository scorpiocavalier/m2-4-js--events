let paused = true;
let hours = 0;
let minutes = 0;
let seconds = 0;

let stopwatch = document.querySelector('#stopwatch');

const button = document.querySelector('#btn');

let updateWatch = () => stopwatch.innerHTML = `${hours}:${minutes}:${seconds}`;

let id = null;    

let start = () => id = setInterval(startCount, 1000);

let stop = () => clearInterval(id);

let handleClick = () => {
    console.log('1. paused: ', paused);
    paused ? start() : stop();
    paused = !paused;
    console.log('2. paused: ', paused);
}

let startCount = () => {
    seconds++;
    if(seconds == 60) {
        minutes++;
        seconds = 0;
        if(minutes == 60) {
            hours++;
            minutes = 0;
        }
    }
    updateWatch();
}

let app = () => {
    updateWatch();
    
    button.addEventListener('click', handleClick);
    button.innerHTML = 'START / STOP';
}

app();