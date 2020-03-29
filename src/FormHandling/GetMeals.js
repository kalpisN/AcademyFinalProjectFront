import React, {Component} from "react";
import {API_BASE_URL} from "../Helpers/API";
import Form from "react-bootstrap/Form";

class GetMeals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'meal': [],
            selectedMeal:'',
            validationError:''
        }
    }


    componentDidMount() {
        console.log("starting")
        const url = API_BASE_URL + '/recipes'
        fetch(url, {method: 'GET'})
            .then(response => response.json())
            .then(response => this.setState({'meal': [
                    {
                        value: "",
                        display:
                            "(Select your favourite team)"
                    }
                ].concat(response)
            }))
            .catch(error => {
            console.log(error);
            })
    }

    handelChange=(event)=>{
        const name = event.target.value;
        if (name === "") {
            this.setState({
                validationError: "Valitse ruoka!"
            })
        }
        this.setState({selectedMeal: name})
        this.props.onMealSelect(name);
    }

    render() {
        console.log(this.props)
        return (
            <div>
            <Form.Control as="select" value={this.state.selectedMeal} onChange={this.handelChange}>
                {this.state.meal.map(function (meal, index){
                    return(
                        <option key={meal.id} value={meal.name}>{meal.name}</option>)
                })}
            </Form.Control>
                <div style={{color: 'red', marginTop: '5px'}}>
                    {this.state.validationError}
                </div>
        </div>
        )
    }
}
export default GetMeals;