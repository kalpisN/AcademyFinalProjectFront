import "./Search.css"
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import AllRecipes from "./AllRecipes";
import {API_BASE_URL} from "../Helpers/API";
import {Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
                    <p className='heading'>Hae reseptiä</p>
                    <Form.Group>
                        <Row>
                        <Col sm={3}>
                        <Form.Control className='searchInput' placeholder='Kirjoita reseptin nimi...' value={filter} onChange={handlefilterChange}/>
                        </Col>
                            </Row>
                    </Form.Group>
                    </div>
                <AllRecipes recipes={recipes} filter={filter} setFilter={setFilter}/>
            </div>
        )

    }
}

export default Search;