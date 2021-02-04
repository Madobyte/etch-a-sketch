import draw from '../js/draw.js'
import {color} from './btnSetColor.js'

export default function btnEraser() {
    const eraserBtn = document.createElement('button');
    eraserBtn.classList.add('eraser-btn', 'btn');
    const eraserIcon = document.createElement('i');
    eraserIcon.classList.add('fa', 'fa-eraser');
    eraserBtn.appendChild(eraserIcon);
    const toolbar = document.querySelector('.toolbar');
    toolbar.appendChild(eraserBtn);

    eraserBtn.addEventListener('click', () => {
        enableDisableEraser();
        erase();
    });
}

function erase() {
    const prevColor = color;

    const eraserBtn = document.querySelector('.eraser-btn');
    console.log(prevColor, eraserBtn.classList.contains('enabled'))
    if (eraserBtn.classList.contains('enabled')) {
        draw('none');
    } else draw(prevColor)
}

function enableDisableEraser() {
    const eraserBtn = document.querySelector('.eraser-btn');
    if (!eraserBtn.classList.contains('enabled')) {
        eraserBtn.style.cssText = 'background-color: #a9294f; color: white;'
    } else {
        eraserBtn.style.cssText = 'background-color: #2a9d8f; color: black;'
    }
    eraserBtn.classList.toggle('enabled');
}