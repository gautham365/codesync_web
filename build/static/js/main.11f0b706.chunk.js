(this.webpackJsonpcodesync=this.webpackJsonpcodesync||[]).push([[0],{28:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(29),o=n.n(a),r=n(5),i=n(15),l=n(3),j=n(6),u=n(11),d=function(){return localStorage.getItem("token")||null},b=n(1),h=["component","setAuth","setAuthLoading","socket"];var O=function(e){var t=e.component,n=e.setAuth,c=e.setAuthLoading,s=e.socket,a=Object(u.a)(e,h);return Object(b.jsx)(l.b,Object(j.a)(Object(j.a)({},a),{},{render:function(e){return d()?Object(b.jsx)(t,Object(j.a)({setAuth:n,setAuthLoading:c,Socket:s},e)):Object(b.jsx)(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},m=["component","setAuth","setAuthLoading","socket"];var x=function(e){var t=e.component,n=e.setAuth,c=e.setAuthLoading,s=e.socket,a=Object(u.a)(e,m);return Object(b.jsx)(l.b,Object(j.a)(Object(j.a)({},a),{},{render:function(e){return d()?Object(b.jsx)(l.a,{to:{pathname:"/"}}):Object(b.jsx)(t,Object(j.a)({setAuth:n,setAuthLoading:c,Socket:s},e))}}))},g=n(31),p=n.n(g),v=["setAuth","setAuthLoading","Socket"];n(63).config();var f=function(e){var t=e.setAuth,n=e.setAuthLoading,s=(e.Socket,Object(u.a)(e,v)),a=Object(c.useState)(!1),o=Object(r.a)(a,2),i=o[0],l=o[1],j=Object(c.useState)(null),d=Object(r.a)(j,2),h=d[0],O=d[1],m=Object(c.useCallback)((function(e){n(!e),t(e)}),[t,n]);return i?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"loadclass-new",children:Object(b.jsxs)("div",{className:"spinner-box",children:[Object(b.jsx)("div",{className:"configure-border-1",children:Object(b.jsx)("div",{className:"configure-core"})}),Object(b.jsx)("div",{className:"configure-border-2",children:Object(b.jsx)("div",{className:"configure-core"})})]})})}):Object(b.jsx)("div",{children:Object(b.jsxs)("form",{className:"login",children:[Object(b.jsx)("h3",{className:"brand-titl",children:"CodeSync"}),Object(b.jsx)("label",{className:"inputLabel",children:"Username"}),Object(b.jsx)("input",{type:"text",placeholder:"Email or Phone",id:"username",autoComplete:"new-password"}),Object(b.jsx)("label",{className:"inputLabel",children:"Password"}),Object(b.jsx)("input",{type:"password",placeholder:"Password",id:"password",autoComplete:"new-password"}),h&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("small",{style:{color:"red"},children:h}),Object(b.jsx)("br",{})]}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"button",value:i?"Loading...":"LOGIN",onClick:function(){O(null),l(!0),p.a.post("".concat("http://localhost:8000","/login"),{}).then((function(e){var t,n,c,a,o,r;l(!1),a=null===(t=e.data)||void 0===t?void 0:t.token,o=null===(n=e.data)||void 0===n?void 0:n.username,r=null===(c=e.data)||void 0===c?void 0:c.name,localStorage.setItem("token",a),localStorage.setItem("username",JSON.stringify(o)),localStorage.setItem("name",JSON.stringify(r)),m(!0),s.history.push("/")})).catch((function(e){var t,n,c;l(!1),console.log(null===(t=e.response)||void 0===t?void 0:t.data),401===(null===(n=e.response)||void 0===n?void 0:n.status)?O(null===(c=e.response)||void 0===c?void 0:c.data.error):O("Something went wrong. Please try again later.")}))},disabled:i})]})})};var A=function(){return Object(b.jsx)("div",{children:"Home"})},N=(n(28),["toggleDrawer","auth","setAuth"]);var w=function(e){var t=e.toggleDrawer,n=e.auth;return e.setAuth,Object(u.a)(e,N),Object(b.jsx)(b.Fragment,{children:n&&Object(b.jsxs)("nav",{className:"navbar",children:[Object(b.jsx)("div",{className:"logo",children:"My App"}),Object(b.jsxs)("ul",{className:"nav-links",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"Contact"})}),window.location.pathname.toLowerCase().startsWith("/editor")&&Object(b.jsx)("div",{className:"menu-toggle",onClick:t,children:Object(b.jsx)("i",{className:"fa-solid fa-users-line"})})]})]})})},S=n(32);var k=function(e){var t=Object(c.useState)("import Hello\ndef newFunc():\n  for i in l:\n    print(m)\n  if n==4:\n    print('hi')\n  else:\n    print('bye')\n "),n=Object(r.a)(t,2),s=n[0],a=n[1],o=Object(c.useRef)(null),i=Object(c.useState)([]),l=Object(r.a)(i,2),j=l[0],u=l[1],d=Object(c.useRef)([]);Object(c.useEffect)((function(){if(o.current){var e=o.current,t=e.editor,n=e.monaco;t.deltaDecorations(d.current,[]);var c=h(t,n,j),s=t.deltaDecorations([],c);d.current=s}}),[j]);var h=function(e,t,n){return n.map((function(e,n){return{range:new t.Range(e.lineNumber,e.column,e.lineNumber,e.column+1),options:{inlineClassName:"color-".concat(e.id),hoverMessage:{value:"User: ".concat(e.name)}}}}))},O=Object(c.useCallback)((function(e,t){a(e)}),[]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"editor",children:[Object(b.jsx)("h2",{children:"Code Editor"}),Object(b.jsx)(S.a,{height:"75vh",theme:"vs-dark",language:"python",value:s,options:{fontSize:20,autoFocus:!0},onMount:function(e,t){o.current={editor:e,monaco:t},e.focus(),u([{id:1,name:"User 1",lineNumber:1,column:5,color:"red"},{id:2,name:"User 2",lineNumber:2,column:4,color:"blue"},{id:3,name:"User 3",lineNumber:3,column:4,color:"green"},{id:4,name:"User 4",lineNumber:4,column:4,color:"yellow"},{id:5,name:"User 5",lineNumber:5,column:4,color:"orange"}])},onChange:O})]})})},L=(n(66),["isDrawerOpen"]);var y=function(e){var t=e.isDrawerOpen;return Object(u.a)(e,L),Object(b.jsxs)("div",{className:"drawer ".concat(t?"open":""),children:[Object(b.jsx)("h2",{children:"Active Users"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"User 1"}),Object(b.jsx)("li",{children:"User 2"}),Object(b.jsx)("li",{children:"User 3"})]})]})};var C=function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2)[1],n=Object(c.useState)(!0),s=Object(r.a)(n,2),a=s[0],o=s[1],j=Object(c.useState)(!1),u=Object(r.a)(j,2),d=u[0],h=u[1];return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(w,{auth:a,setAuth:o,setAuthLoading:t,toggleDrawer:function(){console.log(!d),h(!d)}}),Object(b.jsx)(y,{isDrawerOpen:d}),Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(O,{exact:!0,path:"/",component:A,setAuth:o,setAuthLoading:t}),Object(b.jsx)(x,{exact:!0,path:"/",component:f}),Object(b.jsx)(x,{path:"/login",component:f,setAuth:o,setAuthLoading:t}),Object(b.jsx)(x,{path:"/editor",component:k,setAuth:o,setAuthLoading:t,isDrawerOpen:d})]})})]})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))};o.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),U()}},[[67,1,2]]]);
//# sourceMappingURL=main.11f0b706.chunk.js.map