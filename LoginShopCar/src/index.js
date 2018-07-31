import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import store from './store/store.js';
import config from './router/router.config';
import Route from './router/router';

ReactDom.render(<Provider store={store}><Router><Route routes={config.routes}></Route></Router></Provider>,document.getElementById('root'));

