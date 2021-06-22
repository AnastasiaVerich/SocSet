import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ProfileReducer} from "./Reducers/profile-reducer";
import {UsersReducer} from "./Reducers/users-reducer";
import {AuthorizationReducer} from "./Reducers/authorization-reducer";
import thunkMiddlewere from "redux-thunk";//thunk as thunkMiddleWere
import  {reducer as formReducer} from 'redux-form'
import {AppReducer} from "./Reducers/app-reducer";
import {dialogReducer} from "./Reducers/dialogs-reducer";


export const reducers = combineReducers(
    {
        profile: ProfileReducer,
        dialog: dialogReducer,
        usersPage: UsersReducer,
        auth: AuthorizationReducer,
        form: formReducer,
        app: AppReducer
    }
)

export type StoreStateType = ReturnType<typeof reducers>

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddlewere)));

// @ts-ignore
window.store = store



