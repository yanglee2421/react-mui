import{r as g,m as I,j as w,_ as c,A as j,k as K}from"./index-_jySrniT.js";import{u as Q,g as Z,a as tt,s as N,r as rt,c as z,b as et}from"./TransitionGroupContext-HghCD5I8.js";import{u as X}from"./useTheme-p2_EMMh8.js";import{M as nt}from"./Modal-UuCheryZ.js";import{P as ot}from"./Paper-dfl_ZQKL.js";import{r as it,g as _}from"./Portal-hPTGjRaA.js";import{d as at,o as H}from"./ownerWindow-LT9-6hbI.js";import{T as st}from"./Transition-u51VmtdE.js";const ct=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function lt(r,t,o){const e=t.getBoundingClientRect(),i=o&&o.getBoundingClientRect(),E=H(t);let l;if(t.fakeTransform)l=t.fakeTransform;else{const a=E.getComputedStyle(t);l=a.getPropertyValue("-webkit-transform")||a.getPropertyValue("transform")}let m=0,f=0;if(l&&l!=="none"&&typeof l=="string"){const a=l.split("(")[1].split(")")[0].split(",");m=parseInt(a[4],10),f=parseInt(a[5],10)}return r==="left"?i?`translateX(${i.right+m-e.left}px)`:`translateX(${E.innerWidth+m-e.left}px)`:r==="right"?i?`translateX(-${e.right-i.left-m}px)`:`translateX(-${e.left+e.width-m}px)`:r==="up"?i?`translateY(${i.bottom+f-e.top}px)`:`translateY(${E.innerHeight+f-e.top}px)`:i?`translateY(-${e.top-i.top+e.height-f}px)`:`translateY(-${e.top+e.height-f}px)`}function pt(r){return typeof r=="function"?r():r}function L(r,t,o){const e=pt(o),i=lt(r,t,e);i&&(t.style.webkitTransform=i,t.style.transform=i)}const dt=g.forwardRef(function(t,o){const e=X(),i={enter:e.transitions.easing.easeOut,exit:e.transitions.easing.sharp},E={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},{addEndListener:l,appear:m=!0,children:f,container:a,direction:u="down",easing:T=i,in:x,onEnter:b,onEntered:y,onEntering:P,onExit:R,onExited:$,onExiting:C,style:v,timeout:D=E,TransitionComponent:k=st}=t,A=I(t,ct),p=g.useRef(null),V=Q(f.ref,p,o),d=n=>s=>{n&&(s===void 0?n(p.current):n(p.current,s))},h=d((n,s)=>{L(u,n,a),it(n),b&&b(n,s)}),M=d((n,s)=>{const Y=_({timeout:D,style:v,easing:T},{mode:"enter"});n.style.webkitTransition=e.transitions.create("-webkit-transform",c({},Y)),n.style.transition=e.transitions.create("transform",c({},Y)),n.style.webkitTransform="none",n.style.transform="none",P&&P(n,s)}),B=d(y),O=d(C),q=d(n=>{const s=_({timeout:D,style:v,easing:T},{mode:"exit"});n.style.webkitTransition=e.transitions.create("-webkit-transform",s),n.style.transition=e.transitions.create("transform",s),L(u,n,a),R&&R(n)}),G=d(n=>{n.style.webkitTransition="",n.style.transition="",$&&$(n)}),J=n=>{l&&l(p.current,n)},W=g.useCallback(()=>{p.current&&L(u,p.current,a)},[u,a]);return g.useEffect(()=>{if(x||u==="down"||u==="right")return;const n=at(()=>{p.current&&L(u,p.current,a)}),s=H(p.current);return s.addEventListener("resize",n),()=>{n.clear(),s.removeEventListener("resize",n)}},[u,x,a]),g.useEffect(()=>{x||W()},[x,W]),w.jsx(k,c({nodeRef:p,onEnter:h,onEntered:B,onEntering:M,onExit:q,onExited:G,onExiting:O,addEndListener:J,appear:m,in:x,timeout:D},A,{children:(n,s)=>g.cloneElement(f,c({ref:V,style:c({visibility:n==="exited"&&!x?"hidden":void 0},v,f.props.style)},s))}))}),ft=dt;function ut(r){return Z("MuiDrawer",r)}tt("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const mt=["BackdropProps"],ht=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],U=(r,t)=>{const{ownerState:o}=r;return[t.root,(o.variant==="permanent"||o.variant==="persistent")&&t.docked,t.modal]},gt=r=>{const{classes:t,anchor:o,variant:e}=r,i={root:["root"],docked:[(e==="permanent"||e==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${j(o)}`,e!=="temporary"&&`paperAnchorDocked${j(o)}`]};return et(i,ut,t)},xt=N(nt,{name:"MuiDrawer",slot:"Root",overridesResolver:U})(({theme:r})=>({zIndex:(r.vars||r).zIndex.drawer})),S=N("div",{shouldForwardProp:rt,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:U})({flex:"0 0 auto"}),vt=N(ot,{name:"MuiDrawer",slot:"Paper",overridesResolver:(r,t)=>{const{ownerState:o}=r;return[t.paper,t[`paperAnchor${j(o.anchor)}`],o.variant!=="temporary"&&t[`paperAnchorDocked${j(o.anchor)}`]]}})(({theme:r,ownerState:t})=>c({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(r.vars||r).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},t.anchor==="left"&&{left:0},t.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="right"&&{right:0},t.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="left"&&t.variant!=="temporary"&&{borderRight:`1px solid ${(r.vars||r).palette.divider}`},t.anchor==="top"&&t.variant!=="temporary"&&{borderBottom:`1px solid ${(r.vars||r).palette.divider}`},t.anchor==="right"&&t.variant!=="temporary"&&{borderLeft:`1px solid ${(r.vars||r).palette.divider}`},t.anchor==="bottom"&&t.variant!=="temporary"&&{borderTop:`1px solid ${(r.vars||r).palette.divider}`})),F={left:"right",right:"left",top:"down",bottom:"up"};function Et(r){return["left","right"].indexOf(r)!==-1}function kt(r,t){return r.direction==="rtl"&&Et(t)?F[t]:t}const wt=g.forwardRef(function(t,o){const e=K({props:t,name:"MuiDrawer"}),i=X(),E={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{anchor:l="left",BackdropProps:m,children:f,className:a,elevation:u=16,hideBackdrop:T=!1,ModalProps:{BackdropProps:x}={},onClose:b,open:y=!1,PaperProps:P={},SlideProps:R,TransitionComponent:$=ft,transitionDuration:C=E,variant:v="temporary"}=e,D=I(e.ModalProps,mt),k=I(e,ht),A=g.useRef(!1);g.useEffect(()=>{A.current=!0},[]);const p=kt(i,l),d=c({},e,{anchor:l,elevation:u,open:y,variant:v},k),h=gt(d),M=w.jsx(vt,c({elevation:v==="temporary"?u:0,square:!0},P,{className:z(h.paper,P.className),ownerState:d,children:f}));if(v==="permanent")return w.jsx(S,c({className:z(h.root,h.docked,a),ownerState:d,ref:o},k,{children:M}));const B=w.jsx($,c({in:y,direction:F[p],timeout:C,appear:A.current},R,{children:M}));return v==="persistent"?w.jsx(S,c({className:z(h.root,h.docked,a),ownerState:d,ref:o},k,{children:B})):w.jsx(xt,c({BackdropProps:c({},m,x,{transitionDuration:C}),className:z(h.root,h.modal,a),open:y,ownerState:d,onClose:b,hideBackdrop:T,ref:o},k,D,{children:B}))}),At=wt;export{At as M,kt as g,Et as i};
