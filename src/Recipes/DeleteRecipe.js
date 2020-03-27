import React, {Component} from "react";
import {API_BASE_URL} from "../Helpers/API";
import Message from "../Helpers/Message";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function DeleteRecipe(props) {

        const [RecipeDelete, setRecipeDelete] = React.useState(false);

        if (RecipeDelete === true) {

            const url = API_BASE_URL + '/recipes/' + props.name;

            fetch(url, {
                method: 'DELETE'
            }).then(r => r.json())

            alert(props.id + 'poistettu')

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
