import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Login} from "./login-page/login";
import {Profile} from "./profile-page/profile";
import {Messages} from "./messages-page/messages";
import {Users} from "./users-page/users";



export const App =()=> {
        return (

                        <Switch>
                            {/*<Route exact path='/'
                                   render={() => <Redirect to={'/login'}/>}/>
                            <Route path='/profile/:userID?'
                                   render={WithSuspenseHOC(ProfileConteinerConnect)}/>
                            <Route path='/dialogs/:userID?'
                                   render={WithSuspenseHOC(DialogsConteiner)}/>

                            <Route path='/findUsers'
                                   render={() => <UsersContainer/>}
                            />
                           */}

                            <Route path='/profile'
                                   render={() => <Profile/>} />
                            <Route path='/messages'
                                   render={() => <Messages/>} />
                            <Route path='/users'
                                   render={() => <Users/>} />
                            <Route path='*'
                                      render={() => <Login/>}
                        />

                        </Switch>

        );
    }
