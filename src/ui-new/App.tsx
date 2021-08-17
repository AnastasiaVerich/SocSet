import React from 'react';
import s from "./app.module.scss"
import {Route, Switch} from "react-router-dom";
import {Login} from "./login-page/login";
import {Profile} from "./profile-page/profile";
import {Messages} from "./messages-page/messages";
import {Users} from "./users-page/users";
import {Header} from "./header/header";
import {Nav} from "./nav/nav";


export const App = () => {
    return (<div className={s.block}>
            <Header/>
            <div className={s.container}>
                <Nav/>
                <Switch>
                    <Route path='/profile'
                           render={() => <Profile/>}/>
                    <Route path='/messages'
                           render={() => <Messages/>}/>
                    <Route path='/users'
                           render={() => <Users/>}/>
                    <Route path='*'
                           render={() => <Login/>}
                    />

                </Switch>
            </div>
        </div>

    );
}
