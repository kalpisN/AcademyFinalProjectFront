import React from "react";
import {API_BASE_URL} from "../Helpers/API";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function DeleteRecipe(props) {

    const [RecipeDelete, setRecipeDelete] = React.useState(false);


    if (RecipeDelete === true) {
        console.log('täällä sitä poistetaan reseptiä!')
        const url = API_BASE_URL + '/recipes/' + props.id;

        fetch(url, {
            method: 'DELETE'
        }).then(r => r.json());


        console.log(props.id + 'poistettu')
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
                    Haluatko todella poistaa reseptin?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button variant="light" onClick={() => setRecipeDelete(true)}>Kyllä</Button>
                <Button variant="light" onClick={props.onHide}>Ei</Button>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>

    )
}
export default DeleteRecipe;

