import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {logoutTC} from "../../../BLL/Reducers/authorization-reducer";
import {StoreStateType} from "../../../BLL/store";

class HeaderConteinerConnect extends React.Component<any, any> {
    refreshHeader(){
        window.location.reload();
    }
    componentDidMount() {

        this.refreshHeader()
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if(this.props.isAuthorization !==prevProps.isAuthorization )
            this.refreshHeader()
    }
    render() {
        return (
            <Header login={this.props.login} isAuthorization={this.props.isAuthorization} logOut={this.props.logOut}/>
        )
    }
}

const mapStateToProps = (state: StoreStateType) => ({
    isAuthorization: state.auth.isAuthorization,
    login: state.auth.login
})
let mapDispatchToProps = (dispatch: any) => {
    return {
        logOut: () => {
            dispatch(logoutTC())
        }
    }
}
export const HeaderConteiner = connect(mapStateToProps, mapDispatchToProps)(HeaderConteinerConnect)