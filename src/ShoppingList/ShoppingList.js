import React, {Component, useEffect, useState} from "react";
import {API_BASE_URL} from "../Helpers/API";
import {Spinner} from "react-bootstrap";
import axios from "axios";
import {Row} from "react-bootstrap";
import {Table} from "react-bootstrap";
import {Checkbox} from "@material-ui/core";
import update from 'immutability-helper';
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "react-bootstrap/Button";
import "./ShoppingList.css"
import trashIcon from "./trash-solid.svg"
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";


const ShoppingList =()=> {
    const [shoppingListItems, setShoppingListItems] = useState([])
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [unit, setUnit] = useState("")
    const [message, setMessage] = useState("")
    const url = API_BASE_URL + '/shoppingList/';
    console.log(url);

    useEffect(() => {
        console.log('effect')
        axios
            .get(url)
            .then(response => {
                console.log('promise fulfilled')
                setShoppingListItems(response.data)
            })
    }, [])
    console.log('render', shoppingListItems.length, 'items')


    const handleUnitChange = (event) => {
        setUnit(event.target.value)
    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleAmountChange = (event) => {
        setAmount(event.target.value)
    }
    const handleSubmit = async (event) => {
        let message = 'Tämä on defaultviesti';
        event.preventDefault();
        const url = API_BASE_URL + '/shoppingListItem'
        const data = JSON.stringify({
            name: name,
            amount: amount,
            unit: unit
        })
        console.log(data)
        axios.post(url, data)
            .then(res => {
                console.log(res);
                console.log(res.status);
                if (res.status === 200) {
                    const messageSuccess = 'Tuote lisätty kauppalistaan';
                    setMessage(messageSuccess);
                } else {
                    const messageError = 'HUPS! Jotain meni vikaan eikä tuotetta lisätty!';
                    setMessage(messageError);
                }
            })
            .catch(err => {
                const messageError = 'HUPS! Jotain meni vikaan eikä tuotetta lisätty!';
                setMessage(messageError);
            })
        console.log(message)
        console.log("post action complete")
    }


    const deleteItem = (props) => {
        console.log(props)

        axios.delete(`${API_BASE_URL}/shoppingList/${props.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                //ei toiminut tämä yritelmä
                // const copy = [...setShoppingListItems]
                // const index = copy.indexOf(props)
                // if (index !== -1) {
                //     copy.splice(index, 1);
                //     setShoppingListItems(copy)
                // }
            })
    }

    const shoppingListRows = shoppingListItems.map(item =>

        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{item.unit}</td>
            <td><Button onClick={()=>deleteItem(item)}><img className='trashIcon' src={trashIcon}/></Button></td>
        </tr>
    )

        return (
            <div>
            <div className='flex-container'>
                <Table id='table'>
                    <tr><h1>Kauppalista</h1></tr>
                    <tr>
                        <th>Ainesosa</th>
                        <th>Määrä</th>
                        <th>Yksikkö</th>
                        <th>Poista</th>
                    </tr>
                    {shoppingListRows}</Table>
                <div className='addItemForm'>
                    <Form onSubmit={handleSubmit}>
                        <h3>Lisää tuotteita kauppalistaan:</h3>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Tuote:
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" name="name" value={name} onChange={handleNameChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Määrä:
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" name="amount" value={amount} onChange={handleAmountChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Yksikkö:
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" name="unit" value={unit} onChange={handleUnitChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col sm={{span: 10, offset: 2}}>
                                <Button type="submit">Lisää kauppalistaan</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                    {message}
                </div>
            </div>
            </div>
        )
}
export default ShoppingList