import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  {AppNew} from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/StoreRedux";
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter} from "react-router-dom";


    ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <AppNew/>
    </BrowserRouter>
</Provider>,
        document.getElementById('root')
    );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
