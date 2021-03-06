import React, {useEffect, useState} from "react";
import s from "./selected-chat.module.scss";

export const SelectedChat = (props: any) => {
useEffect(()=>{
    let messageBody = document.querySelector('#messageBody');
    if (messageBody !== null) {
        messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
    }
    setPage(2)
},[props.recipientId])


    let [page, setPage] = useState(2)


    return (<div className={s.chatContainer} id="messageBody">
            {props.totalCount > props.messages.length
                ? <button  className={s.btn} onClick={() => {
                    props.selectedDialogMessages(props.recipientId, page, 20);
                    setPage(++page)
                }}>Загрузить еще</button>
                : <></>}

            {props.messages.map((element: any) =>
                <div key={element.id} className={s.chat}>
                    {props.authorizationUserId === element.senderId
                        ?
                        <div className={s.my}><p className={s.sms}>{element.body}</p></div>
                        :
                        <div className={s.friend}><p className={s.sms}>{element.body}</p>
                        </div>}
                </div>
            )}
        </div>
    )
}