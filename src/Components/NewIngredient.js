import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button} from "react-bootstrap";
import Message from "./Message";
import GetMeals from "./GetMeals";

class NewIngredient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            amount: '',
            unit: '',
            recipe_name:'',
            errormessage: '',
            message: '',
            isHidden: true
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAmount = this.handleChangeAmount.bind(this);
        this.handleChangeUnit = this.handleChangeUnit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.emptyForm = this.emptyForm.bind(this);

    }

    handleChangeName(event){
        this.setState({name: event.target.value});
    }

    handleChangeAmount(event){
        this.setState({amount: event.target.value});
    }

    handleChangeUnit(event){
        this.setState({unit: event.target.value});
    }
    toggleHidden(){
        this.setState({isHidden: !this.state.isHidden})
    }

    handleMealSelect(name){
        this.setState({recipe_name: name})
    }

    async handleSubmit(event) {
        event.preventDefault();
    }
    emptyForm() {
        this.setState({
            name: '',
            amount: '',
            unit: '',
            recipe_name:'',
            errormessage: '',
            message: '',
            isHidden: true
        });
    }

    render() {
        return (
            <div className={"newIngredientForm"}>
                <Form onSubmit={this.handleSubmit}>
                 {/*  <Form.Group as={Row} controlId="formHorizontalFoodName">
                        <Form.Label column sm={2}>
                            Ruokalajin nimi:
                        </Form.Label>
                        <Col sm={10}>
                         <GetMeals onMealSelect={this.handleMealSelect}/>
                        </Col>
                    </Form.Group>*/}
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            Raaka-aineen nimi:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" value={this.state.name} onChange={this.handleChangeName}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalAmount">
                        <Form.Label column sm={2}>
                            Määrä:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="amount" value={this.state.amount} onChange={this.handleChangeAmount}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalUnit">
                        <Form.Label column sm={2}>
                            Yksikkö
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select" name="unit" value={this.state.unit} onChange={this.handleChangeUnit}>
                                <option>dl</option>
                                <option>g</option>
                                <option>kpl</option>
                                <option>pkt</option>
                                <option>ripaus</option>
                                </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Lisää raaka-aine</Button>
                        </Col>
                    </Form.Group>
                </Form>
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="text" onClick={this.emptyForm}>Tyhjennä kentät</Button>
                    </Col>
                </Form.Group>
                {!this.state.isHidden && <Message message={this.state.message}/>}
            </div>
        );
    }
}

export default NewIngredient;
