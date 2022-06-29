import './App.css';
import { Component } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8082'
})

class GroterOnderdeel extends Component {
    constructor() {
        super();
        api.get('/felixallemaaltijden')
            .then(res => {
                console.log(res.data);
            })
        this.state = {voornaam:''};
        this.verwerkHandeling = this.verwerkHandeling.bind(this);
    }

    verwerkHandeling(event) {
        this.setState({ voornaam: event.target.value });
    }
    render() {
        return <div>
            Voornaam: <input type="text" value={this.state.voornaam} onChange={this.verwerkHandeling} />
            <br />
            Checkstaat: {this.state.voornaam}
        </div>
    }
}

export default GroterOnderdeel;