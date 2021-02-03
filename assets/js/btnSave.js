export default function btnSave() {
    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.innerText = 'Save';
    const toolbar = document.querySelector('.toolbar');
    toolbar.appendChild(saveBtn);
}