import s from "./chat.module.scss";
import React, {useEffect, useRef, useState} from "react";
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
    const status = useSelector((state: StoreStateType) => state.chat.status)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])
    return (<div className={s.block}>
            <div className={s.container}>
                {status==="error"? <h3>error</h3>: <></>}
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
    const [ scrol, setScrol]=useState(true)
    const mesAchorRef=useRef<HTMLDivElement>(null);
    const scrollHandler=(e: React.UIEvent<HTMLDivElement, UIEvent>)=>{
        const el= e.currentTarget;
        if(Math.abs((el.scrollHeight-el.scrollTop)-el.clientHeight)<300)
        {
            !scrol && setScrol(true)
        }
        else {            scrol && setScrol(false)
        }
    }

    useEffect(()=>{
        if(scrol) {mesAchorRef.current?.scrollIntoView({behavior:'smooth'})}
    },[messages])



    return (

        <div className={s.chat}  onScroll={scrollHandler}>
            {messages.map((m) =><>
                <div className={s.my}>
                    <img src={m.photo} width={"50px"} height={"50px"}/>
                    <div className={s.sms}>
                        <b>{m.userName}</b>
                        <p className={s.sms}>{m.message}</p>
                    </div>
                </div>

            </>
            )}
            <div ref={mesAchorRef}></div>
        </div>

    )

}
const AddItemForm = () => {
    const [mes, setMes] = useState("")
    const status = useSelector((state: StoreStateType) => state.chat.status)
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
            <button disabled={status!=="ready"} className={s.sendMess} onClick={sendMessages}><FiSend/></button>
        </div>
    )

}