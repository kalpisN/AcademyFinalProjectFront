import React, {Component} from "react";
import {API_BASE_URL} from "./helper";

async function DeleteRecipe(props) {

    const url = API_BASE_URL + '/recipes/' + props.id;
        await fetch(url, {
            method: 'DELETE'
        }).then(r => r.json())

}

export default DeleteRecipe;
