import React from 'react';
import style from "./Paginator.module.css"

type PaginatorPropsType = {
    pagesize: number
    totalUsersCount: number
    onPageChanget: (x: any) => void
    currentPages: number
}
export const Paginator = (props: PaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
    <div>
        {pages.map(x => <span className={props.currentPages === x ? style.selectPage : style.notselectPage}
                              onClick={(e) => {
                                  props.onPageChanget(x)
                              }}>{x}</span>)}
    </div>
    )
}