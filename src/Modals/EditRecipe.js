import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import './EditRecipe.css';
import Modal from "react-bootstrap/Modal";
import DeleteRecipe from "./DeleteRecipe";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function EditRecipe(props) {

    const [deleteModalShow, setDeleteModalShow] = React.useState(false);

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

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                    >
                    <Col sm={6}>
                    <Col><h2>{props.name}</h2></Col>
                    <Col>Valmistusaika: {props.cooking_time}</Col>
                    <Col>Annokset: {props.portions}</Col>
                    <Col>Valmistusohjeet: {props.instruction}</Col>
                    </Col>
                    <Col md="auto"><Image src={props.image} height={300}/></Col>
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
