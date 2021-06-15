import React from 'react';
import './App.css';
import {Nav} from "./UI/component/Nav/Nav";
import {Redirect, Route, Switch, withRouter} from "react-router-dom"
import {News} from "./UI/component/News/News";
import {Setting} from "./UI/component/Setting/Setting";
import {Music} from "./UI/component/Music/Music";
import {UsersContainer} from "./UI/component/Users/UsersConteiner";
import {HeaderConteiner} from "./UI/component/Header/HeaderConteiner";
import {LoginConteiner} from './UI/component/login/login';
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeTC} from "./BLL/AppReducer";
import {StoreStateType} from "./BLL/StoreRedux";
import {Preloader} from "./UI/component/Common/Preloader/Preloader";
import {WithSuspenseHOC} from "./UI/HOC/WithSuspense";
import {Grid} from "@material-ui/core";
import {FriendsConteiner} from "./UI/component/UsersFriends/UsersConteiner";
// лейзи говорит, что он компаненту не импортирую. когда ее надо будет отрисоввать, он запросится с сервера
const DialogsConteiner = React.lazy(() => import('./UI/component/Dialog/DialogCONTEINER'));
const ProfileConteinerConnect = React.lazy(() => import('./UI/component/Profile/ProfoleConteiner'));


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
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <HeaderConteiner/>
                    </Grid>
                    <Grid xs={12} sm={2}>
                        <Nav/>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <Switch>
                            <Route exact path='/'
                                   render={() => <Redirect to={'/profile'}/>}/>
                            <Route path='/profile/:userID?'
                                   render={WithSuspenseHOC(ProfileConteinerConnect)}/>
                            <Route path='/dialogs/:userID?'
                                   render={WithSuspenseHOC(DialogsConteiner)}/>
                            <Route exact path='/news'
                                   render={() => <News/>}
                            />
                            <Route path='/music'
                                   render={() => <FriendsConteiner/>}
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
                            <Route path='*'
                                   render={() => <div>404 not found</div>}
                            />
                        </Switch>
                    </Grid>
                </Grid>
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


