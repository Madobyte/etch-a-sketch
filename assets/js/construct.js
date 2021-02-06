import {disableEraser} from './btnEraser.js'

export default function construct(number = 64) {
    const canvas = document.createElement('div');
    canvas.id = 'canvas';
    var i;
    for (i = 1; i <= number**2; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);
    }
    const toolbar = document.querySelector('.toolbar');
    const appContainer = document.getElementById('app-container');
    appContainer.insertBefore(canvas, toolbar.nextSibling);
    putInGrid(number);

    canvas.addEventListener('click', disableEraser)
}

function putInGrid(number) {
    canvas.style.cssText = `grid-template-columns: repeat(${number}, 1fr);`;

    const pixel = document.querySelectorAll('.pixel');
    pixel.forEach((div) => {
        div.style.cssText = `height: $canvas-height / ${number}px;
            width: $canvas-width / ${number}px;`
    })
}