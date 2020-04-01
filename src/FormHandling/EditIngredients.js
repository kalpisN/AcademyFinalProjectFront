import {API_BASE_URL} from "../Helpers/API";
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import EditRecipeForm from "./EditRecipeForm";
import ClearIcon from '@material-ui/icons/Clear';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const EditIngredients = (props) => {

    const [ingredientDelete, setIngredientDelete] = React.useState('');
    const [name, setName] = React.useState('');
    const nameRef = useRef();
    const [amount, setAmount] = React.useState('');
    const amountRef = useRef();
    const [unit, setUnit] = React.useState('');
    const unitRef = useRef();
    const [id, setId] = React.useState('');
    const idRef = useRef();


    const url = API_BASE_URL + '/ingredientsByRecipe/' + props.name;
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        console.log('effect')
        axios
            .get(url)
            .then(response => {
                console.log('promise fulfilled')
                setIngredients(response.data)
            })
    }, []);

    console.log('render', ingredients.length, 'ingredients');


    const handleDelete = (props) => {

        console.log(props);
        const url = API_BASE_URL + '/ingredients/' + props;

        fetch(url, {
            method: 'DELETE'
        }).then(r => r.json());

        console.log(props + ' poistettu')
    };

    const ingredientRows =
        ingredients.map(ingredient =>

            <tr id={ingredient.id}><td>
            <EditRecipeForm text={ingredient.name}
                            placeholder={ingredient.name}
                            childRef={nameRef}
                            type="input"
                            name="nimi"
            >
                <input
                    ref={nameRef}
                    type="text"
                    name={name}
                    placeholder={ingredient.name}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </EditRecipeForm>
                </td>
                <td>
                    <EditRecipeForm text={ingredient.amount}
                                    placeholder={ingredient.amount}
                                    childRef={amountRef}
                                    type="input"
                                    name="määrä"
                    >
                        <input
                            ref={nameRef}
                            type="text"
                            name={amount}
                            placeholder={ingredient.amount}
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                        />
                    </EditRecipeForm>
                </td>
                <td>
                    <EditRecipeForm text={ingredient.unit}
                                    placeholder={ingredient.unit}
                                    childRef={unitRef}
                                    type="input"
                                    name="nimi"
                    >
                        <input
                            ref={unitRef}
                            type="text"
                            name={unit}
                            placeholder={ingredient.unit}
                            value={unit}
                            onChange={e => setUnit(e.target.value)}
                        />
                    </EditRecipeForm>
                </td>
                <td><Button id={ingredient.id} variant="light" onClick={handleDelete(id)}><ClearIcon/></Button></td>
            </tr>
        );


    return (
        <Table>
            <tr><td><b>Ainesosa</b></td><td><b>Määrä</b></td><td><b>Yksikkö</b></td><td><b>Poista</b></td></tr>
        {ingredientRows}

        </Table>
    )
}

export default EditIngredients
