var date = new Date();

let main = document.querySelector('.main');

let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

main.innerHTML = `Current Time: ${hour}:${minutes}:${seconds}`;