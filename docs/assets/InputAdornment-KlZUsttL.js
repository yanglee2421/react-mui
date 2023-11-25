import{A as h,_ as c,r as C,k as q,m as S,j as a}from"./index-_jySrniT.js";import{a as _,g as z,s as I,c as E,b as U}from"./TransitionGroupContext-HghCD5I8.js";import{f as H}from"./OutlinedInput-5xZbDjjO.js";import{u as w,F as W}from"./useFormControl-pbIodNNG.js";import{T as j}from"./Typography-FoY2yxk-.js";import{S as B}from"./Stack-ar-10IXG.js";function G(o){return z("MuiFormControlLabel",o)}const J=_("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),f=J,K=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],O=o=>{const{classes:e,disabled:t,labelPlacement:n,error:s,required:r}=o,l={root:["root",t&&"disabled",`labelPlacement${h(n)}`,s&&"error",r&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",s&&"error"]};return U(l,G,e)},Q=I("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[{[`& .${f.label}`]:e.label},e.root,e[`labelPlacement${h(t.labelPlacement)}`]]}})(({theme:o,ownerState:e})=>c({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${f.disabled}`]:{cursor:"default"}},e.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},e.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},e.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${f.label}`]:{[`&.${f.disabled}`]:{color:(o.vars||o).palette.text.disabled}}})),V=I("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(o,e)=>e.asterisk})(({theme:o})=>({[`&.${f.error}`]:{color:(o.vars||o).palette.error.main}})),X=C.forwardRef(function(e,t){var n,s;const r=q({props:e,name:"MuiFormControlLabel"}),{className:l,componentsProps:u={},control:d,disabled:b,disableTypography:v,label:x,labelPlacement:i="end",required:p,slotProps:g={}}=r,y=S(r,K),L=w(),k=(n=b??d.props.disabled)!=null?n:L==null?void 0:L.disabled,$=p??d.props.required,N={disabled:k,required:$};["checked","name","onChange","value","inputRef"].forEach(P=>{typeof d.props[P]>"u"&&typeof r[P]<"u"&&(N[P]=r[P])});const D=H({props:r,muiFormControl:L,states:["error"]}),F=c({},r,{disabled:k,labelPlacement:i,required:$,error:D.error}),A=O(F),R=(s=g.typography)!=null?s:u.typography;let m=x;return m!=null&&m.type!==j&&!v&&(m=a.jsx(j,c({component:"span"},R,{className:E(A.label,R==null?void 0:R.className),children:m}))),a.jsxs(Q,c({className:E(A.root,l),ownerState:F,ref:t},y,{children:[C.cloneElement(d,N),$?a.jsxs(B,{display:"block",children:[m,a.jsxs(V,{ownerState:F,"aria-hidden":!0,className:A.asterisk,children:[" ","*"]})]}):m]}))}),pe=X;function Y(o){return z("MuiInputAdornment",o)}const Z=_("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),T=Z;var M;const ee=["children","className","component","disablePointerEvents","disableTypography","position","variant"],oe=(o,e)=>{const{ownerState:t}=o;return[e.root,e[`position${h(t.position)}`],t.disablePointerEvents===!0&&e.disablePointerEvents,e[t.variant]]},te=o=>{const{classes:e,disablePointerEvents:t,hiddenLabel:n,position:s,size:r,variant:l}=o,u={root:["root",t&&"disablePointerEvents",s&&`position${h(s)}`,l,n&&"hiddenLabel",r&&`size${h(r)}`]};return U(u,Y,e)},re=I("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:oe})(({theme:o,ownerState:e})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(o.vars||o).palette.action.active},e.variant==="filled"&&{[`&.${T.positionStart}&:not(.${T.hiddenLabel})`]:{marginTop:16}},e.position==="start"&&{marginRight:8},e.position==="end"&&{marginLeft:8},e.disablePointerEvents===!0&&{pointerEvents:"none"})),se=C.forwardRef(function(e,t){const n=q({props:e,name:"MuiInputAdornment"}),{children:s,className:r,component:l="div",disablePointerEvents:u=!1,disableTypography:d=!1,position:b,variant:v}=n,x=S(n,ee),i=w()||{};let p=v;v&&i.variant,i&&!p&&(p=i.variant);const g=c({},n,{hiddenLabel:i.hiddenLabel,size:i.size,disablePointerEvents:u,position:b,variant:p}),y=te(g);return a.jsx(W.Provider,{value:null,children:a.jsx(re,c({as:l,ownerState:g,className:E(y.root,r),ref:t},x,{children:typeof s=="string"&&!d?a.jsx(j,{color:"text.secondary",children:s}):a.jsxs(C.Fragment,{children:[b==="start"?M||(M=a.jsx("span",{className:"notranslate",children:"​"})):null,s]})}))})}),me=se;export{pe as F,me as I};
