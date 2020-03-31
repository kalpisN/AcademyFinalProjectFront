import React, {useEffect, useState} from 'react';

const EditRecipeForm = ({   childRef,
                            text,
                            type,
                            placeholder,
                            children,
                            ...props
                        })  => {

    const [isEditing, setEditing] = useState(false);


    useEffect(() => {
        if (childRef && childRef.current && isEditing === true) {
            childRef.current.focus();
        }
    }, [isEditing, childRef]);


    const handleKeyDown = (event, type) => {
        const {key} = event;
        const keys = ["Escape", "Tab"];
        const enterKey = "Enter";
        const allKeys = [...keys, enterKey];

        if (
            (type === "textarea" && keys.indexOf(key) > -1) ||
            (type !== "textarea" && allKeys.indexOf(key) > -1)
        ) {
            setEditing(false);
        }
    };
        return (
            <section {...props}>
                {isEditing ? (
                    <div
                        onBlur={() => setEditing(false)}
                        onKeyDown={e => handleKeyDown(e, type)}
                    >
                        {children}
                    </div>
                ) : (
                    <div
                        onClick={() => setEditing(true)}
                    >
          <span>
            {text || placeholder || `Syötä reseptille ${props.name}`}
          </span>
                    </div>
                )}
            </section>
        );
    };


export default EditRecipeForm
    /*const StyledEdiText = styled(EdiText)`
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
            console.log(this.props.id)
        }

        render () {
            return (
                <StyledEdiText
                    title={this.props.title}
                    id={this.props.id}
                    type='text'
                    value={this.props.value}
                    onSave={this.onSave}
                    editOnViewClick={true}
                    hideIcons={true}
                    /!*validation={val => val.length >= 20}*!/
    /!*                saveButtonContent='Tallenna'
                    cancelButtonContent='Peruuta'*!/
                />
            )
        }*/

