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
    const inputRef = useRef();
    const textareaRef = useRef();
    const [name, setName] = React.useState("");
    const [cooking_time, setCookingTime] = React.useState("");
    const [portions, setPortions] = React.useState()
    const [instruction, setInstruction] = React.useState("");

    const handleSubmit  = (event) => {
        event.preventDefault();
        console.log('Submitting stuff!');
        const url = API_BASE_URL + '/recipes/' + props.id;
        let data = JSON.stringify( {
            name: this.state.name,
            cooking_time: this.state.cooking_time,
            portions: this.state.portions,
/*            link: this.state.link,*/
            instruction: this.state.instruction,
/*            image: this.state.image,
            ingredients: this.state.ingredients*/
        });

        fetch(url, {
            method: 'PUT',
            mode: 'CORS',
            body: data,
        }).then(res => {
            return res;
        }).catch(err => err);
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
                                        childRef={inputRef}
                                        type="input"
                        >
                            <input
                                ref={inputRef}
                                type="text"
                                name="nimi"
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
                                childRef={inputRef}
                                type="input"
                            >
                                <input
                                    ref={inputRef}
                                    type="text"
                                    name="valmistusaika"
                                    placeholder={props.cooking_time}
                                    value={cooking_time}
                                    onChange={e => setCookingTime(e.target.value)}
                                />
                            </EditRecipeForm></td></tr>
                            <tr><td>Annoksia:</td><td> <EditRecipeForm
                                text={portions}
                                placeholder={props.portions}
                                childRef={inputRef}
                                type="input"
                            >
                                <input
                                    ref={inputRef}
                                    type="text"
                                    name="annosmäärä"
                                    placeholder={props.portions}
                                    value={portions}
                                    onChange={e => setPortions(e.target.value)}
                                />
                            </EditRecipeForm></td></tr>
                            <tr><td>Valmistusohjeet:</td><td> <EditRecipeForm
                                text={instruction}
                                placeholder={props.instruction}
                                childRef={textareaRef}
                                type="textarea"
                            >
                                <textarea
                                    ref={textareaRef}
                                    name="valmistusohje"
                                    placeholder={props.instruction}
                                    rows="10"
                                    value={props.instruction}
                                    onChange={e => setInstruction(e.target.value)}
                                />
                            </EditRecipeForm></td></tr>

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
