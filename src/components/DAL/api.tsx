import axios from "axios";


const instanse = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "603ef8c0-4933-4294-ab5f-b170d3ebe6d8"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})



export const usersAPI={
    getUsers(currentPages:any,pagesize: any ){
        return (
            instanse.get(`users?page=${currentPages}&count=${pagesize}`,{
            }).then(response=>response.data)
        )
    },
    follow( id:any){
        return (
            instanse.post(`follow/${id}`, {}, {
            }).then(response=>response.data)
        )
    },
    profileGet( id:any){
        return (
            instanse.get(`profile/${id}`)
        )
    },
    unFollow( id:any){
        return (
            instanse.delete(`follow/${id}`, {
            }).then(response=>response.data)
        )
    }

}
export const authAPI={
    me( ){
        return (
            instanse.get(`auth/me`, {
            }).then(response=>response.data)
        )
    }
}
