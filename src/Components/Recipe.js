import React from 'react';


const Recipe = (props) => {
    return(
        <div className='recipeblock'>
            <h4>{props.name}</h4>
            <p>Ruuanlaittoaika: {props.cooking_time}</p>
            <p>Valmistusohje: {props.instruction}</p>
        </div>
    )

}

export default Recipe