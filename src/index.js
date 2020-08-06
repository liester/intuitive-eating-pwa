import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import './base-style.css'
import SignUp from "./SignUp";
import ResponsiveDrawer from "./ResponsiveDrawer";
import App from "./App";

const user = {}

ReactDOM.render(
    <React.StrictMode>
        {user?
            <ResponsiveDrawer>
                <App/>
            </ResponsiveDrawer>
            :
            <SignUp/> }
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
