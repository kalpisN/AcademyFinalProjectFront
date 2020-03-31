import React, {useEffect, useState} from 'react';
import {API_BASE_URL} from "../Helpers/API";
import axios from "axios";
import "./ShoppingList.css"


const ShoppingList = ()=> {

    const url = API_BASE_URL + '/shoppingList';
    const [shoppingList,setShoppingList]=useState([])

    useEffect(() => {
        console.log('effect')
        axios
            .get(url)
            .then(response => {
                console.log('promise fulfilled')
                setShoppingList(response.data)
            })
    }, [])
    console.log('render', shoppingList.length, 'items')

    const shoppingListRows=
        shoppingList.map(item=>

                    <tr key={item.name}>
                        <td><input type="checkbox" className='checkBox' id={item.name} name='item' value={item}/></td>
                        <td> <label form='shoppingList' className='checkBoxLabel'>{item.name}</label></td>
                        <td>{item.amount}</td>
                        <td>{item.unit}</td>
                    </tr>
        )


        return (
            <div>
                <h1>Tässä on kauppalista</h1>
                <table>
                    <tbody>
                    {shoppingListRows}
                    </tbody>
                </table>
            </div>
        );
}

export default ShoppingList;