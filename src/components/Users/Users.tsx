import React from 'react';
import c from './Users.module.css'
import axios from "axios";
import nullAvatar from '../../assets/img/nullAvatar.jpg'


export class Users extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPages}&count=${this.props.pagesize}`)
            .then(response => {


                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })

    }
onPageChanget =(pageNumber:number)=>{
        this.props.SetCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesize}`)
        .then(response => {

            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pagesize)
        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            {pages.map(x => <span className={this.props.currentPages === x ? c.selectPage : c.notselectPage}
                                  onClick={(e)=>{this.onPageChanget(x)}}>{x}</span>)}
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