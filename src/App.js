import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
                    <main>
                    <Route render={({location}) => (
                        <TransitionGroup
                        >
                            <CSSTransition
                                key={location.key}
                                in={true}
                                apper={true}
                                classNames='fade'
                                timeout={600}
                                >
                                <Switch location={location}>
                                    <Route path="/" component={Home} exact />
                                    <Route path="/about" component={About} />
                                    <Route path="/services" component={Services} />
                                    <Route path="/projects" component={Projects} />
                                    <Route path="/contacts" component={Contacts} />
                                    <Route component={Error} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )} />
                </main>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
