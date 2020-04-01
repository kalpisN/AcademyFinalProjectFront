import React, {Component, useState} from "react";
import Button from "react-bootstrap/Button";
import './EditRecipe.css';
import Modal from "react-bootstrap/Modal";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Col from "react-bootstrap/Col";
import Ingredient from "../Ingredients/Ingredient";


class ShowRecipeDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedItems: ''
        }
    }

    myCallback = (data) =>{
        this.setState({selectedItems: data})
    }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Col>Valmistusaika: {this.props.cooking_time}</Col>
                    <Col>Annokset: {this.props.portions}</Col>
                    <Col><Ingredient name={this.props.name} callbackFromParent={this.myCallback}/></Col>
                    <Col>Valmistusohje: {this.props.instruction}</Col>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light"><AddShoppingCartIcon/></Button>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ShowRecipeDetails