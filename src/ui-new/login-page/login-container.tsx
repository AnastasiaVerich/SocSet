import {StoreStateType} from "../../BLL/store";
import {connect} from "react-redux";
import {Login} from "./login";
import {login} from "../../BLL/Reducers/auth-watcher";

const mapStateToProps = (state: StoreStateType) => ({
    isAuth: state.auth.isAuthorization,
    captcha: state.auth.captchaURl
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        login: (email: string, password: string, rememberMe: boolean, captcha: any) => {
            dispatch(login(email, password, rememberMe, captcha))
        }
    }
}

export const LoginContainer = connect(
    mapStateToProps, mapDispatchToProps)(Login)