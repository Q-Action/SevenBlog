import{d as g,A as i,B as p,i as d,p as b,o as t,c as s,u as a,q as o,b as r,a as f,t as n,x as h}from"./app.44e4f2cc.js";const k={class:"title"},I={key:1,class:"subtitle"},v=g({props:{pageInfo:{type:Object,default:()=>({})}},setup(c){const l=c,{pageInfo:e}=i(l),m=p(),u=d(()=>e.value.bgImage?{backgroundImage:`url(${b(e.value.bgImage.path)})`}:{});return(_,y)=>(t(),s("div",{class:h(["page-header",{"use-image":a(e).bgImage}]),style:o(a(u))},[a(e).bgImage&&a(e).bgImage.mask?(t(),s("div",{key:0,class:"header-mask",style:o({background:a(e).bgImage.mask})},null,4)):r("",!0),f("h1",k,n(a(e).title||a(m).title),1),a(e).subtitle?(t(),s("h3",I,n(a(e).subtitle),1)):r("",!0)],6))}});export{v as _};
