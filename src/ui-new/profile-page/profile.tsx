import React, {useState} from 'react'
import s from "./profile.module.scss"
import {NavLink} from "react-router-dom";
import no_image from "../../UI/assets/img/no_image.png";
import {Preloader} from "../Common/pr/Preloader";
import {ViewProfile} from "./menu-items/view-profile/view-profile";
import {ViewFrinds} from "./menu-items/view-friends/view-friends";
import {ViewContacts} from "./menu-items/view-contacts/view-contacts";
import {AboutMe} from "./menu-items/about-me/about-me";
import {ViewFriendsContainer} from "./menu-items/view-friends/view-friends-container";
import c from "../../UI/component/Nav/Nav.module.css";
import style from "../../UI/component/Profile/ProfileInfo/ProfileInfo.module.css";

export const Profile = (props: any) => {
    let[x, setX]=useState(true)
    let[y, setY]=useState(false)
    let[z, setZ]=useState(false)
    let[w, setW]=useState(false)

    if (!props.profile) {
        return <Preloader/>
    } else {
    return <div className={s.block}>
        <div className={s.backgroundImage}>
            <div className={s.topPart}>
                <div className={s.avaName}>
                    <div className={s.avatarContainer}>
                        {props.profile.photos.large === null
                            ? <img className={s.avatar} src={no_image}/>
                            : <img className={s.avatar} src={props.profile.photos.large}/>}
                    </div>
                    <div className={s.name}> {props.profile.fullName}</div>

                </div>

                <div className={s.buttons}>
                    { <div className={s.buttonItem}
                            onClick={() => {
                                props.follower(props.profile.userId)
                            }
                            }>Follow</div>}
                    <NavLink to={'/messages/' + props.profile.userId} className={s.buttonItem}>
                        sms
                    </NavLink>
                </div>
            </div>
        </div>
        <div className={s.mainBlock}>
            <div className={s.middlePart}>
                <div className={s.firstInfo}>
                    <div className={s.countFriends}><p
                        className={s.pp}>{props.profile.lookingForAJob ? "yes" : "no"}</p> need job
                    </div>
                </div>
                <div className={s.menu}>
                    <div className={s.menuItem} onClick={() => {
                        setX(true); setY(false); setZ(false);setW(false)
                    }}>profile</div>
                    <div className={s.menuItem} onClick={() => {
                        setX(false); setY(true); setZ(false);setW(false)
                    }}>contacts</div>
                    <div className={s.menuItem} onClick={() => {
                        setX(false); setY(false); setZ(true);setW(false)

                    }}>about me</div>
                    <div className={s.menuItem} onClick={() => {
                        setX(false); setY(false); setZ(false);setW(true)
                    }}>friends</div>
                </div>
            </div>
            <div className={s.bottomPart}>
                <div className={s.info}>
                    <div className={s.firstInfo}>
                        <div className={s.isFindWork}><p
                            className={s.pp}>{props.profile.lookingForAJob ? "yes" : "no"}</p> need job
                        </div>
                    </div>
                    <div className={s.secondInfo}>
                        <div className={s.title}> My Photos</div>
                        <div className={s.photos}></div>
                    </div>
                </div>
                <div className={s.menuSelection}>
                    {/* посмотреть профиль*/}
                    {x && <ViewProfile profile={props.profile}/> }
                    {/*посмотреть друзей*/}
                    {w && <ViewFriendsContainer/>}
                    {/*мои соц сети*/}
                    {y && <ViewContacts profile={props.profile}/>}
                    {/*обо мне*/}
                    {z && <AboutMe profile={props.profile}/>}
                </div>
            </div>
        </div>


    </div>
}
}

