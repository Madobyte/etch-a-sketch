import construct from './assets/js/construct.js';
import draw from './assets/js/draw.js'
import toolbar from './assets/js/toolbar.js'

const appContainer = document.createElement('div');
appContainer.classList.add('app-container');
appContainer.id = 'app-container';
document.body.insertBefore(appContainer, document.body.firstChild)

toolbar();
construct();
draw();