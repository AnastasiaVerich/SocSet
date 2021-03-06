import React, {useState} from 'react'
import s from "./profile.module.scss"
import {NavLink} from "react-router-dom";
import no_image from "../assets/img/no_image.png";
import {ViewProfile} from "./menu-items/view-profile/view-profile";
import {ViewContacts} from "./menu-items/view-contacts/view-contacts";
import {AboutMe} from "./menu-items/about-me/about-me";
import {AiOutlineMail} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {FaUserFriends, SiAboutDotMe, SiMailDotRu} from "react-icons/all";
import {Preloader} from "../Common/preloader/Preloader";

export const Profile = (props: any) => {
    let [x, setX] = useState(true)
    let [y, setY] = useState(false)
    let [z, setZ] = useState(false)
    let [w, setW] = useState(false)

    if (!props.profile || props.isFetching) {
        return <Preloader/>
    } else {
        return <div className={s.block}>
            <div className={s.topContainer}>
                {/*показываетс в мобильной версии*/}
                <div className={s.infoContainer}>
                    {props.profile.photos.large === null
                        ? <img className={s.photo} src={no_image} alt={""}/>
                        : <img className={s.photo} src={props.profile.photos.large} alt={""}/>}
                    <div className={s.name}>
                        {props.profile.fullName}
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
            <div className={s.bottomContainer}>
                <div className={s.menuBlock}>
                    {/*показывается в комп версии*/}
                    <div className={s.infoContainer}>
                        {props.profile.photos.large === null
                            ? <img className={s.photo} src={no_image} alt={""}/>
                            : <img className={s.photo} src={props.profile.photos.large} alt={""}/>}
                        <div className={s.name}>
                            {props.profile.fullName}
                        </div>
                    </div>
                    <div className={s.menuContainer}>
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

                    </div>
                </div>
                <div className={s.profileSelectedBlock}>
                    <div className={s.profileSelectedContainer}>
                        {/* посмотреть профиль*/}
                        {x && <ViewProfile profile={props.profile}/>}

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

