customElements.define('bork-drawer', class extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <div class="bork-drawer__header">
                <h2>Your Bag</h2>
                <button class="bork-drawer__close close-cart">
                    <img src="assets/icons/close.svg" alt="Close mini-cart"/>
                </button>
            </div>
            <div class="bork-drawer__products">
               <bork-product data-type="small"></bork-product>
            </div>
            <div class="bork-drawer__footer">
                <p class="h3">Subtotal: £22.81</p>
                <a href="" class="button">
                    <span class="button__text">Proceed To Checkout</span>
                </a>
                <button class="button button--secondary close-cart">
                    <span class="button__text">Continue Shopping</span>
                </button>
            </div>
        `;
    }
});