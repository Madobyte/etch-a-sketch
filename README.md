# Etch-a-Sketch
**by M. Bambalan**

**Technologies used:**
- HTML5
- CSS3
    - Animation and Transitions
- SASS
    - Variables
    - Nesting
- Vanilla Javascript
    - Javascript Module
    - html2canvas

## Dev's Reflection
**I finally started learning SASS!**


## Checklist
- [x] Create a functional Etch-a-Sketch
- [x] Add an eraser function
- [x] Add a clear canvas option
- [x] Add color change option
    - [x] Use color wheel if possible
    - [x] Hex code and RGB Input
    - [ ] ~~ Use Random Color Generator for rainbow function ~~
- [x] Add canvas change option
    - [x] Use `<input type="range">`
    - [x] Use text input
- [x] Create a beautiful GUI
- [ ] ~~ Create a functional GUI for mobile users ~~
- [ ] Add Keyboard Support

## Commits
### 02/02/2021 - Initial Commit
Created a functional Etch-a-Sketch.

The size of the grid can be manipulated (although I haven't set a limit to the size yet). I am planning to limit it to a 64x64 grid.

The color can also be manipulated (manually). I plan on using the Random Color Generator `randomColor()`.

### 02/03/2021 
Added the toolbar and the icons (not yet functional);

Added a functional clear button that sets `background-color` to `none`.

Added a functional `setColor` and `erase` function. The `setColor` does not have a hex code support yet.

Since vanilla JS does not have a simple state management, I had a hard time figuring out how to save the previous assigned color after using the eraser.

The erase function only sets the `background-color` to `none`. After all, the `background-color` is white in the first place.

### 02/04/2021
Added a working `setGridSize` function using both `text` and `range` input type.

Added a `mouseleave` event listener on menus to close it.

I discovered the `color` input type. Used it instead of creating my own `colorPicker` using `map`.

Used `html2canvas` to save your artwork as image.

Added a decent yet barebone styling to the UI.

Added a reusable modal for errors and warnings.

### 02/05/2021
Fixed some bugs in the `btnEraser`.

Tested manually for bugs. So far, no bugs detected.

### 02/06/2021
Added `.nojekyll` to make html2canvas work.

Cleaned up some code.

Added keyboard support for `btnEraser`.


**This Project is part of The Odin Project Curriculum**