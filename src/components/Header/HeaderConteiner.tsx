import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {dataSetUserAC, getAuthThunkCreater, logoutThunkCreater} from "../../redux/auth-reducer";
import {StoreStateType} from "../../redux/StoreRedux";
import {authAPI} from "../DAL/api";

class HeaderConteinerConnect extends React.Component<any, any> {


    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth} logOut={this.props.logOut}/>
        )
    }
}

const mapStateToProps = (state: StoreStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login


})
export const HeaderConteiner = connect(mapStateToProps, {logOut: logoutThunkCreater})(HeaderConteinerConnect)