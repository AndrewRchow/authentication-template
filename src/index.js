import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Firebase, { FirebaseContext } from './components/Firebase/Index';


ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>
    , document.getElementById('root')
);

//https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/
serviceWorker.unregister();

