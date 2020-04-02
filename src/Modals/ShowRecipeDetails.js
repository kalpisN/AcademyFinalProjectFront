import React, {Component, useState} from "react";
import Button from "react-bootstrap/Button";
import './EditRecipe.css';
import Modal from "react-bootstrap/Modal";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Col from "react-bootstrap/Col";
import Ingredient from "../Ingredients/Ingredient";
import {API_BASE_URL} from "../Helpers/API";
import axios from "axios";
import Message from "../Helpers/Message";
import Image from "react-bootstrap/Image";
import Grid from "@material-ui/core/Grid";
import EditRecipeForm from "../FormHandling/EditRecipeForm";
import Table from "react-bootstrap/Table";


class ShowRecipeDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedItems: [],
            message: '',
            isHidden:true,
        }
    }

    myCallback = (data) => {
        //this.setState({selectedItems: data})

        console.log(Object.keys(this.state.selectedItems))
        this.setState({selectedItems: (Object.keys(data))})
        console.log("tässä se mitä tuli tallennettua")
        console.log(this.state.selectedItems)
    }

    saveItems = (event) => {
        console.log(this.state.selectedItems)
        console.log("Aloitetaan tallennus!")

           let message = 'Tämä on defaultviesti';
            event.preventDefault();
            const url = API_BASE_URL + '/shoppingList'

            const data = JSON.stringify({selected: this.state.selectedItems})
            console.log(data)
            axios.post(url, data)
                .then(res => {
                    console.log(res);
                    console.log(res.status);
                    if (res.status === 200) {
                        message = 'Ainesosa lisätty onnistuneesti kauppalistaan';
                        this.setState({message: message});
                        this.toggleHidden();
                    } else {
                        message = 'HUPS! Jotain meni vikaan eivätkä ainesosat tallentuneet!!';
                        this.setState({message: message});
                        this.toggleHidden();

                    }
                })
                .catch(err => {
                    message= 'HUPS! Jotain meni vikaan eivätkä ainesosat tallentuneet!';
                    this.setState({message: message});
                    this.toggleHidden();
                })

            console.log(message)
            console.log("post action complete")


        }

    toggleHidden(){
        this.setState({isHidden: !this.state.isHidden})
    }
d

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
                        {this.props.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                    >
                        <Col col={{sm: 6}}>
                            <Table>
                                <tr><td><b>Valmistusaika:</b></td>
                                    <td>{this.props.cooking_time}</td><td>minuuttia</td></tr>
                                <tr><td><b>Annoksia:</b></td>
                                    <td>{this.props.portions}</td><td>annosta</td></tr>
                            </Table>
                            <Col><b>Valmistusohjeet:</b></Col>
                            <Col>{this.props.instruction}</Col>



                    <Col><Ingredient name={this.props.name} callbackFromParent={this.myCallback}/></Col>

                        </Col>
                        <Col md="auto"><Image src={this.props.image} width={250}/></Col>
                    </Grid>
                </Modal.Body>
                <Modal.Footer>
                    {!this.state.isHidden && <Message message={this.state.message}/>}
                    <Button variant="dark" onClick={this.saveItems}><AddShoppingCartIcon/></Button>
                    <Button variant="dark" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ShowRecipeDetails