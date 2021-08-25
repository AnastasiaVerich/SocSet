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
import {AiOutlineMail} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {FaUserFriends, GrContactInfo, SiAboutDotMe, SiMailDotRu} from "react-icons/all";

export const Profile = (props: any) => {
    let [x, setX] = useState(true)
    let [y, setY] = useState(false)
    let [z, setZ] = useState(false)
    let [w, setW] = useState(false)

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
                        <div className={s.name}> {props.profile.fullName}
                        </div>



                    </div>

                    <div className={s.buttons}>
                        {/*{ <div className={s.buttonItem}*/}
                        {/*        onClick={() => {*/}
                        {/*            props.follower(props.profile.userId)*/}
                        {/*        }*/}
                        {/*        }>Follow</div>}*/}
                        {!props.ownerId && <NavLink to={'/messages/' + props.profile.userId} className={s.buttonItem}>
                            <AiOutlineMail/>
                        </NavLink>}

                    </div>
                </div>
            </div>
            <div className={s.mainBlock}>
                <div className={s.middlePart}>
                    <div className={s.menu}>
                        <div className={s.menuItem} onClick={() => {
                            setX(true);
                            setY(false);
                            setZ(false);
                            setW(false)
                        }}><AiOutlineUser/>
                        </div>
                        <div className={s.menuItem} onClick={() => {
                            setX(false);
                            setY(true);
                            setZ(false);
                            setW(false)
                        }}><SiMailDotRu/>
                        </div>
                        <div className={s.menuItem} onClick={() => {
                            setX(false);
                            setY(false);
                            setZ(true);
                            setW(false)

                        }}><SiAboutDotMe/>
                        </div>

                        {props.ownerId && <div className={s.menuItem} onClick={() => {
                            setX(false);
                            setY(false);
                            setZ(false);
                            setW(true)
                        }}><FaUserFriends/>
                        </div>}
                    </div>
                </div>
                <div className={s.bottomPart}>
                    <div className={s.menuSelection}>
                        {/* посмотреть профиль*/}
                        {x && <ViewProfile profile={props.profile}/>}
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

