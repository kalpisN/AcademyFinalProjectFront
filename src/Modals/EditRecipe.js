import React, {useRef, useState} from "react";
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
import EditIngredients from "../FormHandling/EditIngredients";

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
    const [reload, setReload] = React.useState(false);

    const handleSubmit = () => {

        console.log('Submitting stuff!');
        console.log(name);
        const url = API_BASE_URL + '/recipes/' + props.id;


        let data = JSON.stringify( {
            name: name,
            cooking_time: parseInt(cooking_time),
            portions: parseInt(portions),
            instruction: instruction
            /*            image: image,
                        ingredients: ingredients*/
        });
        console.log(data);
        const decoder = new TextDecoder('utf-8');

        fetch(url, {
            method: 'PUT',
            statusCode: '',
            body: data,
        })
            .then(response => {
                response.body
                    .getReader()
                    .read()
                    .then(({value, done}) => {
                        if (decoder.decode(value) === 'Recipe Updated!') {
                            console.log(decoder.decode(value));
                           /* return (<Message message="Resepti tallennettu onnistuneesti!"/>)*/
                        }
                    })
            })
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
                        <Col col={{sm: 6}}>
                            <Table>
                            <tr><td><b>Valmistusaika:</b></td><td> <EditRecipeForm
                                text={cooking_time}
                                placeholder={props.cooking_time}
                                childRef={null}
                                type="input"
                                name="valmistusaika"
                            >
                                <input
                                    ref={cooking_timeRef}
                                    type="number"
                                    name={cooking_time}
                                    placeholder={props.cooking_time}
                                    value={cooking_time}
                                    onChange={e => setCookingTime(e.target.value)}
                                />
                            </EditRecipeForm></td><td>minuuttia</td></tr>
                            <tr><td><b>Annoksia:</b></td><td> <EditRecipeForm
                                number={portions}
                                placeholder={props.portions}
                                childRef={portionsRef}
                                type="input"
                                name="annosmäärä"
                            >
                                <input
                                    ref={portionsRef}
                                    type="number"
                                    name={portions}
                                    placeholder={props.portions}
                                    value={portions}
                                    onChange={e => setPortions(e.target.value)}
                                />
                            </EditRecipeForm></td><td>annosta</td></tr>
                            </Table>
                                <Col><b>Valmistusohjeet:</b></Col>
                                <Col className="instructions"><EditRecipeForm
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
                                </EditRecipeForm></Col>
                        </Col>
                            <Col md="auto"><Image src={props.image} width={250}/></Col>
                            <EditIngredients reload={reload} setReload={setReload} name={props.name}/>
                    </Grid>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleSubmit}>Tallenna</Button>
                    <Button variant="dark" onClick={() => setDeleteModalShow(true)}><DeleteForeverIcon/></Button>
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
