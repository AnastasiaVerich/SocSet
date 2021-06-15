import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {SideBar} from "./SideBarReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./auth-reducer";
import thunkMiddlewere from "redux-thunk";//thunk as thunkMiddleWere
import  {reducer as formReducer} from 'redux-form'
import {AppReducer} from "./AppReducer";
import {dial2Reducer} from "./dialogs-reducer";


export const reducers = combineReducers(
    {
        profile: ProfileReducer,
        dialog: dial2Reducer,
        sidebar: SideBar,
        usersPage: UsersReducer,
        auth: AuthReducer,
        form: formReducer,
        app: AppReducer
    }
)

export type StoreStateType = ReturnType<typeof reducers>

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddlewere)));

//export let store = createStore(reduses, applyMiddleware(thunkMiddlewere));

// @ts-ignore
window.store = store



