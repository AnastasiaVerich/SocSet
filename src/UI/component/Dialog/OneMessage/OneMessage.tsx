import React from "react";
import S from './OneMessage.module.css'


type SmsType = {
    massageText: string
}


export const OneMessage = (props: SmsType) => {

    return (
        <div className={S.sms}>
            {props.massageText}
        </div>
    )
}


