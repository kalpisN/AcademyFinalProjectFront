import React, {Component} from 'react';
import NewRecipe from "../FormHandling/NewRecipe";
import NewIngredient from "../FormHandling/NewIngredient";

class NewRecipeAndIngredient extends Component {
    render() {
        return (
            <div className="new-recipe-heading">
                <hr/>
                <h1 className="shoppinglist-heading">Lisää uusi resepti täällä!</h1>
                <p> Muista täyttää kaikki pakolliset (*) kentät.</p>
                <NewRecipe/>

            </div>
        );
    }
}

export default NewRecipeAndIngredient;