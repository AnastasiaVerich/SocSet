import React from "react";
import {appStateType} from "../App";
import {ProfileReducer} from "./ProfileReducer";
import {SideBar} from "./SideBarReducer";
import {DialogReducerr} from "./DialogsReducer";

let renderTree = () => {
    console.log("hello")
}


type storeType = {
    _state: appStateType
    subscribe: any
    getState: any
    dispatch: any

}

type ActionType={
    type:string
    sms?: any
}

let store: storeType = {
    _state: {
        profile: {
            textInTextArea: "hh",
            postsDataArray: [
                {
                    id: 1,
                    post: "Приветики??",
                    likeCount: 1
                },
                {
                    id: 2,
                    post: "Ребята аууу...",
                    likeCount: 0
                },
                {
                    id: 3,
                    post: "Это мой первый пост!",
                    likeCount: 1200
                }
            ]
        },
        dialog: {
            textInTextArea: "123",
            smsData: [
                {
                    id: 1,
                    sms: "Hi"
                },
                {
                    id: 2,
                    sms: "How are u?"
                },
                {
                    id: 3,
                    sms: "GOOOOODDD!"
                },
                {
                    id: 4,
                    sms: "lol!"
                }
            ],
            dialogUsersArray: [
                {
                    idLink: 1,
                    name: 'Anastasia'
                },
                {
                    idLink: 2,
                    name: 'Ruslan'
                },
                {
                    idLink: 3,
                    name: 'Veronica'
                },
                {
                    idLink: 4,
                    name: 'Maxim'
                },
                {
                    idLink: 5,
                    name: 'Dima'
                }
            ]
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    subscribe(observer: any) {
        renderTree = observer
        console.log("10")
    },
    dispatch(action: ActionType) {
        this._state.profile= ProfileReducer(this._state.profile, action)
        this._state.dialog= DialogReducerr(this._state.dialog, action)
        this._state.sidebar= SideBar(this._state.profile, action)
        renderTree()

    }
}
const addPost="Add-post"
export  const addPostAction=()=>{

    return{
        type: addPost
    }
}

export const changeTextInTextAreaAction=(text: any)=>{
    return{
        type:"changeTextInTextArea",
        sms: text
    }
}

export default store



