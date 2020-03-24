
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import AllRecipes from "./AllRecipes";

function Search() {
    const [recipes, setRecipes] = useState([])
    const [filter, setFilter] = useState("")
    const handlefilterChange = (event) => setFilter(event.target.value)


    useEffect(() => {
        const url = ''
        console.log('effect')
        axios
            .get(url)

            .then(response => {
                console.log('promise fulfilled')
                console.log(response.data)
                setRecipes(response.data)
            })
    }, [])

    /*fetchSearchResults = (query) => {
        if (this.cancel) {
            // Cancel the previous request before making a new request
            this.cancel.cancel();
        }
        // Create a new CancelToken
        this.cancel = axios.CancelToken.source();
*/
    /*  const url = ""
      axios
          .get(url, {cancelToken: this.cancel.token})
          .then((res) => {
              /!*const resultNotFoundMsg = !res.data.hits.length
                  ? 'There are no more search results. Please try a new search.'
                  : '';  *!/
              this.setState({
                  results: res.data.hits,
                  message: resultNotFoundMsg,
                  loading: false,
              });
          })
          .catch((error) => {
              if (axios.isCancel(error) || error) {
                  this.setState({
                      loading: false,
                      message: 'Failed to fetch results.Please check network',
                  });
              }
          });
  };*/

    /*handleInputChange = (event) => {
        this.setState({userInput: event.target.value});
    };
*/
    console.log('render', recipes.length, 'recipes')
    console.log(recipes)


    return (
        <div className={"Searchbar"}>
            <p>Tämä on hakukenttäkomponentti</p>
            <label className={"liveSearchForm"}>
                <input type="text" placeholder={"Kirjoita reseptin nimi tähän..."} value={filter}
                       onChange={handlefilterChange}/>
            </label>
            <hr/>
            <div><AllRecipes recipes={recipes} filter={filter} setFilter={setFilter}/></div>
        </div>
    );
}


export default Search;