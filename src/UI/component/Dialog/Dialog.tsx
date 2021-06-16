import React, {useEffect} from "react";
import S from './Dialog.module.css'
import {UsersDialogs} from "./UsersDialogs/UsersDialogs";
import {OneMessage} from "./OneMessage/OneMessage";
import {Field, reduxForm} from "redux-form";
import {maxLenght, requiredField} from "../../utils/validators/validators";
import {Textarea} from "../Common/FormsControl/FormsControl";
import {NavLink} from "react-router-dom";
import c from "../Nav/Nav.module.css";
import {Preloader} from "../Common/Preloader/Preloader";

export type StateTypeDialog = {
    stateServe: any
}
export type DispatchTypeDialog = {
    itemsOneDialog: any
    sendSms: (id: number, sms: string) => void
    authorazedUserId: any
}

type DialogType = StateTypeDialog & DispatchTypeDialog


export const Dialogs = (props: any) => {
    let respId = props.match.params.userID

    useEffect(() => {
        if(respId){
        props.itemsOneDialog(respId)}
    }, [respId])
    useEffect(() => {
        props.getUsersArray()
    }, [])

    let sendSms = (values: any) => {
        //massages, потому что такое значение name у field, которое нам надо
        props.sendSms(respId, values.massages)
    }
    return (

        <div className={S.dialogs}>
            <div className={S.dialogsItems}>
                МОИ ДИАЛОГИ

                <NavLink to={'/dialogs/' + respId} activeClassName={c.act}>
                    <div>
                    <button onClick={() => props.getUsersArray()}>Обновить</button>
                    </div>
                </NavLink>
                {props.usersArray != null
                    ? <UsersArrayC usersArray={props.usersArray}/>
                    : <div>нет диалогов</div>}


            </div>
            <div className={S.massages}>
                СООБЩЕНИЯ В ДИАЛОГЕ:
                {respId !== undefined
                    ?
                        props.stateServe != null
                            ? <SmsServe stateServe={props.stateServe} authorazedUserId={props.authorazedUserId}/>
                            : <Preloader/>
                    : <div>Выбери диалог</div>}
            </div>
            <div>
                <AddMessagesReduxForm onSubmit={sendSms}/>
            </div>
        </div>
    )
}


const SmsServe = (props: any) => {
    return (<div>
            {props.stateServe.map((element: any) =>
                <div key={element.id}>
                    <OneMessage massageText={element.body} authorazedUserId={props.authorazedUserId}
                                senderId={element.senderId}/>
                </div>)
            }
        </div>


    )
}
const UsersArrayC = (props: any) => {

    return (<div>
            {props.usersArray.map((element: any) =>
                <div key={element.id}>

                    <NavLink to={'/dialogs/' + element.id} activeClassName={c.act}>
                        <div> {element.userName}</div>
                    </NavLink>

                </div>)
            }
        </div>
    )
}
const maxLenghtCreater = maxLenght(10)
const AddMessagesForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder="Enter sms"
                   component={Textarea}
                   name={"massages"}
                   validate={[requiredField, maxLenghtCreater]}
            />
            <button>send sms</button>
        </form>
    )
}

const AddMessagesReduxForm = reduxForm({
    form: "dialog"
})(AddMessagesForm)