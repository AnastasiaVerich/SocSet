(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={block:"login_block__3_udS",container:"login_container__DukJL",rightPart:"login_rightPart__1bKCf",pathContainer:"login_pathContainer__1weu4",firstText:"login_firstText__1ZYqQ",secondText:"login_secondText__1g8Fr",oneAdvantage:"login_oneAdvantage__1ClLI",icon:"login_icon__W7cfQ",description:"login_description__Wrkfh",title:"login_title__3O8Pr",desc:"login_desc__3GLNQ",leftPart:"login_leftPart__QqwSH",iconNetwork:"login_iconNetwork__2f7lo",welcome:"login_welcome__3d5N8"}},102:function(e,t,n){e.exports={block:"priloader_block__1msor",pril:"priloader_pril__1JhG9"}},105:function(e,t,n){"use strict";t.a=n.p+"static/media/no_image.4a9ff6fc.png"},106:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return O})),n.d(t,"f",(function(){return g})),n.d(t,"e",(function(){return _})),n.d(t,"d",(function(){return v}));var r=n(8),a=n.n(r),c=n(14),s=n(75),o=n(4),i=n(13),u=n(37),l="ADD_POST",d="DELETE_POST",f="SET_USER_PROFILE",p="SET_STATUS",j="SAVE_PHOTO",b={profile:null,postsDataArray:[{id:1,post:"\u041f\u0440\u0438\u0432\u0435\u0442\u0438\u043a\u0438??",likeCount:1},{id:2,post:"\u0420\u0435\u0431\u044f\u0442\u0430 \u0430\u0443\u0443\u0443...",likeCount:0},{id:3,post:"\u042d\u0442\u043e \u043c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442!",likeCount:1200}],status:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n=t.massages;return Object(o.a)(Object(o.a)({},e),{},{postsDataArray:[{id:4,post:n,likeCount:10}].concat(Object(s.a)(e.postsDataArray))});case d:return Object(o.a)(Object(o.a)({},e),{},{postsDataArray:e.postsDataArray.filter((function(e){return e.id!==t.id}))});case f:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case p:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case j:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.e.getProfile(e);case 2:r=t.sent,n(x(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getStatus(e);case 2:r=t.sent,n(w(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.c.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(w(e)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("\u044f \u043f\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u0438\u043b \u043e\u0448\u0438\u0431\u043a\u0443 "),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.updatePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n(N(r.data.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,i.c.updateInfoProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(m(c)),t.next=10;break;case 8:return n(Object(u.a)("editProfile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject());case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},x=function(e){return{type:f,profile:e}},w=function(e){return{type:p,status:e}},N=function(e){return{type:j,photos:e}}},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return j}));var r=n(8),a=n.n(r),c=n(14),s=n(4),o=n(13),i="GET_SELECTED_DIALOG",u="GET_USERS_TALKED_WITH",l={recipientId:null,messages:null,oneMessage:"",users:null},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;if(!e)return e;switch(t.type){case i:var n=Object(s.a)({},e);return null!==e.messages?Object(s.a)(Object(s.a)({},e),{},{messages:t.items.concat(n.messages)}):Object(s.a)(Object(s.a)({},e),{},{messages:t.items});case u:return Object(s.a)(Object(s.a)({},e),{},{users:t.usersArray});default:return e}},f=function(e,t,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.b.getSelectedDialog(e,t,n);case 2:s=r.sent,c(b(s.items));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},p=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.b.sendMessage(e,t);case 2:0===n.sent.data.resultCode&&r(f(e,1,20));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},j=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.getUsersTalkedWith();case 2:n=e.sent,t(h(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e){return{type:i,items:e}},h=function(e){return{type:u,usersArray:e}}},13:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n(140),a=n.n(r).a.create({withCredentials:!0,headers:{"API-KEY":"603ef8c0-4933-4294-ab5f-b170d3ebe6d8"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t),{}).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e),{},{}).then((function(e){return e.data}))},getProfile:function(e){return s.getProfile(e)},unFollow:function(e){return a.delete("follow/".concat(e),{}).then((function(e){return e.data}))},getFriendsUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t,"&friend=true"),{}).then((function(e){return e.data}))}},s={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("/profile/status/".concat(e))},updateStatus:function(e){return a.put("/profile/status",{status:e})},updatePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},updateInfoProfile:function(e){return a.put("/profile",e)}},o={me:function(){return a.get("auth/me",{})},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r},{})},logout:function(){return a.delete("auth/login",{})}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}},u={getSelectedDialog:function(e,t,n){return a.get("dialogs/".concat(e,"/messages?page=").concat(t,"&count=").concat(n),{}).then((function(e){return e.data}))},sendMessage:function(e,t){return a.post("dialogs/".concat(e,"/messages"),{body:t},{})},getUsersTalkedWith:function(){return a.get("dialogs",{}).then((function(e){return e.data}))}}},17:function(e,t,n){e.exports={block:"nav_block__1GB-e",butMenu:"nav_butMenu__1fLrr",d1:"nav_d1__1-xBn",d2:"nav_d2__YiG9W",d3:"nav_d3__u7mit",container1:"nav_container1__POSVx",container:"nav_container__2NfBV",item:"nav_item__2Fqq1",logOut:"nav_logOut__3ORVn"}},174:function(e,t,n){},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return _})),n.d(t,"j",(function(){return v})),n.d(t,"g",(function(){return N})),n.d(t,"d",(function(){return k})),n.d(t,"e",(function(){return P})),n.d(t,"f",(function(){return C})),n.d(t,"i",(function(){return y})),n.d(t,"h",(function(){return F}));var r=n(8),a=n.n(r),c=n(14),s=n(75),o=n(4),i=n(13),u="FOLLOW",l="UN_FOLLOW",d="SET_USERS",f="SET_CURRENT_PAGE",p="SET_TOTAL_USERS_COUNT",j="TOGGLE_IS_FETCHING",b="SET_USERID_FOR_DISABLE",h="TOGGLE_IS_FOLLOW",m={usersData:[],pageSize:30,totalUsersCount:0,currentPages:1,isFetching:!0,userIdForDisabled:[],isFollow:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;if(!e)return e;switch(t.type){case h:return Object(o.a)(Object(o.a)({},e),{},{isFollow:t.follow});case u:return Object(o.a)(Object(o.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.userId?Object(o.a)(Object(o.a)({},e),{},{followed:!0}):e}))});case l:return Object(o.a)(Object(o.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.userId?Object(o.a)(Object(o.a)({},e),{},{followed:!1}):e}))});case d:return Object(o.a)(Object(o.a)({},e),{},{usersData:Object(s.a)(t.users)});case f:return Object(o.a)(Object(o.a)({},e),{},{currentPages:t.currentPages});case p:return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.totalCounter});case j:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case b:return Object(o.a)(Object(o.a)({},e),{},{userIdForDisabled:t.IsFollowingProgress?[t.userId]:[]});default:return e}},g=function(e,t,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(c(y(!0)),!n){r.next=7;break}return r.next=4,i.e.getFriendsUsers(e,t);case 4:s=r.sent,r.next=10;break;case 7:return r.next=9,i.e.getUsers(e,t);case 9:s=r.sent;case 10:c(y(!1)),c(N(s.items)),c(P(s.totalCount));case 13:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(C(!0,e)),t.next=3,i.e.follow(e);case 3:0===t.sent.resultCode&&n(x(e)),n(C(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(C(!0,e)),t.next=3,i.e.unFollow(e);case 3:0===t.sent.resultCode&&n(w(e)),n(C(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return{type:u,userId:e}},w=function(e){return{type:l,userId:e}},N=function(e){return{type:d,users:e}},k=function(e){return{type:f,currentPages:e}},P=function(e){return{type:p,totalCounter:e}},C=function(e,t){return{type:b,IsFollowingProgress:e,userId:t}},y=function(e){return{type:j,isFetching:e}},F=function(e){return{type:h,follow:e}}},27:function(e,t,n){e.exports={loginForm:"login-form_loginForm__3Nfi0",input:"login-form_input__624wX",rememberMe:"login-form_rememberMe__2m9Np",checkbox:"login-form_checkbox__2xz7W",captcha:"login-form_captcha__lzo6i",button:"login-form_button__1LSoq"}},28:function(e,t,n){e.exports={friendContainer:"one-user_friendContainer__1VDfw",ava:"one-user_ava__36pc4",name:"one-user_name__eLmQa",butt:"one-user_butt__n9E_x",butItem:"one-user_butItem__3lgTc",viewProfileFriend:"one-user_viewProfileFriend__104mU"}},29:function(e,t,n){e.exports={block:"header_block__GGVhJ",icon:"header_icon__2UwuE",iconNetwork:"header_iconNetwork__2-Iwd",container:"header_container__YiPjg",info:"header_info__2xgWL",ava:"header_ava__1FFaj",unLog:"header_unLog__104om",btn:"header_btn__2nH68"}},297:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(70),s=n.n(c),o=(n(174),function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,307)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))}),i=n(11),u=n(106),l=n(21),d=n(8),f=n.n(d),p=n(14),j=n(4),b=n(13),h=n(37),m="SET_USER_DATA",O="CAPTCHA",g={userId:null,email:null,login:null,isAuthorization:!1,captchaURl:null},_=function(){return function(){var e=Object(p.a)(f.a.mark((function e(t){var n,r,a,c,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,s=r.login,t(w(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){return function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.logout();case 2:0===e.sent.data.resultCode&&t(w(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(){return function(){var e=Object(p.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.d.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(N(r));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e,t,n,r){return{type:m,userId:e,email:t,login:n,isAuthorization:r}},N=function(e){return{type:O,captchaURl:e}},k=n(141),P=n(139),C="SET_INITIALIZED",y={initialized:!1},F=function(){return{type:C}},I=n(115),A=Object(i.c)({profile:u.a,dialog:I.a,usersPage:l.a,auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;if(!e)return e;switch(t.type){case m:return Object(j.a)(Object(j.a)({},e),{},{userId:t.userId,email:t.email,login:t.login,isAuthorization:t.isAuthorization});case O:return Object(j.a)(Object(j.a)({},e),{},{captchaURl:t.captchaURl});default:return e}},form:P.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;if(!e)return e;switch(t.type){case C:return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}}}),S=window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,E=Object(i.e)(A,S(Object(i.a)(k.a)));window.store=E;var U=n(15),T=n(18),D=n(43),z=n(44),L=n(46),M=n(45),R=n(97),G=n.n(R),W=n(12),B=n(17),H=n.n(B),V=n(26),J=n(1),Q=function(){var e=Object(U.c)();return Object(J.jsxs)("div",{className:H.a.block,children:[Object(J.jsxs)("div",{className:H.a.butMenu,children:[Object(J.jsx)("div",{className:H.a.d1}),Object(J.jsx)("div",{className:H.a.d2}),Object(J.jsx)("div",{className:H.a.d3})]}),Object(J.jsxs)("div",{className:H.a.container1,children:[Object(J.jsxs)("div",{className:H.a.container,children:[Object(J.jsx)("div",{className:H.a.item,children:Object(J.jsx)(T.b,{to:"/profile",className:H.a.buttonItem,children:Object(J.jsx)(V.f,{})})}),Object(J.jsx)("div",{className:H.a.item,children:Object(J.jsx)(T.b,{to:"/messages",className:H.a.buttonItem,children:Object(J.jsx)(V.b,{})})}),Object(J.jsx)("div",{className:H.a.item,children:Object(J.jsx)(T.b,{to:"/users",className:H.a.buttonItem,children:Object(J.jsx)(V.e,{})})}),Object(J.jsx)("div",{className:H.a.item,children:Object(J.jsx)(V.c,{})})]}),Object(J.jsx)(T.b,{to:"/login",className:H.a.logOut,onClick:function(){e(v())},children:"LogOut"})]})]})},q=n(10),K=n.n(q),X=n(95),Y=n(137),Z=n(73),$=n(27),ee=n.n($),te=n(51),ne=Object(Z.a)(50),re=Object(Y.a)({form:"Login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.x;return Object(J.jsxs)("form",{onSubmit:t,className:ee.a.loginForm,children:[Object(J.jsx)(X.a,{placeholder:"Email",component:te.a,name:"email",validate:[Z.b,ne],props:{className:ee.a.input}}),Object(J.jsx)(X.a,{placeholder:"Password",component:te.a,name:"password",validate:[Z.b,ne],props:{className:ee.a.input}}),Object(J.jsxs)("div",{className:ee.a.rememberMe,children:[Object(J.jsx)(X.a,{type:"checkbox",component:te.a,name:"rememberMe",validate:[ne],props:{className:ee.a.checkbox}})," Remember"]}),r&&Object(J.jsx)("img",{className:ee.a.captcha,src:r}),r&&Object(te.c)("captcha URl","captcha",[],te.a,{className:ee.a.input}),n&&Object(J.jsx)("div",{className:ee.a.formSunnierError,children:n}),Object(J.jsx)("button",{className:ee.a.button,type:"submit",children:"Login"})]})})),ae=n(298),ce=n(299),se=Object(U.b)((function(e){return{isAuth:e.auth.isAuthorization,captcha:e.auth.captchaURl}}),(function(e){return{login:function(t,n,r,a){e(function(e,t,n,r){return function(){var a=Object(p.a)(f.a.mark((function a(c){var s,o;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.login(e,t,n,r);case 2:0===(s=a.sent).data.resultCode?c(_()):(10===s.data.resultCode&&c(x()),o=s.data.messages.length>0?s.data.messages[0]:"some error",c(Object(h.a)("Login",{_error:o})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(t,n,r,a))}}}))((function(e){if(e.isAuth)return Object(J.jsx)(W.a,{to:"/profile"});return Object(J.jsx)("div",{className:K.a.block,children:Object(J.jsxs)("div",{className:K.a.container,children:[Object(J.jsx)("div",{className:K.a.rightPart,children:Object(J.jsxs)("div",{className:K.a.pathContainer,children:[Object(J.jsx)("div",{className:K.a.firstText,children:"Join the club"}),Object(J.jsx)("div",{className:K.a.secondText,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus."}),Object(J.jsxs)("div",{className:K.a.oneAdvantage,children:[Object(J.jsxs)("div",{className:K.a.icon,children:[" ",Object(J.jsx)(ae.a,{})]}),Object(J.jsxs)("div",{className:K.a.description,children:[Object(J.jsx)("div",{className:K.a.title,children:"Community"}),Object(J.jsx)("div",{className:K.a.desc,children:"At vero eos et accusamus et."})]})]}),Object(J.jsxs)("div",{className:K.a.oneAdvantage,children:[Object(J.jsx)("div",{className:K.a.icon,children:Object(J.jsx)(V.d,{})}),Object(J.jsxs)("div",{className:K.a.description,children:[Object(J.jsx)("div",{className:K.a.title,children:"Online shop"}),Object(J.jsx)("div",{className:K.a.desc,children:"At vero eos et accusamus et."})]})]}),Object(J.jsxs)("div",{className:K.a.oneAdvantage,children:[Object(J.jsxs)("div",{className:K.a.icon,children:[" ",Object(J.jsx)(ce.a,{})]}),Object(J.jsxs)("div",{className:K.a.description,children:[Object(J.jsx)("div",{className:K.a.title,children:"Job search"}),Object(J.jsx)("div",{className:K.a.desc,children:"At vero eos et accusamus et."})]})]})]})}),Object(J.jsx)("div",{className:K.a.leftPart,children:Object(J.jsxs)("div",{className:K.a.pathContainer,children:[Object(J.jsx)("img",{className:K.a.iconNetwork,src:"https://mythemestore.com/beehive-preview/wp-content/uploads/2020/07/logo-icon.svg"}),Object(J.jsx)("div",{className:K.a.welcome,children:"Welcome"}),Object(J.jsx)(re,{onSubmit:function(t){console.log(t),e.login(t.email,t.password,t.rememberMe,t.captcha)},x:e.captcha})]})})]})})})),oe=n(39),ie=n(34),ue=n.n(ie),le=n(28),de=n.n(le),fe=n(105),pe=function(e){var t=e.user;return Object(J.jsxs)("div",{className:de.a.friendContainer,children:[Object(J.jsx)("img",{className:de.a.ava,src:null!=t.photos.small?t.photos.small:fe.a}),Object(J.jsx)("div",{className:de.a.name,children:t.name}),Object(J.jsxs)("div",{className:de.a.butt,children:[t.followed?Object(J.jsx)("button",{className:de.a.butItem,disabled:e.IsFollowingProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:Object(J.jsx)(V.h,{})}):Object(J.jsx)("button",{className:de.a.butItem,disabled:e.IsFollowingProgress.some((function(e){return e===t.id})),onClick:function(){e.follower(t.id)},children:Object(J.jsx)(V.g,{})}),Object(J.jsx)(T.b,{to:"/messages/"+t.id,className:de.a.butItem,children:Object(J.jsx)(V.a,{})})]}),Object(J.jsx)(T.b,{className:de.a.viewProfileFriend,to:"/profile/"+t.id,children:"view profile"})]})},je=n(138),be=n(52),he=n.n(be),me=n(300),Oe=function(e){for(var t=Math.ceil(e.totalItemsCount/e.pagesize),n=[],a=1;a<=t;a++)n.push(a);var c=Math.ceil(t/10),s=Object(r.useState)(1),o=Object(je.a)(s,2),i=o[0],u=o[1],l=10*(i-1)+1,d=10*i;return Object(J.jsxs)("div",{className:he.a.block,children:[i>1&&Object(J.jsx)("div",{className:he.a.btn,onClick:function(){u(i-1)},children:Object(J.jsx)(me.b,{})}),n.filter((function(e){return e>=l&&e<=d})).map((function(t){return Object(J.jsx)("div",{className:e.currentPages===t?he.a.selectPage:he.a.page,onClick:function(n){e.onPageChanget(t)},children:t},t)})),c>i&&Object(J.jsx)("div",{className:he.a.btn,onClick:function(){u(i+1)},children:Object(J.jsx)(me.a,{})})]})},ge=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pagesize),n=[],r=1;r<=t;r++)n.push(r);return Object(J.jsx)("div",{className:ue.a.block,children:Object(J.jsxs)("div",{className:ue.a.container,children:[Object(J.jsxs)("div",{className:ue.a.search,children:[Object(J.jsx)("input",{className:ue.a.inp,placeholder:"Search Members"}),Object(J.jsx)("div",{className:ue.a.spn})]}),Object(J.jsx)("div",{className:ue.a.viewFriends,children:e.users.map((function(t){return Object(J.jsx)(pe,{user:t,unfollow:e.unfollow,IsFollowingProgress:e.IsFollowingProgress,follower:e.follower})}))}),Object(J.jsx)("div",{className:ue.a.paginator,children:Object(J.jsx)(Oe,{pagesize:e.pagesize,totalItemsCount:e.totalUsersCount,onPageChanget:e.onPageChanget,currentPages:e.currentPages})})]})})},_e=n(42),ve=function(e){Object(L.a)(n,e);var t=Object(M.a)(n);function n(){var e;Object(D.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanget=function(t){e.props.getUsersThunk(t,e.props.pagesize,e.props.isFollow),e.props.SetCurrentPage(t)},e}return Object(z.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPages,this.props.pagesize,!1)}},{key:"componentDidUpdate",value:function(e,t,n){this.props.isFollow!==e.isFollow&&this.props.getUsersThunk(this.props.currentPages,this.props.pagesize,this.props.isFollow)}},{key:"render",value:function(){return this.props.isFetching?Object(J.jsx)(_e.a,{}):Object(J.jsx)(J.Fragment,{children:Object(J.jsx)(ge,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,currentPages:this.props.currentPages,pagesize:this.props.pagesize,follower:this.props.follower,unfollow:this.props.unfollow,onPageChanget:this.onPageChanget,IsFollowingProgress:this.props.IsFollowingProgress,setIsFollowingProgress:this.props.setIsFollowingProgress,isFollow:this.props.isFollow,FiendsAC:this.props.FiendsAC})})}}]),n}(a.a.Component),xe=Object(i.d)(Object(U.b)((function(e){return{users:Object(oe.f)(e),pagesize:Object(oe.d)(e),totalUsersCount:Object(oe.e)(e),currentPages:Object(oe.a)(e),isFetching:Object(oe.b)(e),IsFollowingProgress:Object(oe.c)(e),isFollow:e.usersPage.isFollow}}),{follower:l.b,unfollow:l.j,setUsers:l.g,SetCurrentPage:l.d,setTotalUsersCount:l.e,setIsFollowingProgress:l.f,toogleIsFetching:l.i,getUsersThunk:l.c,FiendsAC:l.h}))(ve),we=function(e){return function(t){return Object(J.jsx)(a.a.Suspense,{fallback:Object(J.jsx)(_e.a,{}),children:Object(J.jsx)(e,Object(j.a)({},t))})}},Ne=n(29),ke=n.n(Ne),Pe=function(e){return Object(J.jsxs)("div",{className:ke.a.block,children:[Object(J.jsx)("div",{className:ke.a.icon,children:Object(J.jsx)("img",{className:ke.a.iconNetwork,src:"https://mythemestore.com/beehive-preview/wp-content/uploads/2020/07/logo-icon.svg"})}),Object(J.jsxs)("div",{className:ke.a.container,children:[e.isAuthorization?Object(J.jsx)("div",{className:ke.a.info,children:Object(J.jsx)("div",{className:ke.a.name,children:e.login})}):Object(J.jsx)(J.Fragment,{}),Object(J.jsx)("div",{className:ke.a.unLog,children:e.isAuthorization?Object(J.jsx)(J.Fragment,{children:Object(J.jsx)(T.b,{to:"/login",className:ke.a.btn,onClick:e.logOut,children:"LogOut"})}):Object(J.jsx)(J.Fragment,{})})]})]})},Ce=function(e){Object(L.a)(n,e);var t=Object(M.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(z.a)(n,[{key:"refreshHeader",value:function(){window.location.reload()}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t,n){this.props.isAuthorization!==e.isAuthorization&&this.refreshHeader()}},{key:"render",value:function(){return Object(J.jsx)(Pe,{login:this.props.login,isAuthorization:this.props.isAuthorization,logOut:this.props.logOut})}}]),n}(a.a.Component),ye=Object(U.b)((function(e){return{isAuthorization:e.auth.isAuthorization,login:e.auth.login}}),(function(e){return{logOut:function(){e(v())}}}))(Ce),Fe=a.a.lazy((function(){return Promise.all([n.e(6),n.e(4)]).then(n.bind(null,313))})),Ie=a.a.lazy((function(){return Promise.all([n.e(5),n.e(3)]).then(n.bind(null,312))})),Ae=function(e){Object(L.a)(n,e);var t=Object(M.a)(n);function n(){var e;Object(D.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandleError=function(e){alert(e)},e}return Object(z.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandleError)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandleError)}},{key:"render",value:function(){return this.props.initialized?Object(J.jsxs)("div",{className:G.a.block,children:["/"===window.location.pathname||"/login"===window.location.pathname?null:Object(J.jsx)(ye,{}),Object(J.jsxs)("div",{className:G.a.container,children:["/"===window.location.pathname||"/login"===window.location.pathname?null:Object(J.jsx)(Q,{}),Object(J.jsxs)(W.d,{children:[Object(J.jsx)(W.b,{path:"/profile/:userID?",render:we(Ie)}),Object(J.jsx)(W.b,{path:"/messages/:userID?",render:we(Fe)}),Object(J.jsx)(W.b,{path:"/users",render:function(){return Object(J.jsx)(xe,{})}}),Object(J.jsx)(W.b,{path:"/login",render:function(){return Object(J.jsx)(se,{})}}),Object(J.jsx)(W.b,{path:"/",render:function(){return Object(J.jsx)(se,{})}}),Object(J.jsx)(W.b,{path:"*",render:function(){return Object(J.jsx)(J.Fragment,{children:"not found"})}})]})]})]}):Object(J.jsx)(_e.a,{})}}]),n}(a.a.Component),Se=Object(i.d)(W.g,Object(U.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(_());Promise.all([t]).then((function(){e(F())}))}}}))(Ae);s.a.render(Object(J.jsx)(U.a,{store:E,children:Object(J.jsx)(T.a,{children:Object(J.jsx)(Se,{})})}),document.getElementById("root")),o()},34:function(e,t,n){e.exports={block:"users_block__2UOdh",container:"users_container__22NfB",search:"users_search__1pKs8",inp:"users_inp__15EnU",spn:"users_spn__3G9ai",viewFriends:"users_viewFriends__bDaB3",paginator:"users_paginator__1c1rK"}},39:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u}));var r=n(144),a=Object(r.a)((function(e){return e.usersPage.usersData}),(function(e){return e.filter((function(e){return!0}))})),c=function(e){return e.usersPage.pageSize},s=function(e){return e.usersPage.totalUsersCount},o=function(e){return e.usersPage.currentPages},i=function(e){return e.usersPage.isFetching},u=function(e){return e.usersPage.userIdForDisabled}},40:function(e,t,n){e.exports={formControl:"forms_formControl__3EzeQ",error:"forms_error__2OhMd",formSunnierError:"forms_formSunnierError__1xl7f"}},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n.p+"static/media/looading.c1b8565f.gif",a=(n(2),n(102)),c=n.n(a),s=n(1),o=function(){return Object(s.jsx)("div",{className:c.a.block,children:Object(s.jsx)("img",{src:r,className:c.a.pril})})}},51:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d}));var r=n(4),a=n(77),c=(n(2),n(40)),s=n.n(c),o=n(95),i=n(1),u=function(e){var t=e.input,n=e.meta,c=Object(a.a)(e,["input","meta"]),o=n.touched&&n.error;return Object(i.jsxs)("div",{className:s.a.formControl+" "+(o?s.a.error:""),children:[Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),c)),Object(i.jsx)("div",{children:o&&Object(i.jsx)("span",{children:n.error})})]})},l=function(e){var t=e.input,n=e.meta,c=Object(a.a)(e,["input","meta"]),o=n.touched&&n.error;return Object(i.jsxs)("div",{className:s.a.formControl+" "+(o?s.a.error:""),children:[Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),c)),Object(i.jsx)("div",{children:o&&Object(i.jsx)("span",{children:n.error})})]})},d=function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(i.jsxs)("div",{children:[Object(i.jsx)(o.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},c))," ",s]})}},52:function(e,t,n){e.exports={block:"Paginator_block__16mGz",btn:"Paginator_btn__2k-up",selectPage:"Paginator_selectPage__hgCCW",page:"Paginator_page__1Vktn"}},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"max lenght is ".concat(e," symbols")}}},97:function(e,t,n){e.exports={block:"app_block__sEMSB",container:"app_container__2QXCc"}}},[[297,1,2]]]);
//# sourceMappingURL=main.47f44b73.chunk.js.map