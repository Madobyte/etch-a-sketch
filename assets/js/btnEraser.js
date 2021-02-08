import draw from '../js/draw.js'
import {getColor} from './btnSetColor.js'

export default function btnEraser() {
    const eraserBtn = document.createElement('button');
    eraserBtn.classList.add('eraser-btn', 'btn');
    const eraserIcon = document.createElement('i');
    eraserIcon.classList.add('fa', 'fa-eraser');
    eraserBtn.appendChild(eraserIcon);
    const toolbar = document.querySelector('.toolbar');
    toolbar.appendChild(eraserBtn);

    eraserBtn.addEventListener('click', () => {
        eraserBtn.classList.toggle('enabled');
        erase();
    });

    toolbar.addEventListener('click', disableEraser);

    window.addEventListener('keydown', enableEraser)
}

function erase() {
    const eraserBtn = document.querySelector('.eraser-btn');
    if (eraserBtn.classList.contains('enabled')) {
        draw('none');
    } else draw(getColor())
}

function enableEraser(e) {
    if (e.keyCode === 69) {
        const eraserBtn = document.querySelector('.eraser-btn');
        eraserBtn.classList.toggle('enabled');
        erase();
    }
}

export function disableEraser(e) {
    const eraserBtn = document.querySelector('.eraser-btn');
    if (e.target.classList.contains('fa-eraser') || e.target.classList.contains('eraser-btn')) {
        return;
    } else {
        eraserBtn.classList.remove('enabled');
    }
    draw(getColor());
}
