import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setOneProfileAC} from "../../redux/ProfileReducer";
import {StoreStateType} from "../../redux/StoreRedux";


 class ProfileConteiner extends React.Component<any, any>{

     componentDidMount() {
         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let mapStateToprops=(state:StoreStateType):any=>{
    return{
        profile: state.profile.profile
    }
}

export const ProfileConteinerConnect= connect (mapStateToprops,{setOneProfile: setOneProfileAC})(ProfileConteiner)

