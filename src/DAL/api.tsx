import axios from "axios";


const instanse = axios.create({
    withCredentials: true,
    headers: {
       "API-KEY": "603ef8c0-4933-4294-ab5f-b170d3ebe6d8"
       //  "API-KEY": "48cd781d-ab35-4a63-97ba-b184f71ed662"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersAPI = {
    getUsers(currentPages: any, pagesize: any,friend: any, term: any) {
        return (
            instanse.get(`users?page=${currentPages}&count=${pagesize}&friend=${friend}&term=${term}`, {})
                .then(response => response.data)
        )
    },

    follow(id: any) {
        return (
            instanse.post(`follow/${id}`, {}, {})
                .then(response => response.data)
        )
    },
    getProfile(id: any) {
        return profileAPI.getProfile(id)
    },
    unFollow(id: any) {
        return (
            instanse.delete(`follow/${id}`, {})
                .then(response => response.data)
        )
    }

}
export const profileAPI = {
    getProfile(id: any) {
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
    updatePhoto(file: any) {
        let formData = new FormData();
        formData.append("image", file)
        return (instanse.put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        )
    },
    updateInfoProfile(profile: any) {
        return instanse.put(`/profile`, profile)
    }
}
export const authorizationAPI = {
    me() {
        const promise=instanse.get(`auth/me`, {})
        return promise
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: any) {
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
    getSelectedDialog(userId: any,currentPages: any, pagesize: any ) {
        return (
            instanse.get(`dialogs/${userId}/messages?page=${currentPages}&count=${pagesize}`, {})
                .then(response => response.data)
        )
    },
    sendMessage(userId: any, body: string) {
        return (
            instanse.post(`dialogs/${userId}/messages`, {body}, {})
        )
    },
    getUsersTalkedWith() {
        return (
            instanse.get(`dialogs`, {})
                .then(response => response.data)
        )
    }
}
