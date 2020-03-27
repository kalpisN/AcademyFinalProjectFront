import React from "react";
import Button from "react-bootstrap/Button";
import './EditRecipe.css';
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import './Ingredient';
import Form from "react-bootstrap/Form";
import Ingredient from "./Ingredient";


function ShowRecipeDetails(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Col>Valmistusaika: {props.cooking_time}</Col>
                    <Col>Annokset: {props.portions}</Col>
                    <Col>
                        <Table>
                        <Row><td>Ainesosa</td><td>Määrä</td><td>Yksikkö</td></Row>
                            <Form>
                                {['checkbox'].map((type) => (
                                    <div key={type} className="mb-3">
                                        <Form.Check type={type} id={`check-api-${type}`}>
                                            <Form.Check.Input type={type} isValid />
                                            <Ingredient name={props.name}/>
                                            <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
                                        </Form.Check>
                                    </div>
                                ))}
                            </Form>
                        </Table>
                    </Col>
                    <Col>Valmistusohje: {props.instruction}</Col>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light"><AddShoppingCartIcon/></Button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
        </Modal>
    );
}
export default ShowRecipeDetails