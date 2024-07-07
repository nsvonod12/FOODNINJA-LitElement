import { LitElement, html, css } from 'lit';
import {cardRecipeStyles} from './card-recipe-styles'

export class ContactPage extends LitElement{
    static styles = [
        cardRecipeStyles,
        css`
            div {
                font-family: "Lato", sans-serif;
            }

            .form{
                width:90%;
            }
    `
    ]

    static properties = {
        name: {type: String}
    }

    constructor(){
        super();
        this.name = 'Hola'; 
    }

    handleClick(){
        console.log(this.name)
    }

    render(){
        return html`
            <div id="contact">
                <h2>Contact us</h2>
                <form class="form">
                    <label for="nombre">Nombre: </label>
                    <input id="nombre" type="text" placeholder="Nombre"/>

                    <label  for="correo">Correo Electronico:</label>
                    <input id="correo" type="email" placeholder="Email"/>

                    <label for="tel">Teléfono:</label>
                    <input id="tel" type="tel" placeholder=""/>

                    <button id="contactForm" class="form-add">ENVIAR</button>
                </form>
            </div>
        `
    }
}

customElements.define('contact-page', ContactPage)