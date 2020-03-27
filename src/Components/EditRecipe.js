import React from "react";

import Form from 'react-bootstrap/Form'

import Button from "react-bootstrap/Button";
import './EditRecipe.css';
import Modal from "react-bootstrap/Modal";



function EditRecipe(props) {

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Form>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Reseptin editointi {props.id}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{props.name}</h4>
                    <h4>{props.cooking_time}</h4>
                    <h4>{props.portions}</h4>
                    <h4>{props.instruction}</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
                </Form>
            </Modal>
        );
}
export default EditRecipe;
