(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{300:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3D_lU",mainPhoto:"ProfileInfo_mainPhoto__3zaeZ",contact:"ProfileInfo_contact__2mq84"}},301:function(t,e,s){t.exports={postsBlock:"Myposts_postsBlock__KOlwO",posts:"Myposts_posts__9GZy8"}},302:function(t,e,s){t.exports={item:"Post_item__214EX",icon:"Post_icon__1My9l"}},303:function(t,e,s){"use strict";s.r(e);var c=s(3),i=s(38),o=s(39),n=s(41),r=s(40),a=s(0),l=s.n(a),j=s(102),u=s(300),b=s.n(u),d=s(42),h=s(1),p=function(t){var e=Object(a.useState)(!1),s=Object(j.a)(e,2),c=s[0],i=s[1],o=Object(a.useState)(t.status),n=Object(j.a)(o,2),r=n[0],l=n[1];Object(a.useEffect)((function(){l(t.status)}),[t.status]);return Object(h.jsxs)("div",{children:[!c&&Object(h.jsx)("div",{children:Object(h.jsx)("span",{onDoubleClick:function(){i(!0)},children:t.status||"your status is here"})}),c&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.updateStatus(r)},value:r})})]})},O=s(112),f=s(50),x=s.n(f),m=s(26),v=s(136),g=Object(v.a)({form:"edit-profile"})((function(t){var e=t.handleSubmit,s=t.profile,c=t.error;return Object(h.jsxs)("form",{onSubmit:e,children:[Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"save"})}),c&&Object(h.jsx)("div",{className:x.a.formSummaryError,children:c}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Full name"}),": ",Object(m.c)("Full name","fullName",[],m.a)]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Looking for a job"}),": ",Object(m.c)("","lookingForAJob",[],m.a,{type:"checkbox"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"My professional skills"}),":",Object(m.c)("My professional skills","lookingForAJobDescription",[],m.b)]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"About me"}),":",Object(m.c)("About me","aboutMe",[],m.b)]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Contacts"}),": ",Object.keys(s.contacts).map((function(t){return Object(h.jsx)("div",{className:b.a.contact,children:Object(h.jsxs)("b",{children:[t,": ",Object(m.c)(t,"contacts."+t,[],m.a)]})},t)}))]})]})})),P=function(t){var e=t.profile,s=t.isOwner,c=t.goToEditMode;return Object(h.jsxs)("div",{children:[s&&Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:c,children:"edit"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Full name"}),": ",e.fullName]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.contacts).map((function(t){return Object(h.jsx)(k,{contactTitle:t,contactValue:e.contacts[t]},t)}))]})]})},k=function(t){var e=t.contactTitle,s=t.contactValue;return Object(h.jsxs)("div",{className:b.a.contact,children:[Object(h.jsx)("b",{children:e}),": ",s]})},_=function(t){var e=t.profile,s=t.status,c=t.updateStatus,i=t.isOwner,o=t.savePhoto,n=t.saveProfile,r=Object(a.useState)(!1),l=Object(j.a)(r,2),u=l[0],f=l[1];if(!e)return Object(h.jsx)(d.a,{});return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:b.a.descriptionBlock,children:[Object(h.jsx)(p,{status:s,updateStatus:c}),Object(h.jsx)("img",{src:e.photos.large||O.a,className:b.a.mainPhoto,alt:""}),i&&Object(h.jsx)("input",{type:"file",onChange:function(t){t.target.files&&t.target.files.length&&o(t.target.files[0])}}),u?Object(h.jsx)(g,{initialValues:e,profile:e,onSubmit:function(t){n(t).then((function(){f(!1)}))}}):Object(h.jsx)(P,{goToEditMode:function(){f(!0)},profile:e,isOwner:i})]})})},y=s(101),S=s(301),A=s.n(S),w=s(302),I=s.n(w),M=s.p+"static/media/heart.a13e3857.png",N=function(t){return Object(h.jsxs)("div",{className:I.a.item,children:[Object(h.jsx)("img",{src:"https://i.pinimg.com/736x/c1/62/15/c162157d47257988b3cfe228479389d0.jpg",alt:""}),t.message,Object(h.jsxs)("div",{className:I.a.icon,children:[Object(h.jsx)("img",{src:M,alt:""}),t.likesCount]})]})},C=s(95),F=s(70),U=function(t){var e=t.profilePage.posts.map((function(t){return Object(h.jsx)(N,{likesCount:t.likesCount,message:t.message},t.id)})),s=Object(F.a)(10),c=Object(v.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(h.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(h.jsx)("div",{children:Object(h.jsx)(C.a,{name:"newPostText",component:m.b,placeholder:"Post message",validate:[F.b,s]})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Add post"})})]})}));return Object(h.jsxs)("div",{className:A.a.postsBlock,children:[Object(h.jsx)("h3",{children:"My posts"}),Object(h.jsx)(c,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(h.jsx)("div",{className:A.a.posts,children:e})]})},B=s(12),D=Object(B.b)((function(t){return{profilePage:t.profilePage}}),(function(t){return{addPost:function(e){t(Object(y.a)(e))}}}))(U),J=s(10),T=function(t){return t.isAuth?Object(h.jsxs)("div",{children:[Object(h.jsx)(_,{isOwner:t.isOwner,savePhoto:t.savePhoto,profile:t.profile,status:t.status,saveProfile:t.saveProfile,updateStatus:t.updateStatus}),Object(h.jsx)(D,{})]}):Object(h.jsx)(J.a,{to:"/login"})},z=s(11),E=function(t){Object(n.a)(s,t);var e=Object(r.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"refreshProfile",value:function(){var t=+this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),t?(this.props.getUserProfile(t),this.props.getStatus(t)):console.error("ID should exists in URI params or in state ('authorizedUserId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)(T,Object(c.a)(Object(c.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,isAuth:this.props.isAuth,saveProfile:this.props.saveProfile}))})}}]),s}(l.a.Component);e.default=Object(z.d)(Object(B.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getUserProfile:y.d,getStatus:y.c,updateStatus:y.g,savePhoto:y.e,saveProfile:y.f}),J.g)(E)}}]);
//# sourceMappingURL=3.3683517a.chunk.js.map