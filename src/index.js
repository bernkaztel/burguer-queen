import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import './css/style.css';
import './css/grid.css';
import {BrowserRouter} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"




ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
