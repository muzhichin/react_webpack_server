import './styles/index.scss'
import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from "react-router-dom";
import {createBrowserHistory} from "history";

import App from './containers/App';

ReactDOM.render((
        <Router history={createBrowserHistory()}>
            <App />
        </Router>
), document.getElementById('root'));