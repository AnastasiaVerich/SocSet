import React from "react";
import {Profile} from "./profile";
import {connect} from "react-redux";

import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {StoreStateType} from "../../BLL/store";
import {
    getOneProfileTC,
    getStatusTC,
    updateInfoProfileTC,
    updatePhotoTC,
    updateStatusTC
} from "../../BLL/Reducers/profile-reducer";
import {followTC} from "../../BLL/Reducers/users-reducer";


class ProfileConteiner extends React.Component<any, any>{
// match из  withRouter  взялся
    refreshProfile(){
        let ownerId =this.props.match.params.userID
        // если айди не найден, то задаем айди авторизированного пользователя
        if (!ownerId){
            ownerId=this.props.authorizationUserId
            // если пользователь не авторизирован, то в айди ничего нет и мы редеректемся на страницу логина
            if(!ownerId){
                this.props.history.push("/login")
            }
        }
        this.props.getOneProfile(ownerId)
        this.props.getStatus(ownerId)
    }

    componentDidMount() {

        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if(this.props.match.params.userID !==prevProps.match.params.userID )
            this.refreshProfile()
    }

    render(){
        return(
            <Profile profile={this.props.profile}
                     ownerId={!this.props.match.params.userID}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     updatePhoto={this.props.updatePhoto}
                     updateInfoProfile={this.props.updateInfoProfile}
                     follower={this.props.follower}/>
        )
    }
}



let mapStateToprops=(state:StoreStateType):any=>{
    return{
        profile: state.profile.profile,
        status: state.profile.status,
        authorizationUserId: state.auth.userId,
        isAuthorization: state.auth.isAuthorization

    }
}
let mapDispatchToProps = (dispatch: any)  => {
    return {
        getOneProfile: (id: number) => {
            dispatch(getOneProfileTC(id))
        },
        getStatus: (id: number) => {
            dispatch(getStatusTC(id))
        },updateStatus: (status: string) => {
            dispatch(updateStatusTC(status))
        },updatePhoto: (file: any) => {
            dispatch(updatePhotoTC(file))
        },
        updateInfoProfile: (profile: any) => {
            dispatch(updateInfoProfileTC(profile))
        }
    }
}


const ProfileContainerConnect:any= compose(
    connect (mapStateToprops,{
        follower:followTC,
        getOneProfile:getOneProfileTC,
        getStatus:getStatusTC,
        updateStatus: updateStatusTC,
        updatePhoto: updatePhotoTC,
        updateInfoProfile: updateInfoProfileTC
    })
    ,withRouter
)(ProfileConteiner)
export default ProfileContainerConnect
