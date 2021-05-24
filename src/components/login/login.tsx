import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input} from "../COMMON/FormsControl/FormsControl";
import {maxLenght, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreater} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {StoreStateType} from "../../redux/StoreRedux";

export const Login = (props: any) => {
    const onSumbit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) return <Redirect to={"/profile"}/>
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSumbit}/>
    </div>
}


const maxLenghtCreater = maxLenght(50)
const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
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
                       validate={[requiredField, maxLenghtCreater]}/> remember me
            </div>
            <div>
                <button>Lodin</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'Login'
})(LoginForm)


const mapStateToProps=(state:StoreStateType)=>({
    isAuth: state.auth.isAuth
})
export const LoginConteiner = connect(
    mapStateToProps,
    {
        login: loginThunkCreater
    })(Login)
