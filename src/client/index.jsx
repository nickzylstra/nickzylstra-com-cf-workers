import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const localhost = 'http://localhost:3000';
const hostedURL = 'https://www.nickzylstra.com/';
const { origin } = window.location;
const host = (origin && !origin.includes('localhost')) ? hostedURL : localhost;
if (host === localhost) {
  // eslint-disable-next-line no-console
  console.log(`using ${localhost} for API server since client loaded at 'localhost'`);
}

ReactDOM.render((<App host={host} />), document.getElementById('root'));
