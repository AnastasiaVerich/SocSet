(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{301:function(e,s,a){e.exports={block:"messages_block__2BgDr",container:"messages_container__3wtWU",chats:"messages_chats__1qTWs",butMenu:"messages_butMenu__3bt7Y",d1:"messages_d1__2z8bh",d2:"messages_d2__1evek",d3:"messages_d3__15QqN",search:"messages_search__3au1X",inp:"messages_inp__2V5mF",users:"messages_users__2To5w",user:"messages_user__1eDGh",avatar:"messages_avatar__1IQfP",ava:"messages_ava__2qNXj",main:"messages_main__2ed33",name:"messages_name__N0YZW",lastMessages:"messages_lastMessages__3TugM",info:"messages_info__3aL2H",time:"messages_time__3yMbe",countUnread:"messages_countUnread__3CUhV",selectedChat:"messages_selectedChat__2_1DR",userSelected:"messages_userSelected__3cjfw",name2:"messages_name2__2gHrL",chat:"messages_chat__CLO-h",chatField:"messages_chatField__2z2Ek",field:"messages_field__1z_ku",my:"messages_my__-ZnNF",sms:"messages_sms__RW2JY",friend:"messages_friend__1i25E",sendField:"messages_sendField__1P0Gy",printMess:"messages_printMess__1_zSd",sendMess:"messages_sendMess__3PHwt"}},312:function(e,s,a){"use strict";a.r(s);var t=a(116),c=a(11),n=a(15),i=a(4),l=a(2),r=a(12),d=a(1),m=function(e){return{isAuth:e.auth.isAuthorization}},o=a(107),j=a(301),u=a.n(j),b=a(61),_=a(18),g=a(105),h=a(95),O=a(138),f=a(73),x=a(50),v=a(308),N=function(e){return Object(d.jsx)(d.Fragment,{children:e.users.map((function(s){return Object(d.jsxs)(_.b,{to:"/messages/"+s.id,className:u.a.user,children:[Object(d.jsx)("div",{className:u.a.avatar,children:Object(d.jsx)("img",{className:u.a.ava,src:null!=s.photos.small?s.photos.small:g.a})}),Object(d.jsxs)("div",{className:u.a.main,children:[Object(d.jsx)("div",{className:u.a.name,children:s.userName}),s.hasNewMessages&&Object(d.jsx)("div",{className:u.a.lastMessages,children:"New messages!"})]}),Object(d.jsxs)("div",{className:u.a.info,children:[Object(d.jsx)("div",{className:u.a.time,children:e.time(s.lastDialogActivityDate)}),0!==s.newMessagesCount&&Object(d.jsx)("div",{className:u.a.countUnread,children:s.newMessagesCount})]})]},s.id)}))})},p=function(e){var s=document.querySelector("#messageBody");null!==s&&(s.scrollTop=s.scrollHeight-s.clientHeight);var a=Object(l.useState)(2),t=Object(o.a)(a,2),c=t[0],n=t[1];return console.log(e.messages.length),Object(d.jsxs)("div",{className:u.a.chatField,id:"messageBody",children:[e.totalCount>e.messages.length?Object(d.jsx)("button",{onClick:function(){e.selectedDialogMessages(e.recipientId,c,20),n(++c)},children:"++"}):Object(d.jsx)(d.Fragment,{}),e.messages.map((function(s){return Object(d.jsx)("div",{className:u.a.field,children:e.authorizationUserId===s.senderId?Object(d.jsx)("div",{className:u.a.my,children:Object(d.jsx)("p",{className:u.a.sms,children:s.body})}):Object(d.jsx)("div",{className:u.a.friend,children:Object(d.jsx)("p",{className:u.a.sms,children:s.body})})},s.id)}))]})},M=Object(f.a)(10),y=Object(O.a)({form:"dialog"})((function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,className:u.a.sendField,children:[Object(d.jsx)(h.a,{placeholder:"Enter sms",component:x.b,name:"massages",validate:[f.b,M],props:{className:u.a.printMess}}),Object(d.jsx)("button",{type:"submit",className:u.a.sendMess,children:Object(d.jsx)(v.b,{})})]})})),C=a(106),k=Object(c.d)(Object(n.b)((function(e){return{messages:e.dialog.messages,authorizationUserId:e.auth.userId,users:e.dialog.users,profile:e.profile.profile,totalCount:e.dialog.totalCount}}),(function(e){return{selectedDialogMessages:function(s,a,c){e(Object(t.b)(s,a,c))},sendMessage:function(s,a){e(Object(t.d)(s,a))},usersTalkedWith:function(){e(Object(t.c)())},getOneProfile:function(s){e(Object(C.b)(s))}}})),(function(e){return Object(n.b)(m)((function(s){return!1===s.isAuth?Object(d.jsx)(r.a,{to:"/login"}):Object(d.jsx)(e,Object(i.a)({},s))}))}))((function(e){var s=e.match.params.userID;Object(l.useEffect)((function(){s&&(e.selectedDialogMessages(s,1,20),e.getOneProfile(s))}),[s]),Object(l.useEffect)((function(){e.usersTalkedWith()}),[]);var a=function(e){var s=new Date;return s.getMonth()==Number(e.substr(5,2)-1)&&s.getDate()==e.substr(8,2)&&s.getFullYear()==e.substr(0,4)?e.substr(11,5):e.substr(5,5)};return Object(d.jsx)("div",{className:u.a.block,children:Object(d.jsxs)("div",{className:u.a.container,children:[Object(d.jsxs)("div",{className:u.a.chats,children:[Object(d.jsxs)("div",{className:u.a.butMenu,children:[Object(d.jsx)("div",{className:u.a.d1}),Object(d.jsx)("div",{className:u.a.d2}),Object(d.jsx)("div",{className:u.a.d3})]}),Object(d.jsx)("div",{className:u.a.search,children:Object(d.jsx)(_.b,{to:"/messages/"+s,children:Object(d.jsx)("div",{children:Object(d.jsx)("div",{onClick:function(){return e.usersTalkedWith()},children:Object(d.jsx)(v.a,{})})})})}),Object(d.jsx)("div",{className:u.a.users,children:null!=e.users?Object(d.jsx)(N,{users:e.users,time:a}):Object(d.jsx)("div",{children:"\u043d\u0435\u0442 \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432"})})]}),Object(d.jsxs)("div",{className:u.a.selectedChat,children:[null!=e.profile&&void 0!==s?Object(d.jsx)("div",{className:u.a.userSelected,children:Object(d.jsx)("div",{className:u.a.name2,children:e.profile.fullName})}):Object(d.jsx)(d.Fragment,{}),Object(d.jsxs)("div",{className:u.a.chat,children:[void 0!==s?null!=e.messages?Object(d.jsx)(p,{messages:e.messages,authorizationUserId:e.authorizationUserId,recipientId:s,selectedDialogMessages:e.selectedDialogMessages,totalCount:e.totalCount}):Object(d.jsx)(b.a,{}):Object(d.jsx)("div",{children:"\u0412\u044b\u0431\u0435\u0440\u0438 \u0434\u0438\u0430\u043b\u043e\u0433"}),Object(d.jsx)(y,{onSubmit:function(a){e.sendMessage(s,a.massages)}})]})]})]})})}));s.default=k}}]);
//# sourceMappingURL=4.123c1e80.chunk.js.map