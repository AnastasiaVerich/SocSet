import React from "react";
import {OneMessage} from "./OneMessage/OneMessage";
import style from "./messages.module.css"
type MessagesType = {
    messages: any
    authorizationUserId: any
}
 export const Messages = (props: MessagesType) => {
    return (<div className={style.block}>
            {props.messages.map((element: any) =>
                <div>
                    <div key={element.id}>
                        <OneMessage massageText={element.body} authorazedUserId={props.authorizationUserId}
                                    senderId={element.senderId}/>
                    </div>
                </div>)
            }
        </div>
    )
}