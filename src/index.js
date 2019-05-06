import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/
serviceWorker.unregister();
