import React from "react";
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


function EditRecipe(props) {

    const [deleteModalShow, setDeleteModalShow] = React.useState(false);

    return (
        <Modal
            {...props}
            size={{height: 400, width: 300}}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <EditRecipeForm value={props.name}/>
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
                            <tr><td>Valmistusaika:</td><td><EditRecipeForm value={props.cooking_time}/></td></tr>
                            <tr><td>Annokset:</td><td><EditRecipeForm value={props.portions}/></td></tr>
                            <tr><td>Valmistusohjeet:</td><td><EditRecipeForm value={props.instruction}/></td></tr>
                        </Table>
                    {/*</Col>*/}
                    <Col md="auto"><Image src={props.image} fluid/></Col>
                    </Grid>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                    <Button variant="light" onClick={() => setDeleteModalShow(true)}><DeleteForeverIcon/></Button>
                </Modal.Footer>
            </Form>
            <DeleteRecipe
                id={props.id}
                show={deleteModalShow}
                onHide={() => setDeleteModalShow(false)}
            />
        </Modal>
    );
}
export default EditRecipe;
