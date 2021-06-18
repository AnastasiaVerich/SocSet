import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {createFormField, Input} from "../Common/FormsControl/FormsControl";
import {maxLenght, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreater} from "../../../BLL/auth-reducer";
import {Redirect} from "react-router-dom";
import {StoreStateType} from "../../../BLL/StoreRedux";
import style from "../Common/FormsControl/forms.module.css"
import {Button, Grid, IconButton, Typography} from "@material-ui/core";


const maxLenghtCreater = maxLenght(50)
const LoginForm = ({handleSubmit, error, x }: any) => {

    console.log(x)
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       component={Input}
                       name={"email"}
                       validate={[requiredField, maxLenghtCreater]}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       component={Input}
                       name={"password"}
                       validate={[requiredField, maxLenghtCreater]}/>
            </div>
            <div>
                <Field type={"checkbox"}
                       component={Input}
                       name={"rememberMe"}
                       validate={[ maxLenghtCreater]}/> Remember me
            </div>
            {x && <img src={x}/>}

            {x && createFormField("captcha URl","captcha", [], Input, {})}

            {error && <div className={style.formSunneryError}>
                {error}
            </div>}
            <div>
                <IconButton   type='submit' color="primary">Login</IconButton>
            </div>
        </form>
    )
}

export const Login = (props: any) => {
    const onSumbit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)

    }
    if (props.isAuth) return <Redirect to={"/profile"}/>
    return <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
        >
        <Typography variant="h4">
            Login
        </Typography>
        <LoginReduxForm onSubmit={onSumbit}  x={props.captcha} />
    </Grid>
}


const LoginReduxForm: any = reduxForm({
    form: 'Login'
})(LoginForm)

const mapStateToProps = (state: StoreStateType) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captchaURl
})
export const LoginConteiner = connect(
    mapStateToProps,
    {
        login: loginThunkCreater
    })(Login)
