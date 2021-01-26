// Startup point for the client side application

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

const root = document.querySelector('#root');
ReactDOM.hydrate(<Home />, root);
