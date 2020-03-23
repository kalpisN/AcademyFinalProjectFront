import React, {Component} from 'react';
import Search from "./Search";

class AllRecipes extends Component {
    render() {
        return (
            <div>

                <h1>Tässä on etusivukomponentti, joka näyttää kaikki reseptit</h1>
                <Search />
                <p>Tänne ne reseptit tulee</p>
            </div>
        );
    }
}

export default AllRecipes;