import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogReducerr} from "./DialogsReducer";
import {SideBar} from "./SideBarReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./auth-reducer";



export const reduses =combineReducers(

    {
        profile: ProfileReducer,
        dialog: DialogReducerr,
        sidebar: SideBar,
        usersPage: UsersReducer,
        auth: AuthReducer
    }
)

export type StoreStateType= ReturnType<typeof reduses>

export let store=createStore(reduses);

// @ts-ignore
window.store=store



