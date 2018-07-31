import React, { Fragment } from 'react';
import Routerjsx from './router/router.jsx';
import config from './router/router.config.js';
import ReactDom from 'react-dom';

import {
    HashRouter as Router,
    NavLink,
    HashHistory
} from 'react-router-dom'

ReactDom.render(<Router><Routerjsx routes = {config.routes}></Routerjsx></Router>,document.getElementById('root'))