import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogReducerr} from "./DialogsReducer";
import {SideBar} from "./SideBarReducer";
import {UsersReducer} from "./UsersReducer";



export const reduses =combineReducers(

    {
        profile: ProfileReducer,
        dialog: DialogReducerr,
        sidebar: SideBar,
        usersPage: UsersReducer
    }
)

export type StoreStateType= ReturnType<typeof reduses>

export let store=createStore(reduses);

// @ts-ignore
window.store=store



