import React, {Component} from 'react';
import NewRecipe from "../FormHandling/NewRecipe";
import NewIngredient from "../FormHandling/NewIngredient";

class NewRecipeAndIngredient extends Component {
    render() {
        return (
            <div>
                <h1>Täällä voit lisätä uusia reseptejä ja niiden ainesosia</h1>
                <hr/>
                <NewRecipe/>

            </div>
        );
    }
}

export default NewRecipeAndIngredient;