import React from 'react';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {Route, withRouter} from "react-router-dom"
import {News} from "./components/News/News";
import {Setting} from "./components/Setting/Setting";
import {Music} from "./components/Music/Music";
import {UsersContainer} from "./components/Users/UsersConteiner";
import { ProfileConteinerConnect} from "./components/Profile/ProfoleConteiner";
import {HeaderConteiner} from "./components/Header/HeaderConteiner";
import {Login, LoginConteiner} from './components/login/login';
import DialogsConteiner from "./components/Dialog/DialogCONTEINER";
import {connect} from "react-redux";
import {getAuthThunkCreater, logoutThunkCreater} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializeTC} from "./redux/AppReducer";
import {StoreStateType} from "./redux/StoreRedux";
import {Preloader} from "./components/COMMON/Preloader/Preloader";


class App extends React.Component<any, any> {

    componentDidMount() {
        this.props.loginThunk()
    }
    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderConteiner/>
                <Nav/>
                <div className='app-wrap-cont'>
                    <Route path='/profile/:userID?'
                           render={() => <ProfileConteinerConnect/>}
                    />
                    <Route path='/dialogs'
                           render={() => <DialogsConteiner/>}
                    />
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
const mapStateToProps=(state: StoreStateType)=>({
    initialized: state.app.initialized
})


export const AppNew:any= compose (
    withRouter,
    connect(mapStateToProps, {loginThunk: initializeTC}))(App)
