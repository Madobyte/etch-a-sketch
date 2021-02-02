import setGridSize from './setGridSize.js'

export default function toolbar() {
    const toolbar = document.createElement('div');
    toolbar.classList.add('toolbar');
    const canvas = document.getElementById('canvas');
    document.body.insertBefore(toolbar, canvas);

    setGridSize();
}