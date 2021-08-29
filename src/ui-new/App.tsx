import React from 'react';
import s from "./app.module.scss"
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {Nav} from "./nav/nav";
import {LoginContainer} from "./login-page/login-container";
import {UsersContainer} from "./users-page/users-container";
import {StoreStateType} from "../BLL/store";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeTC} from "../BLL/Reducers/app-reducer";
import {HeaderContainer} from "./header/header-container";
import SettingContainer from "./setting/setting-container";
import {WithSuspenseHOC} from "./HOC/with-suspense";
import {Preloader} from "./Common/preloader/Preloader";


// лейзи говорит, что он компаненту не импортирую. когда ее надо будет отрисоввать, он запросится с сервера
const MessagesContainer = React.lazy(() => import('./messages-page/messages-container'));
const ProfileContainerConnect = React.lazy(() => import('./profile-page/profile-container'));


class App extends React.Component<any, any> {
// componentDidMount срабатывает один раз, когда компанента  вмонтируется
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
        // задача компаненты вернуть jsx(tsx) в зависимости от пропсов либо личного локального стейта
        // exact требует полное совпадение урла. Можно добавить <Switch>..роутер..</Switch> и тогда при первом совпадении будет отрисовка.
        // в этом случает лучше точные урлы ставить выше, а общие ниже
        return (<div className={s.block}>
                {window.location.pathname === '/'
                || window.location.pathname === '/login'
                    ? null
                    : <HeaderContainer/>}

                <div className={s.container}>
                    {window.location.pathname === '/'
                    || window.location.pathname === '/login'
                        ? null
                        : <Nav/>}


                    <Switch>

                        <Route path='/profile/:userID?'
                               render={WithSuspenseHOC(ProfileContainerConnect)}/>
                        <Route path='/messages/:userID?'
                               render={WithSuspenseHOC(MessagesContainer)}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <LoginContainer/>}/>
                        <Route path='/setting'
                               render={() => <SettingContainer/>}/>
                        <Route path='/'
                               render={() => <Redirect to={'/login'}/>}/>
                        <Route path='*'
                               render={() => <>not found</>}/>

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


