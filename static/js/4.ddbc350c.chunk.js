(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{341:function(e,t,o){e.exports={container:"ProfileInfo_container__1Hmme",firstBlock:"ProfileInfo_firstBlock__2Hta7",width100:"ProfileInfo_width100__3rQkg",divPhoto:"ProfileInfo_divPhoto__3g2Ri",photo:"ProfileInfo_photo__34hd_",inputFile:"ProfileInfo_inputFile__1osS5",customfileupload:"ProfileInfo_customfileupload__oW8Na",info:"ProfileInfo_info__eDfC1",infoItem:"ProfileInfo_infoItem__21TQH",secondBlock:"ProfileInfo_secondBlock__3jdxd",fullName:"ProfileInfo_fullName__1uuKx",links:"ProfileInfo_links__2H22O",title:"ProfileInfo_title__2eCqI",contacts:"ProfileInfo_contacts__3VRDs",titleContact:"ProfileInfo_titleContact__3cfkb",userInfoBlock:"ProfileInfo_userInfoBlock__2iUUK",oneInfoContainer:"ProfileInfo_oneInfoContainer__3Jtdu",endBlock:"ProfileInfo_endBlock__3oGuX"}},342:function(e,t,o){e.exports={block:"Profile_block__3LxMd"}},350:function(e,t,o){"use strict";o.r(t);var i=o(44),s=o(45),c=o(48),n=o(47),a=o(0),r=o.n(a),l=o(114),u=o(43),d=o(1),f=function(e){var t=Object(a.useState)(!1),o=Object(l.a)(t,2),i=o[0],s=o[1],c=Object(a.useState)(e.status),n=Object(l.a)(c,2),r=n[0],u=n[1];Object(a.useEffect)((function(){u(e.status)}),[e.status]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("b",{children:"\u0421\u0442\u0430\u0442\u0443\u0441: "}),!i&&Object(d.jsx)("span",{onDoubleClick:function(){s(!0)},children:e.status||"-----"}),i&&Object(d.jsx)("input",{autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(r)},onChange:function(e){u(e.target.value)},value:r})]})},j=o(112),b=o(328),p=o(349),h=o(20),O=o(36),m=o.n(O),x=o(341),_=o.n(x),I=o(49),v=o(146),P=function(e){var t=Object(a.useState)(!1),o=Object(l.a)(t,2),i=o[0],s=o[1];if(!e.profile)return Object(d.jsx)(u.a,{});return Object(d.jsxs)("div",{className:_.a.container,children:[Object(d.jsxs)("div",{className:_.a.firstBlock,children:[Object(d.jsxs)("div",{className:_.a.width100,children:[Object(d.jsx)("div",{className:_.a.divPhoto}),null===e.profile.photos.large?Object(d.jsx)("img",{className:_.a.photo,src:j.a}):Object(d.jsx)("img",{className:_.a.photo,src:e.profile.photos.large})]}),Object(d.jsxs)("div",{children:[e.ownerId&&Object(d.jsx)("div",{children:Object(d.jsxs)("label",{htmlFor:"file-upload",className:_.a.customfileupload,onChange:function(t){t.target.files.length&&e.updatePhoto(t.target.files[0])},children:[Object(d.jsx)("input",{className:_.a.inputFile,id:"file-upload",type:"file"}),"Custom Upload"]})}),!e.ownerId&&Object(d.jsx)(h.b,{to:"/dialogs/"+e.profile.userId,activeClassName:m.a.act,children:Object(d.jsx)("div",{className:_.a.customfileupload,children:"Start dialog"})})]}),Object(d.jsxs)("div",{className:_.a.info,children:[Object(d.jsxs)("div",{className:_.a.infoItem,children:[Object(d.jsx)("b",{children:"looking for a job: "}),e.profile.lookingForAJob?"yes":"no"]}),Object(d.jsxs)("div",{className:_.a.infoItem,children:[Object(d.jsx)("b",{children:"I can: "}),e.profile.lookingForAJobDescription]}),Object(d.jsx)("div",{className:_.a.infoItem,children:Object(d.jsx)(f,{status:e.status,updateStatus:e.updateStatus})})]})]}),Object(d.jsxs)("div",{className:_.a.secondBlock,children:[Object(d.jsx)("div",{className:_.a.fullName,children:Object(d.jsx)("h2",{children:Object(d.jsx)("b",{children:e.profile.fullName})})}),Object(d.jsxs)("div",{className:_.a.links,children:[Object(d.jsx)("div",{className:_.a.title,children:" Contacts( \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u043f\u0441\u044b \u0432 \u043e\u0442\u0434 \u043a\u043e\u043c\u043f) \u0438\u043b\u0438 \u043e\u0434\u0438\u043d \u0441\u0438\u0442\u0438\u043b\u044c"}),Object(d.jsx)("div",{className:_.a.contacts,children:i?Object(d.jsx)(g,{onSubmit:function(t){e.updateInfoProfile(t).then((function(){s(!1)}))},initialValues:e.profile,profile:e.profile}):Object(d.jsx)(k,{profile:e.profile,ownerId:e.ownerId,goToEditeMode:function(){s(!0)}})})]})]}),Object(d.jsxs)("div",{className:_.a.endBlock,children:[Object(d.jsx)("div",{className:_.a.title,children:" About me( \u043a\u0430\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b)"}),Object(d.jsxs)("div",{className:_.a.aboutMe,children:[Object(d.jsx)("b",{children:"About me: "}),e.profile.aboutMe]})]})]})},k=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("b",{className:_.a.titleContact,children:"Contacts: "}),Object(d.jsx)("div",{className:_.a.userInfoBlock,children:Object.keys(e.profile.contacts).map((function(t){return Object(d.jsx)(N,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))}),e.ownerId&&Object(d.jsx)(b.a,{variant:"contained",color:"primary",onClick:e.goToEditeMode,children:"edit Data"})]})},N=function(e){return Object(d.jsxs)("div",{className:_.a.oneInfoContainer,children:[Object(d.jsxs)("b",{children:[e.contactTitle,": "]}),e.contactValue]})},g=Object(v.a)({form:"editProfile"})((function(e){var t=e.handleSubmit,o=e.profile,i=e.error;return Object(d.jsxs)("form",{onSubmit:t,className:_.a.formContainer,children:[i&&Object(d.jsx)("div",{className:_.a.formSunnierError,children:i}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"FullName: "})," ",Object(I.c)("Full name","fullName",[],p.a)]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"looking for a job: "}),Object(I.c)("","lookingForAJob",[],p.a,{type:"checkbox"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"I can: "}),Object(I.c)("skils","lookingForAJobDescription",[],I.b)]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"About me: "}),Object(I.c)("About me","aboutMe",[],I.b)]}),Object(d.jsx)("div",{children:Object(d.jsxs)("b",{children:["Contacts: ",Object.keys(o.contacts).map((function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("b",{children:[e,": ",Object(I.c)(e,"contacts."+e,[],p.a)]})},e)}))]})}),Object(d.jsx)("button",{children:"save"})]})})),C=o(342),S=o.n(C),y=function(e){return Object(d.jsx)("div",{className:S.a.block,children:Object(d.jsx)(P,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,ownerId:e.ownerId,updatePhoto:e.updatePhoto,updateInfoProfile:e.updateInfoProfile})})},w=o(18),B=o(144),F=o(12),D=o(11),A=function(e){Object(c.a)(o,e);var t=Object(n.a)(o);function o(){return Object(i.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userID;e||(e=this.props.authorizationUserId)||this.props.history.push("/login"),this.props.getOneProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,o){this.props.match.params.userID!==e.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return Object(d.jsx)(y,{profile:this.props.profile,ownerId:!this.props.match.params.userID,status:this.props.status,updateStatus:this.props.updateStatus,updatePhoto:this.props.updatePhoto,updateInfoProfile:this.props.updateInfoProfile})}}]),o}(r.a.Component),J=Object(D.d)(Object(w.b)((function(e){return{profile:e.profile.profile,status:e.profile.status,authorizationUserId:e.auth.userId,isAuthorization:e.auth.isAuthorization}}),{getOneProfile:B.b,getStatus:B.c,updateStatus:B.f,updatePhoto:B.e,updateInfoProfile:B.d}),F.g)(A);t.default=J}}]);
//# sourceMappingURL=4.ddbc350c.chunk.js.map