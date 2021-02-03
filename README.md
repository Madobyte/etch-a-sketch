# Etch-a-Sketch
## This Project is part of The Odin Project Curriculum
**Technologies used:**
- HTML5
- CSS3
- SASS
- Vanilla Javascript
    - Javascript Module

## Dev's Reflection
**I finally started learning SASS!**

## Checklist
- [x] Create a functional Etch-a-Sketch
- [x] Add an eraser function
- [x] Add a clear canvas option
- [x] Add color change option
    - [ ] Use color wheel if possible
    - [ ] Hex code and RGB Input
    - [ ] Use Random Color Generator for rainbow function
- [ ] Add canvas change option
    - [ ] Use `<input type="range">`
    - [ ] Use text input
- [ ] Create a beautiful GUI
- [ ] Create a functional GUI for mobile users

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