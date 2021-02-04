import draw from './draw.js'

export default function btnColor() {
    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.classList.add('color-picker', 'btn')

    const toolbar = document.querySelector('.toolbar');
    toolbar.appendChild(colorPicker);

    colorPicker.addEventListener('change', (e) => {
        color = e.target.value;
        draw(e.target.value);
    }) 
}

export let color;