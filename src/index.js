import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
// import * as serviceWorker from './serviceWorker';
import { rerenderEntireTree } from './render';

rerenderEntireTree(state);


// serviceWorker.unregister();
