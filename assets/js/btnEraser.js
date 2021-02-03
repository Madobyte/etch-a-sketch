import draw from '../js/draw.js'
import {color} from './setColor.js'

export default function btnEraser() {
    const eraserBtn = document.createElement('button');
    eraserBtn.classList.add('eraser-btn');
    const eraserIcon = document.createElement('i');
    eraserIcon.classList.add('fa', 'fa-eraser');
    eraserBtn.appendChild(eraserIcon);
    const toolbar = document.querySelector('.toolbar');
    toolbar.appendChild(eraserBtn);

    eraserBtn.addEventListener('click', () => {
        eraserBtn.classList.toggle('enabled')
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