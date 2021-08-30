import looading from '../../assets/img/looading.gif'
import React from "react";
import s from "./priloader.module.scss";

export const Preloader=()=>{
    return <div className={s.block}><img src={looading} className={s.pril} alt={""}/></div>
}