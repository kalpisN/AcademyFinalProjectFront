import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {API_BASE_URL} from "../Helpers/API";

function DeleteIngredient(props) {

    const [ingredientDelete, setIngredientDelete] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [deleted, setDeleted] = React.useState(false);


    if(ingredientDelete === true) {

        const url = API_BASE_URL + '/ingredients/' + props.id;
        const decoder = new TextDecoder('utf-8');

        fetch(url, {
            method: 'DELETE'
        }).then(r => r.body
            .getReader()
            .read()
            .then(({value, done}) => {
                if (decoder.decode(value) === 'Ingredient Deleted!') {
                    setMessage("Ainesosa poistettu onnistuneesti!");
                    setDeleted(true);
                }
                else {
                    setMessage("HUPS! Jokin meni vikaan!");
                }
            })
        )
        if (deleted === true);
            return(props.onHide);
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
            {message}
        </Modal>
    )
}

export default DeleteIngredient