import React from "react";
import {API_BASE_URL} from "../Helpers/API";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function DeleteRecipe(props) {

    const [RecipeDelete, setRecipeDelete] = React.useState(false);
    const [message, setMessage] = React.useState("")


    if (RecipeDelete === true) {
        console.log('täällä sitä poistetaan reseptiä!');
        const url = API_BASE_URL + '/recipes/' + props.id;
        const decoder = new TextDecoder('utf-8');

        fetch(url, {
            method: 'DELETE'
        })
            .then(r =>
            r.body
                .getReader()
                .read()
                    .then(({value, done}) => {
                        if (decoder.decode(value) === 'Recipe Deleted!') {
                            window.location.reload(true);

                        }
                        else {
                            setMessage("HUPS! Jokin meni vikaan!");
                        }
                    })
            )

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
                <Button variant="dark" onClick={() => setRecipeDelete(true)}>Kyllä</Button>
                <Button variant="dark" onClick={props.onHide}>Ei</Button>
            </Modal.Body>
            <Modal.Footer>
                {message}
            </Modal.Footer>
        </Modal>

    )
}
export default DeleteRecipe;

