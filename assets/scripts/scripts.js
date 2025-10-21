require('./header.js');
require('./product.js');
require('./drawer.js');

const drawer = document.querySelector('.bork-drawer');
const overlay = document.querySelector('.page-overlay');
const cartButtons = document.querySelectorAll('.open-cart');
const closeButtons = document.querySelectorAll('.close-cart');

cartButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
        showCart();
    });
});

closeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
        hideCart();
    });
});

function showCart() {
    overlay.classList.add('page-overlay--active', 'page-overlay--loading');
    setTimeout(() => {
        drawer.classList.add('bork-drawer--active');
        overlay.classList.remove('page-overlay--loading');
    }, "1000");
}

function hideCart() {
    overlay.classList.remove('page-overlay--active');
    drawer.classList.remove('bork-drawer--active');
}