import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function verwerkInfo(mijnobject) {
  return `${mijnobject.hoogte} bij ${mijnobject.breedte} ${mijnobject.eenheid}`;
}

const verzinmaar = {
  hoogte: 10,
  breedte: 15,
  eenheid: 'meter'
};



root.render(
  <h1>
  Info: {verwerkInfo(verzinmaar)}!
</h1>
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

reportWebVitals();
