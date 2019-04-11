import React, { Component}  from 'react';
import {NavLink} from "react-router-dom";

class List extends Component {
    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            list: props.list,
            active: false,
        };
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({active: !currentState});
    };

    render() {

        let block = (
            <div className={`Slide-menu ${this.state.active ? 'is-active' : null}`}>
                <ul>
                    {this.state.list.map((item) =>
                        <li
                            key={item.name.toString()}
                        >
                            <NavLink to={item.path}>{item.name}</NavLink>

                        </li>
                    )}
                </ul>
                <MenuButton toggleClass={this.toggleClass}/>
            </div>
        );
        return (
            block
        );
    }
}

class MenuButton extends Component {
    render() {
        return (
            <button onClick={this.props.toggleClass}
                    className={`Menu-btn`}
                    type="button">
                        <span className="Menu-btn__block">
                            <span className="Menu-btn__inner"></span>
                        </span>
            </button>
        );
    };
}

export default List;