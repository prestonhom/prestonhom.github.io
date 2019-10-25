import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { HashRouter as Router, Route } from 'react-router-dom';
ReactDOM.render(
  <Router basename="/">
  <App />
  </Router>,
  document.getElementById('root')
);
