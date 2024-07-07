import { LitElement, html, css, nothing } from 'lit';
import { cardRecipeStyles } from './card-recipe-styles'

export class Recipe extends LitElement{
    static properties= {
        mexicanRecipes: {type: Array},
        isOpen: {type: Boolean},
        name: {type: String},
        ingredients: {type: Array},
        error: {type: Boolean},
        completed: {type: Boolean},
    }

    static styles = [
        cardRecipeStyles
    ]

    constructor(){
        super();
        this.mexicanRecipes = JSON.parse(localStorage.getItem('mexicanRecipes')) ?? [];
        this.isOpen = false;
        this.error = false;
        this.completed = false;
    }

    handleDelete(id){   
        const newRecipes = [...this.mexicanRecipes]
        this.mexicanRecipes = newRecipes.filter( recipe => recipe.id !== id)
        localStorage.setItem('mexicanRecipes', JSON.stringify(this.mexicanRecipes))
    }

    toggleIsOpen(){
        this.isOpen = !this.isOpen;
    }

    handleAddRecipe(event){
        event.preventDefault();
        
        if(this.name?.length > 0 && this.ingredients?.length >= 0) {
            const newRecipe = {
                id: this.mexicanRecipes.length + 1,
                name: this.name,
                ingredients: this.ingredients
            }
            
            const AddNewRecipe = [ newRecipe, ...this.mexicanRecipes,]
            this.mexicanRecipes = AddNewRecipe;

            localStorage.setItem('mexicanRecipes', JSON.stringify(this.mexicanRecipes));

            console.log(this.mexicanRecipes)

            this.completed = true;
            setTimeout(() => {
                this.completed = false;
                this.isOpen = false;
            }, 1500)
    
        }else{
            this.error = true;
            setTimeout(() => {
                this.error = false;
            }, 1500)
        }
     
    }

    handleInput(event){
        const {name, value} = event.target;
        if(name === 'ingredients'){
            let newIngredients = value.split(',');
            newIngredients = newIngredients.map(item => item.trim());
            this[name] = newIngredients;
        } else {
            this[name] = value;
        }
    }

    render(){

        return html`
            ${this.mexicanRecipes?.length > 0 
                ? this.mexicanRecipes?.map( recipe => html`
                        <div class="card">
                            <div class="card-info">
                                <img class="card-img" src="/src/img/plato1.png" alt="recipe ${recipe.id}">
                                
                                <div class="card-text">
                                    <h3>${recipe.name}</h3>
                                    <p>
                                        ${recipe.ingredients.map(item => 
                                            html`<span>${item}, </span>`
                                        )}
                                    </p>
                                </div>
                            </div>
                            
                            <div class="card-delete">
                                <button @click=${() => this.handleDelete(recipe.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 7l16 0" />
                                        <path d="M10 11l0 6" />
                                        <path d="M14 11l0 6" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    `)
                : html`<h2 class="no-recipes">- No hay recetas por mostrar -</h2>`
            }

            <div class="add">
                <button @click=${this.toggleIsOpen} class="add-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="#FF9A00" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M9 12h6" />
                        <path d="M12 9v6" />
                    </svg>
                </button>
            </div>

            ${this.isOpen ? html`
                <div class="modal">
                    <form class="form" @submit=${this.handleAddRecipe}>
                        <div class="close">
                            <button class="close-btn" @click=${this.toggleIsOpen}>X</button>
                        </div>
                        
                        <h3>Nueva Receta: </h3>
                        <label for="name">Nombre: </label>
                        <input name="name" @input=${this.handleInput} type="text" />

                        <label for="ingredients">Ingredientes: </label>
                        <input name="ingredients" @input=${this.handleInput} type="text" placeholder="Ejem. Cebolla, Ajo, Aceite, Tortilla ..."/>
                        
                        ${this.error 
                            ? html`
                                <p class="error">Todos los campos son obligatorios</p>
                            `
                            : nothing
                        }

                        ${this.completed 
                            ? html`
                                <div class="completed">
                                    <div class="completed-message">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7bc62d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    <p >Se agrego correctamente</p>
                                    </div>
                                </div>
                            `
                            : nothing
                        }

                        <button class="form-add">Agregar</button>
                    </form>
                </div>    
                ` : nothing
            }

        `;
    }
}

customElements.define('card-recipe', Recipe);