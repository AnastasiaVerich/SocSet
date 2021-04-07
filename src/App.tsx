import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialog/Dialog";
import {BrowserRouter, Route} from "react-router-dom"
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";


export type appStateType = {
    profile: {
        textInTextArea: string,
        postsDataArray: {
            id: number;
            post: string;
            likeCount: number;
        }[];
    };
    dialog: {
        textInTextArea: string
        smsData: {
            id: number;
            sms: string;
        }[];
        dialogUsersArray: {
            idLink: number;
            name: string;
        }[];
    };
}
export type AppType = {
    appState: appStateType
    store: any

}


function App(props: AppType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrap-cont'>
                    <Route path='/profile'
                           render={() => <Profile store={props.store}
                           />}
                    />
                    <Route path='/dialogs'
                           render={() => <Dialogs store={props.store}
                           />}
                    />
                    <Route path='/news'
                           render={() => <News/>}
                    />
                    <Route path='/music'
                           render={() => <Music/>}
                    />
                    <Route path='/setting'
                           render={() => <Setting/>}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
