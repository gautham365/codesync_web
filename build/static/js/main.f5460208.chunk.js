(this.webpackJsonpcodesync=this.webpackJsonpcodesync||[]).push([[0],{146:function(e,t){},151:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var o=n(3),c=n.n(o),a=n(78),r=n.n(a),s=n(9),i=n(35),l=n(13),u=n(12),d=n(23),j=function(){return localStorage.getItem("token")||null},h=function(e,t,n,o){localStorage.setItem("token",e),localStorage.setItem("username",JSON.stringify(t)),localStorage.setItem("name",JSON.stringify(n)),localStorage.setItem("photoURL",JSON.stringify(o))},b=n(5),m=["component","setAuth","setAuthLoading","socket"];var O=function(e){var t=e.component,n=e.setAuth,o=e.setAuthLoading,c=e.socket,a=Object(d.a)(e,m);return Object(b.jsx)(l.b,Object(u.a)(Object(u.a)({},a),{},{render:function(e){return j()?Object(b.jsx)(t,Object(u.a)({setAuth:n,setAuthLoading:o,Socket:c},e)):Object(b.jsx)(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},g=["component","setAuth","setAuthLoading","socket"];var f=function(e){var t=e.component,n=e.setAuth,o=e.setAuthLoading,c=e.socket,a=Object(d.a)(e,g);return Object(b.jsx)(l.b,Object(u.a)(Object(u.a)({},a),{},{render:function(e){return j()?Object(b.jsx)(l.a,{to:{pathname:"/"}}):Object(b.jsx)(t,Object(u.a)({setAuth:n,setAuthLoading:o,Socket:c},e))}}))},p=n(27),v=n.n(p),x=n(0),k=n(2),w=n(80),N=n(32),S=Object(w.a)({apiKey:"AIzaSyBquhnb8FEUzjwJywfS8Ifxf6m8LVjl9ag",authDomain:"codesync-ooad.firebaseapp.com",projectId:"codesync-ooad",storageBucket:"codesync-ooad.appspot.com",messagingSenderId:"616748410621",appId:"1:616748410621:web:c99f252643e7971b21c094",measurementId:"G-DB2QH1HJR0"}),y=Object(N.c)(S),A=new N.a;A.addScope("https://www.googleapis.com/auth/userinfo.profile");var C=function(){var e=Object(k.a)(Object(x.a)().mark((function e(){var t,n;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(N.d)(y,N.b);case 3:return e.next=5,Object(N.e)(y,A);case 5:return t=e.sent,n=t.user,e.t0=console,e.t1=n,e.next=11,n.getIdTokenResult(!0);case 11:return e.t2=e.sent,e.t0.log.call(e.t0,e.t1,e.t2),e.abrupt("return",{auth:!0,accessToken:n.accessToken,name:n.displayName,email:n.email,photo:n.photoURL});case 16:return e.prev=16,e.t3=e.catch(0),console.error(e.t3),e.abrupt("return",{auth:!1,accessToken:null,name:null,email:null,photo:null});case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),L=["setAuth","setAuthLoading","Socket"];n(112).config();var I=function(e){var t=e.setAuth,n=e.setAuthLoading,c=(e.Socket,Object(d.a)(e,L)),a=Object(o.useState)(!1),r=Object(s.a)(a,2),i=r[0],l=r[1],u=Object(o.useState)(null),j=Object(s.a)(u,2)[1];Object(o.useEffect)((function(){return function(){}}),[]);var m=Object(o.useCallback)((function(e){n(!e),t(e)}),[t,n]);return i?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"loadclass-new",children:Object(b.jsxs)("div",{className:"spinner-box",children:[Object(b.jsx)("div",{className:"configure-border-1",children:Object(b.jsx)("div",{className:"configure-core"})}),Object(b.jsx)("div",{className:"configure-border-2",children:Object(b.jsx)("div",{className:"configure-core"})})]})})}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"brand-titl",children:"CodeSync"}),Object(b.jsx)("input",{type:"button",value:i?"Loading...":"LOGIN",onClick:function(){j(null),l(!0),C().then((function(e){if(!e.auth)throw new Error("Something went wrong. Please try again later.");delete e.auth,v.a.post("".concat("http://localhost:8080","/login"),e).then((function(e){var t,n,o,a;l(!1),h(null===(t=e.data)||void 0===t?void 0:t.accessToken,null===(n=e.data)||void 0===n?void 0:n.email,null===(o=e.data)||void 0===o?void 0:o.name,null===(a=e.data)||void 0===a?void 0:a.photo),m(!0),c.history.push("/")})).catch((function(e){var t,n,o;l(!1),console.log(null===(t=e.response)||void 0===t?void 0:t.data),401===(null===(n=e.response)||void 0===n?void 0:n.status)?j(null===(o=e.response)||void 0===o?void 0:o.data.error):j("Something went wrong. Please try again later.")}))})).catch((function(e){var t,n,o;l(!1),console.log(null===(t=e.response)||void 0===t?void 0:t.data),401===(null===(n=e.response)||void 0===n?void 0:n.status)?j(null===(o=e.response)||void 0===o?void 0:o.data.error):j("Something went wrong. Please try again later.")}))},disabled:i})]})};var F=function(){return Object(b.jsx)("div",{children:"Home"})},D=(n(64),["toggleDrawer","auth","setAuth"]);var U=function(e){var t=e.toggleDrawer,n=e.auth;return e.setAuth,Object(d.a)(e,D),Object(b.jsx)(b.Fragment,{children:n&&Object(b.jsxs)("nav",{className:"navbar",children:[Object(b.jsx)("div",{className:"logo",children:"My App"}),Object(b.jsxs)("ul",{className:"nav-links",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"Contact"})}),window.location.pathname.toLowerCase().startsWith("/editor")&&Object(b.jsx)("div",{className:"menu-toggle",onClick:t,children:Object(b.jsx)("i",{className:"fa-solid fa-users-line"})})]})]})})},R=n(1),T=n(82),E=n(81),J=n.n(E)()("".concat("http://localhost:8081","}"),{reconnection:!0,autoConnect:!1,transports:["websocket"]}),B=[{label:"JavaScript",value:"javascript"},{label:"Python",value:"python"},{label:"C++",value:"cpp"}],P={javascript:"function newFunc(){\n  for (let i=0;i<l.length;i++){\n    console.log(m);\n  }\n  if (n==4){\n    console.log('hi');\n  }\n  else{\n    console.log('bye');\n  }\n}",python:"def newFunc():\n  for i in range(l):\n    print(m)\n  if n==4:\n    print('hi')\n  else:\n    print('bye')",cpp:"#include <iostream>\nusing namespace std;\nint main(){\n  for (int i=0;i<l.length();i++){\n    cout<<m;\n  }\n  if (n==4){\n    cout<<'hi';\n  }\n  else{\n    cout<<'bye';\n  }\n  return 0;\n}"};var H=function(){var e=Object(o.useState)(P),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(o.useRef)(null),r=Object(o.useState)(!0),i=Object(s.a)(r,2),d=i[0],h=i[1],m=Object(o.useState)([{roomCode:"123456",roomName:"test"}]),O=Object(s.a)(m,2),g=O[0],f=O[1],p=Object(o.useState)([]),x=Object(s.a)(p,2),k=x[0],w=x[1],N=Object(o.useRef)([]),S=Object(l.g)(),y=S.location.pathname.split("/")[2],A=Object(o.useRef)("python"),C=Object(o.useState)(A.current),L=Object(s.a)(C,2),I=L[0],F=L[1],D=Object(o.useCallback)((function(){setTimeout((function(){J.connect()}),2e3)}),[]);Object(o.useEffect)((function(){return J.connected||D(),J.io.on("close",(function(e,t){console.log("socket closed"),"transport close"===e&&D()})),null===J||void 0===J||J.on("assigned",(function(e){console.log(e,localStorage.getItem("paymentId"))})),function(){console.log("unmounting"),J.disconnect({token:j()})}}),[D]),Object(o.useEffect)((function(){return 6!==(null===y||void 0===y?void 0:y.length)?("/editor"===S.location.pathname&&v.a.post("".concat("http://localhost:8080","/room/getDetails"),{token:j()}).then((function(e){console.log(e),f(e.data)})).catch((function(e){console.log(e)})),void S.push("/editor")):(console.log(y),v.a.post("".concat("http://localhost:8080","/room/join"),{token:j(),roomCode:y}).then((function(e){console.log(e),h(!0)})).catch((function(e){console.log(e),S.push("/editor")})),function(){})}),[S,y]),Object(o.useEffect)((function(){if(a.current){var e=a.current,t=e.editor,n=e.monaco;t.deltaDecorations(N.current,[]);var o=U(t,n,k),c=t.deltaDecorations([],o);N.current=c}}),[k]);var U=function(e,t,n){return n.map((function(e,n){return{range:new t.Range(e.lineNumber,e.column,e.lineNumber,e.column+1),options:{inlineClassName:"color-".concat(e.id),stickiness:t.editor.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore,hoverMessage:{value:"User: ".concat(e.name)}}}}))};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"editor",children:d?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h2",{children:["Code Editor ",Object(b.jsxs)("small",{"aria-haspopup":"tree",children:["(","ee",")"]})]}),Object(b.jsx)("div",{className:"language-dropdown",children:Object(b.jsx)("select",{value:I,onChange:function(e){A.current=e.target.value,F(e.target.value),v.a.post("".concat("http://localhost:8080","/room/changeLanguage"),{token:j(),roomCode:y,language:e.target.value}).then((function(e){console.log(e),c((function(){return Object(u.a)(Object(u.a)({},n),{},Object(R.a)({},A.current,e.data.code))}))})).catch((function(e){console.log(e)}))},children:B.map((function(e){return Object(b.jsx)("option",{value:e.value,children:e.label},e.value)}))})}),Object(b.jsx)(T.a,{height:"75vh",theme:"vs-dark",language:A.current,value:n[A.current],options:{fontSize:20,autoFocus:!0},onMount:function(e,t){a.current={editor:e,monaco:t},e.focus(),w([{id:1,name:"User 1",lineNumber:1,column:5,color:"red"},{id:2,name:"User 2",lineNumber:2,column:4,color:"blue"},{id:3,name:"User 3",lineNumber:3,column:4,color:"green"},{id:4,name:"User 4",lineNumber:4,column:4,color:"yellow"},{id:5,name:"User 5",lineNumber:5,column:4,color:"orange"}])},onChange:function(e,t){console.log(A.current,e),c((function(){return Object(u.a)(Object(u.a)({},n),{},Object(R.a)({},A.current,e))}))}})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{onClick:function(){v.a.post("".concat("http://localhost:8080","/room/create"),{token:j(),roomName:"test",defaultLanguage:"python"}).then((function(e){console.log(e),S.push("/editor/".concat(e.data.roomCode))})).catch((function(e){console.log(e)}))},children:"Create Room"})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Join Room"}),g.map((function(e,t){return Object(b.jsx)("h5",{onClick:function(){return S.push("/editor/".concat(e.roomCode))},children:e.roomName},t)}))]})]})})})},M=(n(151),["isDrawerOpen"]);var z=function(e){var t=e.isDrawerOpen;return Object(d.a)(e,M),Object(b.jsxs)("div",{className:"drawer ".concat(t?"open":""),children:[Object(b.jsx)("h2",{children:"Active Users"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"User 1"}),Object(b.jsx)("li",{children:"User 2"}),Object(b.jsx)("li",{children:"User 3"})]})]})};var G=function(){var e=Object(o.useState)(!0),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)(!1),r=Object(s.a)(a,2),u=r[0],d=r[1],m=Object(o.useState)(!1),g=Object(s.a)(m,2),p=g[0],x=g[1];return Object(o.useEffect)((function(){var e=j();if(e)return v.a.post("".concat("http://localhost:8080","/verifyToken"),{token:e}).then((function(t){var n,o,a;h(e,null===(n=t.data)||void 0===n?void 0:n.email,null===(o=t.data)||void 0===o?void 0:o.name,null===(a=t.data)||void 0===a?void 0:a.photo),c(!1),d(!0)})).catch((function(e){var t;401===(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status)&&(localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("name")),c(!1),d(!1)})),function(){}}),[]),n&&j()?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"loadclass-new",children:Object(b.jsxs)("div",{className:"spinner-box",children:[Object(b.jsx)("div",{className:"configure-border-1",children:Object(b.jsx)("div",{className:"configure-core"})}),Object(b.jsx)("div",{className:"configure-border-2",children:Object(b.jsx)("div",{className:"configure-core"})})]})})}):Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(U,{auth:u,setAuth:d,setAuthLoading:c,toggleDrawer:function(){console.log(!p),x(!p)}}),Object(b.jsx)(z,{isDrawerOpen:p}),Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(O,{exact:!0,path:"/",component:F,setAuth:d,setAuthLoading:c}),Object(b.jsx)(f,{exact:!0,path:"/",component:I}),Object(b.jsx)(f,{path:"/login",component:I,setAuth:d,setAuthLoading:c}),Object(b.jsx)(O,{path:"/editor",component:H,setAuth:d,setAuthLoading:c,isDrawerOpen:p})]})})]})})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,153)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(G,{})}),document.getElementById("root")),W()},64:function(e,t,n){}},[[152,1,2]]]);
//# sourceMappingURL=main.f5460208.chunk.js.map