(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{1:function(e,a,t){e.exports={block:"profile_block__3TeRo",backgroundImage:"profile_backgroundImage___Dtpd",topPart:"profile_topPart__1WCz3",avatarContainer:"profile_avatarContainer__31rxw",avatar:"profile_avatar__2jNWb",buttons:"profile_buttons__2PLqJ",buttonItem:"profile_buttonItem__13Myt",mainBlock:"profile_mainBlock__3Pxw9",middlePart:"profile_middlePart__bbHAV",name:"profile_name__2Pxmc",menu:"profile_menu__Uf_Gj",menuItem:"profile_menuItem__3QSzV",bottomPart:"profile_bottomPart__ZbAIW",info:"profile_info__3O-9C",firstInfo:"profile_firstInfo__18YNR",countFriends:"profile_countFriends__LANiY",pp:"profile_pp__1WUK_",isFindWork:"profile_isFindWork__ZqSrB",secondInfo:"profile_secondInfo__2kfWJ",title:"profile_title__1Svl2",photos:"profile_photos__1hE1j",menuSelection:"profile_menuSelection__1waoy",viewProfile:"profile_viewProfile__19Ael",titleMenu:"profile_titleMenu__sDwjX",selectionMainContainer:"profile_selectionMainContainer__3QNAB",titleColumn:"profile_titleColumn__1dwr4",item:"profile_item__13UUm",descriptionColumn:"profile_descriptionColumn__2rTEB",viewFriends:"profile_viewFriends__2IVH-",friendContainer:"profile_friendContainer__3p1CW",ava:"profile_ava__3up3X",butt:"profile_butt__Po-3T",butItem:"profile_butItem__IX4b3"}},106:function(e,a,t){},206:function(e,a,t){"use strict";t.r(a);var s=t(2),i=t(27),c=t.n(i),n=(t(106),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,207)).then((function(a){var t=a.getCLS,s=a.getFID,i=a.getFCP,c=a.getLCP,n=a.getTTFB;t(e),s(e),i(e),c(e),n(e)}))}),l=t(20),r=(t(5),t(6),t(31)),j=t(4),d=t(62),o=(t.n(d).a.create({withCredentials:!0,headers:{"API-KEY":"603ef8c0-4933-4294-ab5f-b170d3ebe6d8"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),t(17),"ADD_POST"),b="DELETE_POST",m="SET_USER_PROFILE",O="SET_STATUS",u="SAVE_PHOTO",v={profile:null,postsDataArray:[{id:1,post:"\u041f\u0440\u0438\u0432\u0435\u0442\u0438\u043a\u0438??",likeCount:1},{id:2,post:"\u0420\u0435\u0431\u044f\u0442\u0430 \u0430\u0443\u0443\u0443...",likeCount:0},{id:3,post:"\u042d\u0442\u043e \u043c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442!",likeCount:1200}],status:""},_="FOLLOW",h="UN_FOLLOW",f="SET_USERS",N="SET_CURRENT_PAGE",x="SET_TOTAL_USERS_COUNT",p="TOGGLE_IS_FETCHING",I="SET_USERID_FOR_DISABLE",C="TOGGLE_IS_FOLLOW",g={usersData:[],pageSize:5,totalUsersCount:0,currentPages:1,isFetching:!0,userIdForDisabled:[],isFollow:!1},S="SET_USER_DATA",E="CAPTCHA",w={userId:null,email:null,login:null,isAuthorization:!1,captchaURl:null},T=t(63),P=t(61),k="SET_INITIALIZED",A={initialized:!1},D="GET_SELECTED_DIALOG",F="GET_USERS_TALKED_WITH",y={recipientId:null,messages:null,oneMessage:"",users:null},L=Object(l.b)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case o:var t=a.massages;return Object(j.a)(Object(j.a)({},e),{},{postsDataArray:[{id:4,post:t,likeCount:10}].concat(Object(r.a)(e.postsDataArray))});case b:return Object(j.a)(Object(j.a)({},e),{},{postsDataArray:e.postsDataArray.filter((function(e){return e.id!==a.id}))});case m:return Object(j.a)(Object(j.a)({},e),{},{profile:a.profile});case O:return Object(j.a)(Object(j.a)({},e),{},{status:a.status});case u:return Object(j.a)(Object(j.a)({},e),{},{profile:Object(j.a)(Object(j.a)({},e.profile),{},{photos:a.photos})});default:return e}},dialog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0;if(!e)return e;switch(a.type){case D:var t=Object(j.a)({},e);return null!==e.messages?Object(j.a)(Object(j.a)({},e),{},{messages:a.items.concat(t.messages)}):Object(j.a)(Object(j.a)({},e),{},{messages:a.items});case F:return Object(j.a)(Object(j.a)({},e),{},{users:a.usersArray});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;if(!e)return e;switch(a.type){case C:return Object(j.a)(Object(j.a)({},e),{},{isFollow:a.follow});case _:return Object(j.a)(Object(j.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===a.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!0}):e}))});case h:return Object(j.a)(Object(j.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===a.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!1}):e}))});case f:return Object(j.a)(Object(j.a)({},e),{},{usersData:Object(r.a)(a.users)});case N:return Object(j.a)(Object(j.a)({},e),{},{currentPages:a.currentPages});case x:return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:a.totalCounter});case p:return Object(j.a)(Object(j.a)({},e),{},{isFetching:a.isFetching});case I:return Object(j.a)(Object(j.a)({},e),{},{userIdForDisabled:a.IsFollowingProgress?[a.userId]:[]});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,a=arguments.length>1?arguments[1]:void 0;if(!e)return e;switch(a.type){case S:return Object(j.a)(Object(j.a)({},e),{},{userId:a.userId,email:a.email,login:a.login,isAuthorization:a.isAuthorization});case E:return Object(j.a)(Object(j.a)({},e),{},{captchaURl:a.captchaURl});default:return e}},form:P.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0;if(!e)return e;switch(a.type){case k:return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}}}),U=window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,R=Object(l.d)(L,U(Object(l.a)(T.a)));window.store=R;var M=t(67),W=t(68),B=t(21),G=t(1),z=t.n(G),H=t(0),V=function(){var e=Object(s.useState)(!0),a=Object(B.a)(e,2),t=a[0],i=a[1],c=Object(s.useState)(!1),n=Object(B.a)(c,2),l=n[0],r=n[1],j=Object(s.useState)(!1),d=Object(B.a)(j,2),o=d[0],b=d[1],m=Object(s.useState)(!1),O=Object(B.a)(m,2),u=O[0],v=O[1];return Object(H.jsxs)("div",{className:z.a.block,children:[Object(H.jsx)("div",{className:z.a.backgroundImage,children:Object(H.jsxs)("div",{className:z.a.topPart,children:[Object(H.jsx)("div",{className:z.a.avatarContainer,children:Object(H.jsx)("div",{className:z.a.avatar})}),Object(H.jsxs)("div",{className:z.a.buttons,children:[Object(H.jsx)("div",{className:z.a.buttonItem,children:"ddf"}),Object(H.jsx)("div",{className:z.a.buttonItem,children:"sd"}),Object(H.jsx)("div",{className:z.a.buttonItem,children:"as"})]})]})}),Object(H.jsxs)("div",{className:z.a.mainBlock,children:[Object(H.jsxs)("div",{className:z.a.middlePart,children:[Object(H.jsx)("div",{className:z.a.name,children:" Aastasia"}),Object(H.jsxs)("div",{className:z.a.menu,children:[Object(H.jsx)("div",{className:z.a.menuItem,onClick:function(){i(!0),r(!1),b(!1),v(!1)},children:"profile"}),Object(H.jsx)("div",{className:z.a.menuItem,onClick:function(){i(!1),r(!1),b(!0),v(!1)},children:"contacts"}),Object(H.jsx)("div",{className:z.a.menuItem,onClick:function(){i(!1),r(!1),b(!1),v(!0)},children:"about me"}),Object(H.jsx)("div",{className:z.a.menuItem,onClick:function(){i(!1),r(!0),b(!1),v(!1)},children:"friends"})]})]}),Object(H.jsxs)("div",{className:z.a.bottomPart,children:[Object(H.jsxs)("div",{className:z.a.info,children:[Object(H.jsxs)("div",{className:z.a.firstInfo,children:[Object(H.jsxs)("div",{className:z.a.countFriends,children:[" ",Object(H.jsx)("p",{className:z.a.pp,children:"13"})," friends/\u043e\u0431\u0449\u0438\u0445"]}),Object(H.jsxs)("div",{className:z.a.isFindWork,children:[Object(H.jsx)("p",{className:z.a.pp,children:"looking"})," for a job"]})]}),Object(H.jsxs)("div",{className:z.a.secondInfo,children:[Object(H.jsx)("div",{className:z.a.title,children:" My Photos"}),Object(H.jsx)("div",{className:z.a.photos})]})]}),Object(H.jsxs)("div",{className:z.a.menuSelection,children:[t&&Object(H.jsxs)("div",{className:z.a.viewProfile,children:[Object(H.jsx)("div",{className:z.a.titleMenu,children:" View Profile"}),Object(H.jsxs)("div",{className:z.a.selectionMainContainer,children:[Object(H.jsxs)("div",{className:z.a.titleColumn,children:[Object(H.jsx)("div",{className:z.a.item,children:"Name"}),Object(H.jsx)("div",{className:z.a.item,children:"Day of Birth"}),Object(H.jsx)("div",{className:z.a.item,children:"Sex"}),Object(H.jsx)("div",{className:z.a.item,children:"City"}),Object(H.jsx)("div",{className:z.a.item,children:"Country"})]}),Object(H.jsxs)("div",{className:z.a.descriptionColumn,children:[Object(H.jsx)("div",{className:z.a.item,children:"Anastasia"}),Object(H.jsx)("div",{className:z.a.item,children:"18.11.1996"}),Object(H.jsx)("div",{className:z.a.item,children:"W"}),Object(H.jsx)("div",{className:z.a.item,children:"Minsk"}),Object(H.jsx)("div",{className:z.a.item,children:"Belarus"})]})]})]}),l&&Object(H.jsxs)("div",{className:z.a.viewFriends,children:[Object(H.jsxs)("div",{className:z.a.friendContainer,children:[Object(H.jsx)("div",{className:z.a.ava}),Object(H.jsx)("div",{className:z.a.name}),Object(H.jsxs)("div",{className:z.a.butt,children:[Object(H.jsx)("div",{className:z.a.butItem}),Object(H.jsx)("div",{className:z.a.butItem})]})]}),Object(H.jsxs)("div",{className:z.a.friendContainer,children:[Object(H.jsx)("div",{className:z.a.ava}),Object(H.jsx)("div",{className:z.a.name}),Object(H.jsxs)("div",{className:z.a.butt,children:[Object(H.jsx)("div",{className:z.a.butItem}),Object(H.jsx)("div",{className:z.a.butItem})]})]}),Object(H.jsxs)("div",{className:z.a.friendContainer,children:[Object(H.jsx)("div",{className:z.a.ava}),Object(H.jsx)("div",{className:z.a.name}),Object(H.jsxs)("div",{className:z.a.butt,children:[Object(H.jsx)("div",{className:z.a.butItem}),Object(H.jsx)("div",{className:z.a.butItem})]})]}),Object(H.jsxs)("div",{className:z.a.friendContainer,children:[Object(H.jsx)("div",{className:z.a.ava}),Object(H.jsx)("div",{className:z.a.name}),Object(H.jsxs)("div",{className:z.a.butt,children:[Object(H.jsx)("div",{className:z.a.butItem}),Object(H.jsx)("div",{className:z.a.butItem})]})]}),Object(H.jsxs)("div",{className:z.a.friendContainer,children:[Object(H.jsx)("div",{className:z.a.ava}),Object(H.jsx)("div",{className:z.a.name}),Object(H.jsxs)("div",{className:z.a.butt,children:[Object(H.jsx)("div",{className:z.a.butItem}),Object(H.jsx)("div",{className:z.a.butItem})]})]}),Object(H.jsxs)("div",{className:z.a.friendContainer,children:[Object(H.jsx)("div",{className:z.a.ava}),Object(H.jsx)("div",{className:z.a.name}),Object(H.jsxs)("div",{className:z.a.butt,children:[Object(H.jsx)("div",{className:z.a.butItem}),Object(H.jsx)("div",{className:z.a.butItem})]})]})]}),o&&Object(H.jsxs)("div",{className:z.a.viewProfile,children:[Object(H.jsx)("div",{className:z.a.titleMenu,children:" My contacts"}),Object(H.jsxs)("div",{className:z.a.selectionMainContainer,children:[Object(H.jsxs)("div",{className:z.a.titleColumn,children:[Object(H.jsx)("div",{className:z.a.item,children:"vk"}),Object(H.jsx)("div",{className:z.a.item,children:"faceboock"}),Object(H.jsx)("div",{className:z.a.item,children:"twetter"}),Object(H.jsx)("div",{className:z.a.item,children:"git"}),Object(H.jsx)("div",{className:z.a.item,children:"toytube"})]}),Object(H.jsxs)("div",{className:z.a.descriptionColumn,children:[Object(H.jsx)("div",{className:z.a.item,children:"Anastasia.com"}),Object(H.jsx)("div",{className:z.a.item,children:"111111111.u"}),Object(H.jsx)("div",{className:z.a.item,children:"Wjkjhjhjk.by"}),Object(H.jsx)("div",{className:z.a.item,children:"zsxfdcghjbkml.5.vj"}),Object(H.jsx)("div",{className:z.a.item,children:"muui.hu"})]})]})]}),u&&Object(H.jsxs)("div",{className:z.a.viewProfile,children:[Object(H.jsx)("div",{className:z.a.titleMenu,children:" about me"}),Object(H.jsx)("div",{className:z.a.selectionMainContainer})]})]})]})]})]})};c.a.render(Object(H.jsx)(M.a,{store:R,children:Object(H.jsx)(W.a,{children:Object(H.jsx)(V,{})})}),document.getElementById("root")),n()}},[[206,1,2]]]);
//# sourceMappingURL=main.b9373cd2.chunk.js.map