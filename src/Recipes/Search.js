
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import AllRecipes from "./AllRecipes";
import {API_BASE_URL} from "../Helpers/API";

function Search() {
    const [recipes, setRecipes] = useState([])
    const [filter, setFilter] = useState("")
    const handlefilterChange = (event) => setFilter(event.target.value)


    useEffect(() => {
        const url = API_BASE_URL + '/recipes';
        console.log('effect')
        axios
            .get(url)

            .then(response => {
                console.log('promise fulfilled')
                console.log(response.data)
                setRecipes(response.data)
            })
    }, [])

    console.log('render', recipes.length, 'recipes')
    console.log(' here are the recipes props:' , recipes)


    if(recipes.length===0){
        return 'loading...'
    }else {
        return (
            <div className={"Allrecipes"}>
                <hr/>
                <div className={'searchBar'}>
                    <div className={'heading'}>Hae reseptiä</div>
                    <input className='searchInput' placeholder='Kirjoita reseptin nimi...' value={filter} onChange={handlefilterChange}/>
                </div>
                <div><AllRecipes recipes={recipes} filter={filter} setFilter={setFilter}/></div>
            </div>
        )

    }
}

export default Search;