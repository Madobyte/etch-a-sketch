import modal from './modal.js'

export default function btnSave() {
    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn', 'btn');
    saveBtn.innerText = 'Save';
    const toolbar = document.querySelector('.toolbar');
    toolbar.appendChild(saveBtn);

    saveBtn.addEventListener('click', saveAsPicture);
}

function saveAsPicture() {
    const canvas = document.getElementById('canvas');
    modal('Processing. Wait for download.')

    html2canvas(canvas).then(canvas => {
        const modal = document.getElementById('modal');
        modal.remove();

        var image = canvas.toDataURL('png');

        var saveImage  = document.createElement('a');
        saveImage.href = image;
        saveImage.download = 'image.png';

        saveImage.click()
    });
}