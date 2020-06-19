const UNCLICKED_COLOR = 'darkred';
const CLICKED_COLOR = 'darkgreen';
const FONT_COLOR = 'white';
const FONT_SIZE = '30px';
const FONT_WEIGHT = '700';
const token_SIDE_LENGTH = '100';
const TOKENS = Math.floor(Math.random() * 10) + 1;

let won = false;
let TIME = 5;
let clicked = 0;
let started = false;
let endgameMsg = document.createElement('span');

const game = document.querySelector('.game');
const gameSection = document.querySelector('.game-section');
const offsetHeight = game.offsetHeight - token_SIDE_LENGTH;
const offsetWidth = game.offsetWidth - token_SIDE_LENGTH;

for(let i = 1; i <= TOKENS; i++) {
    const token = document.createElement('button');
    token.style.width = `${token_SIDE_LENGTH}px`;
    token.style.height = `${token_SIDE_LENGTH}px`;
    token.style.backgroundColor = UNCLICKED_COLOR;
    token.style.color = FONT_COLOR;
    token.style.fontSize = FONT_SIZE;
    token.style.fontWeight = FONT_WEIGHT;
    token.style.border = 'none';
    token.style.outline = 'none';
    token.style.borderRadius = '50%';
    token.style.position = 'absolute';
    
    token.style.top = `${Math.floor(Math.random() * offsetHeight)}px`;
    token.style.left = `${Math.floor(Math.random() * offsetWidth)}px`;
    token.style.display = 'flex';
    token.style.justifyContent = 'center';
    token.style.alignItems = 'center';
    token.innerHTML = i;
    
    game.appendChild(token);
}

document.querySelector('.game-section').appendChild(game);

let stopGame = () => {
    clearInterval(timer);
    removeTokenListeners();
    stopCountdown();
    showWinner();
}

// Add event listener to all tokens except endgameMsg.
let addTokenListeners = () => {
    for(let i=0; i<game.children.length-1; i++) {
        let token = game.children[i];
        token.addEventListener('click', () => handleToken(token));
    };
}

// Remove event listener to all tokens except endgameMsg.
let removeTokenListeners = () => {
    for(let i=0; i<game.children.length-1; i++) {
        let token = game.children[i];
        token.disabled = true;
        token.removeEventListener('click', () => handleToken(token));
    };
}

let handleToken = token => {

    token.disabled = true;

    clicked++;
    totalClicked.innerHTML = `Total Clicked: ${clicked}`;
    totalUnclicked.innerHTML = `Remaining: ${TOKENS - clicked}`;
    
    let currentColor = token.style.backgroundColor;
    token.style.backgroundColor = (currentColor == CLICKED_COLOR) ? UNCLICKED_COLOR : CLICKED_COLOR;
    
    // Stop game if all tokens are clicked.
    (TOKENS == clicked) && stopGame();
}

// Add event handler for start button.
let start_btn = document.querySelector('.start');

let startGame = () => {
    // Disappearing button effect.
    start_btn.style.width = '100%';
    start_btn.style.height = '100%';
    start_btn.style.visibility = 'hidden';

    // Add event listener to all tokens except endgameMsg.
    addTokenListeners();

    // Start countdown.
    startCountdown();
}

start_btn.addEventListener('click', startGame);

// Start countdown after button pressed.
let countdown = document.querySelector('.countdown');
let timer;
let updateCountdown = () => {
    if(TIME == 0) {
        countdown.style.color = 'rgb(255, 230, 0)';
        stopGame();
    }
    countdown.innerHTML = TIME--;
}
let startCountdown = () => {
    countdown.style.animationPlayState = 'running';
    timer = setInterval(updateCountdown, 1000);
}

let stopCountdown = () => countdown.style.animationPlayState = 'paused';

// Show end of game message.
endgameMsg.style.boxShadow = '8px 8px 6px 2px #888';
endgameMsg.style.color = 'white';
endgameMsg.style.fontSize = '5rem';
endgameMsg.style.width = '500px';
endgameMsg.style.height = '200px';
endgameMsg.style.display = 'flex';
endgameMsg.style.justifyContent = 'center';
endgameMsg.style.alignItems = 'center';
endgameMsg.style.borderRadius = '10px';
endgameMsg.style.zIndex = 1;
endgameMsg.style.position = 'absolute';
endgameMsg.style.top = `${(game.offsetHeight / 2) - 100}px`;
endgameMsg.style.left = `${(game.offsetWidth / 2) - 250}px`;
endgameMsg.style.visibility = 'hidden';

game.appendChild(endgameMsg);

const showWinner = () => {
    won = clicked === TOKENS;
    endgameMsg.innerHTML = won ? 'You Win!!!!' : 'You Lose...';
    endgameMsg.style.backgroundColor = won ? CLICKED_COLOR : UNCLICKED_COLOR;
    endgameMsg.style.visibility = 'visible';
}

// Status of the game.
let totalTokens = document.querySelector('#total-tokens');
let totalClicked = document.querySelector('#total-clicked');
let totalUnclicked = document.querySelector('#total-unclicked');

totalTokens.innerHTML = `Total Tokens: ${TOKENS}`;
totalClicked.innerHTML = `Total Clicked: ${clicked}`;
totalUnclicked.innerHTML = `Remaining: ${TOKENS - clicked}`;