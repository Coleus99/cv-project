(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{29:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c(0),s=c.n(i),n=c(10),r=c.n(n),o=c(8),d=c(9),l=c(7),j=c(2),b=c(3),h=c(5),p=c(4),u=function(e){Object(h.a)(c,e);var t=Object(p.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"jumbotron d-flex justify-content-center bg-dark text-white rounded-0",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-4 d-flex justify-content-center pb-2",children:Object(a.jsx)("img",{className:"rounded-lg",alt:"avatar",src:this.props.title.imageURL[0]})}),Object(a.jsxs)("div",{className:"col-sm-8 d-flex justify-content-center",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:this.props.title.name[0]}),Object(a.jsx)("h4",{children:this.props.title.position[0]})]}),Object(a.jsx)("i",{className:"fas fa-edit",onClick:function(){return e.props.edit(e.props.id)},"data-toggle":"modal","data-target":"#editModal"})]})]})})}}]),c}(i.Component),O=function(e){Object(h.a)(c,e);var t=Object(p.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h3",{children:"Contact Details"}),Object(a.jsxs)("p",{children:["Email: ",this.props.contact.email[0]]}),Object(a.jsxs)("p",{children:["Phone: ",this.props.contact.phone[0]]}),Object(a.jsx)("i",{className:"fas fa-edit",onClick:function(){return e.props.edit(e.props.id)},"data-toggle":"modal","data-target":"#editModal"})]})}}]),c}(i.Component),x=function(e){Object(h.a)(c,e);var t=Object(p.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h3",{children:"About Me"}),Object(a.jsx)("p",{children:this.props.profile.about[0]}),Object(a.jsx)("i",{className:"fas fa-edit",onClick:function(){return e.props.edit(e.props.id)},"data-toggle":"modal","data-target":"#editModal"})]})}}]),c}(i.Component),m=function(e){Object(h.a)(c,e);var t=Object(p.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h3",{children:"Education"}),Object(a.jsx)("p",{children:this.props.education.qualifications[0]}),Object(a.jsx)("i",{className:"fas fa-edit",onClick:function(){return e.props.edit(e.props.id)},"data-toggle":"modal","data-target":"#editModal"})]})}}]),c}(i.Component),f=function(e){Object(h.a)(c,e);var t=Object(p.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h3",{children:"Experience"}),Object(a.jsx)("p",{children:this.props.experience.details[0]}),Object(a.jsx)("i",{className:"fas fa-edit",onClick:function(){return e.props.edit(e.props.id)},"data-toggle":"modal","data-target":"#editModal"})]})}}]),c}(i.Component);var v=function(){return Object(a.jsx)("footer",{className:"text-muted bg-light",children:Object(a.jsxs)("div",{className:"container mt-5 pt-4 pb-4 d-flex justify-content-center flex-column align-items-center",children:[Object(a.jsxs)("p",{children:["Thanks to"," ",Object(a.jsx)("a",{href:"https://www.theodinproject.com/courses/javascript/lessons/cv-application",children:"the Odin Project"})," ","for great tutorials and practice."]}),Object(a.jsxs)("div",{className:"githubLink",children:[Object(a.jsx)("svg",{className:"octicon octicon-mark-github v-align-middle",height:"32",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true",children:Object(a.jsx)("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})}),Object(a.jsx)("a",{href:"https://github.com/Coleus99",children:"Check me out on GitHub"})]})]})})},g=c(15),N=function(e){var t=e.fields,c=e.save,s=e.editTarget,n=e.showDialog,r=e.close,j=Object(i.useState)(t),b=Object(l.a)(j,2),h=b[0],p=b[1];Object(i.useEffect)((function(){t&&p(t)}),[t]);var u,O,x=function(e){var t={};t[0]=e.target.value,t[1]=e.target.type,p(Object(d.a)(Object(d.a)({},h),{},Object(o.a)({},e.target.id,t)))};return O=Object.keys(h).map((function(e,t){return u="textarea"===h[e][1]?Object(a.jsx)("textarea",{onChange:x,type:h[e][1],className:"form-control",id:e,value:h[e][0]||""},t):Object(a.jsx)("input",{onChange:x,type:h[e][1],className:"form-control",id:e,value:h[e][0]||""},t),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:e,children:(c=e,c.replace(c[0],c[0].toUpperCase()))}),u]},t);var c})),Object(a.jsx)(g.a,{style:{minWidth:300},isOpen:n,onDismiss:r,children:Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsx)("div",{className:"modal-header",children:Object(a.jsxs)("h5",{className:"modal-title",id:"editModalLabel",children:["Edit ",s," "]})}),Object(a.jsx)("div",{className:"modal-body",children:Object(a.jsxs)("form",{onSubmit:function(e){return c(e,s,h)},children:[O,Object(a.jsx)("button",{type:"submit",className:"btn btn-primary mr-2",children:"Submit"}),Object(a.jsx)("button",{onClick:r,className:"btn btn-secondary",children:"Close"})]})})]})})};c(26);var y=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(""),r=Object(l.a)(n,2),j=r[0],b=r[1],h=Object(i.useState)([]),p=Object(l.a)(h,2),g=p[0],y=p[1],C=Object(i.useState)({title:{name:["John Doe","text"],position:["Digital Designer","text"],imageURL:["https://i.pravatar.cc/150?img=68","text"]},contact:{email:["john@example.com","email"],phone:["02736152361","number"]},profile:{about:["I am a real go-getter. I love using React to build projects.","textarea"]},education:{qualifications:["1st Class Degree in Computer Science. A level Maths and Physics","textarea"]},experience:{details:["4 years experience as a digital designer, numerous projects built as part of the Odin Project","textarea"]}}),k=Object(l.a)(C,2),w=k[0],S=k[1];function M(e){s(!0),b(e),y(w[e])}return Object(a.jsxs)("div",{children:[Object(a.jsx)(u,{id:"title",title:w.title,edit:M}),Object(a.jsx)(N,{fields:g,save:function(e,t,c){e.preventDefault(),S(Object(d.a)(Object(d.a)({},w),{},Object(o.a)({},t,c))),s(!1)},editTarget:j,showDialog:c,close:function(){return s(!1)}}),Object(a.jsx)("main",{children:Object(a.jsx)("div",{className:"py-5",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("div",{className:"card border-light mb-3",style:{boxShadow:"2px 2px 2px #e9e9e9"},children:Object(a.jsx)(O,{id:"contact",edit:M,contact:w.contact})})}),Object(a.jsx)("div",{className:"col-md-8",children:Object(a.jsx)("div",{className:"card border-light mb-3",style:{boxShadow:"2px 2px 2px #e9e9e9"},children:Object(a.jsx)(x,{id:"profile",edit:M,profile:w.profile})})})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("div",{className:"card border-light mb-3",style:{boxShadow:"2px 2px 2px #e9e9e9"},children:Object(a.jsx)(m,{id:"education",edit:M,education:w.education})})}),Object(a.jsx)("div",{className:"col-md-8",children:Object(a.jsx)("div",{className:"card border-light mb-3",style:{boxShadow:"2px 2px 2px #e9e9e9"},children:Object(a.jsx)(f,{id:"experience",edit:M,experience:w.experience})})})]})]})})}),Object(a.jsx)(v,{})]})};c(27),c(28);r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.76b41b48.chunk.js.map