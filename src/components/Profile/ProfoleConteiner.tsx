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
         if (!userID){ userID=16763}
         this.props.getOneProfileThunk(userID)
         setTimeout(()=>{this.props.getStatusThunk(userID)},2000)

     }

     render(){
         if(this.props.isAuth===false) return <Redirect to={"/login"}/>
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
        status: state.profile.status
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
