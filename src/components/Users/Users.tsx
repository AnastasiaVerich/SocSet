import React from 'react';
import c from './Users.module.css'
import axios from "axios";
import nullAvatar from '../../assets/img/nullAvatar.jpg'


 export class Users extends React.Component<any, any>{
   
    componentDidMount() {
        alert("10")
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                debugger
                this.props.setUsers(response.data.items)
            })

    }


     render() {
        return <div>
            {this.props.users.map((u: any) =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img width={"50px"} height={"50px"}
                                 src={u.photos.small != null ? u.photos.small : nullAvatar}/>
                        </div>

                        <div> {u.followed ?
                            <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                this.props.follower(u.id)
                            }}>Follow</button>}
                        </div>
                    </span>

                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>

                        </span>
                    </span>
                </div>
            )
            }
        </div>
    }



}