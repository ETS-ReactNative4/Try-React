import React from 'react';
import ReactDOM from 'react-dom';
import App from './componets/app'
import registerServiceWorker from './registerServiceWorker';
import {} from "../node_modules/bootstrap/dist/css/bootstrap.css";
import {BrowserRouter} from "react-router-dom"

import { Provider } from 'react-redux'

import store from './redux/store/store';


ReactDOM.render(
    <BrowserRouter>  
    <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>,
    document.getElementById('root'));

registerServiceWorker();


