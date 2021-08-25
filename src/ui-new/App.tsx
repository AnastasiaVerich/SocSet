import React from 'react';
import s from "./app.module.scss"
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {Login} from "./login-page/login";
import {Profile} from "./profile-page/profile";
import {Messages} from "./messages-page/messages";
import {Users} from "./users-page/users";
import {Header} from "./header/header";
import {Nav} from "./nav/nav";
import {LoginContainer} from "./login-page/login-container";
/*
import ProfileContainerConnect from "./profile-page/profile-container";
*/
import {UsersContainer} from "./users-page/users-container";
import {Preloader} from "./Common/pr/Preloader";
import {WithSuspenseHOC} from "../UI/HOC/WithSuspense";
import {StoreStateType} from "../BLL/store";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeTC} from "../BLL/Reducers/app-reducer";
import {HeaderConteiner} from "./header/header-container";
/*
import MessagesContainer from "./messages-page/messages-container";
*/

// лейзи говорит, что он компаненту не импортирую. когда ее надо будет отрисоввать, он запросится с сервера
const MessagesContainer = React.lazy(() => import('./messages-page/messages-container'));

const ProfileContainerConnect = React.lazy(() => import('./profile-page/profile-container'));




class App extends React.Component<any, any> {
// componentDidMount срабатывает один раз, когда К. вмонтируется
    catchAllUnhandleError = (promiseRejectEvent: PromiseRejectionEvent) => {
        alert(promiseRejectEvent)
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandleError)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandleError)

    }

    render() {
        // при первой загрузке у на нет данных, показываем поэтому крутилку
        if (!this.props.initialized) {
            return <Preloader/>
        }
// задача К. вернуть jsx(tsx) в зависимости от пропсов либо личного локального стейта
        // exact требует полное совпадение урла. Можно добавить <Switch>..роутер..</Switch> и тогда при первом совпадении будет отрисовка.
        // в этом случает лучше точные урлы ставить выше, а общие ниже
        return (<div className={s.block}>
{/*
                <HeaderConteiner/>
*/}
                <div className={s.container}>
                    <Nav/>
                    <Switch>
                        <Route path='/profile/:userID?'
                               render={WithSuspenseHOC(ProfileContainerConnect)}/>
                        <Route path='/messages/:userID?'
                               render={WithSuspenseHOC(MessagesContainer)}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <LoginContainer/>}/>
                        <Route path='*'
                               render={() => <LoginContainer/>}/>

                    </Switch>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state: StoreStateType) => ({
    initialized: state.app.initialized
})
// compose создает контейнернкю компанету, применяя один за одним HOCи=>
// (компанента высшего порядка-это функция, которая принимает одну компаненту и возвращает другую компаненту.
// Это нужно для того, что бы наша компанента получила какие-то данные)

// connect  дает данные из Store с помощью mapStateToProps и mapDispatchToProps
// withRouter дает компоненте данные из url
export const AppContainer: any = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp: initializeTC}))(App)


