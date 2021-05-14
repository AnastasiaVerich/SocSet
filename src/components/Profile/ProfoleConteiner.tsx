import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setOneProfileAC} from "../../redux/ProfileReducer";
import {StoreStateType} from "../../redux/StoreRedux";
import { withRouter } from "react-router-dom";


 class ProfileConteiner extends React.Component<any, any>{

     componentDidMount() {
         let userID =this.props.match.params.userID
         if (!userID){ userID=2}
         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userID)
             .then(response => {
                 this.props.setOneProfile(response.data)
             })
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
        profile: state.profile.profile
    }
}

export const ProfileConteinerConnect= connect (mapStateToprops,{setOneProfile: setOneProfileAC})(WithUrlDataConteinerComponent)

