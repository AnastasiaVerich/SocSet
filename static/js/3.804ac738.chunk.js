(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{329:function(e,t,s){e.exports={block:"profile_block__3TeRo",backgroundImage:"profile_backgroundImage___Dtpd",topPart:"profile_topPart__1WCz3",avaName:"profile_avaName__1_gtl",avatarContainer:"profile_avatarContainer__31rxw",avatar:"profile_avatar__2jNWb",name:"profile_name__2Pxmc",buttons:"profile_buttons__2PLqJ",buttonItem:"profile_buttonItem__13Myt",mainBlock:"profile_mainBlock__3Pxw9",middlePart:"profile_middlePart__bbHAV",menu:"profile_menu__Uf_Gj",menuItem:"profile_menuItem__3QSzV",bottomPart:"profile_bottomPart__ZbAIW",menuSelection:"profile_menuSelection__1waoy"}},330:function(e,t,s){e.exports={viewProfile:"view-profile_viewProfile__xHpFH",titleMenu:"view-profile_titleMenu__1tRfF",selectionMainContainer:"view-profile_selectionMainContainer__3VYIb",titleColumn:"view-profile_titleColumn__1UXwi",item:"view-profile_item__2nYsT",descriptionColumn:"view-profile_descriptionColumn__1TNbF"}},331:function(e,t,s){e.exports={viewProfile:"view-contacts_viewProfile__2nrDs",titleMenu:"view-contacts_titleMenu__36fLz",selectionMainContainer:"view-contacts_selectionMainContainer__1VLxo",aboutMeField:"view-contacts_aboutMeField__2wfgp",oneContact:"view-contacts_oneContact__3FFYr",titleColumn:"view-contacts_titleColumn__266T9",item:"view-contacts_item__1aYrJ",descriptionColumn:"view-contacts_descriptionColumn__1V-1v"}},332:function(e,t,s){e.exports={viewProfile:"about-me_viewProfile__gEaeb",titleMenu:"about-me_titleMenu__3Wsqt",selectionMainContainer:"about-me_selectionMainContainer__26H6L",aboutMeField:"about-me_aboutMeField__1aHx8"}},333:function(e,t,s){e.exports={viewFriends:"view-friends_viewFriends__2GsFy",friendContainer:"view-friends_friendContainer__1ohhO",ava:"view-friends_ava__7SWnR",name:"view-friends_name__3y0t3",butt:"view-friends_butt__1gUkp",butItem:"view-friends_butItem__ZMyPb",viewProfileFriend:"view-friends_viewProfileFriend__12bgL"}},338:function(e,t,s){"use strict";s.r(t);var i=s(38),a=s(39),o=s(41),n=s(40),r=s(2),c=s.n(r),l=s(79),u=s(329),p=s.n(u),d=s(17),j=s(70),m=s(53),b=s(330),f=s.n(b),h=s(1),_=function(e){return Object(h.jsxs)("div",{className:f.a.viewProfile,children:[Object(h.jsx)("div",{className:f.a.titleMenu,children:" View Profile"}),Object(h.jsxs)("div",{className:f.a.selectionMainContainer,children:[Object(h.jsxs)("div",{className:f.a.titleColumn,children:[Object(h.jsx)("div",{className:f.a.item,children:"Name"}),Object(h.jsx)("div",{className:f.a.item,children:"Day of Birth"}),Object(h.jsx)("div",{className:f.a.item,children:"Sex"}),Object(h.jsx)("div",{className:f.a.item,children:"City"}),Object(h.jsx)("div",{className:f.a.item,children:"Country"})]}),Object(h.jsxs)("div",{className:f.a.descriptionColumn,children:[Object(h.jsx)("div",{className:f.a.item,children:e.profile.fullName}),Object(h.jsx)("div",{className:f.a.item,children:"18.11.1996"}),Object(h.jsx)("div",{className:f.a.item,children:"W"}),Object(h.jsx)("div",{className:f.a.item,children:"Minsk"}),Object(h.jsx)("div",{className:f.a.item,children:"Belarus"})]})]})]})},v=s(331),O=s.n(v),x=function(e){return Object(h.jsxs)("div",{className:O.a.viewProfile,children:[Object(h.jsx)("div",{className:O.a.titleMenu,children:" My contacts"}),Object(h.jsx)("div",{className:O.a.selectionMainContainer,children:Object.keys(e.profile.contacts).map((function(t){return Object(h.jsx)(w,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))})]})},w=function(e){return Object(h.jsxs)("div",{className:O.a.oneContact,children:[Object(h.jsx)("div",{className:O.a.titleColumn,children:Object(h.jsx)("div",{className:O.a.item,children:e.contactTitle})}),Object(h.jsx)("div",{className:O.a.descriptionColumn,children:Object(h.jsx)("div",{className:O.a.item,children:e.contactValue})})]})},g=s(332),N=s.n(g),P=function(e){return Object(h.jsxs)("div",{className:N.a.viewProfile,children:[Object(h.jsx)("div",{className:N.a.titleMenu,children:" about me"}),Object(h.jsx)("div",{className:N.a.selectionMainContainer,children:Object(h.jsx)("div",{className:N.a.aboutMeField,children:e.profile.aboutMe})})]})},C=s(22),I=s(47),F=s(10),k=s(15),M=s(333),y=s.n(M),S=s(30),U=function(e){return Object(h.jsx)("div",{className:y.a.viewFriends,children:e.users.map((function(t){return Object(h.jsxs)("div",{className:y.a.friendContainer,children:[Object(h.jsx)("img",{className:y.a.ava,src:null!=t.photos.small?t.photos.small:j.a}),Object(h.jsx)("div",{className:y.a.name,children:t.name}),Object(h.jsxs)("div",{className:y.a.butt,children:[t.followed?Object(h.jsx)("button",{className:y.a.butItem,disabled:e.IsFollowingProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:Object(h.jsx)(S.h,{})}):Object(h.jsx)("button",{className:y.a.butItem,disabled:e.IsFollowingProgress.some((function(e){return e===t.id})),onClick:function(){e.follower(t.id)},children:Object(h.jsx)(S.g,{})}),Object(h.jsx)(d.b,{to:"/messages/"+t.id,className:y.a.butItem,children:Object(h.jsx)(S.a,{})})]}),Object(h.jsx)(d.b,{className:y.a.viewProfileFriend,to:"/profile/"+t.id,children:"view profile"})]})}))})},z=function(e){Object(o.a)(s,e);var t=Object(n.a)(s);function s(){var e;Object(i.a)(this,s);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).onPageChanget=function(t){e.props.getUsersThunk(t,e.props.pagesize,e.props.isFollow),e.props.SetCurrentPage(t)},e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPages,this.props.pagesize,!0)}},{key:"componentDidUpdate",value:function(e,t,s){this.props.isFollow!==e.isFollow&&this.props.getUsersThunk(this.props.currentPages,this.props.pagesize,this.props.isFollow)}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[this.props.isFetching?Object(h.jsx)(m.a,{}):null,Object(h.jsx)(U,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,currentPages:this.props.currentPages,pagesize:this.props.pagesize,follower:this.props.follower,unfollow:this.props.unfollow,onPageChanget:this.onPageChanget,IsFollowingProgress:this.props.IsFollowingProgress,setIsFollowingProgress:this.props.setIsFollowingProgress,isFollow:this.props.isFollow})]})}}]),s}(c.a.Component),D=Object(F.d)(Object(k.b)((function(e){return{users:Object(I.f)(e),pagesize:Object(I.d)(e),totalUsersCount:Object(I.e)(e),currentPages:Object(I.a)(e),isFetching:Object(I.b)(e),IsFollowingProgress:Object(I.c)(e),isFollow:e.usersPage.isFollow}}),{follower:C.b,unfollow:C.k,setUsers:C.h,SetCurrentPage:C.e,setTotalUsersCount:C.f,setIsFollowingProgress:C.g,toogleIsFetching:C.j,getUsersThunk:C.c,FiendsAC:C.i}))(z),T=s(336),V=s(337),A=function(e){var t=Object(r.useState)(!0),s=Object(l.a)(t,2),i=s[0],a=s[1],o=Object(r.useState)(!1),n=Object(l.a)(o,2),c=n[0],u=n[1],b=Object(r.useState)(!1),f=Object(l.a)(b,2),v=f[0],O=f[1],w=Object(r.useState)(!1),g=Object(l.a)(w,2),N=g[0],C=g[1];return e.profile?Object(h.jsxs)("div",{className:p.a.block,children:[Object(h.jsx)("div",{className:p.a.backgroundImage,children:Object(h.jsxs)("div",{className:p.a.topPart,children:[Object(h.jsxs)("div",{className:p.a.avaName,children:[Object(h.jsx)("div",{className:p.a.avatarContainer,children:null===e.profile.photos.large?Object(h.jsx)("img",{className:p.a.avatar,src:j.a}):Object(h.jsx)("img",{className:p.a.avatar,src:e.profile.photos.large})}),Object(h.jsxs)("div",{className:p.a.name,children:[" ",e.profile.fullName]})]}),Object(h.jsx)("div",{className:p.a.buttons,children:!e.ownerId&&Object(h.jsx)(d.b,{to:"/messages/"+e.profile.userId,className:p.a.buttonItem,children:Object(h.jsx)(S.a,{})})})]})}),Object(h.jsxs)("div",{className:p.a.mainBlock,children:[Object(h.jsx)("div",{className:p.a.middlePart,children:Object(h.jsxs)("div",{className:p.a.menu,children:[Object(h.jsx)("div",{className:p.a.menuItem,onClick:function(){a(!0),u(!1),O(!1),C(!1)},children:Object(h.jsx)(S.f,{})}),Object(h.jsx)("div",{className:p.a.menuItem,onClick:function(){a(!1),u(!0),O(!1),C(!1)},children:Object(h.jsx)(T.b,{})}),Object(h.jsx)("div",{className:p.a.menuItem,onClick:function(){a(!1),u(!1),O(!0),C(!1)},children:Object(h.jsx)(T.a,{})}),e.ownerId&&Object(h.jsx)("div",{className:p.a.menuItem,onClick:function(){a(!1),u(!1),O(!1),C(!0)},children:Object(h.jsx)(V.a,{})})]})}),Object(h.jsx)("div",{className:p.a.bottomPart,children:Object(h.jsxs)("div",{className:p.a.menuSelection,children:[i&&Object(h.jsx)(_,{profile:e.profile}),N&&Object(h.jsx)(D,{}),c&&Object(h.jsx)(x,{profile:e.profile}),v&&Object(h.jsx)(P,{profile:e.profile})]})})]})]}):Object(h.jsx)(m.a,{})},W=s(12),B=s(27),H=function(e){Object(o.a)(s,e);var t=Object(n.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userID;e||(e=this.props.authorizationUserId)||this.props.history.push("/login"),this.props.getOneProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userID!==e.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsx)(A,{profile:this.props.profile,ownerId:!this.props.match.params.userID,status:this.props.status,updateStatus:this.props.updateStatus,updatePhoto:this.props.updatePhoto,updateInfoProfile:this.props.updateInfoProfile,follower:this.props.follower})}}]),s}(c.a.Component),L=Object(F.d)(Object(k.b)((function(e){return{profile:e.profile.profile,status:e.profile.status,authorizationUserId:e.auth.userId,isAuthorization:e.auth.isAuthorization}}),{follower:C.b,getOneProfile:B.b,getStatus:B.c,updateStatus:B.f,updatePhoto:B.e,updateInfoProfile:B.d}),W.g)(H);t.default=L}}]);
//# sourceMappingURL=3.804ac738.chunk.js.map