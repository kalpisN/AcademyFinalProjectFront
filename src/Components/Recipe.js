import React from 'react';


const Recipe = (props) => {
    return(
        <div className='recipeblock'>
            <img className='image' src={`https://spoonacular.com/recipeImages/${props.image}`} alt='recipeimage'/>
            <div className='imageText'>{props.title}</div>

        </div>
    )

}

export default Recipe