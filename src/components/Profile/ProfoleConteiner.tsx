import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getOneProfileThunkCreater, getStatusThunkCreater, updateStatusThunkCreater} from "../../redux/ProfileReducer";
import {StoreStateType} from "../../redux/StoreRedux";
import {Redirect, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


 class ProfileConteiner extends React.Component<any, any>{

     componentDidMount() {

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

     render(){

        return(
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusThunk}/>
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


export const ProfileConteinerConnect:any= compose(
    connect (mapStateToprops,{
        getOneProfileThunk:getOneProfileThunkCreater,
        getStatusThunk:getStatusThunkCreater,
        updateStatusThunk: updateStatusThunkCreater
    })
    ,withRouter
    ,WithAuthRedirect
)(ProfileConteiner)
