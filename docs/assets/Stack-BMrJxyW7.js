import{c as T,b as V,g as F,s as B}from"./ButtonBase-uYhudd6L.js";import{G as D,H as G,_ as k,P as v,O as p,a1 as M,J as $,a2 as E,r as d,i as N,j as O,a3 as h,f as _}from"./index-i_8Mq8d7.js";import{s as U}from"./styled-LQggPOZ5.js";import{e as A}from"./extendSxProp-s9h8BPvy.js";const L=["component","direction","spacing","divider","children","className","useFlexGap"],H=D(),I=U("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function J(e){return G({props:e,name:"MuiStack",defaultTheme:H})}function W(e,s){const n=d.Children.toArray(e).filter(Boolean);return n.reduce((c,a,t)=>(c.push(a),t<n.length-1&&c.push(d.cloneElement(s,{key:`separator-${t}`})),c),[])}const q=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],z=({ownerState:e,theme:s})=>{let n=k({display:"flex",flexDirection:"column"},v({theme:s},p({values:e.direction,breakpoints:s.breakpoints.values}),c=>({flexDirection:c})));if(e.spacing){const c=M(s),a=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),t=p({values:e.direction,base:a}),m=p({values:e.spacing,base:a});typeof t=="object"&&Object.keys(t).forEach((o,r,i)=>{if(!t[o]){const u=r>0?t[i[r-1]]:"column";t[o]=u}}),n=$(n,v({theme:s},m,(o,r)=>e.useFlexGap?{gap:h(c,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${q(r?t[r]:e.direction)}`]:h(c,o)}}))}return n=E(s.breakpoints,n),n};function K(e={}){const{createStyledComponent:s=I,useThemeProps:n=J,componentName:c="MuiStack"}=e,a=()=>V({root:["root"]},o=>F(c,o),{}),t=s(z);return d.forwardRef(function(o,r){const i=n(o),l=A(i),{component:u="div",direction:x="column",spacing:P=0,divider:y,children:g,className:j,useFlexGap:S=!1}=l,C=N(l,L),b={direction:x,spacing:P,useFlexGap:S},R=a();return O.jsx(t,k({as:u,ownerState:b,ref:r,className:T(R.root,j)},C,{children:y?W(g,y):g}))})}const Q=K({createStyledComponent:B("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>_({props:e,name:"MuiStack"})}),ee=Q;export{ee as S};
