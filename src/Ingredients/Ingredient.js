import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../Helpers/API";
import Form from "react-bootstrap/Form";
import Recipe from "../Recipes/Recipe";


function Ingredient(props) {

    const [ingredients, setIngredients] = useState(undefined)

    const url = API_BASE_URL + '/ingredientsByRecipe/' + props.name;
    console.log(url);
    const decoder = new TextDecoder('utf-8')

   fetch(url, {
        method: 'GET'
        })
        .then(response => {
            response.body
                .getReader()
                .read()
                .then(({value, done}) => {
                   setIngredients(decoder.decode(value))
                })
        })
        console.log(ingredients)


        const ingredientrows =  ingredients.map(ingredient =>

                <tr>
                <td>{ingredient.name}</td>
                <td>{ingredient.amount}</td>
                <td>{ingredient.unit}</td>
                </tr>

);

                return (
                    <div>
                        {ingredientrows}
                    </div>)

               /* <tr>
                    <Form.Check.Label>
                        <td>{ingredient.name}</td>
                        <td>{ingredient.amount}</td>
                        <td>{ingredient.unit}</td>
                    </Form.Check.Label>
                </tr>
            )
        })*/
}
export default Ingredient