import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {createFormField, Input} from "../Common/FormsControl/FormsControl";
import {maxLength, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../../BLL/Reducers/authorization-reducer";
import {Redirect} from "react-router-dom";
import {StoreStateType} from "../../../BLL/store";
import style from "../Common/FormsControl/forms.module.css"
import {Grid, IconButton, Typography} from "@material-ui/core";
import {Dispatch} from "redux";
import {DispatchTypePosts} from "../Profile/MyPost/MyPosts";
import {addPostAC, deletePostAC} from "../../../BLL/Reducers/profile-reducer";


const maxLengthValidator = maxLength(50)
const LoginForm = ({handleSubmit, error, x}: any) => {
    console.log(error)
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

            {error && <div className={style.formSunnierError}>
                {error}
            </div>}
            <div>
                <IconButton type='submit' color="primary">Login</IconButton>
            </div>
        </form>
    )
}

export const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        debugger
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) return <Redirect to={"/profile"}/>
    return <Grid container
                 direction="column"
                 justify="center"
                 alignItems="center">
        <Typography variant="h4">
            Login
        </Typography>
        <LoginReduxForm onSubmit={onSubmit} x={props.captcha}/>
    </Grid>
}


const LoginReduxForm: any = reduxForm({
    form: 'Login'
})(LoginForm)

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
