import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogReducerr} from "./DialogsReducer";
import {SideBar} from "./SideBarReducer";
import {UsersReducer} from "./UsersReducer";



let reduses =combineReducers(

    {
        profile: ProfileReducer,
        dialog: DialogReducerr,
        sidebar: SideBar,
        usersPage: UsersReducer
    }
)

export let store=createStore(reduses);



