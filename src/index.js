import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const namen = ["Fred","Joost","Karin","Maria"];
let teller = 0;

function naamWisselen() {

  teller++;
  if(teller >= namen.length){
    teller = 0;
  }

  const element = (
    <div>
      <h1>Hey, Kijk!</h1>
      <h2>It is: {namen[teller]}!</h2>
    </div>
  );

  root.render(element);

}

setInterval(naamWisselen, 1000);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

reportWebVitals();
