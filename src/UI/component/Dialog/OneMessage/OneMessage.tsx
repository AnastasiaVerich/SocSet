import React from "react";
import S from './OneMessage.module.css'


type SmsType = {
    massageText: string
    authorazedUserId: any
    senderId: any

}


export const OneMessage = (props: SmsType) => {
    console.log("отправила"+props.senderId)
    console.log("мой айди"+props.authorazedUserId)
    return (<>
            {props.authorazedUserId === props.senderId
                ? <div className={S.sms}>
                    Я написала {props.massageText}
                </div>
                : <div className={S.sms}>
                    Мне написали{props.massageText}
                </div>}
        </>
    )
}


