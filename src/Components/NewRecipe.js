import React, {Component} from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button} from "react-bootstrap";
import {API_BASE_URL} from "./helper";
import Message from "./Message";
class NewRecipe extends Component {
    constructor(props) {
        super(props);
        this.state={name:'',
            cooking_time: '',
            instruction:'',
            link: '',
            portions: '',
            image: '',
            errormessage: '',
            message: '',
            isHidden:true};
        this.handleChangeName=this.handleChangeName.bind(this);
        this.handleChangeCookingtime=this.handleChangeCookingtime.bind(this);
        this.handleChangePortions=this.handleChangePortions.bind(this);
        this.handleChangeInstructions=this.handleChangeInstructions.bind(this);
        this.handleChangeLink=this.handleChangeLink.bind(this);
        this.handleChangeImage=this.handleChangeImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.emptyForm = this.emptyForm.bind(this);
    }
    handleChangeName(event){
        this.setState({name: event.target.value});
    }
    handleChangeCookingtime(event){
        let nam = event.target.name;
        let val = event.target.value;
        let err ='';
        if (nam === "time") {
            if (!Number(val)) {
                err = <strong>Anna kokkausaika numerona!</strong>;
            }
        }
        this.setState({errormessage: err})
        this.setState({cooking_time: event.target.value});
    }
    handleChangePortions(event){
        let nam = event.target.name;
        let val = event.target.value;
        let err= '';
        if (nam === "portions") {
            if (!Number(val)) {
                err = <strong>Anna annoskoko numerona!</strong>;
            }
        }
        this.setState({errormessage: err})
        this.setState({portions: event.target.value});
    }
    handleChangeInstructions(event){
        this.setState({instruction: event.target.value});
    }
    handleChangeLink(event){
        this.setState({link: event.target.value});
    }
    handleChangeImage(event){
        this.setState({image: event.target.value});
    }
    toggleHidden(){
        this.setState({isHidden: !this.state.isHidden})
    }
    async handleSubmit(event) {
        let message = 'Tämä on defaultviesti';
        event.preventDefault();
        const url = API_BASE_URL + '/recipes'
        const data = JSON.stringify({
            name: this.state.name,
            cooking_time: this.state.cooking_time,
            portions: this.state.portions,
            link: this.state.link,
            instruction: this.state.instruction,
            image: this.state.image
        })
        console.log(data)
        axios.post(url, data)
            .then(res => {
                console.log(res);
                console.log(res.data.statusCode);
                if (!(res.data.statusCode === 200)) {
                    message = 'HUPS! Jotain meni vikaan!';
                    this.setState({message: message});
                    this.toggleHidden();
                } else {
                    message = 'Resepti lisätty onnistuneesti';
                    this.setState({message: message});
                    this.toggleHidden();
                }
            })
        console.log(message)
        console.log("post action complete")
    }
    emptyForm() {
        this.setState({
            name: '',
            cooking_time: '',
            instruction: '',
            link: '',
            portions: '',
            image: '',
            errormessage: '',
            message: '',
            isHidden:true
        });
    }
    render() {
        return (
            <div className="newRecipeForm">
                <h1>Täällä voit lisätä uusia reseptejä</h1>
                <hr/>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            Ruokalaji:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" value={this.state.name} onChange={this.handleChangeName}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalCookingtime">
                        <Form.Label column sm={2}>
                            Kokkausaika(min):
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="time" value={this.state.cooking_time} onChange={this.handleChangeCookingtime}/>
                            {this.state.errormessage}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalPortions">
                        <Form.Label column sm={2}>
                            Annoskoko:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="portions" value={this.state.portions} onChange={this.handleChangePortions}/>
                            {this.state.errormessage}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalInstruction">
                        <Form.Label column sm={2}>
                            Valmistusohje:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="textarea" value={this.state.instruction} onChange={this.handleChangeInstructions}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalLink">
                        <Form.Label column sm={2}>
                            Linkki ohjeeseen:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" value={this.state.link} onChange={this.handleChangeLink}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalImage">
                        <Form.Label column sm={2}>
                            Linkki kuvaan:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" value={this.state.image} onChange={this.handleChangeImage}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Lisää resepti</Button>
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
export default NewRecipe;