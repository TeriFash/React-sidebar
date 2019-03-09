import React, {Component} from 'react';
import './App.css';
import SideMenu from './components/SideMenu';
import MenuList from './data/MenuItems';

class App extends Component {
    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            active: false,
        };
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
            <div className="App">
                <nav className={`Slide-menu ${this.state.active ? 'isActive': null}`}>
                    <SideMenu list={MenuList}/>
                    <button onClick={this.toggleClass} className={`menu-btn ${this.state.active ? 'is-active': null}`} type="button" aria-label="Menu" aria-controls="navigation">
                        <span className="menu-btn__block">
                            <span className="menu-btn__inner"></span>
                        </span>
                    </button>
                </nav>
            </div>
        );
    }
}


export default App;
