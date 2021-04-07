import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {

    return (
        <div className={s.file}>
            <img height={200}
                 width={600}
                 src='http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg'
            />
            <div className={s.img}>
                ava+..
            </div>
        </div>)
}