import React from "react";
import c from "../Nav/Nav.module.css";
import {NavLink} from "react-router-dom";

type UsersType = {
    users: any
}
export const UsersTalkedWith = (props: UsersType) => {
    return (<div>
            {props.users.map((element: any) =>
                <div key={element.id} className={c.item}>
                    <NavLink to={'/dialogs/' + element.id} activeClassName={c.act}>
                        {element.userName}
                    </NavLink>
                </div>)
            }
        </div>
    )
}