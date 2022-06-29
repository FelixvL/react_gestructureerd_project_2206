import './App.css';
import { Component } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL : 'http://localhost:8082'
})

class GroterOnderdeel extends Component {
    constructor(){
        super();
        api.get('/felixallemaaltijden')
        .then( res => {
            console.log(res.data);
        })
    }
  render() {
    return <div>
        GroterOnderdeel
    </div>
  }
}

export default GroterOnderdeel;