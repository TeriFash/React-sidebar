import React, { Component } from 'react';

class Error extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <h1 className="Error-page">This is Error page 404</h1>
        );
    }
}

export default Error;