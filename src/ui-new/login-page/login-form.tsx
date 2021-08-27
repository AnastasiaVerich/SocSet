import React from 'react'
import {Field, reduxForm} from "redux-form";
import s from "./login-form.module.scss";
import {createFormField, Input} from "../Common/FormsControl/FormsControl";
import {maxLength, requiredField} from "../utils/validators/validators";

const maxLengthValidator = maxLength(50)

const LoginForm = ({handleSubmit, error, x}: any) => {
    return (
        /*        В пропсах теперь нам очень много всего приходит после оборачивания компоненты с формой в HOC.
                В т.ч. метод handleSubmit, который позволяет не перезагружать страницу при отправке.*/
        <form onSubmit={handleSubmit} className={s.loginForm}>
            <Field placeholder={"Email"}
                   component={Input}
                   name={"email"}
                   validate={[requiredField, maxLengthValidator]}
                   props={{className: s.input}}/>
            {/*Все поля в форме меняем на компоненты Field, которые пришли к нам из библиотеки, с указанием component аналогично пропсам*/}
            <Field placeholder={"Password"}
                   component={Input}
                   name={"password"}
                   validate={[requiredField, maxLengthValidator]}
                   props={{className: s.input}}/>
            <div className={s.rememberMe}>
                <Field type={"checkbox"}
                       component={Input}
                       name={"rememberMe"}
                       validate={[maxLengthValidator]}
                       props={{className: s.checkbox}}/> Remember
            </div>
            {x && <img className={s.captcha} src={x}/>}

            {x && createFormField("captcha URl", "captcha", [], Input, {className: s.input})}

            {error && <div className={s.formSunnierError}>
                {error}
            </div>}

            <button className={s.button} type='submit'>Login</button>

        </form>

    )
}
//присвоили уникальное имя нашей новой форме в параметре – {form: 'login'}
export const LoginReduxForm: any = reduxForm({
    form: 'Login'
})(LoginForm)

// Теперь при вводе текста в форме в нашем стейте появляется временный объект login (имя нашей формы),
// который содержит много объектов, свойствами которых являются наши поля (берутся по name).
// Среди них объекты «было ли посещено поле», «было ли тронуто» и т.д.
//     А также объект values, где в свойства (берутся по name) попадает вводимый текст.
// можно вывести в консоль и посмотреть параметры, потом их использовать