import { LitElement, html, css, nothing } from 'lit';
import { navbarStyles } from './navbar-component-styles';
import './home-page'
import './about-page'
import './contact-page'

export class NavbarComponent extends LitElement{
    static properties = {
        visible: { type: Boolean },
        currentView: { type: String }
    }

    static styles = [
        navbarStyles,
    ]

    constructor(){
        super();
        this.visible = false;
        this.currentView = 'home';
    }
    
    handleToggleNav() {
        this.visible = !this.visible;
    }

    navigate(view) {
        this.currentView = view;
        this.visible = false;
    }

    render(){

        return html`
            <header class="header">
                <p class="logo" id="logo" @click=${() => this.navigate('home')}>FOOD<span>NINJA</span></p>
                
                <button id="open" name="btnOpen" @click=${this.handleToggleNav} class="nav-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                </button>
                
                <nav id="nav" class="nav ${this.visible ? 'visible' : ''}">
                    <div id="close" class="nav-close">
                        <button @click=${this.handleToggleNav} class="close-btn">X</button>
                    </div>
                    
                    <ul class="nav-list">
                        <li class="${this.currentView === 'home' ? 'active': ''}" @click=${() => this.navigate('home')}><a>Home</a></li>
                        <li class="${this.currentView === 'about' ? 'active': ''}" @click=${() => this.navigate('about')}><a>About</a></li>
                        <li class="${this.currentView === 'contact' ? 'active': ''}" @click=${() => this.navigate('contact')}><a>Contact</a></li>
                    </ul>
                </nav>
            </header>

            <div class="container">
                ${this.currentView === 'home' ? html`<home-page></home-page>` : nothing}
                ${this.currentView === 'about' ? html`<about-page></about-page>` : nothing}
                ${this.currentView === 'contact' ? html`<contact-page></contact-page>` : nothing}
            </div>
        `
    }
}

customElements.define('navbar-component', NavbarComponent);