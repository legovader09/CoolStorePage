import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const endpoint = 'https://fakestoreapi.com/products/';

ReactDOM.render(
  <App endpoint={endpoint} />,
  document.getElementById('root')
);


reportWebVitals();
