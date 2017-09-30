import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(
    <Main/>
, document.getElementById('root'));
registerServiceWorker();
