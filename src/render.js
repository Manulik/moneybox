import React from 'react';
import {ReactDOM, render} from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addAim } from './redux/state';

export let rerenderEntireTree = (state) => {
    render(
        <App state={ state } addAim={ addAim } />,
        document.getElementById('root')
    );
}


// serviceWorker.unregister();