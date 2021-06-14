import React from "react";
import {Redirect} from "react-router-dom";
import {StoreStateType} from "../../BLL/StoreRedux";
import {connect} from "react-redux";

let mapStateTopropsRedirect=(state:StoreStateType):any=>{
    return{

        isAuth: state.auth.isAuth
    }
}

// хуки для переиспользования кода.
export const WithAuthRedirect=(Component:any)=>{

    const RedirectComponent=(props:any)=>{

            { if(props.isAuth===false) return <Redirect to={"/login"}/>
                return <Component {...props}/>
            }
    }


    const ConectRedirectComponent=connect(mapStateTopropsRedirect)(RedirectComponent)


    return ConectRedirectComponent;

}