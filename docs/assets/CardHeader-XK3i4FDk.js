import{_ as d,r as R,k as T,m as j,j as s}from"./index-_jySrniT.js";import{a as N,g as P,s as c,c as M,b as A}from"./TransitionGroupContext-HghCD5I8.js";import{T as l}from"./Typography-FoY2yxk-.js";function U(a){return P("MuiCardHeader",a)}const _=N("MuiCardHeader",["root","avatar","action","content","title","subheader"]),C=_,$=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],k=a=>{const{classes:e}=a;return A({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},U,e)},w=c("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(a,e)=>d({[`& .${C.title}`]:e.title,[`& .${C.subheader}`]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),E=c("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(a,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),S=c("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(a,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),B=c("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(a,e)=>e.content})({flex:"1 1 auto"}),I=R.forwardRef(function(e,m){const p=T({props:e,name:"MuiCardHeader"}),{action:h,avatar:i,className:v,component:y="div",disableTypography:u=!1,subheader:b,subheaderTypographyProps:g,title:x,titleTypographyProps:f}=p,H=j(p,$),r=d({},p,{component:y,disableTypography:u}),t=k(r);let o=x;o!=null&&o.type!==l&&!u&&(o=s.jsx(l,d({variant:i?"body2":"h5",className:t.title,component:"span",display:"block"},f,{children:o})));let n=b;return n!=null&&n.type!==l&&!u&&(n=s.jsx(l,d({variant:i?"body2":"body1",className:t.subheader,color:"text.secondary",component:"span",display:"block"},g,{children:n}))),s.jsxs(w,d({className:M(t.root,v),as:y,ref:m,ownerState:r},H,{children:[i&&s.jsx(E,{className:t.avatar,ownerState:r,children:i}),s.jsxs(B,{className:t.content,ownerState:r,children:[o,n]}),h&&s.jsx(S,{className:t.action,ownerState:r,children:h})]}))}),z=I;export{z as C};
