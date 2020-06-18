// Exercise 1.1
// ------------
let clicked = false;

document.addEventListener('click', () => clicked = true);

let timer = setTimeout(() => {
    document.querySelector('.result').innerHTML = clicked ? 
    'You Win!' : 'You Lost!';
    clearTimeout(timer);
}, 1000);