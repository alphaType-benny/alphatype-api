(this.webpackJsonpalphatype=this.webpackJsonpalphatype||[]).push([[0],{35:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var r,s=n(1),a=n.n(s),c=n(11),i=n.n(c),o=(n(35),n(3)),l=n(0),u=function(e){var t=e.user,n=t?"20px":"10px";return Object(l.jsxs)("div",{className:"header",style:{padding:n},children:[Object(l.jsx)("h1",{className:"gameTitle",children:"alphaType"}),t?"":"A Typing Game"]})},j=n(4),d=n.n(j),b=n(8),p=n(12),x=n.n(p),f="/api/results",h=null,O=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(f);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:h}},e.next=3,x.a.post(f,{score:t},n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={allResults:O,setToken:function(e){h="bearer ".concat(e)},saveScore:m},g="/api/users",y=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(g);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S={getAll:y,signUp:function(e){return x.a.post(g,e).then((function(e){return e.data}))}},k=n(30),w=function(e){var t=e.notifClass,n=e.notifMessage;return null===n?null:Object(l.jsx)(k.a,{variant:t,style:{padding:"6px"},children:n})},T=function(e){var t=e.start,n=e.now,r=e.localScore,s=(n-t)/1e3;return Object(l.jsx)("div",{className:"timer",children:t?r?Object(l.jsxs)("h3",{children:[Object(l.jsx)("b",{children:"Your alphaTime is:"})," ",r,"s !"]}):Object(l.jsxs)("h3",{children:[Object(l.jsx)("b",{children:"Timer:"})," ",s.toFixed(3),"s"]}):Object(l.jsx)("h3",{children:"Timer starts when typing begins"})})},N=n(9),U=0,C=function(e){var t=e.user,n=e.setTotalTime,a=e.localScore,c=e.setLocalScore,i=Object(s.useState)(""),u=Object(o.a)(i,2),j=u[0],p=u[1],x=Object(s.useState)(""),f=Object(o.a)(x,2),h=f[0],O=f[1],m=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],g=[];m.forEach((function(e,t){g=g.concat({a:e,idx:t})}));var y=g.slice(0,13),S=g.slice(13);Object(s.useEffect)((function(){E()}),[t]);var k=function(e){e.preventDefault(),"Escape"!==e.key&&"Space"!==e.code||E()},w=function(e){return document.getElementsByClassName("ctr-display")[0].style.backgroundColor=e},C=function(){var e=Object(b.a)(d.a.mark((function e(t,s,a){var i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(" "===a){e.next=23;break}if(j||p(Date.now()),"a"===s&&(r=setInterval((function(){var e=Date.now();O(e)}),1),document.addEventListener("keyup",k)),a.toUpperCase()!==s.toUpperCase()){e.next=20;break}if(U+=1,w(null),"z"!==s||U!==m.length){e.next=16;break}return i=(h-j)/1e3,clearInterval(r),e.next=11,c(i);case 11:return e.next=13,v.saveScore(i);case 13:n(i),e.next=18;break;case 16:document.getElementById(t+1).removeAttribute("disabled"),document.getElementById(t+1).focus();case 18:e.next=21;break;case 20:w("red");case 21:e.next=24;break;case 23:E();case 24:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),E=function(){for(var e=0;e<m.length;e++){var t=0!==e?"disabled":"";document.getElementById(e).disabled=t,document.getElementById(e).value=""}U=0,p(""),O(""),c(""),n(""),w(null),document.getElementById(0).focus(),document.removeEventListener("keyup",k)},I=function(e){return Object(l.jsx)("div",{className:"letterInput",children:e.map((function(e){return Object(l.jsxs)("span",{children:[Object(l.jsx)("label",{children:Object(l.jsxs)("b",{children:["\xa0",e.a,"\xa0"]})}),Object(l.jsx)("input",{disabled:0!==e.idx?"disabled":"",type:"text",id:e.idx,maxLength:"1",onChange:function(t){return C(e.idx,e.a,t.target.value)},style:{width:"20px",textAlign:"center"},autoComplete:"off"})]},e.idx)}))})};return Object(l.jsxs)("div",{children:[Object(l.jsx)(T,{now:h,start:j,localScore:a}),Object(l.jsx)("br",{}),I(y),I(S),Object(l.jsx)("br",{}),Object(l.jsx)(N.a,{variant:"secondary",size:"sm",onClick:function(){return E()},children:"Restart (Space Key)"})]})},E=function(e){return e.sort((function(e,t){return e.totalTime-t.totalTime}))},I=function(e){var t=e.usersTopScore,n=e.setUsersTopScore,r=e.allUsers,a=Object(s.useState)(!1),c=Object(o.a)(a,2),i=c[0],u=c[1];Object(s.useEffect)((function(){var e=[];0!==r.length&&(r.forEach((function(t){var n="No Score";if(0!==t.results.length){n=E(t.results)[0].totalTime;var r={username:t.username,totalTime:n};e=e.concat(r)}})),n(E(e)))}),[r]);var j=i?10:5,d=i?"Show Less":"Show More",b=i?"0":"40px";return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{style:{paddingTop:b},children:Object(l.jsx)("u",{children:"Leaderboard"})}),Object(l.jsx)("table",{className:"leaderboard",children:Object(l.jsxs)("tbody",{style:{textAlign:"left"},children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"User"}),Object(l.jsx)("th",{children:"Time"})]}),t.slice(0,j).map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsxs)("td",{style:{minWidth:"100px"},children:[t+1,"- ",e.username,"\xa0"]}),Object(l.jsxs)("td",{children:[e.totalTime,"s"]})]},t)}))]})}),Object(l.jsx)(N.a,{variant:"link",size:"sm",style:{textDecoration:"none"},onClick:function(){return u(!i)},children:d})]})},L=function(e){var t=e.user,n=e.allUsers,r=e.usersTopScore,s=e.logout,a=r.find((function(e){return e.username===t.username})),c=n.find((function(e){return e.username===t.username})),i="No Rank",o="No Game Played",u="0";if(void 0!==a&&null!==a.totalTime){var j=1+r.findIndex((function(e){return e.username===t.username}));i="".concat(j," (out of ").concat(r.length,")"),o=0===r.length?null:"".concat(a.totalTime,"s"),u=c.results.length}return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h3",{style:{margin:0},children:["Welcome, ",t.username]}),Object(l.jsxs)("p",{children:["Ranking: ",i]}),Object(l.jsx)("table",{className:"userStats",children:Object(l.jsxs)("tbody",{style:{textAlign:"left"},children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{style:{minWidth:"120px"},children:"Personal Best:"}),Object(l.jsx)("td",{children:o})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Games played:"}),Object(l.jsx)("td",{children:u})]})]})}),Object(l.jsx)("br",{}),Object(l.jsx)(N.a,{variant:"outline-secondary",size:"sm",onClick:function(){return s()},children:"Logout"})]})},A=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=x.a.post("/api/login",t),e.next=3,n;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B={userLogin:A},z=function(e){var t=e.setUser,n=e.notification,r=Object(s.useState)(""),a=Object(o.a)(r,2),c=a[0],i=a[1],u=Object(s.useState)(""),j=Object(o.a)(u,2),p=j[0],x=j[1],f=Object(s.useState)(!1),h=Object(o.a)(f,2),O=h[0],m=h[1],g=function(){var e=Object(b.a)(d.a.mark((function e(r){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),!O){e.next=11;break}return e.prev=2,e.next=5,S.signUp({username:c,password:p});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(2),n("danger","Invalid Credentials"),e.abrupt("return");case 11:return e.prev=11,e.next=14,B.userLogin({username:c,password:p});case 14:s=e.sent,console.log(s),window.localStorage.setItem("loggedAppUser",JSON.stringify(s)),v.setToken(s.token),i(""),x(""),t(s),n("success","Welcome ".concat(s.username," & Happy alphaTyping!")),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(11),n("danger","Wrong/Invalid Credentials");case 27:case"end":return e.stop()}}),e,null,[[2,7],[11,24]])})));return function(t){return e.apply(this,arguments)}}(),y=!1===O?"Login to Play":"Create Account",k=!1===O?"New User?":"Existing User?",w=!1!==O?"Login":"Sign Up";return Object(l.jsx)("div",{className:"loginContainer",children:Object(l.jsxs)("div",{className:"loginDisplay",children:[Object(l.jsxs)("form",{onSubmit:g,children:[Object(l.jsx)("h3",{children:y}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"loginField",children:["Username:\xa0",Object(l.jsx)("input",{type:"text",value:c,name:"Username",size:"12",onChange:function(e){var t=e.target;return i(t.value)}})]}),Object(l.jsxs)("div",{className:"loginField",children:["Password:\xa0",Object(l.jsx)("input",{type:"password",value:p,name:"Password",size:"12",onChange:function(e){var t=e.target;return x(t.value)}})]}),Object(l.jsx)("br",{}),Object(l.jsx)(N.a,{variant:"secondary",type:"submit",children:"Submit"})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"toggleLoginSignUp",children:[Object(l.jsx)("div",{children:k}),Object(l.jsx)(N.a,{variant:"link",style:{paddingTop:"0"},onClick:function(){m(!O),i(""),x("")},children:w})]})]})})},F=function(e){var t=e.user,n=e.setUser,r=Object(s.useState)([]),a=Object(o.a)(r,2),c=a[0],i=a[1],u=Object(s.useState)([]),j=Object(o.a)(u,2),d=j[0],b=j[1],p=Object(s.useState)(""),x=Object(o.a)(p,2),f=x[0],h=x[1],O=Object(s.useState)(""),m=Object(o.a)(O,2),g=m[0],y=m[1],k=Object(s.useState)(""),T=Object(o.a)(k,2),N=T[0],U=T[1],E=Object(s.useState)(""),A=Object(o.a)(E,2),B=A[0],F=A[1];Object(s.useEffect)((function(){var e=window.localStorage.getItem("loggedAppUser");if(e){var t=JSON.parse(e);n(t),v.setToken(t.token)}}),[]),Object(s.useEffect)((function(){S.getAll().then((function(e){return i(e)}))}),[f]);var D=function(){return n(null),window.localStorage.removeItem("loggedAppUser")};return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"notifFlex",children:Object(l.jsx)(w,{notifClass:N,notifMessage:B})}),t?Object(l.jsxs)("div",{className:"mainContainer",children:[Object(l.jsx)("div",{className:"left-display",children:Object(l.jsx)(L,{user:t,allUsers:c,usersTopScore:d,logout:D})}),Object(l.jsx)("div",{className:"ctr-display",children:Object(l.jsx)(C,{user:t,totalTime:f,setTotalTime:h,localScore:g,setLocalScore:y})}),Object(l.jsx)("div",{className:"right-display",children:Object(l.jsx)(I,{totalTime:f,usersTopScore:d,setUsersTopScore:b,allUsers:c})})]}):Object(l.jsx)(z,{user:t,setUser:n,notification:function(e,t){U(e),F(t),setTimeout((function(){F(null)}),5e3)}})]})},D=function(){return Object(l.jsx)("div",{className:"footer",children:Object(l.jsx)("small",{children:"Copyright \xa9 2021 Benny Luo"})})},P=(n(59),function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{user:n}),Object(l.jsx)(F,{user:n,setUser:r}),Object(l.jsx)(D,{})]})}),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))};n(60);i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(P,{})}),document.getElementById("root")),W()}},[[61,1,2]]]);
//# sourceMappingURL=main.d8df6a06.chunk.js.map