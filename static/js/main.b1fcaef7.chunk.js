(this["webpackJsonpreact-notes-app"]=this["webpackJsonpreact-notes-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(8),r=n.n(s),o=(n(14),n(9)),i=n(2),d=n(6),l=n(0);var j=function(e){var t=e.id,n=e.text,a=e.date,c=e.handleDelete;return Object(l.jsxs)("div",{className:"note",children:[Object(l.jsx)("span",{children:n}),Object(l.jsxs)("div",{className:"note-footer",children:[Object(l.jsx)("small",{children:a}),Object(l.jsx)(d.a,{onClick:function(){return c(t)},className:"delete-icon",size:"1.3em"})]})]})};var u=function(e){var t=e.handleAddNote,n=Object(a.useState)(""),c=Object(i.a)(n,2),s=c[0],r=c[1];return Object(l.jsxs)("div",{className:"note new",children:[Object(l.jsx)("textarea",{cols:"10",rows:"8",placeholder:"Type to add a new note...",onChange:function(e){300-e.target.value.length>=0&&r(e.target.value)},value:s}),Object(l.jsxs)("div",{className:"note-footer",children:[Object(l.jsxs)("small",{children:[300-s.length," Remaining"]}),Object(l.jsx)("button",{className:"save",onClick:function(){s.trim().length>0&&(t(s),r(""))},children:"Save"})]})]})},h=function(e){var t=e.notes,n=e.handleAddNote,a=e.handleDelete;return Object(l.jsxs)("div",{className:"notes-list",children:[t.map((function(e){return Object(l.jsx)(j,{id:e.id,text:e.text,date:e.date,handleDelete:a})})),Object(l.jsx)(u,{handleAddNote:n})]})},b=n(4);var O=function(e){var t=e.handleSearch;return Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)(d.b,{className:"search-icon",size:"1.4em"}),Object(l.jsx)("input",{type:"text",placeholder:"Search notes ...",onChange:function(e){return t(e.target.value)}})]})},x=function(e){var t=e.handleToggleDarkMode;return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("h1",{children:[Object(l.jsx)("span",{style:{color:"#308d46"},children:"Suleman's"})," Notes"]}),Object(l.jsx)("button",{onClick:function(){return t((function(e){return!e}))},className:"save",children:"Toggle Mode"})]})};var f=function(){var e=Object(a.useState)([{id:Object(b.a)(),text:"This is my first note",date:"03/11/2021"},{id:Object(b.a)(),text:"This is my second note",date:"03/11/2021"},{id:Object(b.a)(),text:"This is my third note",date:"03/11/2021"}]),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),d=r[0],j=r[1],u=Object(a.useState)(!1),f=Object(i.a)(u,2),v=f[0],m=f[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-notes-app-data"));e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("react-notes-app-data",JSON.stringify(n))}),[n]),Object(l.jsx)("div",{className:"".concat(v&&"dark-mode"),children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(x,{handleToggleDarkMode:m}),Object(l.jsx)(O,{handleSearch:j}),Object(l.jsx)(h,{notes:n.filter((function(e){return e.text.toLowerCase().includes(d)})),handleAddNote:function(e){var t=new Date,a={id:Object(b.a)(),text:e,date:t.toLocaleDateString()},s=[].concat(Object(o.a)(n),[a]);c(s)},handleDelete:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)}})]})})};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b1fcaef7.chunk.js.map