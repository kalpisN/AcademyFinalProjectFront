import React from 'react';
import DeleteRecipe from "./DeleteRecipe";
import {API_BASE_URL} from "./helper";



const Recipe = (props) => {
        const url = API_BASE_URL + '/recipes/' + props.id;
        return (
            <div className='recipeblock'>

                <h4>{props.name}</h4>
                <p>Ruuanlaittoaika: {props.cooking_time}</p>
                <p>Valmistusohje: {props.instruction}</p>
                <button onClick={() =>
                        fetch(url, {
                        method: 'DELETE'
                }).then(r => r.json())}>Delete</button>
            </div>
        )

}

export default Recipe