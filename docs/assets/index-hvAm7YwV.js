import{R as d,j as t}from"./index-pnp19_I-.js";import{S as p}from"./Switch-cvUsuZ67.js";import{B as m}from"./Box-YfAVlwSX.js";import{T as u}from"./Transition-k3GVQpak.js";import"./TransitionGroupContext-4nvgwR1C.js";import"./SwitchBase-4hTMVfGy.js";import"./useFormControl-fAYwXQLF.js";import"./ButtonBase-M6bKPT5t.js";import"./useControlled-cot84qCp.js";import"./extendSxProp-ghvkjKi0.js";const n=new Map;n.set("entering",{transition:"ease-in-out .3s",transform:"rotateY(0)"});n.set("entered",{transform:"rotateY(0)"});n.set("exiting",{transition:"ease-in-out .3s",transform:"rotateY(180deg)"});n.set("exited",{transform:"rotateY(180deg)"});const r=new Map;r.set("entering",{transition:"ease-in-out .3s",transform:"rotateY(0)"});r.set("entered",{transform:"rotateY(0)"});r.set("exiting",{transition:"ease-in-out .3s",transform:"rotateY(-180deg)"});r.set("exited",{transform:"rotateY(-180deg)"});function k(){const[s,c]=d.useState(!1),o=d.useRef(null),a=d.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(p,{checked:s,onChange:(e,i)=>{c(i)}}),t.jsxs(m,{position:"relative",overflow:"hidden",border:"1px red dashed",width:300,height:300,marginTop:3,textAlign:"center",children:[t.jsx(u,{nodeRef:o,addEndListener:e=>{var i;(i=o.current)==null||i.addEventListener("transitionend",e)},in:s,children:e=>(console.log(e),t.jsx(m,{ref:o,sx:{inset:0,backfaceVisibility:"hidden",...n.get(e)},position:"absolute",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quod debitis rem omnis quia temporibus sapiente atque doloribus, ullam aliquid totam. Id consequuntur rerum voluptate similique ea sed maiores optio!"}))}),t.jsx(u,{nodeRef:a,addEndListener:e=>{var i;(i=a.current)==null||i.addEventListener("transitionend",e)},in:!s,children:e=>t.jsx(m,{ref:a,position:"absolute",sx:{inset:0,backfaceVisibility:"hidden",transform:"rotateY(-180deg)",...r.get(e)},children:"back"})})]})]})}export{k as Component};