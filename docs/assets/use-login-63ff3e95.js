import{t as h,v as u,i as b,R as t,w as a,x as i}from"./index-4a7703be.js";function k(){const n=h(),l=u(s=>s.loginLocal.usr),r=u(s=>s.loginSession.usr),p=l||r,e=b(),g=t.useCallback((s,o)=>{if(o){const C=a.actions.usr(s);n(C);return}const c=i.actions.usr(s);n(c)},[n]),L=t.useCallback(()=>{const s=a.actions.usr(null);n(s);const o=i.actions.usr(null);n(o),e.clear()},[n,e]),S=t.useCallback(s=>{const o=a.actions.usrPatch(s);n(o);const c=i.actions.usrPatch(s);n(c)},[n]);return{signIn:g,signOut:L,updateUsr:S,usr:p}}export{k as u};