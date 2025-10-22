customElements.define('bork-product', class extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let type = this.getAttribute("data-type");
        let divClasses = (type == 'small') ? "bork-product bork-product--small" : "bork-product";
        let btnClasses = (type == 'small') ? "button--secondary" : "open-cart";
        let btnContent = (type == 'small') ? "Remove" : "Add To Bag";
        this.innerHTML = `
            <div class="${divClasses}">
               <a href="" class="bork-product__image">
                    <img src="assets/images/chicken@2x.png" alt="Chicken with vegetables and rice food packaging"/>
               </a>
               <div class="bork-product__details">
                    <h3>Natures Menu Dog Food Can Chicken</h3>
                    <p class="bork-product__price">£22.81</p>
                    <button class="button ${btnClasses}">
                        <span class="button__text">${btnContent}</span>
                    </button>
               </div>
            </div>
        `;
    }
});