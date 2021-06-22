import React from 'react';
import './App.css';
import {Nav} from "./UI/component/Nav/Nav";
import {Redirect, Route, Switch, withRouter} from "react-router-dom"
import {UsersContainer} from "./UI/component/Users/UsersConteiner";
import {HeaderConteiner} from "./UI/component/Header/HeaderConteiner";
import {LoginContainer} from './UI/component/login/login';
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeTC} from "./BLL/Reducers/app-reducer";
import {StoreStateType} from "./BLL/store";
import {Preloader} from "./UI/component/Common/Preloader/Preloader";
import {WithSuspenseHOC} from "./UI/HOC/WithSuspense";
import {AppBar, Button, Container, Grid, IconButton, MenuItem, Paper, Toolbar, Typography} from "@material-ui/core";

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
                <Grid container spacing={2} >
                  <Grid item xs={12}>
                <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuItem/>
                    </IconButton>
                    <Typography variant="h6">
                        SocSet
                    </Typography>
                    <Typography variant="h6">
                        <HeaderConteiner/>
                    </Typography>
                </Toolbar>
            </AppBar>
                  </Grid>

                    <Grid item xs={10} sm={2}>
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

                            <Route path='/findUsers'
                                   render={() => <UsersContainer/>}
                            />
                            <Route path='/login'
                                   render={() => <LoginContainer/>}
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


