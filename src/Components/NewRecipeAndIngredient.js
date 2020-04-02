import React, {Component} from 'react';
import NewRecipe from "../FormHandling/NewRecipe";
import NewIngredient from "../FormHandling/NewIngredient";

class NewRecipeAndIngredient extends Component {
    render() {
        return (
            <div className="new-recipe-heading">
                <hr/>
                <p className="heading">Lisää uusi resepti täällä!</p>
                <p> Muista täyttää kaikki pakolliset (*) kentät.</p>
                <NewRecipe/>

            </div>
        );
    }
}

export default NewRecipeAndIngredient;