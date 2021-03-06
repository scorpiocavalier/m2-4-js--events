const UNCLICKED_COLOR = 'darkred';
const CLICKED_COLOR = 'darkgreen';
const FONT_COLOR = 'white';
const FONT_SIZE = '30px';
const FONT_WEIGHT = '700';
const token_SIDE_LENGTH = '100px';

let grid = document.createElement('div');
grid.style.width = '100%';

for(let i = 1; i <= 20; i++) {
    let token = document.createElement('div');
    token.style.width = token_SIDE_LENGTH;
    token.style.height = token_SIDE_LENGTH;
    token.style.backgroundColor = UNCLICKED_COLOR;
    token.style.color = FONT_COLOR;
    token.style.fontSize = FONT_SIZE;
    token.style.fontWeight = FONT_WEIGHT;
    token.style.borderRadius = '50%';
    token.style.position = 'absolute';
    token.style.top = `${Math.floor(Math.random() * 800)}px`;
    token.style.left = `${Math.floor(Math.random() * 1000)}px`;
    token.style.display = 'flex';
    token.style.justifyContent = 'center';
    token.style.alignItems = 'center';
    token.innerHTML = i;

    token.addEventListener('click', () => {
        let currentColor = token.style.backgroundColor;
        token.style.backgroundColor = (currentColor == CLICKED_COLOR) ? UNCLICKED_COLOR : CLICKED_COLOR;
    });

    grid.appendChild(token);
}

document.querySelector('.main').appendChild(grid);