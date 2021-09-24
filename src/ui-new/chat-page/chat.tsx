import s from "./chat.module.scss";
import React, {useEffect, useState} from "react";
import {MessagesType} from "../../DAL/chat-api";
import {useDispatch, useSelector} from "react-redux";
import {sendMessagesThunk, startMessagesListening, stopMessagesListening} from "../../BLL/Reducers/chat-reducer";
import {StoreStateType} from "../../BLL/store";
import {FiSend} from "react-icons/all";


export const ChatPage = () => {
    return (
        <Chat/>
    )
}
export const Chat = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])
    return (<div className={s.block}>
            <div className={s.container}>
                <Messages/>
                <AddItemForm/>
            </div>
        </div>
    )
}

type wsChanaleType = {
    wsChanale: WebSocket | null
}

const Messages = () => {
    const messages = useSelector((state: StoreStateType) => state.chat.messages)
    return (

        <div className={s.chat}>
            {messages.map((m) => <div className={s.my}><p className={s.sms}>{m.message}</p></div>)}
        </div>

    )

}
const AddItemForm = () => {
    const [mes, setMes] = useState("")
    const [resdyStatus, setOresdyStatus] = useState<'ready' | "pending">('pending')

    const dispatch = useDispatch()

    const sendMessages = () => {
        if (!mes) {
            return;
        }
        dispatch(sendMessagesThunk(mes))
        setMes("")
    }

    return (
        <div className={s.sendMesBlock}>
            <textarea value={mes} onChange={(e) => setMes(e.currentTarget.value)}/>
            <button  className={s.sendMess} onClick={sendMessages}><FiSend/></button>
        </div>
    )

}