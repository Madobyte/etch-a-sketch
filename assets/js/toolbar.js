import btnSetGridSize from './btnSetGridSize.js'
import btnSave from './btnSave.js'
import { btnColor } from './btnSetColor.js'
import btnEraser from './btnEraser.js'
import btnClear from './btnClear.js'

export default function toolbar() {
    const toolbar = document.createElement('div');
    toolbar.classList.add('toolbar');
    const canvas = document.getElementById('canvas');
    document.body.insertBefore(toolbar, canvas);

    btnSetGridSize();
    btnSave();
    btnColor();
    btnEraser();
    btnClear();
}