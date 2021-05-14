import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {dataSetUserAC} from "../../redux/auth-reducer";
import {StoreStateType} from "../../redux/StoreRedux";
import {authMe} from "../DAL/api";

class HeaderConteinerConnect extends React.Component<any, any> {

    componentDidMount() {
        authMe().then(response => {
                debugger
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data
                    this.props.dataSetUser(id, email, login)
                }
            })
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
export const HeaderConteiner = connect(mapStateToProps, {dataSetUser: dataSetUserAC})(HeaderConteinerConnect)