import{R as o,j as r}from"./index-pnp19_I-.js";import{G as s}from"./Grid-gYqEx3oN.js";import{C as l}from"./Card-NrDYaNAx.js";import{C as d}from"./CardHeader-fthWJYvA.js";import{C as c}from"./CardContent-RiTSVqm3.js";import{T as j}from"./TextField-YljCRHYU.js";import{B as g}from"./Box-YfAVlwSX.js";import{B as h}from"./Modal-rS09a5xt.js";import{C}from"./CircularProgress-J6le_HKC.js";import"./TransitionGroupContext-4nvgwR1C.js";import"./useTheme-1M0nh4-q.js";import"./extendSxProp-ghvkjKi0.js";import"./Paper-cX8M8hwE.js";import"./Typography-UL4ZzfgI.js";import"./OutlinedInput--EbIdb3V.js";import"./ownerDocument-bIJBxlvi.js";import"./ownerWindow-LT9-6hbI.js";import"./Grow-7AgXNizx.js";import"./Portal-3g9yFBwM.js";import"./isHostComponent-jcd54X0C.js";import"./Transition-k3GVQpak.js";import"./List-gxrSvIlQ.js";import"./ListContext-1957hfWH.js";import"./useFormControl-fAYwXQLF.js";import"./TextareaAutosize-svn9eQlt.js";import"./isMuiElement-tFdF2YSJ.js";import"./Select-ou5HD1dG.js";import"./useControlled-cot84qCp.js";import"./createSvgIcon-RhCEmyU4.js";function Y(){const i=o.useRef(null),[n,b]=o.useState("http://localhost:5500"),[x,f]=o.useState(""),[a,m]=o.useState(!0),u=t=>{var e,p;f(t.target.value),(p=(e=i.current)==null?void 0:e.contentWindow)==null||p.postMessage(JSON.stringify({msg:t.target.value}),n,[])};return o.useEffect(()=>{var e;const t=new AbortController;return(e=i.current)==null||e.addEventListener("load",()=>{m(!1)},{signal:t.signal}),()=>{new AbortController}},[i,m]),r.jsx(r.Fragment,{children:r.jsxs(s,{container:!0,spacing:6,p:3,children:[r.jsx(s,{item:!0,xs:12,children:r.jsxs(l,{children:[r.jsx(d,{title:"Form"}),r.jsx(c,{children:r.jsx(j,{value:x,onChange:u,disabled:a,label:"Text"})})]})}),r.jsx(s,{item:!0,xs:12,children:r.jsxs(l,{children:[r.jsx(d,{title:"Iframe"}),r.jsx(c,{children:r.jsxs(g,{position:"relative",p:3,border:"1px solid",borderColor:t=>t.palette.divider,children:[r.jsx(h,{open:a,sx:{position:"absolute"},children:r.jsx(C,{})}),r.jsx("iframe",{ref:i,src:n})]})})]})})]})})}export{Y as Component};