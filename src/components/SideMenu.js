import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

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
                        key={item.name.toString()}
                    >
                        <NavLink to={item.path}>{item.name}</NavLink>

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