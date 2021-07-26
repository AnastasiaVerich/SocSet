import React from "react";
import style from './OneMessage.module.css'


type SmsType = {
    massageText: string
    authorazedUserId: any
    senderId: any

}


export const OneMessage = (props: SmsType) => {
    return (<div >
            {props.authorazedUserId === props.senderId
                ? <div className={`${style.container} ${style.smsMy}`}><div className={style.sms} >
                    <b>{props.massageText}</b>
                </div>
            </div>
                : <div className={`${style.container} ${style.smsOther}`}><div className={style.sms}>
                    {props.massageText}
                </div> </div>}
        </div>
    )
}


