import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogReducerr} from "./DialogsReducer";
import {SideBar} from "./SideBarReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./auth-reducer";
import thunkMiddlewere from "redux-thunk";//thunk as thunkMiddleWere
import {reducer as formReducer} from 'redux-form'


export const reduses = combineReducers(
    {
        profile: ProfileReducer,
        dialog: DialogReducerr,
        sidebar: SideBar,
        usersPage: UsersReducer,
        auth: AuthReducer,
        form: formReducer
    }
)

export type StoreStateType = ReturnType<typeof reduses>

export let store = createStore(reduses, applyMiddleware(thunkMiddlewere));

// @ts-ignore
window.store = store



