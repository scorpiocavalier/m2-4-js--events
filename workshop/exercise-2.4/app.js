const UNCLICKED_COLOR = 'darkred';
const CLICKED_COLOR = 'darkgreen';
const FONT_COLOR = 'white';
const FONT_SIZE = '30px';
const FONT_WEIGHT = '700';
const token_SIDE_LENGTH = '100';

const game = document.querySelector('.game');
const gameSection = document.querySelector('.game-section');
const offsetHeight = game.offsetHeight - token_SIDE_LENGTH;
const offsetWidth = game.offsetWidth - token_SIDE_LENGTH;

for(let i = 1; i <= 20; i++) {
    const token = document.createElement('div');
    token.style.width = `${token_SIDE_LENGTH}px`;
    token.style.height = `${token_SIDE_LENGTH}px`;
    token.style.backgroundColor = UNCLICKED_COLOR;
    token.style.color = FONT_COLOR;
    token.style.fontSize = FONT_SIZE;
    token.style.fontWeight = FONT_WEIGHT;
    token.style.borderRadius = '50%';
    token.style.position = 'absolute';
    
    token.style.top = `${Math.floor(Math.random() * offsetHeight)}px`;
    token.style.left = `${Math.floor(Math.random() * offsetWidth)}px`;
    token.style.display = 'flex';
    token.style.justifyContent = 'center';
    token.style.alignItems = 'center';
    token.innerHTML = i;
    
    token.addEventListener('click', () => {
        let currentColor = token.style.backgroundColor;
        token.style.backgroundColor = (currentColor == CLICKED_COLOR) ? UNCLICKED_COLOR : CLICKED_COLOR;
    });
    
    game.appendChild(token);
}

document.querySelector('.game-section').appendChild(game);

// Add event handler for start button
let start_btn = document.querySelector('.start');

let disappear = () => {
    start_btn.style.width = '100%';
    start_btn.style.height = '100%';
    start_btn.style.visibility = 'hidden';
}

start_btn.addEventListener('click', disappear);

// Start timer
