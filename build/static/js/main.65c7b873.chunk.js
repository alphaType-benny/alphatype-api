(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{54:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(27),a=n.n(r),s=n(3),i=n(9),l=n.n(i),j=n(14),d=n(12),u=n.n(d),o="/api/results",b=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(o);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h={getAll:b,postResult:function(e){return u.a.post(o,e).then((function(e){return e.data}))}},O=n(2),x=function(e,t){var n=Object(c.useState)(""),r=Object(s.a)(n,2),a=r[0],i=r[1],l="".concat(e,"Input"),j=e,d="text",u=function(e){console.log("onChange",e.target.value),i(e.target.value)};if("fourth"===e&&("2"===t||"3"===t)||"third"===e&&"2"===t){return""!==a&&i(""),{position:j,id:l,type:d,value:a,disabled:"disabled",onChange:u}}return{position:j,id:l,type:d,value:a,list:"roomates",onChange:u}},p=n(15),f=n(28),v=n(16),m=n(0),g=function(e){var t=e.allResults,n=e.setResults,r=Object(c.useState)(""),a=Object(s.a)(r,2),i=a[0],l=a[1],j=Object(c.useState)("4"),d=Object(s.a)(j,2),u=d[0],o=d[1],b=x("winner",u),g=x("second",u),y=x("third",u),w=x("fourth",u);return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Add New Results"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=function(e,t,n){return{date:e,playerCount:t,winner:n,id:(1e5*Math.random()).toFixed(0)}}(i,u,b.value);h.postResult(c).then(n(t.concat(c)))},children:[Object(m.jsx)("table",{style:{margin:"auto"},children:Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"# of Players:"}),Object(m.jsx)("td",{style:{textAlign:"center"},children:Object(m.jsx)(f.a,{className:"mb-2",name:"playerCount",children:["2","3","4"].map((function(e,t){return Object(m.jsx)(p.a,{id:"radio-".concat(t),type:"radio",variant:"secondary",name:"radio",value:e,checked:u===e?"checked":"",onChange:function(e){var t=e.target;o(t.value)},children:e},t)}))})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Winner"}),Object(m.jsx)("td",{children:Object(m.jsx)("input",Object(O.a)({},b))})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Second"}),Object(m.jsx)("td",{children:Object(m.jsx)("input",Object(O.a)({},g))})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Third"}),Object(m.jsx)("td",{children:Object(m.jsx)("input",Object(O.a)({},y))})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Fourth"}),Object(m.jsx)("td",{children:Object(m.jsx)("input",Object(O.a)({},w))})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Date:"}),Object(m.jsx)("td",{children:Object(m.jsx)("input",{name:"date",type:"date",id:"date",value:i,onChange:function(e){var t=e.target;return l(t.value)}})})]})]})}),Object(m.jsx)("datalist",{id:"roomates",children:["Abriel","Avery","Benny","Kelven","Mihir"].map((function(e,t){return Object(m.jsx)("option",{value:e},t)}))}),Object(m.jsx)("div",{style:{textAlign:"center",padding:"10px"},children:Object(m.jsx)(v.a,{type:"submit",variant:"secondary",children:"Submit"})})]})]})},y=function(e){var t=e.allResults,n=Object(c.useState)([]),r=Object(s.a)(n,2),a=r[0],i=r[1],l=t.sort((function(e,t){var n=new Date(e.date);return new Date(t.date)-n}));return Object(c.useEffect)((function(){i(l.slice(0,5))}),[t,l]),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Recent Races"}),Object(m.jsx)("div",{style:{textAlign:"center"},children:a.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Winner: ".concat(e.winner)})," "," - Game on ".concat(e.date)]},e.id)}))})]})},w=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("e8bb8fb1042717249347617e4758b684","&units=metric"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A={get:w},R=(n(54),function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({}),i=Object(s.a)(a,2),l=i[0],j=i[1];return Object(c.useEffect)((function(){h.getAll().then((function(e){return r(e)})),A.get("waterloo").then((function(e){return j(e.main)}))}),[]),l.feels_like&&console.log("Waterloo's Weather",l),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",style:{textAlign:"center"},children:[Object(m.jsx)("h2",{children:"KABAM Mario Kart Charts"}),l.feels_like?Object(m.jsxs)("p",{children:["Feels like ",Math.floor(l.feels_like),"deg C in Waterloo, ON"]}):""]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsx)(g,{allResults:n,setResults:r})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsx)(y,{allResults:n})})]})]})});n(55);a.a.render(Object(m.jsx)(R,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.65c7b873.chunk.js.map