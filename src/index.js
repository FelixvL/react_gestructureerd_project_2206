import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Opteller from './Opteller';
import GroterOnderdeel from './GroterOnderdeel';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <App  soortnaam="Eekhoorn"/>
    <App  soortnaam="Neushoorn"/>
    <App  soortnaam={"Cavia"}/>
    <Opteller spronggetal={4} />
    <Opteller spronggetal={3} />
    <GroterOnderdeel />
  </div>
);

