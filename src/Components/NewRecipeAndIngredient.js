import React, {Component} from 'react';
import NewRecipe from "../FormHandling/NewRecipe";

class NewRecipeAndIngredient extends Component {
    render() {
        return (
            <div className="new-recipe-heading">
                <hr/>
                <h1 className="shoppinglist-heading">Lisää uusi resepti täällä!</h1>
                <p className="shoppinglist-subtext"> Muista täyttää kaikki pakolliset (*) kentät. Ainakin yksi ainesosa on pakollinen.</p>
                <NewRecipe/>

            </div>
        );
    }
}

export default NewRecipeAndIngredient;