import React from 'react';
import './App.css';
import {Nav} from "./UI/component/Nav/Nav";
import {Route, withRouter} from "react-router-dom"
import {News} from "./UI/component/News/News";
import {Setting} from "./UI/component/Setting/Setting";
import {Music} from "./UI/component/Music/Music";
import {UsersContainer} from "./UI/component/Users/UsersConteiner";
import {HeaderConteiner} from "./UI/component/Header/HeaderConteiner";
import {LoginConteiner} from './UI/component/login/login';
//import  ProfileConteinerConnect from "./components/Profile/ProfoleConteiner";
//import DialogsConteiner from "./components/Dialog/DialogCONTEINER";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeTC} from "./BLL/AppReducer";
import {StoreStateType} from "./BLL/StoreRedux";
import {Preloader} from "./UI/component/Common/Preloader/Preloader";
import {WithSuspenseHOC} from "./UI/HOC/WithSuspense";

const DialogsConteiner = React.lazy(() => import('./UI/component/Dialog/DialogCONTEINER'));
const ProfileConteinerConnect = React.lazy(() => import('./UI/component/Profile/ProfoleConteiner'));


class App extends React.Component<any, any> {

    componentDidMount() {
        this.props.loginThunk()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderConteiner/>
                <Nav/>
                <div className='app-wrap-cont'>
                    <Route path='/profile/:userID?'
                           render={WithSuspenseHOC(ProfileConteinerConnect)}/>
                    <Route path='/dialogs'
                           render={WithSuspenseHOC(DialogsConteiner)}/>
                    <Route path='/news'
                           render={() => <News/>}
                    />
                    <Route path='/music'
                           render={() => <Music/>}
                    />
                    <Route path='/findUsers'
                           render={() => <UsersContainer/>}
                    />
                    <Route path='/setting'
                           render={() => <Setting/>}
                    />
                    <Route path='/login'
                           render={() => <LoginConteiner/>}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreStateType) => ({
    initialized: state.app.initialized
})


export const AppNew: any = compose(
    withRouter,
    connect(mapStateToProps, {loginThunk: initializeTC}))(App)
