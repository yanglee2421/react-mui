import{_ as a,r as m,k as p,i as g,j as d}from"./index-fc8ed91c.js";import{s as f,c as x,a as I,g as v,b as L}from"./ButtonBase-b7cf2afe.js";import{g as T}from"./listItemIconClasses-2bfb270b.js";import{L as R}from"./ListContext-17fc845a.js";const C=["className"],S=t=>{const{alignItems:s,classes:o}=t;return I({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},T,o)},w=f("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:o}=t;return[s.root,o.alignItems==="flex-start"&&s.alignItemsFlexStart]}})(({theme:t,ownerState:s})=>a({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},s.alignItems==="flex-start"&&{marginTop:8})),y=m.forwardRef(function(s,o){const e=p({props:s,name:"MuiListItemIcon"}),{className:r}=e,n=g(e,C),l=m.useContext(R),i=a({},e,{alignItems:l.alignItems}),c=S(i);return d.jsx(w,a({className:x(c.root,r),ownerState:i,ref:o},n))}),E=y;function M(t){return v("MuiToolbar",t)}L("MuiToolbar",["root","gutters","regular","dense"]);const N=["className","component","disableGutters","variant"],U=t=>{const{classes:s,disableGutters:o,variant:e}=t;return I({root:["root",!o&&"gutters",e]},M,s)},j=f("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:o}=t;return[s.root,!o.disableGutters&&s.gutters,s[o.variant]]}})(({theme:t,ownerState:s})=>a({position:"relative",display:"flex",alignItems:"center"},!s.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}},s.variant==="dense"&&{minHeight:48}),({theme:t,ownerState:s})=>s.variant==="regular"&&t.mixins.toolbar),G=m.forwardRef(function(s,o){const e=p({props:s,name:"MuiToolbar"}),{className:r,component:n="div",disableGutters:l=!1,variant:i="regular"}=e,c=g(e,N),u=a({},e,{component:n,disableGutters:l,variant:i}),b=U(u);return d.jsx(j,a({as:n,className:x(b.root,r),ref:o,ownerState:u},c))}),F=G;export{E as L,F as T};
