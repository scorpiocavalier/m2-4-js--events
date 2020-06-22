let paused = true;
let minutes = 0;
let seconds = 0;
let id = null;    

const formatTime = time => time < 10 ? `0${time}` : time;

const updateWatch = () => document.querySelector('#stopwatch').innerHTML = `${formatTime(minutes)}:${formatTime(seconds)}`;

const start = () => id = setInterval(startCount, 1000);

const stop = () => clearInterval(id);

const toggleBtnIcon = () => {
    const icon = document.querySelector('i');
    icon.classList.toggle('fa-play-circle');
    icon.classList.toggle('fa-pause-circle');
}

const handleClick = () => {
    paused ? start() : stop();
    paused = !paused;
    toggleBtnIcon();
}

const startCount = () => {
    seconds++;
    if(seconds == 60) {
        minutes++;
        seconds = 0;
    }
    updateWatch();
}

const app = () => {
    updateWatch();
    document.querySelector('#play-pause-btn').addEventListener('click', handleClick);
}

app();