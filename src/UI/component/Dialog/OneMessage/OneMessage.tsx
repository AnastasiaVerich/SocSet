import React from "react";
import S from './OneMessage.module.css'


type SmsType = {
    massageText: string
    authorazedUserId: any
    senderId: any

}


export const OneMessage = (props: SmsType) => {
    return (<>
            {props.authorazedUserId === props.senderId
                ? <div className={S.smsMy} >
                    <b>{props.massageText}</b>
                </div>
                : <div className={S.sms}>
                    {props.massageText}
                </div>}
        </>
    )
}


