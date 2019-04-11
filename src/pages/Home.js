import React, { Component } from 'react';
import DataList from "../components/DataList";

const dataUrl = 'https://raw.githubusercontent.com/azat-co/react-quickly/master/ch05/users/real-user-data.json';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="Page">
                <DataList data-url={dataUrl} title={'User data list'}/>
            </div>
        );
    }
}

export default Home;