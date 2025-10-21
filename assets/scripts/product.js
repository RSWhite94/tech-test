customElements.define('bork-product', class extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <div class="bork-product">
               <a href="" class="bork-product__image">
                    <img src="assets/images/chicken@2x.png" alt="Chicken with vegetables and rice food packaging"/>
               </a>
               <div class="bork-product__details">
                    <h3>Natures Menu Dog Food Can Chicken</h3>
                    <p class="bork-product__price">£22.81</p>
                    <a href="" class="button">
                        <span class="button__text">Add To Bag</span>
                    </a>
               </div>
            </div>
        `;
    }
});