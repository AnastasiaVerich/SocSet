import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogReducerr} from "./DialogsReducer";
import {SideBar} from "./SideBarReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./auth-reducer";
import thunkMiddlewere from "redux-thunk";//thunk as thunkMiddleWere
import reducer, {reducer as formReducer} from 'redux-form'
import {AppReducer} from "./AppReducer";


export const reducers = combineReducers(
    {
        profile: ProfileReducer,
        dialog: DialogReducerr,
        sidebar: SideBar,
        usersPage: UsersReducer,
        auth: AuthReducer,
        form: formReducer,
        app: AppReducer
    }
)

export type StoreStateType = ReturnType<typeof reducers>

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
export const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddlewere)));

//export let store = createStore(reduses, applyMiddleware(thunkMiddlewere));

// @ts-ignore
window.store = store



