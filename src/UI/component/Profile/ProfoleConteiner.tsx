import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getOneProfileTC,
    getStatusTC,
    updatePhotoTC, updateInfoProfileTC,
    updateStatusTC
} from "../../../BLL/Reducers/profile-reducer";
import {StoreStateType} from "../../../BLL/store";
import {Redirect, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
import {DispatchTypeDialog} from "../Dialog/Dialog";
import {getSelectedDialogTC, getUsersTalkedWithTC, senMessageTC} from "../../../BLL/Reducers/dialogs-reducer";


 class ProfileConteiner extends React.Component<any, any>{
// match из  withRouter  взялся
     refreshProfile(){
         let userID =this.props.match.params.userID
         if (!userID){

             userID=this.props.authorazedUserId
             if(!userID){
                 this.props.history.push("/login")
             }
         }
         this.props.getOneProfileThunk(userID)
         this.props.getStatusThunk(userID)
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
            <Profile {...this.props} profile={this.props.profile}
                     isOwner={!this.props.match.params.userID}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusThunk}
                     savePhoto={this.props.savePhotoThunk}
                     saveProfile={this.props.saveProfileThunk}/>
        )
    }
}



let mapStateToprops=(state:StoreStateType):any=>{
    return{
        profile: state.profile.profile,
        status: state.profile.status,
        authorazedUserId: state.auth.userId,
        isAuth: state.auth.isAuthorization
    }
}
let mapDispatchToProps = (dispatch: any)  => {
    return {
        getOneProfileThunk: (id: number) => {
            dispatch(getOneProfileTC(id))
        },
        getStatusThunk: (id: number) => {
            dispatch(getStatusTC(id))
        },updateStatusThunk: (status: string) => {
            dispatch(updateStatusTC(status))
        },savePhotoThunk: (file: any) => {
            dispatch(updatePhotoTC(file))
        },
        saveProfileThunk: (profile: any) => {
            dispatch(updateInfoProfileTC(profile))
        }
    }
}


 const ProfileConteinerConnect:any= compose(
    connect (mapStateToprops,{
        getOneProfileThunk:getOneProfileTC,
        getStatusThunk:getStatusTC,
        updateStatusThunk: updateStatusTC,
        savePhotoThunk: updatePhotoTC,
        saveProfileThunk: updateInfoProfileTC
    })
    ,withRouter
)(ProfileConteiner)
export default ProfileConteinerConnect
