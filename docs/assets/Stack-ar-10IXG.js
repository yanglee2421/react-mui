import{c as T,b as V,g as F,s as B}from"./TransitionGroupContext-HghCD5I8.js";import{a4 as D,a5 as M,_ as v,ab as h,aa as p,ah as $,a7 as E,ai as G,r as d,m as N,j as _,aj as k,k as O}from"./index-_jySrniT.js";import{s as U}from"./styled-VM3iepFs.js";import{e as A}from"./extendSxProp-bBpA41mm.js";const L=["component","direction","spacing","divider","children","className","useFlexGap"],I=D(),W=U("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function q(e){return M({props:e,name:"MuiStack",defaultTheme:I})}function z(e,s){const n=d.Children.toArray(e).filter(Boolean);return n.reduce((a,c,t)=>(a.push(c),t<n.length-1&&a.push(d.cloneElement(s,{key:`separator-${t}`})),a),[])}const H=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],J=({ownerState:e,theme:s})=>{let n=v({display:"flex",flexDirection:"column"},h({theme:s},p({values:e.direction,breakpoints:s.breakpoints.values}),a=>({flexDirection:a})));if(e.spacing){const a=$(s),c=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),t=p({values:e.direction,base:c}),m=p({values:e.spacing,base:c});typeof t=="object"&&Object.keys(t).forEach((o,r,i)=>{if(!t[o]){const u=r>0?t[i[r-1]]:"column";t[o]=u}}),n=E(n,h({theme:s},m,(o,r)=>e.useFlexGap?{gap:k(a,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${H(r?t[r]:e.direction)}`]:k(a,o)}}))}return n=G(s.breakpoints,n),n};function K(e={}){const{createStyledComponent:s=W,useThemeProps:n=q,componentName:a="MuiStack"}=e,c=()=>V({root:["root"]},o=>F(a,o),{}),t=s(J);return d.forwardRef(function(o,r){const i=n(o),l=A(i),{component:u="div",direction:x="column",spacing:j=0,divider:y,children:g,className:P,useFlexGap:S=!1}=l,b=N(l,L),C={direction:x,spacing:j,useFlexGap:S},R=c();return _.jsx(t,v({as:u,ownerState:C,ref:r,className:T(R.root,P)},b,{children:y?z(g,y):g}))})}const Q=K({createStyledComponent:B("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>O({props:e,name:"MuiStack"})}),ee=Q;export{ee as S};
