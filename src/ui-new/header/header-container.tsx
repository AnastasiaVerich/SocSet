import React from "react";
import {StoreStateType} from "../../BLL/store";
import {connect} from "react-redux";
import {Header} from "./header";
import {logout} from "../../BLL/Reducers/auth-watcher";

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
            dispatch(logout())
        }
    }
}
export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerConnect)