import React, {useEffect, useState} from 'react'
import s from "./messages.module.scss"
import {Preloader} from "../Common/pr/Preloader";
import {UsersTalkedWith} from "../../UI/component/Dialog/UsersTalkedWith";
import {IconButton} from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import {NavLink} from "react-router-dom";
import no_image from "../../UI/assets/img/no_image.png";
import {AddMessagesReduxForm} from "../../UI/component/Dialog/AddMessagesReduxForm";
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../UI/utils/validators/validators";
import {Textarea} from "../Common/FormsControl/FormsControl";
import {BiMessageError, FiRefreshCcw, FiSend, IoIosSearch} from "react-icons/all";

export const Messages = (props: any) => {

    // от куда берется match???
    let recipientId = props.match.params.userID


    useEffect(() => {
        if (recipientId) {

            props.selectedDialogMessages(recipientId, 1, 20)
            props.getOneProfile(recipientId)
        }
    }, [recipientId])
    useEffect(() => {
        props.usersTalkedWith()
    }, [])


    let sendMessage = (values: any) => {
        //massages, потому что такое значение name у field, которое нам надо
        props.sendMessage(recipientId, values.massages)
    }


    let fieldMessages = () => {
        return recipientId !== undefined
            ? props.messages != null
                ? <MessagesWithOneUser messages={props.messages} authorizationUserId={props.authorizationUserId}/>
                : <Preloader/>
            : <div>Выбери диалог</div>
    }
    let fieldUsers = () => {
        return props.users != null
            ? <Users users={props.users} time={time}/>
            : <div>нет диалогов</div>
    }



    let time = (t: any) => {
        let date = new Date()
        if (date.getMonth() == Number(t.substr(5, 2) - 1)
            && date.getDate() == t.substr(8, 2)
            && date.getFullYear() == t.substr(0, 4))
            return t.substr(11, 5);
        else return t.substr(5,5)
    }


    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.chats}>
                    <div className={s.butMenu}>
                        <div className={s.d1}></div>
                        <div className={s.d2}></div>
                        <div className={s.d3}></div>

                    </div>
                    <div className={s.search}>
                        <input className={s.inp}></input>

                        <div className={s.serBut}><IoIosSearch/></div>
                        <NavLink to={'/messages/' + recipientId}>
                            <div>
                                <div onClick={() => props.usersTalkedWith()}><FiRefreshCcw/></div>
                            </div>
                        </NavLink>
                    </div>

                    <div className={s.users}>
                        {fieldUsers()}
                    </div>
                </div>
                <div className={s.selectedChat}>
                    {props.profile != null && recipientId !== undefined
                        ?
                        <div className={s.userSelected}>
                            <div className={s.name2}>{props.profile.fullName}</div>
                        </div>
                        : <></>
                    }
                    <div className={s.chat}>
                        {fieldMessages()}
                        <SendMessageReduxForm onSubmit={sendMessage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Users = (props: any) => {

    return (
        <>
            {props.users.map((element: any) =>
                <NavLink to={'/messages/' + element.id} key={element.id} className={s.user}>
                    <div className={s.avatar}>
                        <img className={s.ava}
                             src={element.photos.small != null
                                 ? element.photos.small
                                 : no_image}/>
                    </div>
                    <div className={s.main}>
                        <div className={s.name}>{element.userName}</div>
                        <div className={s.lastMessages}>jhjkhkjh knkj...</div>
                    </div>
                    <div className={s.info}>
                        <div className={s.time}>{props.time(element.lastDialogActivityDate)}</div>
                        {element.hasNewMessages && <div className={s.countUnread}><BiMessageError/></div>}

                    </div>
                </NavLink>)
            }
        </>
    )
}

const MessagesWithOneUser = (props: any) => {


    return (<div className={s.chatField}>
            {props.messages.map((element: any) =>
                <div key={element.id} className={s.field}>
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

const maxLengthCreator = maxLength(10)

const SendMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.sendField}>
            <Field placeholder="Enter sms"
                   component={Textarea}
                   name={"massages"}
                   validate={[requiredField, maxLengthCreator]}
                   props={{className: s.printMess}}
            />
            <button type='submit' className={s.sendMess}><FiSend/></button>
        </form>
    )
}
export const SendMessageReduxForm = reduxForm({
    form: "dialog"
})(SendMessageForm)