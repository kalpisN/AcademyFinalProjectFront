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
        this.state={name:null,
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
            validated:false,
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
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            console.log("lopeta eteneminen NYT")
            event.stopPropagation();

        }
        this.setState({validated: true})

        axios.post(url, data)
            .then(res => {
                console.log(res);
                console.log(res.status);
                if (res.status === 200) {
                    message = 'Resepti lisätty onnistuneesti';
                    this.setState({message: message});
                    this.toggleHidden();
                } else {
                    message = 'HUPS! Jotain meni vikaan eikä reseptiä lisätty!';
                    this.setState({message: message});
                    this.toggleHidden();

                }
            })
            .catch(err => {
                message= 'HUPS! Jotain meni vikaan eikä reseptiä lisätty!';
                this.setState({message: message});
                this.toggleHidden();
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

            <div className="newRecipeForm">
                <Form onSubmit={this.handleSubmit} onChange={this.handleChange} noValidate validated={this.state.validated}>
                    <Form.Group as={Row} >
                        <Form.Label column sm={2}><b>
                            Ruokalaji:*
                        </b></Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name ="name" id= "name" value={name} required onChange={this.handleChange}/>
                            <Form.Control.Feedback type="invalid">
                               Ruokalajin nimikenttä ei voi olla tyhjä!
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}><b>
                            Kokkausaika(min):*
                        </b></Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="cooking_time" id="cooking_time" value={cooking_time} required onChange={this.handleChange}/>
                            <Form.Control.Feedback type="invalid">
                                Kokkausaikakenttä ei voi olla tyhjä!
                            </Form.Control.Feedback>
                        </Col>
                        {this.state.errormessagetime}
                    </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}><b>
                        Annoskoko:*
                    </b></Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" name="portions" id="portions" value={portions} required onChange={this.handleChange}/>
                        <Form.Control.Feedback type="invalid">
                            Annoskokokenttä ei voi olla tyhjä!
                        </Form.Control.Feedback>
                    </Col>
                    {this.state.errormessageportions}
                </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}><b>
                            Valmistusohje:
                        </b></Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" name="instruction" id="instruction" value={instruction} onChange={this.handleChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} style={{display: "none"}}>
                        <Form.Label column sm={2}>
                            Linkki ohjeeseen:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="link" id="link" value={link} onChange={this.handleChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}><b>
                            Kuva:
                        </b></Form.Label>
                        <Col sm={10}>
                            <ImageUpload name= "image" id="image" value={image} onChange={this.handleChange} callbacFromParent={this.myCallback} />
                        </Col>

                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button variant="dark" type="button" onClick={this.addIngredient}>Lisää uusi ainesosa reseptiin</Button>
                        </Col>
                        {this.state.errormessageamount}
                    </Form.Group>
                            {
                                ingredients.map((val,idx) => {
                                    let iname= `iname-${idx}`, ingredientamount = `amount-${idx}`, ingredientunit = `unit-${idx}`

                                    return (
                                        <div key={idx}>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm={2}><b>
                                                    Ainesosa:*
                                                </b></Form.Label>
                                            <Col sm={10}>
                                                <Form.Control type="text" name={iname} data-id={idx} id={iname} value={ingredients[idx].iname} bsPrefix="iname" required onChange={this.handleChange}/>
                                                <Form.Control.Feedback type="invalid">
                                                    Ainesosakenttä ei voi olla tyhjä!
                                                </Form.Control.Feedback>
                                            </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm={2}><b>
                                                    Määrä:*
                                                </b></Form.Label>
                                                <Col sm={10}>
                                                    <Form.Control type="text" name={ingredientamount} data-id={idx} id={ingredientamount} value={ingredients[idx].amount} bsPrefix="amount" required onChange={this.handleChange}/>
                                                    <Form.Control.Feedback type="invalid">
                                                        Määräkenttä ei voi olla tyhjä!
                                                    </Form.Control.Feedback>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label column sm={2}><b>
                                                    Yksikkö:*
                                                </b></Form.Label>
                                                <Col sm={10}>
                                                    <Form.Control as="select"  name={ingredientunit} data-id={idx} id={ingredientunit} value={ingredients[idx].unit} bsPrefix="unit" required onChange={this.handleChange}>
                                                        <Form.Control.Feedback type="invalid">
                                                            Anna yksikkö!
                                                        </Form.Control.Feedback>
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
                            <Button variant="dark" type="submit">Tallenna resepti</Button>
                        </Col>
                    </Form.Group>
                </Form>
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button variant="dark" type="text" onClick={this.emptyForm}>Tyhjennä kentät</Button>
                    </Col>
                </Form.Group>
                {!this.state.isHidden && <Message message={this.state.message}/>}
            </div>
        );
    }
}
export default NewRecipe;