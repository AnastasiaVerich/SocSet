import s from "./chat.module.scss";
import React, {useEffect, useState} from "react";

type MessagesType = {
    message: string
    photo: string
    userId: number
    userName: string
}

export const ChatPage = () => {
    return (
        <Chat/>
    )
}
export const Chat = () => {
    const [wsChanale, setWS] = useState<WebSocket | null>(null);

    useEffect(() => {
        let ws: WebSocket;
        const closeHandler = () => {
            console.log("close 23 min");
            setTimeout(createChanel, 3000)
        }

        function createChanel() {
            ws?.removeEventListener('close', closeHandler)
            ws?.close()
            ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
            ws.addEventListener('close', closeHandler)
            setWS(ws)
        }

        createChanel()

        return () => {
            ws.removeEventListener('close', closeHandler)
            ws.close()
        }
    }, [])
    return (<>
            <Messages wsChanale={wsChanale}/>
            <AddItemForm wsChanale={wsChanale}/>
        </>
    )
}

type wsChanaleType = {
    wsChanale: WebSocket | null
}

const Messages = (props: wsChanaleType) => {

    const [messages, setMassages] = useState<MessagesType[]>([])

    useEffect(() => {
        let messagesHandler=(e:MessageEvent)=>{
            setMassages((prev) => [...prev, ...JSON.parse(e.data)])
        }
            props.wsChanale?.addEventListener('message', messagesHandler)

        return()=>{
            props.wsChanale?.removeEventListener('message', messagesHandler)
        }
        }, [props.wsChanale])

    return (

        <div className={s.chat}>
            {messages.map((m) => <div className={s.my}><p className={s.sms}>{m.message}</p></div>)}
        </div>

    )

}
const AddItemForm = (props: wsChanaleType) => {

    const [mes, setMes] = useState("")
    const [resdyStatus, setOresdyStatus] = useState<'ready' | "pending">('pending')

    const sendMessages = () => {
        if (!mes) {
            return;
        }
        props.wsChanale?.send(mes)
        setMes("")
    }


    useEffect(() => {
        const openHandler = () => {
            setOresdyStatus("ready")
        }
        props.wsChanale?.addEventListener("open", openHandler)
        return () => {
            props.wsChanale?.removeEventListener('open', openHandler)
        }
    }, [props.wsChanale])


    return (
        <div>
            <textarea value={mes} onChange={(e) => setMes(e.currentTarget.value)}></textarea>
            <button disabled={props.wsChanale === null || resdyStatus !== 'ready'} onClick={sendMessages}>send</button>

        </div>
    )

}