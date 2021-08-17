import React, {useState} from 'react'
import s from "./messages.module.scss"

export const Messages = () => {


    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.chats}>
                    <div className={s.search}>
                        <input className={s.inp}></input>
                        <div className={s.serBut}>+</div>
                        <div className={s.butMenu}>
                            <div className={s.btn}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                        </div>

                    </div>
                    <div className={s.users}>
                        <div className={s.user}>
                            <div className={s.avatar}>
                                <div className={s.ava}></div>
                            </div>
                            <div className={s.main}>
                                <div className={s.name}>hgjhjgj</div>
                                <div className={s.lastMessages}>jhjkhkjh knkj... </div>
                            </div>
                            <div className={s.info}>
                                <div className={s.time}>11:00</div>
                                <div className={s.countUnread}>5</div>
                            </div>
                        </div>
                        <div className={s.user}>
                            <div className={s.avatar}>
                                <div className={s.ava}></div>
                            </div>
                            <div className={s.main}>
                                <div className={s.name}>hgjhjgj</div>
                                <div className={s.lastMessages}>jhjkhkjh knkj... </div>
                            </div>
                            <div className={s.info}>
                                <div className={s.time}>11:00</div>
                                <div className={s.countUnread}>5</div>
                            </div>
                        </div>
                        <div className={s.user}>
                            <div className={s.avatar}>
                                <div className={s.ava}></div>
                            </div>
                            <div className={s.main}>
                                <div className={s.name}>hgjhjgj</div>
                                <div className={s.lastMessages}>jhjkhkjh knkj... </div>
                            </div>
                            <div className={s.info}>
                                <div className={s.time}>11:00</div>
                                <div className={s.countUnread}>5</div>
                            </div>
                        </div>
                        <div className={s.user}>
                            <div className={s.avatar}>
                                <div className={s.ava}></div>
                            </div>
                            <div className={s.main}>
                                <div className={s.name}>hgjhjgj</div>
                                <div className={s.lastMessages}>jhjkhkjh knkj... </div>
                            </div>
                            <div className={s.info}>
                                <div className={s.time}>11:00</div>
                                <div className={s.countUnread}>5</div>
                            </div>
                        </div>
                        <div className={s.user}>
                            <div className={s.avatar}>
                                <div className={s.ava}></div>
                            </div>
                            <div className={s.main}>
                                <div className={s.name}>hgjhjgj</div>
                                <div className={s.lastMessages}>jhjkhkjh knkj... </div>
                            </div>
                            <div className={s.info}>
                                <div className={s.time}>11:00</div>
                                <div className={s.countUnread}>5</div>
                            </div>
                        </div>
                        <div className={s.user}>
                            <div className={s.avatar}>
                                <div className={s.ava}></div>
                            </div>
                            <div className={s.main}>
                                <div className={s.name}>hgjhjgj</div>
                                <div className={s.lastMessages}>jhjkhkjh knkj... </div>
                            </div>
                            <div className={s.info}>
                                <div className={s.time}>11:00</div>
                                <div className={s.countUnread}>5</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.selectedChat}>
                    <div className={s.userSelected}>
                        <div className={s.ava2}></div>
                        <div className={s.name2}> Anastasia Sinkevich</div>
                    </div>
                    <div className={s.chat}>
                        <div className={s.chatField}>
                            <div className={s.my}><p className={s.sms}>hi</p></div>
                            <div className={s.friend}><p className={s.sms}>hello my loverhello my loverhello my loverhello my loverhello my loverhello my loverhello my loverhello my lover</p></div>
                        </div>
                        <div className={s.sendField}>
                            <textarea className={s.printMess}></textarea>
                            <div className={s.sendMess}></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}