import React, { Component } from 'react';
import '../App.css';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: props.list,
        };
    }

    render() {

        let block = (
            <ul>
                {this.state.list.map((item) =>
                    <li
                        key={item.toString()}
                    >
                        {item}
                    </li>
                )}
            </ul>
        );
        return (
            block
        );
    }
}


export default List;