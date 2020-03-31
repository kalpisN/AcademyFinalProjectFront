import React, {Component,useState} from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import {API_BASE_URL} from "../Helpers/API";
import Message from "../Helpers/Message";
import ImageUpload from "./ImageUpload";

class NewRecipe extends Component {
    constructor(props) {
        super(props);
        this.state={name:'',
            cooking_time: '',
            instruction:'',
            link: '',
            portions: '',
            image: '',
            errormessagetime: '',
            errormessageportions: '',
            errormessageamount: '',
            message: '',
            isHidden:true,
            ingredients: [{iname: '', amount: '', unit: ''}]};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.emptyForm=this.emptyForm.bind(this);

    }


    toggleHidden(){
        this.setState({isHidden: !this.state.isHidden})
    }

     handleChange = (event) => {
        console.log("handleChange funktiossa ollaan");
         console.log(event.target.className);
         let err= '';
         if (["iname", "amount", "unit"].includes(event.target.className)) {
             if (event.target.className === "amount") {
                 if (!Number(event.target.value)) {
                     err = <strong>Syötä määrä numerona!</strong>;
                 }
                 this.setState({errormessageamount: err})
             }
            console.log("ainesosanlisäyskohdassa ollaan");
            let ingredients = [...this.state.ingredients];
            ingredients[event.target.dataset.id][event.target.className] = event.target.value;
            this.setState({ingredients}, () => console.log(this.state.ingredients))
        } else {
            let nam = event.target.name;
            let val = event.target.value;
            let err = '';
            if (nam === "portions") {
                if (!Number(val)) {
                    err = <strong>Syötä annoskoko numerona!</strong>;
                }
                this.setState({errormessageportions: err})
            }
            if (nam === "cooking_time") {
                if (!Number(val)) {
                    err = <strong>Syötä kokkausaika numerona!</strong>;
                }
                this.setState({errormessagetime: err})
            }

            this.setState({[event.target.name]: event.target.value})
        }
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
            image: this.state.image,
            ingredients: this.state.ingredients
        })
        console.log(data)
        axios.post(url, data)
            .then(res => {
                console.log(res);
                console.log(res.status);
                if (res.status === 200) {
                    message = 'Resepti lisätty onnistuneesti';
                    this.setState({message: message});
                    this.toggleHidden();
                } else {
                    message = 'HUPS! Jotain meni vikaan!';
                    this.setState({message: message});
                    this.toggleHidden();

                }
            })
        console.log(message)
        console.log("post action complete")


    }
    emptyForm() {
        console.log("tyhjennetään kentät")
        this.setState({name: '',
            cooking_time: '',
            instruction:'',
            link: '',
            portions: '',
            image: '',
            errormessagetime: '',
            errormessageportions: '',
            errormessageamount: '',
            message: '',
            isHidden:true,
            ingredients: [{iname: '', amount: '', unit: ''}]})
        console.log(this.state.name)
    }


    addIngredient=(event) => {
        console.log("addIngredient funktiossa ollaan");
        this.setState((prevState) =>({
            ingredients: [...prevState.ingredients, {iname:'', amount:'', unit:''}],
        }));
        console.log(this.state.ingredients)
    }

    myCallback = (dataFromChild) =>{
        this.setState({image:dataFromChild})
    }

    render() {
        let {name, cooking_time, instruction, link, portions, image, ingredients} = this.state
        return (

            <div className={"newRecipeForm"}>
                <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <Form.Group as={Row}>

                        <Form.Label column sm={2}>
                            Ruokalaji(*):
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name ="name" id= "name" value={name} onChange={this.handleChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Kokkausaika(min)(*):
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="cooking_time" id="cooking_time" value={cooking_time} onChange={this.handleChange}/>
                        </Col>
                        {this.state.errormessagetime}
                    </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Annoskoko(*):
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" name="portions" id="portions" value={portions} onChange={this.handleChange}/>
                    </Col>
                    {this.state.errormessageportions}
                </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Valmistusohje:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" name="instruction" id="instruction" value={instruction} onChange={this.handleChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Linkki ohjeeseen:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="link" id="link" value={link} onChange={this.handleChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Kuva:
                        </Form.Label>
                        <Col sm={10}>
                            <ImageUpload name= "image" id="image" value={image} onChange={this.handleChange} callbacFromParent={this.myCallback} />
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="button" onClick={this.addIngredient}>Lisää uusi ainesosa reseptiin</Button>
                        </Col>
                        {this.state.errormessageamount}
                    </Form.Group>
                            {
                                ingredients.map((val,idx) => {
                                    let iname= `iname-${idx}`, ingredientamount = `amount-${idx}`, ingredientunit = `unit-${idx}`

                                    return (
                                        <div key={idx}>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm={2}>
                                                    Ainesosa:
                                                </Form.Label>
                                            <Col sm={10}>
                                                <Form.Control type="text" name={iname} data-id={idx} id={iname} value={ingredients[idx].iname} bsPrefix="iname" onChange={this.handleChange}/>
                                            </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm={2}>
                                                    Määrä:
                                                </Form.Label>
                                                <Col sm={10}>
                                                    <Form.Control type="text" name={ingredientamount} data-id={idx} id={ingredientamount} value={ingredients[idx].amount} bsPrefix="amount" onChange={this.handleChange}/>
                                                </Col>

                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm={2}>
                                                    Yksikkö
                                                </Form.Label>
                                                <Col sm={10}>
                                                    <Form.Control as="select"  name={ingredientunit} data-id={idx} id={ingredientunit} value={ingredients[idx].unit} bsPrefix="unit" onChange={this.handleChange}>
                                                        <option value={""}>...</option>
                                                        <option>dl</option>
                                                        <option>g</option>
                                                        <option>kpl</option>
                                                        <option>pkt</option>
                                                        <option>ripaus</option>
                                                    </Form.Control>
                                                </Col>
                                            </Form.Group>
                                        </div>
                                    )
                            })
                            }

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Tallenna resepti</Button>
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