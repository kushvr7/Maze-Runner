(this.webpackJsonpmaze=this.webpackJsonpmaze||[]).push([[0],[,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),s=a.n(l),c=(a(9),a(1));a(10),a(11);var o=function(e){var t=Object(n.useState)({n:""}),a=Object(c.a)(t,2),l=a[0],s=a[1];return r.a.createElement("div",null,r.a.createElement("span",null," Row :")," ",r.a.createElement("input",{type:"text",className:"inp1",onChange:function(e){var t=e.target.value;s({n:t})}}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.gete(l.n)}},"BUILD MAZE"))};a(12);var i=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"hed"},r.a.createElement("div",{className:"he"}),r.a.createElement("p",null,"The Maze")))};a(13);var u=function(e){var t={display:e.set};return r.a.createElement("div",{style:t,id:"d1"},r.a.createElement("p",{id:"p1"},"Instructions :"),r.a.createElement("span",{className:"cal"},"(\xa0\xa0 ",r.a.createElement("span",{className:"grap"},"BFS & DFS")," Algorithm used in the Project as major backbone \xa0\xa0  ) "),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{id:"r",className:"com"},"RED :\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),r.a.createElement("span",{className:"cont"},"are the Obstacles dynamically created"),"  "),r.a.createElement("li",null,r.a.createElement("span",{id:"b",className:"com"},"BLUE :")," ",r.a.createElement("span",{className:"cont"}," is the Start self choosen"),"  "),r.a.createElement("li",null,r.a.createElement("span",{id:"g",className:"com"},"GREEN :")," ",r.a.createElement("span",{className:"cont"}," is the Exit self choosen ")," "),r.a.createElement("li",null,r.a.createElement("span",{id:"gry",className:"com"},"GREY :")," ",r.a.createElement("span",{className:"cont"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 is the Traversed path by the algorithm ")," ")),r.a.createElement("p",{id:"p2"},"Firstly provide the size of maze in ",r.a.createElement("span",{className:"ro"},"Row")," input field above and start .  Place every required component as per your choice . After placing entry , exit and hurdles press button ",r.a.createElement("span",{className:"sea"},"( Search )"),". It will traverse the provided grid and eventually result into the Path to exit and hence the Maze will be solved with the path shown in  ",r.a.createElement("span",{id:"gol"},"GOLD")," ."))};var m=function(){for(var e=Object(n.useState)({len:0}),t=Object(c.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)({mat:[]}),m=Object(c.a)(s,2),f=m[0],v=m[1],h=Object(n.useState)({sty:[]}),p=Object(c.a)(h,2),d=p[0],b=p[1],E=Object(n.useState)({bgclo:"black"}),y=Object(c.a)(E,2),g=(y[0],y[1],Object(n.useState)({vi:[]})),k=Object(c.a)(g,2),O=k[0],j=k[1],N=Object(n.useState)({h:""}),w=Object(c.a)(N,2),S=w[0],x=w[1],C=Object(n.useState)({obs:0,start:0,end:0}),R=Object(c.a)(C,2),T=R[0],z=R[1],A=[],B=[],P=[],D=[],I=0;I<a.len;I++){for(var M=[],F=0;F<a.len;F++)M.push(0);D.push(M)}for(var G=[],L=0;L<a.len;L++){for(var J=[],U=0;U<a.len;U++)J.push(0);G.push(J)}var W=[];if(a.len>0)for(var q=function(e){for(var t=[],n=function(n){"s[".concat(e,"][").concat(n,"]");t.push(r.a.createElement("td",null,r.a.createElement("button",{style:{backgroundColor:d.sty[e][n],width:"40px",height:"40px",borderRadius:"50%",transition:"0.7s"},onClick:function(){return function(e,t){if(1==T.obs&&0==T.start&&0==T.end)for(var n=0;n<a.len;n++)for(var r=0;r<a.len;r++)if(e==n&&t==r){f.mat[n][r]=2,d.sty[n][r]="#b31929";var l=d.sty;b({sty:l})}if(0==T.obs&&0==T.start&&1==T.end)for(var s=0;s<a.len;s++)for(var c=0;c<a.len;c++)if(e==s&&t==c){f.mat[s][c]=3,d.sty[s][c]="#257e3a";var o=d.sty;b({sty:o})}if(0==T.obs&&1==T.start&&0==T.end)for(var i=0;i<a.len;i++)for(var u=0;u<a.len;u++)if(e==i&&t==u){f.mat[i][u]=1,d.sty[i][u]="#0d5fbc";var m=d.sty;b({sty:m})}}(e,n)}})))},l=0;l<a.len;l++)n(l);W.push(r.a.createElement("tbody",null,r.a.createElement("tr",null,t)))},H=0;H<a.len;H++)q(H);var Y=function(e,t){var n=[],r=[];n.push(e),r.push(t),G[e][t]=0;for(var l=function(){var e=n.shift(),t=r.shift();if(D[e][t]=1,e-1>=0&&e-1<a.len)if(0==D[e-1][t]&&0==f.mat[e-1][t])D[e-1][t]=1,n.push(e-1),r.push(t),G[e-1][t]=1+G[e][t],setTimeout((function(){d.sty[e-1][t]="#6f827a";var a=d.sty;b({sty:a})}),1e3);else if(0==D[e-1][t]&&3==f.mat[e-1][t])return"break";if(e+1>=0&&e+1<a.len)if(0==D[e+1][t]&&0==f.mat[e+1][t])D[e+1][t]=1,n.push(e+1),r.push(t),G[e+1][t]=1+G[e][t],setTimeout((function(){d.sty[e+1][t]="#6f827a";var a=d.sty;b({sty:a})}),1e3);else if(0==D[e+1][t]&&3==f.mat[e+1][t])return"break";if(t+1>=0&&t+1<a.len)if(0==D[e][t+1]&&0==f.mat[e][t+1])D[e][t+1]=1,n.push(e),r.push(t+1),G[e][t+1]=1+G[e][t],setTimeout((function(){d.sty[e][t+1]="#6f827a";var a=d.sty;b({sty:a})}),1e3);else if(0==D[e][t+1]&&3==f.mat[e][t+1])return"break";if(t-1>=0&&t-1<a.len)if(0==D[e][t-1]&&0==f.mat[e][t-1])D[e][t-1]=1,n.push(e),r.push(t-1),G[e][t-1]=1+G[e][t],setTimeout((function(){d.sty[e][t-1]="#6f827a";var a=d.sty;b({sty:a})}),1e3);else if(0==D[e][t-1]&&3==f.mat[e][t-1])return"break"};0!=n.length||0!=r.length;){if("break"===l())break}},Z=function(e,t){Q(e,t),V()},$=0,K=[],Q=function e(t,n){for(var r=[1,-1,0,0],l=[0,0,1,-1],s=0;s<4;s++){var c=r[s]+t,o=l[s]+n;if(c>=0&&o>=0&&c<a.len&&o<a.len){if(0==O.vi[c][o]&&3==f.mat[c][o]){$=1;var i={x:c,y:o};return K.push(i)}if(0==O.vi[c][o]&&0==f.mat[c][o]){O.vi[c][o]=1;var u=O.vi;if(j({vi:u}),e(c,o),1==$){var m={x:c,y:o};return K.push(m)}}}}},V=function(){for(var e=function(e){var t=K[e].x,a=K[e].y;setTimeout((function(){d.sty[t][a]="gold";var e=d.sty;b({sty:e})}),2e3)},t=1;t<K.length;t++)e(t)};return r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement("br",null),r.a.createElement(o,{gete:function(e){var t=e;l({len:e});for(var a=0;a<t;a++){for(var n=[],r=0;r<t;r++)n.push("black");A.push(n)}for(var s=0;s<t;s++){for(var c=[],o=0;o<t;o++)c.push(0);B.push(c)}for(var i=0;i<t;i++){P.push([])}for(var u=0;u<t;u++)for(var m=0;m<t;m++)P[u].push(0);v({mat:P}),j({vi:B}),x({h:"none"}),b({sty:A})}}),r.a.createElement("br",null),r.a.createElement("div",{id:"ree"},r.a.createElement("button",{id:"obs",onClick:function(){z({obs:1,start:0,end:0})}},"Obtacles"),"\xa0\xa0",r.a.createElement("button",{id:"sp",onClick:function(){z({obs:0,start:1,end:0})}},"Start Point"),"\xa0\xa0",r.a.createElement("button",{id:"ep",onClick:function(){z({obs:0,start:0,end:1})}},"End Point"),"\xa0\xa0",r.a.createElement("button",{id:"se",onClick:function(){for(var e=0;e<a.len;e++)for(var t=0;t<a.len;t++)1==f.mat[e][t]&&(Y(e,t),Z(e,t))}},"SEARCH")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"tb"},r.a.createElement("table",null,W)),r.a.createElement(u,{set:S.h}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.4cf410f5.chunk.js.map