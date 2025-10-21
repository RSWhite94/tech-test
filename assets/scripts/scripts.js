require('./header.js');
require('./product.js');
require('./drawer.js');

const drawer = document.querySelector('.bork-drawer');
const cartButtons = document.querySelectorAll('.open-cart');
const closeButtons = document.querySelectorAll('.close-cart');

cartButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
        drawer.classList.add('bork-drawer--active');
    });
});

closeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
        drawer.classList.remove('bork-drawer--active');
    });
});