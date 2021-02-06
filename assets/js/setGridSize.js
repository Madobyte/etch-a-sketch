import construct from './construct.js'
import draw from './draw.js';
import addModal from './modal.js'

export default function setGridSize(e) {
    if (e.target.value > 64) {
        addModal('Value too high. Max value is 65.');
        const modal = document.getElementById('modal');
        modal.addEventListener('click', removeModal);
    } else if (e.target.value <= 1) {
        addModal('Value too low. Min value is 2.');
        const modal = document.getElementById('modal');
        modal.addEventListener('click', removeModal);
    } else if (isNaN(e.target.value)) {
        addModal('Enter valid number!');
        const modal = document.getElementById('modal');
        modal.addEventListener('click', removeModal);
    } else {
        const canvas = document.getElementById('canvas')
        canvas.remove();
        construct(e.target.value);
        draw();
    }
}

function removeModal(e) {
    const modal = document.getElementById('modal');
    if (e.target.id != 'modal') return;
    else modal.remove()
}