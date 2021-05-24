import React from 'react'
import  {Field, reduxForm } from 'redux-form'

export const Login = () => {
const onSumbit =(formData: any)=>{
    console.log(formData)
}

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSumbit}/>
    </div>
}

const LoginForm=(props:any)=>{
    console.log("ren")
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} component={"input"} name={"Login"}/>
            </div>
            <div>
                <Field placeholder={"Password"} component={"input"} name={"Password"}/>
            </div>
            <div>
                <Field type={"checkbox"}  component={"input"}  name={"remember me"}/> remember me
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
