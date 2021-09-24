import React, {useEffect} from 'react'
import s from "./messages.module.scss"
import {NavLink} from "react-router-dom";
import {AiOutlineMenu, FiRefreshCcw} from "react-icons/all";
import {SendMessageReduxForm} from "./send-message-form/send-message-form";
import {SelectedChat} from "./selected-chat/selectedChat";
import {Preloader} from "../Common/preloader/Preloader";
import {ChatList} from "./chat-list/chat-list";

export const Messages = (props: any) => {
    // от куда берется match???
    let recipientId = props.match.params.userID

    useEffect(() => {
        if (recipientId) {
            props.selectedDialogMessages(recipientId, 1, 20)
            props.getOneProfile(recipientId)
        }
        // eslint-disable-next-line
    }, [recipientId])

    useEffect(() => {
        props.usersTalkedWith()
        // eslint-disable-next-line
    }, [])

    let sendMessage = (values: any) => {
        //massages, потому что такое значение name у field, которое нам надо
        props.sendMessage(recipientId, values.massages)
    }

    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.allChats}>
                    <div className={s.iconMenuMobile}>
                        <AiOutlineMenu/>
                    </div>
                    <div className={s.refreshAllChats}>
                        <NavLink to={'/messages/' + recipientId}>
                            <div onClick={() => props.usersTalkedWith()}><FiRefreshCcw/></div>
                        </NavLink>
                    </div>

                    <div className={s.fieldUsers}>

                        {props.users != null
                            ? <ChatList users={props.users}/>
                            : <div>нет диалогов</div>}
                    </div>
                </div>
                <div className={s.selectedChat}>
                    {props.profile != null && recipientId !== undefined
                        ?
                        <div className={s.userSelectedName}>
                            <div className={s.name}>{props.profile.fullName}</div>
                        </div>
                        :  <div className={s.userSelectedName}>
                            <div className={s.name}>1</div>
                        </div>
                    }
                    <div className={s.fieldChat}>
                        {recipientId !== undefined
                            ? props.messages != null && !props.isFetching
                                ? <SelectedChat messages={props.messages}
                                                authorizationUserId={props.authorizationUserId}
                                                recipientId={recipientId}
                                                selectedDialogMessages={props.selectedDialogMessages}
                                                totalCount={props.totalCount}/>
                                :<div className={s.field}><Preloader/></div>
                            : <div className={s.field}>Выбери диалог</div>}
                        <SendMessageReduxForm onSubmit={sendMessage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}