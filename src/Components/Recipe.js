import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";



const Recipe = (props) => {
        return (
            <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                            <Card.Title>{props.name}</Card.Title>
                            <Card.Text>
                                    <Row>Ruuanlaittoaika: {props.cooking_time}</Row>
                                    <Row>Valmistusohje: {props.instruction}</Row>

                            </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                            <Row>Edit</Row>
                    </Card.Footer>
            </Card>
        )
}

export default Recipe
