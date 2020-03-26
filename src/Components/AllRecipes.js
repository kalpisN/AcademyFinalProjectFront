import React from "react";
import StackGrid from "react-stack-grid";
import Recipe from "./Recipe";

function AllRecipes(props) {
    console.log(props.recipes)
   const filtered = props.recipes.filter(recipe =>
        recipe.name.toUpperCase().includes(props.filter.trim().toUpperCase()))
console.log('here are filtered recipes:' , filtered)

    const rows = filtered.map(recipe =>
        <div key={recipe.id}>
            <Recipe image={recipe.image}
                    name={recipe.name}
                    id={recipe.id}
                    cooking_time={recipe.cooking_time}
                    instruction={recipe.instruction}
            />
        </div>
    )


    return <StackGrid
        columnWidth={250}
        gutterWidth={20}
        gutterHeight={15}
    >
        {rows}
    </StackGrid>


}

export default AllRecipes;