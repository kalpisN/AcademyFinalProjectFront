import React, {Component, useEffect, useState} from "react";
import {API_BASE_URL} from "../Helpers/API";
import Form from "react-bootstrap/Form";
import Recipe from "../Recipes/Recipe";
import {Spinner} from "react-bootstrap";
import axios from "axios";


class Ingredient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            isLoading: true
        }
    }

    componentWillMount() {

        const url = API_BASE_URL + '/ingredientsByRecipe/' + this.props.name;
        console.log(url);

        axios
            .get(url)

            .then(response => {
                console.log('promise fulfilled')
                console.log(response.data)
                this.setState({ingredients: response.data})
                this.setState({isLoading: false})
            })
        /*fetch(url, {
            method: 'GET'
        })
            .then((response) => {
                this.decodeData(response.body)
            })
*/

        console.log(this.state.ingredients)
    }

    /*decodeData(data){
        const decoder = new TextDecoder('utf-8')
      data
          .getReader()
        .read()
        .then(({value, done}) => {
           this.setState({ingredients : decoder.decode(value)})
        })
    }*/


//const [ingredients, setIngredients] = useState(undefined)
    render() {
        return (

            <div>
                {this.state.isLoading &&
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>

                }
                {!this.state.isLoading &&

                <tr>{
                    this.state.ingredients.map(ingredient =>
                    <tr>
                    <td>{ingredient.name}</td>
                    <td>{ingredient.amount}</td>
                    <td>{ingredient.unit}</td>
                    </tr>)}</tr>
                }

            </div>
        )
    }

    /*return (
        <div>
            <h1>{'This will always render'}</h1>
            {this.state && this.state.ingredients &&
            <div>  {console.log(this.state.ingredients)} {this.state.ingredients.map(ingredient =>
            <tr>
                <td>{ingredient.name}</td>
                <td>{ingredient.amount}</td>
                <td>{ingredient.unit}</td>
            </tr>)}
          {/!*  {
                this.state.ingredients.map(ingredient =>
                <tr>
                <td>{ingredient.name}</td>
                <td>{ingredient.amount}</td>
                <td>{ingredient.unit}</td>
                </tr>)
                }*!/}
            </div>
            }
        </div>
    )*/

    /*const ingredientrows = ingredients.map(ingredient =>

        <tr>
            <td>{ingredient.name}</td>
            <td>{ingredient.amount}</td>
            <td>{ingredient.unit}</td>
        </tr>
    );

    return (
        <div>
            {ingredientrows}
        </div>)*/

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