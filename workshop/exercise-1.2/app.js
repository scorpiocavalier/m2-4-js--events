// Exercise 1.2
// ------------

// Add a flag and click listener
let clicked = false;
document.addEventListener('click', () => clicked = true);

// Create a timer and show it.
let timer = Math.floor(Math.random() * 5) + 1;
document.querySelector('#time').innerHTML = timer;

// Updates the timer and shows it. Stop the interval when timer reaches 0.
const updateCountdown = () => {

    document.querySelector('#time').innerHTML = --timer;

    if(timer == 0)
        clearInterval(countdown);
}

// Shows if user won or lost and stops the timeout.
const showMessage = () => {
    
    document.querySelector('.result').innerHTML = clicked ? 'You Win!' : 'You Lost!';

    if(clicked)
        clearTimeout(checkWinner);
}

// Start interval for countdown.
let countdown = setInterval(updateCountdown, 1000);

// Start timeout for showing message.
let checkWinner = setTimeout(showMessage, timer*1000);
