export default function getRange(N = 64) {
    const sizeBtn = document.querySelector('.size-btn');
    sizeBtn.addEventListener('click', () => {
        const rangeInput = document.getElementById('range-input');
        rangeInput.addEventListener('change', () => {
            return rangeInput.value;
        })
    })
    return N;
}