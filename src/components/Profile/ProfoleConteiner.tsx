import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getOneProfileThunkCreater, setOneProfileAC} from "../../redux/ProfileReducer";
import {StoreStateType} from "../../redux/StoreRedux";
import { withRouter } from "react-router-dom";
import { usersAPI} from "../DAL/api";


 class ProfileConteiner extends React.Component<any, any>{

     componentDidMount() {
         let userID =this.props.match.params.userID
         if (!userID){ userID=2}
         this.props.getOneProfileThunk(userID)
     }

     render(){
        return(
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let WithUrlDataConteinerComponent =withRouter(ProfileConteiner)

let mapStateToprops=(state:StoreStateType):any=>{
    return{
        profile: state.profile.profile,
        isAuth: state.auth.isAuth
    }
}

export const ProfileConteinerConnect= connect (mapStateToprops,{getOneProfileThunk:getOneProfileThunkCreater})(WithUrlDataConteinerComponent)

