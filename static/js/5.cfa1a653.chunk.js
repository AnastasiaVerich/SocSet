(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{298:function(e,s,a){e.exports={block:"messages_block__2BgDr",container:"messages_container__3wtWU",chats:"messages_chats__1qTWs",butMenu:"messages_butMenu__3bt7Y",d1:"messages_d1__2z8bh",d2:"messages_d2__1evek",d3:"messages_d3__15QqN",search:"messages_search__3au1X",inp:"messages_inp__2V5mF",users:"messages_users__2To5w",user:"messages_user__1eDGh",avatar:"messages_avatar__1IQfP",ava:"messages_ava__2qNXj",main:"messages_main__2ed33",name:"messages_name__N0YZW",lastMessages:"messages_lastMessages__3TugM",info:"messages_info__3aL2H",time:"messages_time__3yMbe",countUnread:"messages_countUnread__3CUhV",selectedChat:"messages_selectedChat__2_1DR",userSelected:"messages_userSelected__3cjfw",name2:"messages_name2__2gHrL",chat:"messages_chat__CLO-h",chatField:"messages_chatField__2z2Ek",field:"messages_field__1z_ku",my:"messages_my__-ZnNF",sms:"messages_sms__RW2JY",friend:"messages_friend__1i25E",sendField:"messages_sendField__1P0Gy",printMess:"messages_printMess__1_zSd",sendMess:"messages_sendMess__3PHwt"}},311:function(e,s,a){"use strict";a.r(s);var c=a(113),t=a(11),n=a(15),i=a(4),d=a(2),r=a(12),l=a(1),j=function(e){return{isAuth:e.auth.isAuthorization}},m=a(298),_=a.n(m),u=a(42),b=a(18),o=a(102),h=a(93),O=a(135),g=a(71),x=a(51),f=a(306),v=a(307),N=function(e){return Object(l.jsx)(l.Fragment,{children:e.users.map((function(e){return Object(l.jsxs)(b.b,{to:"/messages/"+e.id,className:_.a.user,children:[Object(l.jsx)("div",{className:_.a.avatar,children:Object(l.jsx)("img",{className:_.a.ava,src:null!=e.photos.small?e.photos.small:o.a})}),Object(l.jsxs)("div",{className:_.a.main,children:[Object(l.jsx)("div",{className:_.a.name,children:e.userName}),Object(l.jsx)("div",{className:_.a.lastMessages,children:"jhjkhkjh knkj..."})]}),Object(l.jsxs)("div",{className:_.a.info,children:[Object(l.jsx)("div",{className:_.a.time,children:"11:00"}),Object(l.jsx)("div",{className:_.a.countUnread,children:"5"})]})]},e.id)}))})},p=function(e){return Object(l.jsx)("div",{className:_.a.chatField,children:e.messages.map((function(s){return Object(l.jsx)("div",{className:_.a.field,children:e.authorizationUserId===s.senderId?Object(l.jsx)("div",{className:_.a.my,children:Object(l.jsx)("p",{className:_.a.sms,children:s.body})}):Object(l.jsx)("div",{className:_.a.friend,children:Object(l.jsx)("p",{className:_.a.sms,children:s.body})})},s.id)}))})},M=Object(g.a)(10),k=Object(O.a)({form:"dialog"})((function(e){return Object(l.jsxs)("form",{onSubmit:e.handleSubmit,className:_.a.sendField,children:[Object(l.jsx)(h.a,{placeholder:"Enter sms",component:x.b,name:"massages",validate:[g.b,M],props:{className:_.a.printMess}}),Object(l.jsx)("button",{type:"submit",className:_.a.sendMess,children:Object(l.jsx)(v.b,{})})]})})),y=a(103),F=Object(t.d)(Object(n.b)((function(e){return{messages:e.dialog.messages,authorizationUserId:e.auth.userId,users:e.dialog.users,profile:e.profile.profile}}),(function(e){return{selectedDialogMessages:function(s,a,t){e(Object(c.b)(s,a,t))},sendMessage:function(s,a){e(Object(c.d)(s,a))},usersTalkedWith:function(){e(Object(c.c)())},getOneProfile:function(s){e(Object(y.b)(s))}}})),(function(e){return Object(n.b)(j)((function(s){return!1===s.isAuth?Object(l.jsx)(r.a,{to:"/login"}):Object(l.jsx)(e,Object(i.a)({},s))}))}))((function(e){var s=e.match.params.userID;Object(d.useEffect)((function(){s&&(e.selectedDialogMessages(s,1,20),e.getOneProfile(s))}),[s]),Object(d.useEffect)((function(){e.usersTalkedWith()}),[]);return Object(l.jsx)("div",{className:_.a.block,children:Object(l.jsxs)("div",{className:_.a.container,children:[Object(l.jsxs)("div",{className:_.a.chats,children:[Object(l.jsxs)("div",{className:_.a.butMenu,children:[Object(l.jsx)("div",{className:_.a.d1}),Object(l.jsx)("div",{className:_.a.d2}),Object(l.jsx)("div",{className:_.a.d3})]}),Object(l.jsxs)("div",{className:_.a.search,children:[Object(l.jsx)("input",{className:_.a.inp}),Object(l.jsx)("div",{className:_.a.serBut,children:Object(l.jsx)(f.a,{})}),Object(l.jsx)(b.b,{to:"/messages/"+s,children:Object(l.jsx)("div",{children:Object(l.jsx)("div",{onClick:function(){return e.usersTalkedWith()},children:Object(l.jsx)(v.a,{})})})})]}),Object(l.jsx)("div",{className:_.a.users,children:null!=e.users?Object(l.jsx)(N,{users:e.users}):Object(l.jsx)("div",{children:"\u043d\u0435\u0442 \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432"})})]}),Object(l.jsxs)("div",{className:_.a.selectedChat,children:[null!=e.profile&&void 0!==s?Object(l.jsx)("div",{className:_.a.userSelected,children:Object(l.jsx)("div",{className:_.a.name2,children:e.profile.fullName})}):Object(l.jsx)(l.Fragment,{}),Object(l.jsxs)("div",{className:_.a.chat,children:[void 0!==s?null!=e.messages?Object(l.jsx)(p,{messages:e.messages,authorizationUserId:e.authorizationUserId}):Object(l.jsx)(u.a,{}):Object(l.jsx)("div",{children:"\u0412\u044b\u0431\u0435\u0440\u0438 \u0434\u0438\u0430\u043b\u043e\u0433"}),Object(l.jsx)(k,{onSubmit:function(a){e.sendMessage(s,a.massages)}})]})]})]})})}));s.default=F}}]);
//# sourceMappingURL=5.cfa1a653.chunk.js.map