import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, NavLikn } from 'react-router-dom';
import Routerjsx from './route/router.jsx';
import config from './route/router.config.js';
import store from './store/store';
import { Provider } from 'react-redux';

ReactDom.render(<Provider store={store}><Router><Routerjsx routes={config.routes}></Routerjsx></Router></Provider>,document.getElementById('root'))