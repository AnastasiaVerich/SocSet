(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{309:function(e,t,s){e.exports={block:"profile_block__3TeRo",topContainer:"profile_topContainer__10mjt",infoContainer:"profile_infoContainer__mJdOh",photo:"profile_photo__3zgjr",name:"profile_name__2Pxmc",buttons:"profile_buttons__2PLqJ",buttonItem:"profile_buttonItem__13Myt",bottomContainer:"profile_bottomContainer__AKtuQ",menuBlock:"profile_menuBlock__OUQrA",menuContainer:"profile_menuContainer__39Fc-",menuItem:"profile_menuItem__3QSzV",profileSelectedBlock:"profile_profileSelectedBlock__3yGO4",profileSelectedContainer:"profile_profileSelectedContainer__3L6gF"}},310:function(e,t,s){e.exports={viewProfile:"view-profile_viewProfile__xHpFH",titleMenu:"view-profile_titleMenu__1tRfF",container:"view-profile_container__2XU15",columnTitles:"view-profile_columnTitles__3X7lE",item:"view-profile_item__2nYsT",columnDescriptions:"view-profile_columnDescriptions__rl7xw"}},311:function(e,t,s){e.exports={contactsBlock:"view-contacts_contactsBlock__1Nx8I",titleMenu:"view-contacts_titleMenu__36fLz",container:"view-contacts_container__2xa8-",oneContact:"view-contacts_oneContact__3FFYr",columnTitles:"view-contacts_columnTitles__2A3v8",item:"view-contacts_item__1aYrJ",columnDescriptions:"view-contacts_columnDescriptions__7rbeV"}},312:function(e,t,s){e.exports={aboutMeBlock:"about-me_aboutMeBlock__2cmWb",titleMenu:"about-me_titleMenu__3Wsqt",container:"about-me_container__26m70",aboutMeField:"about-me_aboutMeField__1aHx8"}},313:function(e,t,s){e.exports={viewFriendsBlock:"view-friends_viewFriendsBlock__2lbL8",oneFriendContainer:"view-friends_oneFriendContainer__-yiqp",photo:"view-friends_photo__1ZzZv",name:"view-friends_name__3y0t3",btn:"view-friends_btn__2uzAk",item:"view-friends_item__2Zjb1",viewProfileBtn:"view-friends_viewProfileBtn__3itJR"}},317:function(e,t,s){"use strict";s.r(t);var i=s(36),o=s(37),n=s(39),c=s(38),a=s(2),r=s.n(a),l=s(60),u=s(309),p=s.n(u),j=s(18),m=s(67),d=s(310),b=s.n(d),f=s(1),h=function(e){return Object(f.jsxs)("div",{className:b.a.viewProfile,children:[Object(f.jsx)("div",{className:b.a.titleMenu,children:" View Profile"}),Object(f.jsxs)("div",{className:b.a.container,children:[Object(f.jsxs)("div",{className:b.a.columnTitles,children:[Object(f.jsx)("div",{className:b.a.item,children:"Name"}),Object(f.jsx)("div",{className:b.a.item,children:"Day of Birth"}),Object(f.jsx)("div",{className:b.a.item,children:"Sex"}),Object(f.jsx)("div",{className:b.a.item,children:"City"}),Object(f.jsx)("div",{className:b.a.item,children:"Country"})]}),Object(f.jsxs)("div",{className:b.a.columnDescriptions,children:[Object(f.jsx)("div",{className:b.a.item,children:e.profile.fullName}),Object(f.jsx)("div",{className:b.a.item,children:"18.11.1996"}),Object(f.jsx)("div",{className:b.a.item,children:"W"}),Object(f.jsx)("div",{className:b.a.item,children:"Minsk"}),Object(f.jsx)("div",{className:b.a.item,children:"Belarus"})]})]})]})},O=s(311),_=s.n(O),v=function(e){return Object(f.jsxs)("div",{className:_.a.contactsBlock,children:[Object(f.jsx)("div",{className:_.a.titleMenu,children:" My contacts"}),Object(f.jsx)("div",{className:_.a.container,children:Object.keys(e.profile.contacts).map((function(t){return Object(f.jsx)(x,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))})]})},x=function(e){return Object(f.jsxs)("div",{className:_.a.oneContact,children:[Object(f.jsx)("div",{className:_.a.columnTitles,children:Object(f.jsx)("div",{className:_.a.item,children:e.contactTitle})}),Object(f.jsx)("div",{className:_.a.columnDescriptions,children:Object(f.jsx)("div",{className:_.a.item,children:e.contactValue})})]})},g=s(312),w=s.n(g),N=function(e){return Object(f.jsxs)("div",{className:w.a.aboutMeBlock,children:[Object(f.jsx)("div",{className:w.a.titleMenu,children:" about me"}),Object(f.jsx)("div",{className:w.a.container,children:Object(f.jsx)("div",{className:w.a.aboutMeField,children:e.profile.aboutMe})})]})},C=s(22),k=s(45),P=s(10),F=s(15),I=s(313),y=s.n(I),M=s(29),B=function(e){return Object(f.jsx)("div",{className:y.a.viewFriendsBlock,children:e.users.map((function(t){return Object(f.jsxs)("div",{className:y.a.oneFriendContainer,children:[Object(f.jsx)("img",{className:y.a.photo,src:null!=t.photos.small?t.photos.small:m.a,alt:""}),Object(f.jsx)("div",{className:y.a.name,children:t.name}),Object(f.jsxs)("div",{className:y.a.btn,children:[t.followed?Object(f.jsx)("button",{className:y.a.item,disabled:e.IsFollowingProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:Object(f.jsx)(M.i,{})}):Object(f.jsx)("button",{className:y.a.item,disabled:e.IsFollowingProgress.some((function(e){return e===t.id})),onClick:function(){e.follower(t.id)},children:Object(f.jsx)(M.h,{})}),Object(f.jsx)(j.b,{to:"/messages/"+t.id,className:y.a.item,children:Object(f.jsx)(M.a,{})})]}),Object(f.jsx)(j.b,{className:y.a.viewProfileBtn,to:"/profile/"+t.id,children:"view profile"})]},t.id)}))})},S=s(50),z=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){var e;Object(i.a)(this,s);for(var o=arguments.length,n=new Array(o),c=0;c<o;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).onPageChanget=function(t){e.props.getUsersThunk(t,e.props.pagesize,e.props.isFollow),e.props.SetCurrentPage(t)},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPages,this.props.pagesize,!0)}},{key:"componentDidUpdate",value:function(e,t,s){this.props.isFollow!==e.isFollow&&this.props.getUsersThunk(this.props.currentPages,this.props.pagesize,this.props.isFollow)}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[this.props.isFetching?Object(f.jsx)(S.a,{}):null,Object(f.jsx)(B,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,currentPages:this.props.currentPages,pagesize:this.props.pagesize,follower:this.props.follower,unfollow:this.props.unfollow,onPageChanget:this.onPageChanget,IsFollowingProgress:this.props.IsFollowingProgress,setIsFollowingProgress:this.props.setIsFollowingProgress,isFollow:this.props.isFollow})]})}}]),s}(r.a.Component),D=Object(P.d)(Object(F.b)((function(e){return{users:Object(k.f)(e),pagesize:Object(k.d)(e),totalUsersCount:Object(k.e)(e),currentPages:Object(k.a)(e),isFetching:Object(k.b)(e),IsFollowingProgress:Object(k.c)(e),isFollow:e.usersPage.isFollow}}),{follower:C.b,unfollow:C.k,setUsers:C.h,SetCurrentPage:C.e,setTotalUsersCount:C.f,setIsFollowingProgress:C.g,toogleIsFetching:C.j,getUsersThunk:C.c,FiendsAC:C.i}))(z),T=s(315),U=s(316),A=function(e){var t=Object(a.useState)(!0),s=Object(l.a)(t,2),i=s[0],o=s[1],n=Object(a.useState)(!1),c=Object(l.a)(n,2),r=c[0],u=c[1],d=Object(a.useState)(!1),b=Object(l.a)(d,2),O=b[0],_=b[1],x=Object(a.useState)(!1),g=Object(l.a)(x,2),w=g[0],C=g[1];return e.profile?Object(f.jsxs)("div",{className:p.a.block,children:[Object(f.jsxs)("div",{className:p.a.topContainer,children:[Object(f.jsxs)("div",{className:p.a.infoContainer,children:[null===e.profile.photos.large?Object(f.jsx)("img",{className:p.a.photo,src:m.a,alt:""}):Object(f.jsx)("img",{className:p.a.photo,src:e.profile.photos.large,alt:""}),Object(f.jsx)("div",{className:p.a.name,children:e.profile.fullName})]}),Object(f.jsx)("div",{className:p.a.buttons,children:!e.ownerId&&Object(f.jsx)(j.b,{to:"/messages/"+e.profile.userId,className:p.a.buttonItem,children:Object(f.jsx)(M.a,{})})})]}),Object(f.jsxs)("div",{className:p.a.bottomContainer,children:[Object(f.jsxs)("div",{className:p.a.menuBlock,children:[Object(f.jsxs)("div",{className:p.a.infoContainer,children:[null===e.profile.photos.large?Object(f.jsx)("img",{className:p.a.photo,src:m.a,alt:""}):Object(f.jsx)("img",{className:p.a.photo,src:e.profile.photos.large,alt:""}),Object(f.jsx)("div",{className:p.a.name,children:e.profile.fullName})]}),Object(f.jsxs)("div",{className:p.a.menuContainer,children:[Object(f.jsx)("div",{className:p.a.menuItem,onClick:function(){o(!0),u(!1),_(!1),C(!1)},children:Object(f.jsx)(M.g,{})}),Object(f.jsx)("div",{className:p.a.menuItem,onClick:function(){o(!1),u(!0),_(!1),C(!1)},children:Object(f.jsx)(T.b,{})}),Object(f.jsx)("div",{className:p.a.menuItem,onClick:function(){o(!1),u(!1),_(!0),C(!1)},children:Object(f.jsx)(T.a,{})}),e.ownerId&&Object(f.jsx)("div",{className:p.a.menuItem,onClick:function(){o(!1),u(!1),_(!1),C(!0)},children:Object(f.jsx)(U.a,{})})]})]}),Object(f.jsx)("div",{className:p.a.profileSelectedBlock,children:Object(f.jsxs)("div",{className:p.a.profileSelectedContainer,children:[i&&Object(f.jsx)(h,{profile:e.profile}),w&&Object(f.jsx)(D,{}),r&&Object(f.jsx)(v,{profile:e.profile}),O&&Object(f.jsx)(N,{profile:e.profile})]})})]})]}):Object(f.jsx)(S.a,{})},J=s(12),V=s(51),L=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userID;e||(e=this.props.authorizationUserId)||this.props.history.push("/login"),e&&this.props.getOneProfile(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userID!==e.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return Object(f.jsx)(A,{profile:this.props.profile,ownerId:!this.props.match.params.userID,status:this.props.status,updateStatus:this.props.updateStatus,updatePhoto:this.props.updatePhoto,updateInfoProfile:this.props.updateInfoProfile,follower:this.props.follower})}}]),s}(r.a.Component),q=Object(P.d)(Object(F.b)((function(e){return{profile:e.profile.profile,status:e.profile.status,authorizationUserId:e.auth.userId,isAuthorization:e.auth.isAuthorization}}),(function(e){return{getOneProfile:function(t){e(Object(V.b)(t))},getStatus:function(t){e(Object(V.c)(t))},updateStatus:function(t){e(Object(V.f)(t))},updatePhoto:function(t){e(Object(V.e)(t))},updateInfoProfile:function(t){e(Object(V.d)(t))},follower:function(t){e(Object(C.b)(t))}}})),J.g)(L);t.default=q}}]);
//# sourceMappingURL=3.e79febe5.chunk.js.map