import setGridSize from './setGridSize.js'
import getRange from './getRange.js'

export default function btnSetGridSize() {
    const sizeBtn = document.createElement('button');
    sizeBtn.classList.add('size-btn', 'btn');
    sizeBtn.innerText = 'Size';
    const dropDownIcon = document.createElement('i');
    dropDownIcon.classList.add('fa', 'fa-sort-desc');
    sizeBtn.appendChild(dropDownIcon);
    const toolbar = document.querySelector('.toolbar');
    toolbar.appendChild(sizeBtn);

    sizeBtn.addEventListener('click', () => {
        const sizeMenu = document.querySelector('.size-menu');
        if(!sizeMenu) constructSizeMenu();
        showSizeMenu();
    });
}

function showSizeMenu() {
    const sizeMenu = document.querySelector('.size-menu');
    sizeMenu.classList.toggle('close');
}

function constructSizeMenu() {
    const sizeMenu = document.createElement('div');
    sizeMenu.classList.add('size-menu', 'menu', 'close');

    const rangeInput = document.createElement('input');
    rangeInput.type = 'range';
    rangeInput.id = 'range-input';
    rangeInput.value = 100;

    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.id = 'text-input';
    textInput.value = 64;

    sizeMenu.appendChild(rangeInput);
    sizeMenu.appendChild(textInput);

    const toolbar = document.querySelector('.toolbar');
    const sizeBtn = document.querySelector('.size-btn');
    toolbar.insertBefore(sizeMenu, sizeBtn.nextSibling);

    textInput.addEventListener('change', setGridSize);
    rangeInput.addEventListener('input', getRange)

    sizeMenu.addEventListener('mouseleave', () => {
        sizeMenu.classList.toggle('close');
    })
}