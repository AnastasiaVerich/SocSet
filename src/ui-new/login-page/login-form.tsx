import React from 'react'
import {Field, reduxForm} from "redux-form";
import {createFormField, Input} from "../../UI/component/Common/FormsControl/FormsControl";
import {maxLength, requiredField} from "../../UI/utils/validators/validators";
import s from "./login-form.module.scss";
import {IconButton} from "@material-ui/core";

const maxLengthValidator = maxLength(50)

const LoginForm = ({handleSubmit, error, x}: any) => {
    return (
        <form onSubmit={handleSubmit} className={s.loginForm}>
                <Field placeholder={"Email"}
                       component={Input}
                       name={"email"}
                       validate={[requiredField, maxLengthValidator]}
                       props={{ className: s.input }}/>

                <Field placeholder={"Password"}
                       component={Input}
                       name={"password"}
                       validate={[requiredField, maxLengthValidator]}
                       props={{ className: s.input }}/>
            <div className={s.rememberMe}>
                <Field type={"checkbox"}
                       component={Input}
                       name={"rememberMe"}
                       validate={[maxLengthValidator]}
                       props={{ className: s.checkbox }}/> Remember
            </div>
            {x && <img className={s.captcha} src={x}/>}

            {x && createFormField("captcha URl", "captcha", [], Input, {className: s.input})}

            {error && <div className={s.formSunnierError}>
                {error}
            </div>}

                <button className={s.button} type='submit' color="primary">Login</button>

        </form>

    )
}
 export const LoginReduxForm: any = reduxForm({
    form: 'Login'
})(LoginForm)