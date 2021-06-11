import React from "react";
import { NavLink } from "react-router-dom";

import S from './UsersDialogs.module.css'

type DialogItemProps={
    name: string
    idLink: number
}

export const UsersDialogs=(props:DialogItemProps)=>{
    return(
        <div className={`${S.item} ${S.active}`}>
           <NavLink to={"/dialogs/"+props.idLink}> {props.name}</NavLink>
        </div>
    )
};
