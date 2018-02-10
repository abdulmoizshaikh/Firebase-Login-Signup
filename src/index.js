import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterComp from './RouterComp';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import firebase from 'firebase';

  // Initialize Firebase
  var config = {
  };
  firebase.initializeApp(config);

  
ReactDOM.render(
    <Provider store={store}>
            <RouterComp />
    </Provider>,
    document.getElementById('root'));

    
registerServiceWorker();
