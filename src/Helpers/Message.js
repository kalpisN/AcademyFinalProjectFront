import React, {Component} from 'react';
import {Alert} from "react-bootstrap";

class Message extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Alert variant='dark'>{this.props.message}</Alert>
            </div>
        );
    }
}

export default Message;