// Exercise 1.0
// ------------

// Create variables with DOM items
const body = document.querySelector('body');
const result = document.getElementById('result');

// The 'click' function
function clickEvent() {
  result.innerText = 'You Win!';
  // always remove the eventListener when you're done
  body.removeEventListener('click', clickEvent);
}

// Add the event listener
body.addEventListener('click', clickEvent);
