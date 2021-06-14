import axios from "axios";


const instanse = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "603ef8c0-4933-4294-ab5f-b170d3ebe6d8"
         //"API-KEY": "48cd781d-ab35-4a63-97ba-b184f71ed662"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersAPI = {
    getUsers(currentPages: any, pagesize: any) {
        return (
            instanse.get(`users?page=${currentPages}&count=${pagesize}`, {})
                .then(response => response.data)
        )
    },
    follow(id: any) {
        return (
            instanse.post(`follow/${id}`, {}, {})
                .then(response => response.data)
        )
    },
    profileGet(id: any) {
        return profileAPI.profileGet(id)
    },
    unFollow(id: any) {
        return (
            instanse.delete(`follow/${id}`, {})
                .then(response => response.data)
        )
    },
    getFriendsUsers(currentPages: any, pagesize: any) {
        return (
            instanse.get(`users?page=${currentPages}&count=${pagesize}&friend=true`, {})
                .then(response => response.data)
        )
    }

}
export const profileAPI = {
    profileGet(id: any) {
        return (
            instanse.get(`profile/${id}`)
        )
    },
    getStatus(userID: any) {
        return (
            instanse.get(`/profile/status/${userID}`)
        )
    },
    updateStatus(statusText: string) {
        return (
            instanse.put(`/profile/status`, {status: statusText})
        )
    },
    savePhoto(file: any) {
        let formData = new FormData();
        formData.append("image", file)
        return (instanse.put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        )
    },
    saveProfile(profile: any) {
        return instanse.put(`/profile`, profile)
    }
}
export const authAPI = {
    me() {
        return (
            instanse.get(`auth/me`, {})
        )
    }
    , login(email: string, password: string, rememberMe: boolean = false, captcha: any) {
        return (
            instanse.post(`auth/login`, {email, password, rememberMe, captcha}, {})

        )
    },
    logout() {
        return (
            instanse.delete(`auth/login`, {})
        )
    }
}
export const securityAPI = {
    getCaptchaUrl() {
        return (
            instanse.get(`security/get-captcha-url`)
        )
    }
}
export const messagesAPI = {
    getListMessagesWithUser(userId: any) {
        return (
            instanse.get(`dialogs/17475/messages`, {})
                .then(response => response.data)
        )
    }/*,
    follow(id: any) {
        return (
            instanse.post(`follow/${id}`, {}, {})
                .then(response => response.data)
        )
    },
    profileGet(id: any) {
        return profileAPI.profileGet(id)
    },
    unFollow(id: any) {
        return (
            instanse.delete(`follow/${id}`, {})
                .then(response => response.data)
        )
    },
    getFriendsUsers(currentPages: any, pagesize: any) {
        return (
            instanse.get(`users?page=${currentPages}&count=${pagesize}&friend=true`, {})
                .then(response => response.data)
        )
    }*/

}
