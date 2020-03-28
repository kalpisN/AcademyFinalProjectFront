import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import {API_BASE_URL} from "../Helpers/API";


class Ingredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredient: []
        }
    }

    componentDidMount() {


        const url = API_BASE_URL + '/ingredientsByRecipe/pulla'
        fetch(url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => this.setState(response.data))
        console.log(this.state.ingredient);
    }
}
        render(){
             return(
                 {this.state.ingredient.map(function (ingredient) {


                return (

                    <tr>
                        <Form.Check.Label>
                            <td>{ingredient.name}</td>
                            <td>{ingredient.amount}</td>
                            <td>{ingredient.unit}</td>
                        </Form.Check.Label>
                    </tr>

                )
            })}
             );
        }

export default Ingredients
