import{t as h,r as g,v as I,w as C,_ as S,j as f}from"./index-NOl4DqEL.js";import{a as w,g as R,s as b,c as j,b as N}from"./ButtonBase-7zDRXYUG.js";function A(o){return w("MuiSvgIcon",o)}R("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const B=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],M=o=>{const{color:e,fontSize:t,classes:i}=o,n={root:["root",e!=="inherit"&&`color${h(e)}`,`fontSize${h(t)}`]};return N(n,A,i)},T=b("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.color!=="inherit"&&e[`color${h(t.color)}`],e[`fontSize${h(t.fontSize)}`]]}})(({theme:o,ownerState:e})=>{var t,i,n,p,m,a,v,u,d,r,s,c,l;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(t=o.transitions)==null||(i=t.create)==null?void 0:i.call(t,"fill",{duration:(n=o.transitions)==null||(n=n.duration)==null?void 0:n.shorter}),fontSize:{inherit:"inherit",small:((p=o.typography)==null||(m=p.pxToRem)==null?void 0:m.call(p,20))||"1.25rem",medium:((a=o.typography)==null||(v=a.pxToRem)==null?void 0:v.call(a,24))||"1.5rem",large:((u=o.typography)==null||(d=u.pxToRem)==null?void 0:d.call(u,35))||"2.1875rem"}[e.fontSize],color:(r=(s=(o.vars||o).palette)==null||(s=s[e.color])==null?void 0:s.main)!=null?r:{action:(c=(o.vars||o).palette)==null||(c=c.action)==null?void 0:c.active,disabled:(l=(o.vars||o).palette)==null||(l=l.action)==null?void 0:l.disabled,inherit:void 0}[e.color]}}),_=g.forwardRef(function(e,t){const i=I({props:e,name:"MuiSvgIcon"}),{children:n,className:p,color:m="inherit",component:a="svg",fontSize:v="medium",htmlColor:u,inheritViewBox:d=!1,titleAccess:r,viewBox:s="0 0 24 24"}=i,c=C(i,B),l=g.isValidElement(n)&&n.type==="svg",y=S({},i,{color:m,component:a,fontSize:v,instanceFontSize:e.fontSize,inheritViewBox:d,viewBox:s,hasSvgAsChild:l}),x={};d||(x.viewBox=s);const z=M(y);return f.jsxs(T,S({as:a,className:j(z.root,p),focusable:"false",color:u,"aria-hidden":r?void 0:!0,role:r?"img":void 0,ref:t},x,c,l&&n.props,{ownerState:y,children:[l?n.props.children:n,r?f.jsx("title",{children:r}):null]}))});_.muiName="SvgIcon";const $=_;function V(o,e){function t(i,n){return f.jsx($,S({"data-testid":`${e}Icon`,ref:n},i,{children:o}))}return t.muiName=$.muiName,g.memo(g.forwardRef(t))}export{V as c};