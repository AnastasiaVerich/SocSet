import React from "react";
import {appStateType} from "../App";

let renderTree = () => {
    console.log("hello")
}

type storeType = {
    state: appStateType
    addPost: any
    changeTextInTextArea: any
    sendMessage: any
    changeTextInTextAreaMessage: any
    subscribe: any
    getState: any
}

let store: storeType = {
    state: {
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
    addPost(){
        this.state.profile.postsDataArray.push(
            {
                id: 4,
                post: this.state.profile.textInTextArea,
                likeCount: 10
            }
        )
        this.state.profile.textInTextArea = ""
        renderTree();
    },
    changeTextInTextArea (sms: string){
        this.state.profile.textInTextArea = sms;
        renderTree();
        console.log(2)
    },
    sendMessage () {
        this.state.dialog.smsData.push(
            {
                id: 5,
                sms: this.state.dialog.textInTextArea
            }
        )
        this.state.dialog.textInTextArea = ""
        renderTree();
    },
    changeTextInTextAreaMessage (s: string) {
        this.state.dialog.textInTextArea = s;
        renderTree();
        console.log(1)
    },
    subscribe (observer: any) {
        renderTree = observer
    },
    getState(){
        return this.state
    }

}

export default store



