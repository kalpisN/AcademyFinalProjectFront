import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import './EditRecipe.css';
import Modal from "react-bootstrap/Modal";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Ingredient from "../Ingredients/Ingredient";


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
                            <thead>
                            <tr>
                                <th>Ainesosa</th>
                                <th>Määrä</th>
                                <th>     </th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Kovakoodattu ainesosa</td>
                                    <td>100</td>
                                    <td>kpl</td>
                                </tr>
                                <Ingredient name={props.name}/>
                            </tbody>

                       {/* <Row><td>Ainesosa</td><td>Määrä</td><td>Yksikkö</td></Row>*/}

                           {/* <Form> tämä aiheuttaa että ei toimi!
                                {['checkbox'].map((type) => (
                                    <div key={checkbox} className="mb-3">

                                        <Form.Check type="checkbox" id={`check-api-checkbox`}>
                                            <Form.Check.Input type="checkbox" isValid />

                                            <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
                                        </Form.Check>
                                    </div>
                                ))}
                            </Form>*/}
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