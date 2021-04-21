import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogReducerr} from "./DialogsReducer";
import {SideBar} from "./SideBarReducer";



let reduses =combineReducers(

    {
        profile: ProfileReducer,
        dialog: DialogReducerr,
        sidebar: SideBar
    }
)

export let store=createStore(reduses);
