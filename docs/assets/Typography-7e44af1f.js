import{A as u,_ as s,r as T,k as B,m as W,j as C}from"./index-4a7703be.js";import{g as M,a as R,s as P,c as j,b as U}from"./ButtonBase-9c5cceda.js";import{e as _}from"./extendSxProp-8b456e8a.js";function N(a){return M("MuiTypography",a)}R("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const $=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],A=a=>{const{align:t,gutterBottom:r,noWrap:n,paragraph:i,variant:o,classes:p}=a,e={root:["root",o,a.align!=="inherit"&&`align${u(t)}`,r&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return U(e,N,p)},E=P("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:r}=a;return[t.root,r.variant&&t[r.variant],r.align!=="inherit"&&t[`align${u(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:a,ownerState:t})=>s({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&a.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},L={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=a=>L[a]||a,z=T.forwardRef(function(t,r){const n=B({props:t,name:"MuiTypography"}),i=k(n.color),o=_(s({},n,{color:i})),{align:p="inherit",className:e,component:g,gutterBottom:d=!1,noWrap:f=!1,paragraph:l=!1,variant:h="body1",variantMapping:c=y}=o,x=W(o,$),m=s({},o,{align:p,color:i,className:e,component:g,gutterBottom:d,noWrap:f,paragraph:l,variant:h,variantMapping:c}),v=g||(l?"p":c[h]||y[h])||"span",b=A(m);return C.jsx(E,s({as:v,ref:r,ownerState:m,className:j(b.root,e)},x))}),V=z;export{V as T};