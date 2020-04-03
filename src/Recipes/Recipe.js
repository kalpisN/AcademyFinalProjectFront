import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import EditRecipe from "../Modals/EditRecipe";
import EditSharpIcon from '@material-ui/icons/EditSharp';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import ShowRecipeDetails from "../Modals/ShowRecipeDetails";
import Button from "react-bootstrap/Button";


function Recipe(props) {

    const [recipeModalShow, setRecipeModalShow] = React.useState(false);
    const [editModalShow, setEditModalShow] = React.useState(false);


        return (
            <Card>
                <Card.Img variant="top" src={props.image} width={160}/>
                <Card.Body>
                    <Card.Title className="card-title">{props.name}</Card.Title>
                    <Card.Text>
                        <Row>Ruuanlaittoaika: {props.cooking_time}</Row>
                        <Row>Annokset: {props.portions}</Row>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button position="right" variant="transparent" onClick={() => setRecipeModalShow(true)}><VisibilitySharpIcon/></Button>
                    <Button position="right" variant="transparent" onClick={() => setEditModalShow(true)}><EditSharpIcon/></Button>
                </Card.Footer>
                <ShowRecipeDetails
                    id={props.id}
                    name={props.name}
                    cooking_time={props.cooking_time}
                    image={props.image}
                    portions={props.portions}
                    instruction={props.instruction}
                    show={recipeModalShow}
                    onHide={() => setRecipeModalShow(false)}
                />
                <EditRecipe
                    id={props.id}
                    name={props.name}
                    image={props.image}
                    cooking_time={props.cooking_time}
                    portions={props.portions}
                    instruction={props.instruction}
                    show={editModalShow}
                    onHide={() => window.location.reload(true)}
                />
            </Card>
        );
}
export default Recipe
