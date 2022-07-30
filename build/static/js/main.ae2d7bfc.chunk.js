(this["webpackJsonptodo-app-redux"]=this["webpackJsonptodo-app-redux"]||[]).push([[0],{125:function(e,t,a){},126:function(e,t,a){},202:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a(29),c=a.n(r),n=(a(125),a(207)),o=a(206),l=(a(126),a(4)),s=a(212),d=a(215),u=a(208),j=a(209),h=a(214),b=a(118),p=a(2),O=a(213),g=a(40),m=a(44),x=Object(m.b)({name:"todoList",initialState:[{id:1,name:"Learn Yoga",completed:!1,priority:"Medium"},{id:2,name:"Learn Redux",completed:!0,priority:"High"},{id:3,name:"Learn JavaScript",completed:!1,priority:"Low"}],reducers:{addTodo:function(e,t){e.push(t.payload)},toggleTodoStatus:function(e,t){var a=e.find((function(e){return e.id===t.payload}));a&&(a.completed=!a.completed)}}}),f=a(8),y={High:"red",Medium:"blue",Low:"gray"};function v(e){var t=e.todoId,a=e.name,r=e.priority,c=e.completed,n=Object(g.b)(),o=Object(i.useState)(c),d=Object(l.a)(o,2),u=d[0],j=d[1];return Object(f.jsxs)(s.a,{justify:"space-between",style:Object(p.a)({marginBottom:3},u?{opacity:.5,textDecoration:"line-through"}:{}),children:[Object(f.jsx)(O.a,{checked:u,onChange:function(){j(!u),n(x.actions.toggleTodoStatus(t))},children:a}),Object(f.jsx)(h.a,{color:y[r],style:{margin:0},children:r})]})}var w=a(211),C=a(63),S=Object(C.a)((function(e){return e.todoList}),(function(e){return e.filters.search}),(function(e){return e.filters.status}),(function(e){return e.filters.priority}),(function(e,t,a,i){return e.filter((function(e){return"All"===a?i.length?e.name.includes(t)&&i.includes(e.priority):e.name.includes(t):e.name.includes(t)&&("Completed"===a?e.completed:!e.completed)&&(!i.length||i.includes(e.priority))}))}));function L(){var e=Object(i.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(i.useState)("Medium"),n=Object(l.a)(c,2),o=n[0],p=n[1],O=Object(g.b)(),m=Object(g.c)(S);return Object(f.jsxs)(s.a,{style:{height:"calc(100% - 40px)",position:"relative",overflowY:"hidden"},children:[Object(f.jsx)(d.a,{span:24,style:{height:"calc(100% - 40px)",overflowY:"auto"},children:m.map((function(e){return Object(f.jsx)(v,{todoId:e.id,name:e.name,priority:e.priority,completed:e.completed},e.id)}))}),Object(f.jsx)(d.a,{span:24,style:{position:"absolute",bottom:"0",left:"0",right:"0"},children:Object(f.jsxs)(u.a.Group,{style:{display:"flex"},compact:!0,children:[Object(f.jsx)(u.a,{value:a,onChange:function(e){r(e.target.value)}}),Object(f.jsxs)(j.a,{defaultValue:"Medium",value:o,onChange:function(e){p(e)},children:[Object(f.jsx)(j.a.Option,{value:"High",label:"High",children:Object(f.jsx)(h.a,{color:"red",children:"High"})}),Object(f.jsx)(j.a.Option,{value:"Medium",label:"Medium",children:Object(f.jsx)(h.a,{color:"blue",children:"Medium"})}),Object(f.jsx)(j.a.Option,{value:"Low",label:"Low",children:Object(f.jsx)(h.a,{color:"gray",children:"Low"})})]}),Object(f.jsx)(b.a,{type:"primary",onClick:function(){r(""),p("Medium"),O(x.actions.addTodo({id:Object(w.a)(),name:a,priority:o,completed:!1}))},children:"Add"})]})})]})}var M=a(210),T=Object(m.b)({name:"filters",initialState:{search:"",status:"All",priority:[]},reducers:{searchFilterChange:function(e,t){e.search=t.payload},statusFilterChange:function(e,t){e.status=t.payload},priorityFilterChange:function(e,t){e.priority=t.payload}}}),F=u.a.Search;function H(){var e=Object(g.b)(),t=Object(i.useState)(""),a=Object(l.a)(t,2),r=a[0],c=a[1],o=Object(i.useState)("All"),u=Object(l.a)(o,2),b=u[0],p=u[1],O=Object(i.useState)([]),m=Object(l.a)(O,2),x=m[0],y=m[1];return Object(f.jsxs)(s.a,{justify:"center",children:[Object(f.jsxs)(d.a,{span:24,children:[Object(f.jsx)(n.a.Paragraph,{style:{fontWeight:"bold",marginBottom:3,marginTop:10},children:"Search"}),Object(f.jsx)(F,{placeholder:"input search text",value:r,onChange:function(t){c(t.target.value),e(T.actions.searchFilterChange(t.target.value))}})]}),Object(f.jsxs)(d.a,{sm:24,children:[Object(f.jsx)(n.a.Paragraph,{style:{fontWeight:"bold",marginBottom:3,marginTop:10},children:"Filter By Status"}),Object(f.jsxs)(M.a.Group,{value:b,onChange:function(t){p(t.target.value),e(T.actions.statusFilterChange(t.target.value))},children:[Object(f.jsx)(M.a,{value:"All",children:"All"}),Object(f.jsx)(M.a,{value:"Completed",children:"Completed"}),Object(f.jsx)(M.a,{value:"Todo",children:"To do"})]})]}),Object(f.jsxs)(d.a,{sm:24,children:[Object(f.jsx)(n.a.Paragraph,{style:{fontWeight:"bold",marginBottom:3,marginTop:10},children:"Filter By Priority"}),Object(f.jsxs)(j.a,{mode:"multiple",allowClear:!0,placeholder:"Please select",style:{width:"100%"},value:x,onChange:function(t){y(t),e(T.actions.priorityFilterChange(t))},children:[Object(f.jsx)(j.a.Option,{value:"High",label:"High",children:Object(f.jsx)(h.a,{color:"red",children:"High"})}),Object(f.jsx)(j.a.Option,{value:"Medium",label:"Medium",children:Object(f.jsx)(h.a,{color:"blue",children:"Medium"})}),Object(f.jsx)(j.a.Option,{value:"Low",label:"Low",children:Object(f.jsx)(h.a,{color:"gray",children:"Low"})})]})]})]})}var A=n.a.Title;var B=function(){return Object(f.jsxs)("div",{style:{width:500,margin:"0 auto",display:"flex",flexDirection:"column",backgroundColor:"white",padding:20,boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",borderRadius:5,height:"90vh"},children:[Object(f.jsx)(A,{style:{textAlign:"center"},children:"MINI TODOS"}),Object(f.jsx)(H,{}),Object(f.jsx)(o.a,{}),Object(f.jsx)(L,{})]})},k=Object(m.a)({reducer:{filters:T.reducer,todoList:x.reducer}});c.a.render(Object(f.jsx)(g.a,{store:k,children:Object(f.jsx)(B,{})}),document.getElementById("root"))}},[[202,1,2]]]);
//# sourceMappingURL=main.ae2d7bfc.chunk.js.map