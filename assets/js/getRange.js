import construct from './construct.js'
import draw from './draw.js'

export default function getRange(e) {
    const canvas = document.getElementById('canvas')
    canvas.remove();
    converted = Math.ceil(e.target.value * 0.64);
    if (e.target.value <= 1) {
        construct(2);
        draw();
    } else {
        construct(converted);
        draw();
    }

    const textInput = document.getElementById('text-input');
    if (e.target.value <= 1) textInput.value = 2;
    else textInput.value = converted;
}

export let converted;