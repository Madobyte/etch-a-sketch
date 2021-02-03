import draw from '../js/draw.js'
import setColor from './setColor.js'

export { 
    btnColor, 
} 

function btnColor() {
    const setColorBtn = document.createElement('button');
    setColorBtn.classList.add('color-btn');
    setColorBtn.innerText = 'Color';
    const dropDownIcon = document.createElement('i');
    dropDownIcon.classList.add('fa', 'fa-sort-desc');
    setColorBtn.appendChild(dropDownIcon);
    const toolbar = document.querySelector('.toolbar');
    toolbar.appendChild(setColorBtn);

    setColorBtn.addEventListener('click', () => {
        const colorMenu = document.querySelector('.color-menu');
        if(!colorMenu) constructColorMenu();
        showColorMenu();
    })

    
}

function showColorMenu() {
    const colorMenu = document.querySelector('.color-menu');
    colorMenu.classList.toggle('close');
}

function constructColorMenu() {
    const colorMenu = document.createElement('div');
    colorMenu.classList.add('color-menu', 'menu', 'close');

    const colorInput = document.createElement('input');
    colorInput.classList.add('color-input');

    const confirmColorBtn = document.createElement('button');
    confirmColorBtn.classList.add('confirm-color-btn');
    confirmColorBtn.innerText = 'Confirm'

    colorMenu.appendChild(colorInput);
    colorMenu.appendChild(confirmColorBtn);

    const toolbar = document.querySelector('.toolbar');
    const colorBtn = document.querySelector('.color-btn');
    toolbar.insertBefore(colorMenu, colorBtn.nextSibling);

    colorInput.addEventListener('change', setColor);

}