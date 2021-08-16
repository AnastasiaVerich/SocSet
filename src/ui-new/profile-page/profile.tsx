import React, {useState} from 'react'
import s from "./profile.module.scss"

export const Profile = () => {
    let [x, setX] =useState(true)
    let [y, setY] =useState(false)
    let [z, setZ] =useState(false)
    let [w, setW] =useState(false)

    const xx=()=>{
        setX(true);
        setY(false);
        setZ(false);
        setW(false);
    };
    const yy=()=>{
        setX(false);
        setY(true);
        setZ(false);
        setW(false);
    };
    const zz=()=>{
        setX(false);
        setY(false);
        setZ(true);
        setW(false);
    };
    const ww=()=>{
        setX(false);
        setY(false);
        setZ(false);
        setW(true);
    }

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
                    <div className={s.menuItem} onClick={xx}>profile</div>
                    <div className={s.menuItem}onClick={zz} >contacts</div>
                    <div className={s.menuItem}  onClick={ww}>about me</div>
                    <div className={s.menuItem}onClick={yy}>friends</div>
                </div>
            </div>
            <div className={s.bottomPart}>
                <div className={s.info}>
                    <div className={s.firstInfo}>
                        <div className={s.countFriends}> <p className={s.pp}>13</p> friends/общих</div>
                        <div className={s.isFindWork}><p className={s.pp}>looking</p> for a job</div>
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
                                <div className={s.item
                                }>Belarus</div>
                            </div>
                        </div>
                    </div>}
                    {/*посмотреть друзей*/}
                    {y && <div className={s.viewFriends}>
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
                    {/*мои соц сети*/}
                    {z && <div className={s.viewProfile}>
                        <div className={s.titleMenu}> My contacts</div>
                        <div className={s.selectionMainContainer}>
                            <div className={s.titleColumn}>
                                <div className={s.item}>vk</div>
                                <div className={s.item}>faceboock</div>
                                <div className={s.item}>twetter</div>
                                <div className={s.item}>git</div>
                                <div className={s.item}>toytube</div>
                            </div>
                            <div className={s.descriptionColumn}>
                                <div className={s.item}>Anastasia.com</div>
                                <div className={s.item}>111111111.u</div>
                                <div className={s.item}>Wjkjhjhjk.by</div>
                                <div className={s.item}>zsxfdcghjbkml.5.vj</div>
                                <div className={s.item}>muui.hu</div>
                            </div>
                        </div>
                    </div>}
                    {/*обо мне*/}
                    {w && <div className={s.viewProfile}>
                        <div className={s.titleMenu}> about me</div>
                        <div className={s.selectionMainContainer}>

                        </div>
                    </div>}
                </div>
            </div>
        </div>


    </div>
}