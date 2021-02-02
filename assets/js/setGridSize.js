export default function setGridSize() {
    const sizeBtn = document.createElement('button');
    sizeBtn.classList.add('size-btn');
    sizeBtn.innerText = 'Size';
    const toolbar = document.querySelector('.toolbar');
    toolbar.appendChild(sizeBtn);
    

    sizeBtn.addEventListener('mouseenter' || 'click', () => {
        const sizeMenu = document.querySelector('.size-menu');
        if(!sizeMenu) constructSizeMenu();
        setTimeout(showSizeMenu, 800);
    });

    sizeBtn.addEventListener('mouseleave', () => {
        const sizeMenu = document.querySelector('.size-menu');
        if (!sizeMenu) console.log('hello')
    })
}

function showSizeMenu() {
    const sizeMenu = document.querySelector('.size-menu');
    sizeMenu.classList.toggle('close');
}

function constructSizeMenu() {
    const sizeMenu = document.createElement('div');
    sizeMenu.classList.add('size-menu', 'menu', 'close');

    const rangeInput = document.createElement('input');
    rangeInput.type = 'range';

    const textInput = document.createElement('input');
    textInput.type = 'text';

    sizeMenu.appendChild(rangeInput);
    sizeMenu.appendChild(textInput);

    const toolbar = document.querySelector('.toolbar');
    toolbar.appendChild(sizeMenu);
}