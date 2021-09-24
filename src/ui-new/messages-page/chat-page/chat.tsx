import s from "./chat.module.scss";
import React, {useEffect, useState} from "react";
import {MessagesType} from "../../../DAL/chat-api";
import {useDispatch, useSelector} from "react-redux";
import {sendMessagesThunk, startMessagesListening, stopMessagesListening} from "../../../BLL/Reducers/chat-reducer";
import {StoreStateType} from "../../../BLL/store";


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
    return (<>
            <Messages/>
            <AddItemForm/>
        </>
    )
}

type wsChanaleType = {
    wsChanale: WebSocket | null
}

const Messages = () => {
    // const [messages, setMassages] = useState<MessagesType[]>([])
    //
    // useEffect(() => {
    //     let messagesHandler = (e: MessageEvent) => {
    //         setMassages((prev) => [...prev, ...JSON.parse(e.data)])
    //     }
    //     props.wsChanale?.addEventListener('message', messagesHandler)
    //
    //     return () => {
    //         props.wsChanale?.removeEventListener('message', messagesHandler)
    //     }
    // }, [props.wsChanale])
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

    /*



       useEffect(() => {
           const openHandler = () => {
               setOresdyStatus("ready")
           }
           props.wsChanale?.addEventListener("open", openHandler)
           return () => {
               props.wsChanale?.removeEventListener('open', openHandler)
           }
       }, [props.wsChanale])*/
    const dispatch = useDispatch()

    const sendMessages = () => {
        if (!mes) {
            return;
        }
        dispatch(sendMessagesThunk(mes))
        setMes("")
    }

    return (
        <div>
            <textarea value={mes} onChange={(e) => setMes(e.currentTarget.value)}></textarea>
            <button disabled={false} onClick={sendMessages}>send</button>

        </div>
    )

}