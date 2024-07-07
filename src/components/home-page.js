import { LitElement, html, css } from 'lit';
import './card-recipe';

export class HomePage extends LitElement{
    
    static properties = {
        
    }

    constructor(){
        super();
    }

    render(){

        return html`
                <div>
                  <card-recipe></card-recipe>
                </div>
        `;
    }
}

customElements.define('home-page', HomePage);
