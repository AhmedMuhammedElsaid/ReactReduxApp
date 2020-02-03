import React from 'react';
import ReactDom from 'react-dom'
import App from './Components/App'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reminder from './Components/rootReducer/index'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const store = createStore(reminder);
ReactDom.render(
    <Provider store={store}> <App/> </Provider>,
    document.getElementById('root')
);