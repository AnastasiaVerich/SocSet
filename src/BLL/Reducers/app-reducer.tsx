import {getAuthorizationDataTC} from "./authorization-reducer";

const SET_INITIALIZED = "SET_INITIALIZED"

//type for Reduces
type InitializedType = {
    type: "SET_INITIALIZED"
}

//type for Action
type ActionType = InitializedType

//initial State
type StateType = {
    initialized: boolean
}
let initialState: StateType = {
    initialized: false
}

export const AppReducer = (state: StateType = initialState, action: ActionType): StateType => {
    if (state) {
        switch (action.type) {
            case SET_INITIALIZED:{
                return {
                    ...state,
                    initialized: true
                }
            }
            default:
                return state;
        }
    }
    else return state
}

//Thunk Creator
export const initializeTC = () => (dispath: any) => {
   let promise= dispath(getAuthorizationDataTC());
    Promise.all([promise]).then(()=>{
        dispath(initializedSuccessAC());
    })
}

// Action Creator
export const initializedSuccessAC = (): InitializedType => ({type: SET_INITIALIZED})


