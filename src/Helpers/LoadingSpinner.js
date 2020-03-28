import Spinner from 'react-bootstrap/Spinner'
import React from "react";


export default function() {

    return(
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
)
}