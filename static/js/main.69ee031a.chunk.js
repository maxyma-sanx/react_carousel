(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],[,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(4),s=a.n(n),i=a(2),c=a(1),r=(a(9),a(10),a(0)),u=function(e){var t=e.images,a=e.itemWidth,n=e.frameSize,s=e.step,u=e.animationDuration,l=Object(c.useState)(0),o=Object(i.a)(l,2),j=o[0],m=o[1],b=a*n,p=t.length*a,d=a*n-p;return Object(r.jsxs)("div",{className:"Carousel",children:[Object(r.jsx)("div",{className:"Carousel__container",style:{width:"".concat(b,"px")},children:Object(r.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(j,"px)"),transition:"".concat(u,"ms ease-in-out")},children:t.map((function(e,t){return Object(r.jsx)("li",{children:Object(r.jsx)("img",{src:e,alt:"".concat(t+1),width:a,height:a})},e)}))})}),Object(r.jsx)("button",{type:"button",onClick:function(){var e=j+a*s;m(e<=0?e:0)},disabled:0===j,children:"Prev"}),Object(r.jsx)("button",{type:"button",onClick:function(){var e=j-a*s;m(e>d?e:d)},disabled:j===d,"data-cy":"next",children:"Next"})]})},l=(a(12),function(e){var t=e.forId,a=e.type,n=e.text,s=e.step,i=e.value,c=e.setValue;return Object(r.jsxs)("label",{htmlFor:t,className:"label",children:[n,Object(r.jsx)("input",{type:a,id:t,step:s,value:i,onChange:function(e){return c(+e.target.value)}})]})}),o=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],j=function(){var e=Object(c.useState)(130),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(3),j=Object(i.a)(s,2),m=j[0],b=j[1],p=Object(c.useState)(3),d=Object(i.a)(p,2),g=d[0],O=d[1],x=Object(c.useState)(1e3),h=Object(i.a)(x,2),f=h[0],v=h[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",o.length," images"]}),Object(r.jsxs)("form",{className:"form",children:[Object(r.jsx)(l,{forId:"itemId",type:"number",text:"Set image size",step:100,value:a,setValue:n}),Object(r.jsx)(l,{forId:"frameId",type:"number",text:"Set frame size",step:1,value:m,setValue:b}),Object(r.jsx)(l,{forId:"stepId",type:"number",text:"Set step",step:1,value:g,setValue:O}),Object(r.jsx)(l,{forId:"animationDuration",type:"number",text:"Set animation duration",step:100,value:f,setValue:v})]}),Object(r.jsx)(u,{images:o,itemWidth:a,frameSize:m,step:g,animationDuration:f})]})};s.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.69ee031a.chunk.js.map