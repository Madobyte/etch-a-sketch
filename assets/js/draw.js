export default function draw(color) {
    const pixel = document.querySelectorAll('.pixel');
    pixel.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.cssText = `background-color: ${color};`
        })
    })
}

