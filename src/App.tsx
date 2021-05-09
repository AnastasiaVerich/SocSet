import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom"
import {News} from "./components/News/News";
import {Setting} from "./components/Setting/Setting";
import {DialogsConteiner} from "./components/Dialog/DialogCONTEINER";
import {Music} from "./components/Music/Music";
import {UsersContainer} from "./components/Users/UsersConteiner";


/*export type appStateType = {
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
    sidebar: any
}*/

function App() {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrap-cont'>
                    <Route path='/profile'
                           render={() => <Profile   />}
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
                </div>
            </div>
    );
}

export default App;
