import React, { Component } from 'react'
import EdiText from 'react-editext';
import styled from "styled-components";
import EditSharpIcon from '@material-ui/icons/EditSharp';

const StyledEdiText = styled(EdiText)`
    button {
    border-style: hidden;
    position: right;
    background-color: #fff;
   
  }
  button[editext="edit-button"] {
    color: #000;
    width: 10px;
  }
  button[editext="save-button"] {
    width: 50px;
    &:hover {
      background: greenyellow;
    }
  }
  button[editext="cancel-button"] {
    &:hover {
      background: crimson;
      color: #fff;
    }
  
  input, textarea {
    border-radius: 5px;
  }
  div[editext="view-container"], div[editext="edit-container"] {
    padding: 15px;
    border-radius: 5px;
    color: black;
}
`

export default class EditRecipeForm extends Component {
    constructor(props) {
        super(props);

    }

    onSave = val => {
        console.log('Edited Value -> ', val)
    }

    render () {
        return (
            <StyledEdiText
                type='text'
                value={this.props.value}
                onSave={this.onSave}
                editOnViewClick={true}
                hideIcons={true}
                /*validation={val => val.length >= 20}*/
/*                saveButtonContent='Tallenna'
                cancelButtonContent='Peruuta'*/
            />
        )
    }
}
