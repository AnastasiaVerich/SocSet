import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {createFormField, Input} from "../Common/FormsControl/FormsControl";
import {maxLength, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../../BLL/Reducers/authorization-reducer";
import {Redirect} from "react-router-dom";
import {StoreStateType} from "../../../BLL/store";
import s from "../Common/FormsControl/forms.module.css"
import {Grid, IconButton, Typography} from "@material-ui/core";
import style from "./login.module.css"

//login-form.tsx
const maxLengthValidator = maxLength(50)
const LoginForm = ({handleSubmit, error, x}: any) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       component={Input}
                       name={"email"}
                       validate={[requiredField, maxLengthValidator]}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       component={Input}
                       name={"password"}
                       validate={[requiredField, maxLengthValidator]}/>
            </div>
            <div>
                <Field type={"checkbox"}
                       component={Input}
                       name={"rememberMe"}
                       validate={[maxLengthValidator]}/> Remember me
            </div>
            {x && <img src={x}/>}

            {x && createFormField("captcha URl", "captcha", [], Input, {})}

            {error && <div className={s.formSunnierError}>
                {error}
            </div>}
            <div>
                <IconButton type='submit' color="primary">Login</IconButton>
            </div>
        </form>

    )
}
// like a login.tsx
export const Login = (props: any) => {
    const onSubmit = (formData: any) => {

        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) return <Redirect to={"/profile"}/>
    return <div className={style.block}>
        <div className={style.container}>
            <div className={style.another}>another</div>
            <div className={style.login} >
                <Typography variant="h4">
                    Login
                </Typography>
                <LoginReduxForm onSubmit={onSubmit} x={props.captcha}/>
            </div>
        </div>
    </div>
}

//login-form.tsx
const LoginReduxForm: any = reduxForm({
    form: 'Login'
})(LoginForm)

//login-container.tsx
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
