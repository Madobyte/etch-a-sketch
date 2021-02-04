export default function modal(msg) {
    const modal = document.createElement('div');
    modal.id = 'modal';

    const modalContent = document.createElement('div');
    modalContent.id = 'modal-content';

    const p = document.createElement('p');
    p.innerText = msg;
    modalContent.appendChild(p);

    modal.appendChild(modalContent);
    const appContainer = document.getElementById('app-container');
    document.body.insertBefore(modal, appContainer.nextSibling);
}