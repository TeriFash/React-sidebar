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
    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <SideMenu list={MenuList}/>
                    </nav>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} />
                        <Route path="/services" component={Services} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/contacts" component={Contacts} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
