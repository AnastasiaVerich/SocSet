import React from 'react'
import s from "./login.module.scss"
import {Redirect} from "react-router-dom";
import {LoginReduxForm} from "./login-form";
import {reset} from "redux-form";

export const Login = (props:any) => {
/*    в месте вызова нашей компоненты с окончательной «редаксовской формой» теперь нужно повесить
    произвольную функцию через onSubmit, которая соберет данные из полей из полей и обработает их при нажатии на кнопку:*/
    const onSubmit = (formData: any) => {
        console.log(formData)//здесь мы получаем данные с формы и будем из диспатчить потом
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
        // dispatch(reset("profileAddPostForm")) для очистки полей в форме, в кавычках имя формы
    }
    if (props.isAuth) return <Redirect to={"/profile"}/>

    const on= false;

    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.rightPart}>
                    <div className={s.pathContainer}>
                        <div className={s.firstText}>Join the club</div>
                        <div className={s.secondText}>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ut elit tellus, luctus.
                        </div>
                        <div className={s.oneAdvantage}>
                            <div className={s.icon}> ♥icon</div>
                            <div className={s.description}>
                                <div className={s.title}>Community</div>
                                <div className={s.desc}>At vero eos et accusamus et.</div>
                            </div>
                        </div>
                        <div className={s.oneAdvantage}>
                            <div className={s.icon}/>
                            <div className={s.description}>
                                <div className={s.title}>Online shop</div>
                                <div className={s.desc}>At vero eos et accusamus et.</div>
                            </div>
                        </div>
                        <div className={s.oneAdvantage}>
                            <div className={s.icon}/>
                            <div className={s.description}>
                                <div className={s.title}>Job search</div>
                                <div className={s.desc}>At vero eos et accusamus et.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.leftPart}>
                    <div className={s.pathContainer}>
                        <img  className={s.iconNetwork} src={"https://mythemestore.com/beehive-preview/wp-content/uploads/2020/07/logo-icon.svg"}/>
                        <div className={s.welcome}>Welcome</div>
                        <LoginReduxForm onSubmit={onSubmit} x={props.captcha}/>
                    </div>
                </div>

            </div>

        </div>
    )
}

