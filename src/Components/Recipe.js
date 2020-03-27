import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import EditRecipe from "./EditRecipe";
import EditSharpIcon from '@material-ui/icons/EditSharp';
import './EditRecipe.css'
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import ShowRecipeDetails from "./ShowRecipeDetails";
import Button from "react-bootstrap/Button";

function Recipe(props) {

    const [recipeModalShow, setRecipeModalShow] = React.useState(false);
    const [editModalShow, setEditModalShow] = React.useState(false);


        return (
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        <Row>Ruuanlaittoaika: {props.cooking_time}</Row>
                        <Row>Valmistusohje: {props.instruction}</Row>
                        <Row>Annokset: {props.portions}</Row>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="light" onClick={() => setRecipeModalShow(true)}><VisibilitySharpIcon/></Button>
                    <Button variant="light" onClick={() => setEditModalShow(true)}><EditSharpIcon/></Button>
                </Card.Footer>
                <ShowRecipeDetails
                    id={props.id}
                    name={props.name}
                    cooking_time={props.cooking_time}
                    portions={props.portions}
                    instruction={props.instruction}
                    show={recipeModalShow}
                    onHide={() => setRecipeModalShow(false)}
                />
                <EditRecipe
                    id={props.id}
                    name={props.name}
                    cooking_time={props.cooking_time}
                    portions={props.portions}
                    instruction={props.instruction}
                    show={editModalShow}
                    onHide={() => setEditModalShow(false)}
                />
            </Card>

        );
}

export default Recipe



