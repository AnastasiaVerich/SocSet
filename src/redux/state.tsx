import React from "react";
import {appStateType} from "../App";

let renderTree = () => {
    console.log("hello")
}


type storeType = {
    _state: appStateType
    _addPost: any
    changeTextInTextArea: any
    sendMessage: any
    changeTextInTextAreaMessage: any
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
        }
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        renderTree = observer
        console.log("10")
    },

    _addPost() {
        this._state.profile.postsDataArray.push(
            {
                id: 4,
                post: this._state.profile.textInTextArea,
                likeCount: 10
            }
        )
        this._state.profile.textInTextArea = ""
        renderTree();
    },
    changeTextInTextArea(sms: string) {
        this._state.profile.textInTextArea = sms;
        renderTree();
        console.log(2)
    },

    sendMessage() {
        this._state.dialog.smsData.push(
            {
                id: 5,
                sms: this._state.dialog.textInTextArea
            }
        )
        this._state.dialog.textInTextArea = ""
        renderTree();
    },
    changeTextInTextAreaMessage(s: string) {
        this._state.dialog.textInTextArea = s;
        renderTree();
    },

    dispatch(action: ActionType) {
        switch (action.type) {
            case addPost:{
                   this._addPost();
            }; break;
            case  "changeTextInTextArea":{

                this._state.profile.textInTextArea = action.sms;
                renderTree();
                console.log(2)

            }break;
            case  "sendMessage":{

                this._state.dialog.smsData.push(
                    {
                        id: 5,
                        sms: this._state.dialog.textInTextArea
                    }
                )
                this._state.dialog.textInTextArea = ""
                renderTree();

            }break;
            case  "changeTextInTextAreaMessage":{

                this._state.dialog.textInTextArea = action.sms;
                renderTree();
            }break;


        }

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



