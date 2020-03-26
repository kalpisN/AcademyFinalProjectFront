import React, {Component} from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from "react-bootstrap/Button";

class EditRecipe extends Component {


    render() {
        return(
            <div>
            <Form>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
            </Form>
            </div>
        )
    }



}

export default EditRecipe;