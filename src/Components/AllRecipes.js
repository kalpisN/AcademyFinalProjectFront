import React from "react";
import StackGrid from "react-stack-grid";
import Recipe from "./Recipe";

function AllRecipes(props) {
    console.log(props.recipes)
    const filtered = props.recipes.results.filter(recipe => recipe.title.toUpperCase().includes(props.filter.trim().toUpperCase()))


    const rows = filtered.map(recipe =>
        <div key={recipe.id}>
            <Recipe image={recipe.image}
                    title={recipe.title}
                    id={recipe.id}
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