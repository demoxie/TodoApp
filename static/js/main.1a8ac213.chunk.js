(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(8),r=n.n(o),i=(n(13),n(5)),s=n(3),l=(n(7),n(0));var d=function(e){var t=e.addTask,n=Object(c.useState)(""),a=Object(s.a)(n,2),o=a[0],r=a[1];return Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),o&&(t(o),r(""))},children:Object(l.jsx)("input",{type:"text",className:"input",value:o,placeholder:"Add a new task",onChange:function(e){return r(e.target.value)}})})};function u(e){var t=e.task,n=e.index,c=e.completeTask,a=e.removeTask;return Object(l.jsxs)("div",{className:"task",style:{textDecoration:t.completed?"line-through":""},children:[t.title,Object(l.jsx)("button",{style:{background:"red"},onClick:function(){return a(n)},children:"x"}),Object(l.jsx)("button",{onClick:function(){return c(n)},children:"Complete"})]})}function j(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)([{title:"Grab some Pizza",completed:!0},{title:"Do your workout",completed:!0},{title:"Hangout with friends",completed:!1}]),r=Object(s.a)(o,2),j=r[0],b=r[1];Object(c.useEffect)((function(){a(j.filter((function(e){return!e.completed})).length)}));var m=function(e){var t=Object(i.a)(j);t[e].completed=!0,b(t)},p=function(e){var t=Object(i.a)(j);t.splice(e,1),b(t)};return Object(l.jsxs)("div",{className:"todo-container",children:[Object(l.jsxs)("div",{className:"header",children:["Pending tasks (",n,")"]}),Object(l.jsx)("div",{className:"tasks",children:j.map((function(e,t){return Object(l.jsx)(u,{task:e,index:t,completeTask:m,removeTask:p},t)}))}),Object(l.jsx)("div",{className:"create-task",children:Object(l.jsx)(d,{addTask:function(e){var t=[].concat(Object(i.a)(j),[{title:e,completed:!1}]);b(t)}})})]})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.1a8ac213.chunk.js.map