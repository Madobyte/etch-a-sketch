export default function btnClear() {
    const clearBtn = document.createElement('button');
    clearBtn.classList.add('clear-btn', 'btn');
    clearBtn.innerText = 'Clear';
    const toolbar = document.querySelector('.toolbar');
    toolbar.appendChild(clearBtn);

    clearBtn.addEventListener('click', clearCanvas);
}

function clearCanvas() {
    const pixel = document.querySelectorAll('.pixel');
    pixel.forEach((element) => {
        element.style.cssText = 'background-color: none;'
    });
}