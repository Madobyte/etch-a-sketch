export default function draw(color = 'black') {
    const pixel = document.querySelectorAll('.pixel');
    pixel.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.cssText = `background-color: ${color};`
        })
    })

    const eraserBtn = document.querySelector('.eraser-btn');
}

