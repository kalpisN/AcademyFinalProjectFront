import {API_BASE_URL} from "../Helpers/API";
import React, {createRef, useEffect, useRef, useState} from "react";
import axios from "axios";
import EditRecipeForm from "./EditRecipeForm";
import ClearIcon from '@material-ui/icons/Clear';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import DeleteIngredient from "../Modals/DeleteIngredient";

const EditIngredients = (props) => {


    const [deleteModalShow, setDeleteModalShow] = React.useState(false);
    const  [iName, setIname] = React.useState();
    const nameRef = useRef();
    const [amount, setAmount] = React.useState('');
    const amountRef = useRef();
    const [unit, setUnit] = React.useState('');
    const unitRef = useRef();
    const [id, setId] = React.useState('');
    const idRef = useRef();
    const [ingredient, setIngredient] = React.useState();
    const ingredientRef = useRef([]);


    const url = API_BASE_URL + '/ingredientsByRecipe/' + props.name;
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        console.log('effect')
        axios
            .get(url)
            .then(response => {
                console.log('promise fulfilled')
                setIngredients(response.data);
            })
    }, []);

    console.log('render', ingredients.length, 'ingredients');

    const ingredientRows =
        ingredients.map((ingredient, index) =>

            
            <tr id={ingredient.id}><td>
            <EditRecipeForm text={ingredient.name}
                            placeholder={ingredient.name}
                            childRef={}
                            type="input"
                            name="ainesosa"
            >
                <input
                    ref={}
                    type="text"
                    name={iName}
                    placeholder={ingredient.name}
                    value={iName}
                    id={ingredient.id}
                    onChange={e => setIname(e.target.value)}
                />
            </EditRecipeForm>
                </td>
                <td>
                    <EditRecipeForm text={ingredient.amount}
                                    placeholder={ingredient.amount}
                                    childRef={ingredient.id}
                                    type="input"
                                    name="määrä"
                    >
                        <input
                            ref={ingredient.id}
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
                                    name="yksikkö"
                    >
                        <input
                            ref={ingredient.id}
                            type="text"
                            name={unit}
                            placeholder={ingredient.unit}
                            value={unit}
                            onChange={e => setUnit(e.target.value)}
                        />
                    </EditRecipeForm>
                </td>
                <td><Button id={ingredient.id} variant="light" onClick={() => setDeleteModalShow(true)}><ClearIcon/></Button></td>
                <DeleteIngredient
                    id={ingredient.id}
                    show={deleteModalShow}
                    onHide={() => setDeleteModalShow(false)}
                />
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
