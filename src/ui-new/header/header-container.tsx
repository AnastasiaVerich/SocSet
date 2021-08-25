import React from "react";
import {StoreStateType} from "../../BLL/store";
import {logoutTC} from "../../BLL/Reducers/authorization-reducer";
import {connect} from "react-redux";
import {Header} from "./header";

class HeaderContainerConnect extends React.Component<any, any> {
    refreshHeader(){
        window.location.reload();
    }
    componentDidMount() {


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
export const HeaderConteiner = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerConnect)