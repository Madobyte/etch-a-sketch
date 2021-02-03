import draw from "./draw.js";

export default function setColor(e) {
    color = e.target.value;
    if (e.target.value) draw(e.target.value);
}

export let color;