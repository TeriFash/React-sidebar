import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SideMenu from './components/SideMenu';
import MenuList from './data/MenuItems';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Error from './pages/Error';
import './style/App.scss';

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
                <nav className={`Slide-menu ${this.state.active ? 'is-active': null}`}>
                    <SideMenu list={MenuList}/>
                    <button onClick={this.toggleClass} className={`Menu-btn ${this.state.active ? 'is-active': null}`} type="button" aria-label="Menu" aria-controls="navigation">
                        <span className="Menu-btn__block">
                            <span className="Menu-btn__inner"></span>
                        </span>
                    </button>
                </nav>

                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} />
                        <Route path="/services" component={Services} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/contacts" component={Contacts} />
                        <Route component={Error} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}


export default App;
