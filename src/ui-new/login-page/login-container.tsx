import React from "react";
import {StoreStateType} from "../../BLL/store";
import {loginTC} from "../../BLL/Reducers/authorization-reducer";
import {connect} from "react-redux";
import {Login} from "./login";

const mapStateToProps = (state: StoreStateType) => ({
    isAuth: state.auth.isAuthorization,
    captcha: state.auth.captchaURl
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        login: (email: string, password: string, rememberMe: boolean, captcha: any) => {
            dispatch(loginTC(email, password, rememberMe, captcha))
        }
    }
}

export const LoginContainer = connect(
    mapStateToProps, mapDispatchToProps)(Login)