import React, {useState} from 'react'
import s from "./profile.module.scss"

export const Profile = () => {
    const x= false;

    return <div className={s.block}>
        <div className={s.backgroundImage}>
            <div className={s.topPart}>
                <div className={s.avatarContainer}>
                    <div className={s.avatar}>

                    </div>
                </div>
                <div className={s.buttons}>
                    <div className={s.buttonItem}>df</div>
                    <div className={s.buttonItem}>sd</div>
                    <div className={s.buttonItem}>as</div>
                </div>
            </div>
        </div>
        <div className={s.mainBlock}>
            <div className={s.middlePart}>
                <div className={s.name}> Aastasia</div>
                <div className={s.menu}>
                    <div className={s.menuItem}></div>
                    <div className={s.menuItem}></div>
                    <div className={s.menuItem}></div>
                    <div className={s.menuItem}></div>
                </div>
            </div>
            <div className={s.bottomPart}>
                <div className={s.info}>
                    <div className={s.firstInfo}>
                        <div className={s.countFriends}> 13 friends</div>
                        <div className={s.isFindWork}> find work</div>
                    </div>
                    <div className={s.secondInfo}>
                        <div className={s.title}> My Photos</div>
                        <div className={s.photos}></div>
                    </div>
                </div>
                <div className={s.menuSelection}>
                    {/* посмотреть профиль*/}
                    {x && <div className={s.viewProfile}>
                        <div className={s.titleMenu}> View Profile</div>
                        <div className={s.selectionMainContainer}>
                            <div className={s.titleColumn}>
                                <div className={s.item}>Name</div>
                                <div className={s.item}>Day of Birth</div>
                                <div className={s.item}>Sex</div>
                                <div className={s.item}>City</div>
                                <div className={s.item}>Country</div>
                            </div>
                            <div className={s.descriptionColumn}>
                                <div className={s.item}>Anastasia</div>
                                <div className={s.item}>18.11.1996</div>
                                <div className={s.item}>W</div>
                                <div className={s.item}>Minsk</div>
                                <div className={s.item}>Belarus</div>
                            </div>
                        </div>
                    </div>}
{/*посмотреть друзей*/}
                    {!x && <div className={s.viewFriends}>
                        <div className={s.friendContainer}>
                            <div className={s.ava}></div>
                            <div className={s.name}></div>
                            <div className={s.butt}>
                                <div className={s.butItem}></div>
                                <div className={s.butItem}></div>
                            </div>
                        </div>
                        <div className={s.friendContainer}>
                            <div className={s.ava}></div>
                            <div className={s.name}></div>
                            <div className={s.butt}>
                                <div className={s.butItem}></div>
                                <div className={s.butItem}></div>
                            </div>
                        </div>
                        <div className={s.friendContainer}>
                            <div className={s.ava}></div>
                            <div className={s.name}></div>
                            <div className={s.butt}>
                                <div className={s.butItem}></div>
                                <div className={s.butItem}></div>
                            </div>
                        </div>
                        <div className={s.friendContainer}>
                            <div className={s.ava}></div>
                            <div className={s.name}></div>
                            <div className={s.butt}>
                                <div className={s.butItem}></div>
                                <div className={s.butItem}></div>
                            </div>
                        </div>
                        <div className={s.friendContainer}>
                            <div className={s.ava}></div>
                            <div className={s.name}></div>
                            <div className={s.butt}>
                                <div className={s.butItem}></div>
                                <div className={s.butItem}></div>
                            </div>
                        </div>
                        <div className={s.friendContainer}>
                            <div className={s.ava}></div>
                            <div className={s.name}></div>
                            <div className={s.butt}>
                                <div className={s.butItem}></div>
                                <div className={s.butItem}></div>
                            </div>
                        </div>

                    </div>}
                </div>
            </div>
        </div>


    </div>
}