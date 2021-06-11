import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getOneProfileThunkCreater,
    getStatusThunkCreater,
    savePhotoThunkCreater, saveProfileThunkCreater,
    updateStatusThunkCreater
} from "../../../BLL/ProfileReducer";
import {StoreStateType} from "../../../BLL/StoreRedux";
import {Redirect, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


 class ProfileConteiner extends React.Component<any, any>{

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
        isAuth: state.auth.isAuth
    }
}


 const ProfileConteinerConnect:any= compose(
    connect (mapStateToprops,{
        getOneProfileThunk:getOneProfileThunkCreater,
        getStatusThunk:getStatusThunkCreater,
        updateStatusThunk: updateStatusThunkCreater,
        savePhotoThunk: savePhotoThunkCreater,
        saveProfileThunk: saveProfileThunkCreater
    })
    ,withRouter
    ,WithAuthRedirect
)(ProfileConteiner)
export default ProfileConteinerConnect
