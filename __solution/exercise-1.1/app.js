// Exercise 1.1
// ------------

// Create variables with DOM items
const body = document.querySelector('body');
const result = document.getElementById('result');

let hasWon = false;

// The 'click' function
function clickEvent() {
  hasWon = true;
  result.innerText = 'You Win!';

  // always remove the eventListener when you're done
  body.removeEventListener('click', clickEvent);
}

setTimeout(function () {
  if (!hasWon) {
    result.innerText = 'You Lose!';

    // always remove the eventListener when you're done
    body.removeEventListener('click', clickEvent);
  }
}, 1000);

// Add the event listener
body.addEventListener('click', clickEvent);
