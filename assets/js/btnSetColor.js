import draw from './draw.js'

export default function btnColor() {
    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.classList.add('color-picker', 'btn')
    colorPicker.value = 'black';
    
    const toolbar = document.querySelector('.toolbar');
    toolbar.appendChild(colorPicker);

    colorPicker.addEventListener('change', () => {
        draw(getColor())
    });
}

export function getColor() {
    const colorPicker = document.querySelector('.color-picker');
    return colorPicker.value;
}
