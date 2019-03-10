import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Error extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="Page Error-page">
                <h1>This is Error page 404</h1>
                <p>Please go <NavLink to="/">Home</NavLink></p>
            </div>
        );
    }
}

export default Error;