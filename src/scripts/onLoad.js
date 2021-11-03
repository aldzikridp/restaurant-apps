import drawerEvent from './drawer.js';
import renderResto from './render.js';

const data = require('./../DATA.json');
const renderAllResto = () => {
    console.log(data);
    renderResto(data);
};
const main = () => {
    drawerEvent();
    renderAllResto();
}
document.addEventListener("DOMContentLoaded", main);
