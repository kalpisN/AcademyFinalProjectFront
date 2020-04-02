import React, {Component, useEffect, useState} from "react";
import {API_BASE_URL} from "../Helpers/API";
import {Spinner} from "react-bootstrap";
import axios from "axios";
import {Row} from "react-bootstrap";
import {Table} from "react-bootstrap";
import {Checkbox} from "@material-ui/core";
import update from 'immutability-helper';


class Ingredient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            isLoading: true,
            selections: {}

        };
    }

    componentWillMount() {

        const url = API_BASE_URL + '/ingredientsByRecipe/' + encodeURIComponent(this.props.name);
        console.log(url);

        axios
            .get(url)

            .then(response => {
                console.log('promise fulfilled')
                console.log(response.data)
                this.setState({ingredients: response.data})
                this.setState({isLoading: false})
            })


        console.log(this.state.ingredients)
    }

    handleSelect = (id) => {
        console.log("handelselect funktiossa ollaan")
        console.log(this.state.selections)
        this.setState((prevState) => {
                        if (prevState.selections[id]) {
                            // { 1: true } -> {}
                            return update(prevState, {
                                selections: { $unset: [id] },
                });
            }
            // {} -> { 1: true }
            return update(prevState, {
                selections: { [id]: { $set: true }},
            });
        },this.giveData);
       console.log("state päivitetty")
        console.log(this.state.selections)

    }

    giveData = () =>{
        this.props.callbackFromParent(this.state.selections);
    }




    isItemSelected = id => {
        console.log("isItemSelected funktiossa ollaan")
        console.log(this.state.selections[id])

       return this.state.selections[id]
    }




    render() {
        return (

            <div>
                {this.state.isLoading &&
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>

                }
                {!this.state.isLoading &&

                <Table>
                    <tr><th>Ainesosa</th><th>Määrä</th><th>Yksikkö</th></tr>{
                    this.state.ingredients.map(ingredient =>

                        <tr key={ingredient.id}><td>{ingredient.name}</td><td>{ingredient.amount}</td><td>{ingredient.unit}</td><td><Checkbox color="default" checked={this.isItemSelected(ingredient.id)} onClick={()=> this.handleSelect(ingredient.id)}/></td></tr>

                    )}</Table>
                }

            </div>
        )
    }

}
export default Ingredient