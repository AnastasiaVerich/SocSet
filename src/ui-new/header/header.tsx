import React from 'react';
import s from"./header.module.scss"

export const Header = () => {
    return (
        <div className={s.block}>
            <div className={s.icon}></div>
            <div className={s.container}>
                <div className={s.info}>
                    <div className={s.ava}></div>
                    <div className={s.name}>Anastasia Verich</div>
                </div>
                <div className={s.unLog}>
                    <div className={s.btn}>Un login</div>
                </div>
            </div>

        </div>
    )
}