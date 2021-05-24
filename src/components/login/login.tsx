import React from 'react'
import  {Field, reduxForm } from 'redux-form'
import {Input} from "../COMMON/FormsControl/FormsControl";
import {maxLenght, requiredField} from "../../utils/validators/validators";

export const Login = () => {
const onSumbit =(formData: any)=>{
    console.log(formData)
}

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSumbit}/>
    </div>
}
const maxLenghtCreater=maxLenght(10)
const LoginForm=(props:any)=>{
    console.log("ren")
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                       component={Input}
                       name={"Login"}
                       validate={[requiredField, maxLenghtCreater]}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       component={Input}
                       name={"Password"}
                       validate={[requiredField, maxLenghtCreater]}/>
            </div>
            <div>
                <Field type={"checkbox"}
                       component={Input}
                       name={"remember me"}
                       validate={[requiredField, maxLenghtCreater]}/> remember me
            </div>
            <div>
                <button>Lodin</button>
            </div>


        </form>
    )
}

const LoginReduxForm=reduxForm({
    form: 'Login'
})(LoginForm)
