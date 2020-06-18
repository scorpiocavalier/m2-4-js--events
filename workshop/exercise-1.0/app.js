// Exercise 1.0
// ------------
document.addEventListener('click', () => {
    let p = document.createElement('p');
    p.innerHTML = 'You Win!';
    let main = document.querySelector('.main');
    main.appendChild(p);
});