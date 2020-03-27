import React, {useEffect, useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import './EditRecipe.css';
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import {API_BASE_URL} from "./helper";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';



function ShowRecipeDetails(props) {

    const [ingredients, setIngredients] = useState([])

    const url = API_BASE_URL + '/ingredients' + props.name;
            fetch(url, {
                method: 'GET'
            }).then(response => {
                setIngredients(response.data);
            })



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
                        {props.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>Valmistusaika: {props.cooking_time}</Row>
                    <Row>{props.cooking_time} </Row>
                    <Row>{props.portions}</Row>
                    <Row>{props.instruction}</Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light"><AddShoppingCartIcon/></Button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
export default ShowRecipeDetails