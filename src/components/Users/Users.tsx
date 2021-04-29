import React from 'react';
import c from './Users.module.css'


type usersType = {
    users: any,
    follower: any,
    unfollow: any,
    setUsers: any
}

export const Users = (props: usersType) => {
if(props.users.length===1){
    props.setUsers([
        {
            id: 1,
            follow: true,
            fillName: "Anastasia",
            status: "I am Bitch",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 2,
            follow: false,
            fillName: "Ruslan",
            status: "I am man",
            location: {city: "Molodechno", country: "Belarus"}
        },
        {id: 3, follow: false, fillName: "Misha", status: "HI EVERYONE", location: {city: "Moskow", country: "Russia"}},
        {id: 4, follow: true, fillName: "Heiter", status: "Die all", location: {city: "Kiev", country: "Ukraine"}}])
}
    return <div>
        {props.users.map((u: any) =>
            <div key={u.id}>
                    <span>
                        <div>
                          <img width={"50px"} height={"50px"}
                               src='https://klike.net/uploads/posts/2019-06/1560329641_2.jpg'/>
                        </div>

                        <div> {u.follow ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.follower(u.id)
                            }}>Follow</button>}
                        </div>
                    </span>

                <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>

                        </span>
                    </span>
            </div>
        )
        }
    </div>

}