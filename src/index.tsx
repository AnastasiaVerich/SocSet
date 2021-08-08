import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppContainer} from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./BLL/store";
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Login} from "./ui-new/login-page/login";

// BrowserRouter добовляет
// Provider добовляет store в контекст, из которого все компаненты могут брать данные ( наприер стор, тема темная/светлая, язык)
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {/*<AppContainer/>*/}
            <Login/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
reportWebVitals();
// реакт библиотека- это библиотека, которая эффективно отрисовывает html. Эффективно, в плане она не перерисовывает те элементы, которые не надо
// реакт загружается и живет в браузере
//компанента возвращает тсикс или джсикс

//сайдэффект= запросы на сервер, сетТаймаут, обращение к дом элементам на прямую
//  шудКомпонентАпдейт - реакт.Мемо
// пьюрКомпонент
//
//
///
// редакс это система стейт менеджмента, то что позволчет управлять удобно стейто
// редакс состоит из одного главного обьекта стор(хранилище,обьект ооп) .В стор мы засовываем редьюсеры, из которых он будет состоять.
// редьюсеры это функции преобразователи. они получают на входе
// экшен(обьект, инструкция, у которого минимум есть тип и мб данные) и часть стейта и преобразовывает стейт
// делает преобраования он иммутабельно( изменяет не стейт а его копию)
//
// стор(хранилище) обьект ооп,  с ним можно взаимодействовать через его интерфейс( методы и свойства)
// есть три главных метода:
//getState позволяет получить из стора актуальный стейт
//subscribe позволяет подписаться подпищику на изменение стейта
//dispatch позволяет приобразовать стейт


// реакт редакс для связки реакта и редакса. обеспечивает связь коспоненты со стором.
// на помощь для связи комп. со стором приходит фунция connect
// connect это хок. он создает вокгруг нашей компаненты другую компаненту. она снабжает нашу компаненты
// connect(mstp, mdtp). mstp берет из стейта часть, которая использоваться будет в нашей компаненте( в нашу комп приходит это впропсах)
// mdtp берем функцию (метод диспатч у стора) , который возвращает нам колбеки в которых диспатчи
// в новой компаненте есть доступ к стору, у которого она может вызывать подписку на изменения стейта.
// все обернута провайдером из р-р для того, что бы у всего приложения был доступ к стейту в контексте





// node js это альтернатива браузеру. это платформа, позолябщая писать на js  любые приложения. его моно загрузить в телевизор холодильник пылесос север..
// конкретно нам он нужен для подключения куси пакетов

// компаненты
// фунцкциональная компонента это функц принимающая пропсы и возврашает jsx

// классовая компанента.

// фунция мар принимает один обькт возвращает массив других обьектов (всегда добовлять key)
// идентпотентность или детерменированность - получаем на входе одно и тоже и на выходе получаем одно и тоже
// в чистой функции нет сайдэффектов, локального стейта
// имьютабельность - функция не может менять то, что в нее приходит.



// SERVER API
// интрфейс сервера- это эндпоинты(урлы, на которые мы делаем запрос).рест апи это правила. какой тип запроса, какой ответ будет
// делаем запросы с помощью axios. нам возвращаются промисы. у промиса  есть метод then, в которую мы передаем коллбек , который срабатывает когдп промис выполнился

//ajax запросы выносим в контейнерную компаненту. контейнерных коспанент может быть много.
// хок withRouter. тягает данные из урла. как коннект

// thunk- это функция, которая принимает метод диспаитч, и внутри себя делаем асинхронную опирация и разные диспатчи
// используем санк креатер. санку можно задиспатчить. 3
//что бы ui не общался ни с кем, кроме блл.


// редакс форм. есть пакет релакс форм реакт. он для того, что бы работал
// флакс круговорот(ничего не появляется в юай без появления этого сначала в блл. например логин и пароль)


// селекторы для mstp в connect. они для того случая, если очень тяжело достаются данные из стейта. что бы не засорять мстпya