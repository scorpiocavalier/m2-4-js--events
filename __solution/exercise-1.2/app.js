// Exercise 1.2
// ------------

// Create variables with DOM items
const body = document.querySelector('body');
const result = document.getElementById('result');

let hasWon = false;

const time = Math.floor(Math.random() * 3 + 2);
document.getElementById('time').innerText = time;

// The 'click' function
function clickEvent() {
  hasWon = true;
  result.innerText = 'You Win!';

  // always remove the eventListener when you're done
  body.removeEventListener('click', clickEvent);
}

setTimeout(function () {
  console.log('time up');
  if (!hasWon) {
    result.innerText = 'You Lose!';

    // always remove the eventListener when you're done
    body.removeEventListener('click', clickEvent);
  }
}, time * 1000);

console.log(time);
// Add the event listener
body.addEventListener('click', clickEvent);
