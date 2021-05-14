import React from 'react';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {Route} from "react-router-dom"
import {News} from "./components/News/News";
import {Setting} from "./components/Setting/Setting";
import {DialogsConteiner} from "./components/Dialog/DialogCONTEINER";
import {Music} from "./components/Music/Music";
import {UsersContainer} from "./components/Users/UsersConteiner";
import { ProfileConteinerConnect} from "./components/Profile/ProfoleConteiner";
import {HeaderConteiner} from "./components/Header/HeaderConteiner";


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
                </div>
            </div>
    );
}

export default App;
