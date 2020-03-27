import React, {useState} from "react";
import {API_BASE_URL} from "./helper";
import Form from "react-bootstrap/Form";


function Ingredient(props) {

    const [ingredients, setIngredients] = useState([])

    const url = API_BASE_URL + '/ingredientsByRecipe/pulla';

    fetch(url, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => setIngredients(response.data));
        console.log(ingredients)


        ingredients.map(ingredient => {
            console.log(ingredient.name)

            return (

                <tr>
                    <Form.Check.Label>
                        <td>{ingredient.name}</td>
                        <td>{ingredient.amount}</td>
                        <td>{ingredient.unit}</td>
                    </Form.Check.Label>
                </tr>
            )
        })
}
export default Ingredient