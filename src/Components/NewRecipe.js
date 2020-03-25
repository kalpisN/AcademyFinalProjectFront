import React, {Component} from 'react';

class NewRecipe extends Component {
    constructor(props) {
        super(props);
        this.state={name:'',
            cooking_time: '',
            instruction:'',
            link: '',
            portions: '',
            image: ''};
        this.handleChangeName=this.handleChangeName.bind(this);
        this.handleChangeCookingtime=this.handleChangeCookingtime.bind(this);
        this.handleChangePortions=this.handleChangePortions.bind(this);
        this.handleChangeInstructions=this.handleChangeInstructions.bind(this);
        this.handleChangeLink=this.handleChangeLink.bind(this);
        this.handleChangeImage=this.handleChangeImage.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangeName(event){
        this.setState({name: event.target.value});

    }
    handleChangeCookingtime(event){
        this.setState({cooking_time: event.target.value});

    }
    handleChangePortions(event){
        this.setState({portions: event.target.value});
    }

    handleChangeInstructions(event){
        this.setState({instruction: event.target.value});
    }

    handleChangeLink(event){
        this.setState({link: event.target.value});
    }

    handleChangeImage(event){
        this.setState({image: event.target.value});
    }

    handleSubmit(event){
        console.log("starting to post")
        const url = "https://v0ey9ci8fb.execute-api.eu-west-1.amazonaws.com/dev/api"
        console.log(JSON.stringify({name: this.state.name, cooking_time: this.state.cooking_time, portions: this.state.portions, link: this.state.link,
        instruction: this.state.instruction, image: this.state.image}))
        fetch(url,{
            method:"POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({name: this.state.name, cooking_time: this.state.cooking_time, portions: this.state.portions, link: this.state.link,
                instruction: this.state.instruction, image: this.state.image})})
            .then((response) => { // EI TOIMI?!
                if (response.status === 200) {
                    console.log("added to database successfully");
                } else {
                    console.log("not succuessfull!");
                }
            });
        console.log("post complete")

        this.setState({name:'',
            cooking_time: '',
            instruction:'',
            link: '',
            portions: '',
            image: ''})
        event.preventDefault();
    }

    render() {
        return (
            <div className={"newRecipeForm"}>
                <h1>Täällä voit lisätä uusia reseptejä</h1>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <label>Nimi:
                        <input type="text" value={this.state.name} onChange={this.handleChangeName}/>
                    </label>
                    <label>
                        Kokkausaika:
                        <input type="text" value={this.state.cooking_time} onChange={this.handleChangeCookingtime}/>min
                    </label><br/>
                    <label>
                    Annoskoko:
                    <input type="text" value={this.state.portions} onChange={this.handleChangePortions}/>
                </label>
                    <label>
                        Valmistusohje:
                        <input type="text" value={this.state.instruction} onChange={this.handleChangeInstructions}/>
                    </label>
                    <label>
                        Linkki ohjeeseen:
                        <input type="text" value={this.state.link} onChange={this.handleChangeLink}/>
                    </label>
                    <label>
                        Linkki kuvaan:
                        <input type="text" value={this.state.image} onChange={this.handleChangeImage}/>
                    </label>
                    <input type="submit" value="Lisää resepti!"/>
                </form>

            </div>
        );
    }
}
export default NewRecipe;