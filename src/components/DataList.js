import React, { Component } from 'react';


class DataList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currency: []
        }

    }

    componentDidMount() {
        fetch(this.props['data-url'])
            .then((response) => response.json())
            .then((currency) => this.setState({currency: currency}))
    }

    render() {
        return <div className="DataList grid">
            <h1>{this.props.title}</h1>
            <table>
                <tbody>{this.state.currency.map((item) =>
                    <tr key={item.timestamp}>
                        <td>{item.first_name} {item.last_name}</td>
                        <td> {item.email}</td>
                        <td> {item.ip_address}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    }
}


export default DataList;