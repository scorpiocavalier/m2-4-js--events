const createNumPad = () => {
    let numpad = document.querySelector('.numpad')

    // Create numpad button 0
    let btn_0 = document.createElement('button');
    btn_0.innerText = '0';
    btn_0.style.gridColumn = 2;
    btn_0.style.gridRow = 4;
    numpad.appendChild(btn_0);

    // Create the numpad buttons 1-9
    for(let num = 1; num < 10; num++) {
        let btn = document.createElement('button');
        btn.innerText = num;
        numpad.appendChild(btn);
    }

    let btn_backspace = document.createElement('button');
    let icon_backspace = document.createElement('i');
    icon_backspace.className = 'fas fa-backspace';
    icon_backspace.style.color = 'white';
    icon_backspace.style.fontSize = '2.5rem';
    btn_backspace.appendChild(icon_backspace);
    btn_backspace.style.gridColumn = 3;
    btn_backspace.style.gridRow = 4;
    numpad.appendChild(btn_backspace);
}

const app = () => {
    createNumPad()
}

app()