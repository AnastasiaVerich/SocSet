import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppContainer} from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./BLL/StoreRedux";
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter} from "react-router-dom";

// BrowserRouter добовляет
// Provider добовляет store в контекст, из которого все компаненты могут брать данные ( наприер стор, тема темная/светлая, язык)
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
