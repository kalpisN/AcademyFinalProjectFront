import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {API_BASE_URL} from "../Helpers/API";
import DeleteRecipe from "./DeleteRecipe";


function DeleteIngredient(props) {

    const [ingredientDelete, setIngredientDelete] = React.useState(false);


    if(ingredientDelete === true) {

        const url = API_BASE_URL + '/ingredients/' + props.id;

        fetch(url, {
            method: 'DELETE'
        }).then(r => r.json());

        console.log(props.name + ' poistettu')

    }


    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Haluatko todella poistaa ainesosan?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button variant="light" onClick={() => setIngredientDelete(true)}>Kyllä</Button>
                <Button variant="light" onClick={props.onHide}>Ei</Button>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>


    )
}

export default DeleteIngredient