const UNCLICKED_COLOR = 'darkred';
const CLICKED_COLOR = 'darkgreen';
const FONT_COLOR = 'white';
const FONT_SIZE = '30px';
const FONT_WEIGHT = '700';
const SQUARE_SIDE_LENGTH = '100px';

let grid = document.createElement('div');
grid.style.display = 'flex';
grid.style.flexWrap = 'wrap';
grid.style.justifyContent = 'center';
grid.style.width = '80%';

for(let i = 1; i <= 20; i++) {
    let square = document.createElement('div');
    square.style.width = SQUARE_SIDE_LENGTH;
    square.style.height = SQUARE_SIDE_LENGTH;
    square.style.backgroundColor = UNCLICKED_COLOR;
    square.style.color = FONT_COLOR;
    square.style.fontSize = FONT_SIZE;
    square.style.fontWeight = FONT_WEIGHT;
    square.style.border = '1px solid white';
    square.style.display = 'flex';
    square.style.justifyContent = 'center';
    square.style.alignItems = 'center';
    square.innerHTML = i;
    

    square.addEventListener('click', () => {
        let currentColor = square.style.backgroundColor;
        square.style.backgroundColor = (currentColor == CLICKED_COLOR) ? UNCLICKED_COLOR : CLICKED_COLOR;
    });

    grid.appendChild(square);
}

document.querySelector('.main').appendChild(grid);