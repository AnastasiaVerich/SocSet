import React from "react";
import {Redirect} from "react-router-dom";
import {StoreStateType} from "../../BLL/store";
import {connect} from "react-redux";

let mapStateToPropsRedirect = (state: StoreStateType): any => {
    return {
        isAuth: state.auth.isAuthorization
    }
}

// хуки для переиспользования кода.
export const WithAuthRedirect = (Component: any) => {

    const RedirectComponent = (props: any) => {
        if (props.isAuth === false) return <Redirect to={"/login"}/>
        return <Component {...props}/>
    }
    const ConnectRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
    return ConnectRedirectComponent;
}