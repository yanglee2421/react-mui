import{R as a,j as r}from"./index-fc8ed91c.js";import{c as x,F as u,I as h}from"./item-text-4eed1861.js";import"./copy-btn-c39da686.js";import{S as j}from"./scrollbar-a6d28746.js";import{C as f}from"./Card-5314813c.js";import{C}from"./CardHeader-1c615918.js";import{C as b}from"./CardContent-367242ea.js";import{G as e}from"./Grid-aac50e44.js";import{M as p}from"./Button-769df04c.js";import"./TextField-247cecb1.js";import"./ButtonBase-b7cf2afe.js";import"./InputLabel-2bad988e.js";import"./Select-21820d2d.js";import"./Menu-f99694fe.js";import"./useTheme-b294d643.js";import"./Modal-155a33e7.js";import"./List-f0c24520.js";import"./ListContext-17fc845a.js";import"./Transition-853a857e.js";import"./ownerDocument-613eb639.js";import"./Paper-88263757.js";import"./Grow-e4ad5fae.js";import"./useControlled-eaea5033.js";import"./useId-25c6ae2d.js";import"./useFormControl-0029c9e4.js";import"./createSvgIcon-6778c479.js";import"./TextareaAutosize-737f5207.js";import"./isMuiElement-206a6524.js";import"./get-usr-map-cd6eda0e.js";import"./Popper-62410c93.js";import"./IconButton-9a757063.js";import"./Typography-caf217f2.js";import"./extendSxProp-017aa9eb.js";function $(){const m=x({defaultValues:{goals:""}}),[s,n]=a.useState([]),l=m.handleSubmit(t=>{const o=t.goals||crypto.randomUUID();n(i=>Array.from(new Set([...i,o])))}),c=a.useMemo(()=>s.map(t=>{const o=()=>{n(i=>i.filter(d=>t!==d))};return r.jsxs("li",{children:[r.jsx("button",{onClick:o,children:"delete"}),t]},t)}),[s]);return r.jsx(r.Fragment,{children:r.jsxs(f,{children:[r.jsx(C,{title:"Scrollbar Component"}),r.jsx(b,{children:r.jsxs(e,{container:!0,spacing:3,children:[r.jsx(e,{item:!0,xs:12,children:r.jsx("form",{onSubmit:l,children:r.jsxs(u,{...m,children:[r.jsx(h,{name:"goals",sx:{mb:2}}),r.jsx(p,{type:"submit",variant:"contained",sx:{mr:3},children:"add"}),r.jsx(p,{type:"reset",variant:"outlined",children:"reset"})]})})}),r.jsx(e,{item:!0,xs:12,maxHeight:200,children:r.jsx(j,{children:r.jsx("ul",{children:c})})})]})})]})})}export{$ as Component};
