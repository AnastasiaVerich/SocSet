import React, {useState} from 'react';
import style from "./Paginator.module.css"

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
        <div>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>prev</button>}
            {pages
                .filter(x => x >= leftPortionPageNumber && x <= rightPortionPageNumber)
                .map(x => {
                    return <span className={props.currentPages === x ? style.selectPage : style.notselectPage}
                          key={x}
                          onClick={(e) => {
                              props.onPageChanget(x)
                          }}>|{x}|</span>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>next</button>}
        </div>
    )
}