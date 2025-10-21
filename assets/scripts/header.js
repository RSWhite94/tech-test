customElements.define('bork-header', class extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <div class="header__container">
                    <a class="header__logo" href="/">
                        <img src="assets/icons/logo.svg" alt="Bork logo"/>
                    </a>
                    <div class="header__minicart">
                        <button class="minicart">
                            <img class="minicart__icon"src="assets/icons/bag.svg" alt="Bork logo"/>
                            <span class="minicart__counter">2</span>
                        </button>
                    </div>
                </div>
            </header>
        `;
    }
});