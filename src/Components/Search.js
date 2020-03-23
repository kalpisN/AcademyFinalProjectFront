import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            results: {},

        }
    }

    handleInputChange = (event) => {
        const query = event.target.value;
        this.setState({userInput:query});
    };

    render() {
        return (
            <div className={"Searchbar"}>
                <p>Tämä on hakukenttäkomponentti</p>
                <label className={"liveSearchForm"}>
                <input type="text" className={"searchInputField"} placeholder={"Etsi ruokalajia nimellä..."}
                       value="" id="searchInput" OnChange={this.handleInputChange} />
                </label>
            </div>
        );
    }
}

export default Search;