import{c as W,b as k,g as v,s as R}from"./TransitionGroupContext-HghCD5I8.js";import{_ as p,a4 as $,A as l,a5 as G,r as T,m as M,j as P,k as S}from"./index-_jySrniT.js";import{s as j}from"./styled-VM3iepFs.js";const y=["className","component","disableGutters","fixed","maxWidth","classes"],L=$(),N=j("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,s)=>{const{ownerState:o}=a;return[s.root,s[`maxWidth${l(String(o.maxWidth))}`],o.fixed&&s.fixed,o.disableGutters&&s.disableGutters]}}),_=a=>G({props:a,name:"MuiContainer",defaultTheme:L}),U=(a,s)=>{const o=i=>v(s,i),{classes:u,fixed:c,disableGutters:x,maxWidth:t}=a,e={root:["root",t&&`maxWidth${l(String(t))}`,c&&"fixed",x&&"disableGutters"]};return k(e,o,u)};function z(a={}){const{createStyledComponent:s=N,useThemeProps:o=_,componentName:u="MuiContainer"}=a,c=s(({theme:t,ownerState:e})=>p({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:e})=>e.fixed&&Object.keys(t.breakpoints.values).reduce((i,n)=>{const d=n,r=t.breakpoints.values[d];return r!==0&&(i[t.breakpoints.up(d)]={maxWidth:`${r}${t.breakpoints.unit}`}),i},{}),({theme:t,ownerState:e})=>p({},e.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},e.maxWidth&&e.maxWidth!=="xs"&&{[t.breakpoints.up(e.maxWidth)]:{maxWidth:`${t.breakpoints.values[e.maxWidth]}${t.breakpoints.unit}`}}));return T.forwardRef(function(e,i){const n=o(e),{className:d,component:r="div",disableGutters:b=!1,fixed:f=!1,maxWidth:C="lg"}=n,g=M(n,y),m=p({},n,{component:r,disableGutters:b,fixed:f,maxWidth:C}),h=U(m,u);return P.jsx(c,p({as:r,ownerState:m,className:W(h.root,d),ref:i},g))})}const E=z({createStyledComponent:R("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,s)=>{const{ownerState:o}=a;return[s.root,s[`maxWidth${l(String(o.maxWidth))}`],o.fixed&&s.fixed,o.disableGutters&&s.disableGutters]}}),useThemeProps:a=>S({props:a,name:"MuiContainer"})}),O=E;export{O as C};
