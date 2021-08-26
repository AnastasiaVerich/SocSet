import React, {useState} from 'react';
import s from "./Paginator.module.scss"
import {GrNext, GrPrevious} from "react-icons/all";

type PaginatorPropsType = {
    pagesize: number
    totalItemsCount: number
    onPageChanget: (x: any) => void
    currentPages: number
}
export const Paginator = (props: PaginatorPropsType) => {
    let portionSize = 10;
    let pagesCount = Math.ceil(props.totalItemsCount / props.pagesize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return (
        <div className={s.block}>
            {portionNumber > 1 &&
            <div className={s.btn}
                 onClick={() => {
                     setPortionNumber(portionNumber - 1)
                 }}><GrPrevious/>
            </div>}
            {pages
                .filter(x => x >= leftPortionPageNumber && x <= rightPortionPageNumber)
                .map(x => {
                    return <div className={props.currentPages === x ? s.selectPage : s.page}
                                key={x}
                                onClick={(e) => {
                                    props.onPageChanget(x)
                                }}>{x}</div>
                })}
            {portionCount > portionNumber &&
            <div  className={s.btn} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}><GrNext/></div>}
        </div>
    )
}