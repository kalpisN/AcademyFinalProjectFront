import React, {Component} from 'react';
import Search from "./Search";

class AllRecipes extends Component {
    render() {
        return (
            <div>
                <Search className="Searchbar" />
                <h1>Tässä on etusivukomponentti, joka näyttää kaikki reseptit</h1>
                <p>Tänne ne tulee</p>
            </div>
        );
    }
}

export default AllRecipes;