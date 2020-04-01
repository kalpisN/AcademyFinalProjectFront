import React, {useRef, useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import './EditRecipe.css';
import Modal from "react-bootstrap/Modal";
import DeleteRecipe from "./DeleteRecipe";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Grid from "@material-ui/core/Grid";
import EditRecipeForm from "../FormHandling/EditRecipeForm";
import Table from "react-bootstrap/Table";
import {API_BASE_URL} from "../Helpers/API";


function EditRecipe(props) {

    const [deleteModalShow, setDeleteModalShow] = React.useState(false);
    const nameRef = useRef();
    const cooking_timeRef = useRef();
    const portionsRef = useRef();
    const instructionRef = useRef();
    const [name, setName] = React.useState(props.name);
    const [cooking_time, setCookingTime] = React.useState(props.cooking_time);
    const [portions, setPortions] = React.useState(props.portions);
    const [instruction, setInstruction] = React.useState(props.instruction);

    const handleSubmit = () => {

        console.log('Submitting stuff!');
        console.log(props.id);
        console.log(name);
        const url = API_BASE_URL + '/recipes/' + props.id;

        let data = JSON.stringify( {
            name: name,
            cooking_time: cooking_time,
            portions: portions,
            instruction: instruction
            /*            image: image,
                        ingredients: ingredients*/
        });

        console.log(data);

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        })
            .then((response) => response.json())
            .then((data) => {
                    console.log('Success:', data);
                })
            .catch((error) => {
                console.error('Error:', error);
            });
    };



    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <EditRecipeForm text={name}
                                        placeholder={props.name}
                                        childRef={nameRef}
                                        type="input"
                                        name="nimi"
                        >
                            <input
                                ref={nameRef}
                                type="text"
                                name={name}
                                placeholder={props.name}
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </EditRecipeForm>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                    >
                    {/*<Col sm={6}>*/}
                        <Table col={{sm: 6}}>
                            <tr><td>Valmistusaika:</td><td> <EditRecipeForm
                                text={cooking_time}
                                placeholder={props.cooking_time}
                                childRef={cooking_timeRef}
                                type="input"
                                name="valmistusaika"
                            >
                                <input
                                    ref={cooking_timeRef}
                                    type="text"
                                    name={cooking_time}
                                    placeholder={props.cooking_time}
                                    value={cooking_time}
                                    onChange={e => setCookingTime(e.target.value)}
                                />
                            </EditRecipeForm></td></tr>
                            <tr><td>Annoksia:</td><td> <EditRecipeForm
                                text={portions}
                                placeholder={props.portions}
                                childRef={portionsRef}
                                type="input"
                                name="annosmäärä"
                            >
                                <input
                                    ref={portionsRef}
                                    type="text"
                                    name={portions}
                                    placeholder={props.portions}
                                    value={portions}
                                    onChange={e => setPortions(e.target.value)}
                                />
                            </EditRecipeForm></td></tr>
                            <tr><td>Valmistusohjeet:</td><td> <EditRecipeForm
                                text={instruction}
                                placeholder={props.instruction}
                                childRef={instructionRef}
                                type="textarea"
                                name="valmistusohjeet"
                            >
                                <textarea
                                    ref={instructionRef}
                                    name={instruction}
                                    placeholder={props.instruction}
                                    rows="10"
                                    value={instruction}
                                    onChange={e => setInstruction(e.target.value)}
                                />
                            </EditRecipeForm></td></tr>
{/*                            <tr><td>Linkki:</td><td> <EditRecipeForm
                                text={link}
                                placeholder={props.link}
                                childRef={linkRef}
                                type="textarea"
                                name="linkki"
                            >
                                <input
                                    ref={linkRef}
                                    name={link}
                                    placeholder={props.link}
                                    rows="10"
                                    value={link}
                                    onChange={e => setLink(e.target.value)}
                                />
                            </EditRecipeForm></td></tr>*/}

{/*                            <tr><td>Valmistusaika:</td><td><EditRecipeForm id='cooking_time' value={props.cooking_time}/></td></tr>
                            <tr><td>Annokset:</td><td><EditRecipeForm id='portions' value={props.portions}/></td></tr>
                            <tr><td>Valmistusohjeet:</td><td><EditRecipeForm id='instruction' value={props.instruction}/></td></tr>*/}
                        </Table>
                    {/*</Col>*/}
                    <Col md="auto"><Image src={props.image} width={250}/></Col>
                    </Grid>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={handleSubmit}>Tallenna</Button>
                    <Button variant="light" onClick={() => setDeleteModalShow(true)}><DeleteForeverIcon/></Button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            <DeleteRecipe
                id={props.id}
                show={deleteModalShow}
                onHide={() => setDeleteModalShow(false)}
            />
        </Modal>
    );
}
export default EditRecipe;
