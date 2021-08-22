import React from 'react';
import style from './forms.module.css'
import {Field} from "redux-form";

export const Textarea = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return <div  className={style.formControl + " " + (hasError ? style.error : "")}>
        <textarea {...input} {...props}/>
        <div>
            {hasError && <span>{meta.error}</span>}
        </div>
    </div>
}
export const Input = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return <div className={style.formControl + " " + (hasError ? style.error : "")}>
        <input {...input} {...props}/>
        <div>
            {hasError && <span>{meta.error}</span>}
        </div>
    </div>
}
export const Form = ({input, meta, el, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return <div className={style.formControl + " " + (hasError ? style.error : "")}>
        <props.el {...input} {...props}/>
        <div>
            {hasError && <span>{meta.error}</span>}
        </div>
    </div>
}

export const createFormField = (placeholder: any, name: any, validator: any, component: any, props = {}, text = "") => (
    <>
        <Field placeholder={placeholder}
               name={name}
               validate={validator}
               component={component}
               {...props}/> {text}
    </>
)
