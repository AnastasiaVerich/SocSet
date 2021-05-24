import React from 'react';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {Route} from "react-router-dom"
import {News} from "./components/News/News";
import {Setting} from "./components/Setting/Setting";
import {Music} from "./components/Music/Music";
import {UsersContainer} from "./components/Users/UsersConteiner";
import { ProfileConteinerConnect} from "./components/Profile/ProfoleConteiner";
import {HeaderConteiner} from "./components/Header/HeaderConteiner";
import {Login, LoginConteiner} from './components/login/login';
import DialogsConteiner from "./components/Dialog/DialogCONTEINER";




function App() {

    return (
            <div className='app-wrapper'>
                <HeaderConteiner/>
                <Nav/>
                <div className='app-wrap-cont'>
                    <Route path='/profile/:userID?'
                           render={() => <ProfileConteinerConnect   />}
                    />
                    <Route path='/dialogs'
                           render={() => <DialogsConteiner />}
                    />
                    <Route path='/news'
                           render={() => <News/>}
                    />
                    <Route path='/music'
                           render={() => <Music/>}
                    />
                    <Route path='/findUsers'
                           render={() => <UsersContainer/>}
                    />
                    <Route path='/setting'
                           render={() => <Setting/>}
                    />
                    <Route path='/login'
                           render={() => <LoginConteiner/>}
                    />
                </div>
            </div>
    );
}

export default App;
