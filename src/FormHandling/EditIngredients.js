import {API_BASE_URL} from "../Helpers/API";
import React, {createRef, useEffect, useRef, useState} from "react";
import axios from "axios";
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import DeleteIngredient from "../Modals/DeleteIngredient";

const EditIngredients = (props) => {

    const [deleteModalShow, setDeleteModalShow] = React.useState(false);
    const [iName, setIname] = React.useState();
    const iNameRef = useRef();
    const [amount, setAmount] = React.useState('');
    const amountRef = useRef();
    const [unit, setUnit] = React.useState('');
    const unitRef = useRef();
    const [reload, setReload] = React.useState(true)


    const url = API_BASE_URL + '/ingredientsByRecipe/' + props.name;
    const [ingredients, setIngredients] = useState([]);

        if (reload === true) {

            console.log('effect')
            axios
                .get(url)
                .then(response => {
                    console.log('promise fulfilled')
                    setIngredients(response.data);
                });

            setReload(false)
        }


    const handleSubmit = () => {
    const data = {
                name: iName,
                amount: parseInt(amount),
                unit: unit,
                recipe_name: props.name
            }
            const url = API_BASE_URL + '/ingredients';
            axios.post(url, data)
                .then(res => {
                    console.log(res);
                    console.log(res.status);
                    if (res.status === 200) {
                        console.log('Ainesosa lisätty onnistuneesti');
                        setReload(true);
                        
                    }
                    else {
                        console.log('HUPS! Jotain meni vikaan eikä ainesosaa lisätty!');
                    }
                });
        }

        const ingredientRows =
            ingredients.map((ingredient, index) =>

                <tr id={ingredient.id}>
                    <td>
                        {ingredient.name}
                    </td>
                    <td>
                        {ingredient.amount}
                    </td>
                    <td>
                        {ingredient.unit}
                    </td>
                    <td><Button id={ingredient.id} variant="transparent" onClick={() => setDeleteModalShow(true)}><DeleteForeverIcon/></Button>
                    </td>
                    <DeleteIngredient
                        id={ingredient.id}
                        show={deleteModalShow}
                        onHide={() => setDeleteModalShow(false)}

                    />
                </tr>
            );


        return (
            <Table>
                <tr>
                    <td><b>Ainesosa</b></td>
                    <td><b>Määrä</b></td>
                    <td><b>Yksikkö</b></td>
                    <td><noscript/></td>
                </tr>
                {ingredientRows}
                <tr><td><input
                    ref={iNameRef}
                    type="text"
                    name={iName}
                    placeholder="Syötä ainesosa"
                    value={iName}
                    onChange={e => setIname(e.target.value)}
                /></td>
                    <td><input
                        ref={amountRef}
                        type="number"
                        name={amount}
                        placeholder="Syötä määrä"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    /></td>
                        <td>
                            <select value={unit} ref={unitRef} onChange={e => setUnit(e.target.value)}>
                                <option value="null"></option>
                                <option value="dl">dl</option>
                                <option value="g">g</option>
                                <option value="kpl">kpl</option>
                                <option value="pkt">pkt</option>
                                <option value="ripaus">ripaus</option>
                            </select>
                        </td>
                    <td><Button variant="transparent" onClick={handleSubmit}><AddIcon/></Button></td>
                </tr>
            </Table>
        )

}
export default EditIngredients
