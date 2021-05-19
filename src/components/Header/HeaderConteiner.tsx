import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {dataSetUserAC, loginThunkCreater} from "../../redux/auth-reducer";
import {StoreStateType} from "../../redux/StoreRedux";
import {authAPI} from "../DAL/api";

class HeaderConteinerConnect extends React.Component<any, any> {

    componentDidMount() {
        this.props.loginThunk()
    }

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        )
    }
}

const mapStateToProps = (state: StoreStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})
export const HeaderConteiner = connect(mapStateToProps, {loginThunk: loginThunkCreater})(HeaderConteinerConnect)