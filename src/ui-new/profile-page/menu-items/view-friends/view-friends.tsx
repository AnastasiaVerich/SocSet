import s from "./view-friends.module.scss";
import React from "react";

export const ViewFrinds = (props: any) => {
    return (
        <div className={s.viewFriends}>
            <div className={s.friendContainer}>
                <div className={s.ava}></div>
                <div className={s.name}>Hbj Kdscsdcd</div>
                <div className={s.butt}>
                    <div className={s.butItem}>foll/unf</div>
                    <div className={s.butItem}> send sms</div>
                </div>
                <div className={s.viewProfileFriend}>view profile</div>
            </div>
            <div className={s.friendContainer}>
                <div className={s.ava}></div>
                <div className={s.name}>LMklcjdksc JKNjnkjncs</div>
                <div className={s.butt}>
                    <div className={s.butItem}>foll/unf</div>
                    <div className={s.butItem}> send sms</div>
                </div>
                <div className={s.viewProfileFriend}>view profile</div>

            </div>
            <div className={s.friendContainer}>
                <div className={s.ava}></div>
                <div className={s.name}>JKl JK</div>
                <div className={s.butt}>
                    <div className={s.butItem}>foll/unf</div>
                    <div className={s.butItem}> send sms</div>
                </div>
                <div className={s.viewProfileFriend}>view profile</div>

            </div>
            <div className={s.friendContainer}>
                <div className={s.ava}></div>
                <div className={s.name}> Lfjejnfkje KNjn</div>
                <div className={s.butt}>
                    <div className={s.butItem}>foll/unf</div>
                    <div className={s.butItem}> send sms</div>
                </div>
                <div className={s.viewProfileFriend}>view profile</div>
            </div>

        </div>
    )

}