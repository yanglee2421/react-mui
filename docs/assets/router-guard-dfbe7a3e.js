import{u as E,R as b,c as q,g as I,a as O,n as j,b as W,d as B,j as C,N}from"./index-e8b98d12.js";import{u as U}from"./use-login-4b1f6282.js";import{u as D}from"./useQuery-717224d5.js";import"./useBaseQuery-47da0176.js";import"./utils-73056672.js";function z(){const i=E();return b.useEffect(()=>{const c=i[i.length-1],t=Reflect.get(Object(c==null?void 0:c.handle),"title");if(t&&typeof t=="string"){document.title=t;return}},[i])}var M={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(i,c){(function(t,s){i.exports=s()})(q,function(){var t={};t.version="0.2.0";var s=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};t.configure=function(e){var r,n;for(r in e)n=e[r],n!==void 0&&e.hasOwnProperty(r)&&(s[r]=n);return this},t.status=null,t.set=function(e){var r=t.isStarted();e=p(e,s.minimum,1),t.status=e===1?null:e;var n=t.render(!r),a=n.querySelector(s.barSelector),l=s.speed,m=s.easing;return n.offsetWidth,w(function(o){s.positionUsing===""&&(s.positionUsing=t.getPositioningCSS()),g(a,R(e,l,m)),e===1?(g(n,{transition:"none",opacity:1}),n.offsetWidth,setTimeout(function(){g(n,{transition:"all "+l+"ms linear",opacity:0}),setTimeout(function(){t.remove(),o()},l)},l)):setTimeout(o,l)}),this},t.isStarted=function(){return typeof t.status=="number"},t.start=function(){t.status||t.set(0);var e=function(){setTimeout(function(){t.status&&(t.trickle(),e())},s.trickleSpeed)};return s.trickle&&e(),this},t.done=function(e){return!e&&!t.status?this:t.inc(.3+.5*Math.random()).set(1)},t.inc=function(e){var r=t.status;return r?(typeof e!="number"&&(e=(1-r)*p(Math.random()*r,.1,.95)),r=p(r+e,0,.994),t.set(r)):t.start()},t.trickle=function(){return t.inc(Math.random()*s.trickleRate)},function(){var e=0,r=0;t.promise=function(n){return!n||n.state()==="resolved"?this:(r===0&&t.start(),e++,r++,n.always(function(){r--,r===0?(e=0,t.done()):t.set((e-r)/e)}),this)}}(),t.render=function(e){if(t.isRendered())return document.getElementById("nprogress");L(document.documentElement,"nprogress-busy");var r=document.createElement("div");r.id="nprogress",r.innerHTML=s.template;var n=r.querySelector(s.barSelector),a=e?"-100":u(t.status||0),l=document.querySelector(s.parent),m;return g(n,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),s.showSpinner||(m=r.querySelector(s.spinnerSelector),m&&x(m)),l!=document.body&&L(l,"nprogress-custom-parent"),l.appendChild(r),r},t.remove=function(){k(document.documentElement,"nprogress-busy"),k(document.querySelector(s.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&x(e)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var e=document.body.style,r="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return r+"Perspective"in e?"translate3d":r+"Transform"in e?"translate":"margin"};function p(e,r,n){return e<r?r:e>n?n:e}function u(e){return(-1+e)*100}function R(e,r,n){var a;return s.positionUsing==="translate3d"?a={transform:"translate3d("+u(e)+"%,0,0)"}:s.positionUsing==="translate"?a={transform:"translate("+u(e)+"%,0)"}:a={"margin-left":u(e)+"%"},a.transition="all "+r+"ms "+n,a}var w=function(){var e=[];function r(){var n=e.shift();n&&n(r)}return function(n){e.push(n),e.length==1&&r()}}(),g=function(){var e=["Webkit","O","Moz","ms"],r={};function n(o){return o.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(f,d){return d.toUpperCase()})}function a(o){var f=document.body.style;if(o in f)return o;for(var d=e.length,y=o.charAt(0).toUpperCase()+o.slice(1),v;d--;)if(v=e[d]+y,v in f)return v;return o}function l(o){return o=n(o),r[o]||(r[o]=a(o))}function m(o,f,d){f=l(f),o.style[f]=d}return function(o,f){var d=arguments,y,v;if(d.length==2)for(y in f)v=f[y],v!==void 0&&f.hasOwnProperty(y)&&m(o,y,v);else m(o,d[1],d[2])}}();function P(e,r){var n=typeof e=="string"?e:S(e);return n.indexOf(" "+r+" ")>=0}function L(e,r){var n=S(e),a=n+r;P(n,r)||(e.className=a.substring(1))}function k(e,r){var n=S(e),a;P(e,r)&&(a=n.replace(" "+r+" "," "),e.className=a.substring(1,a.length-1))}function S(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function x(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return t})})(M);var A=M.exports;const T=I(A);function F(){const i=E();return b.useEffect(()=>(T.done(),()=>{T.start()}),[i])}function G(i){return O({url:"/usr",...i})}function H(){const{usr:i,updateUsr:c,signOut:t}=U(),{error:s,data:p}=D({enabled:!!i,queryKey:["usr_get"],queryFn({signal:u}){return G({signal:u,params:i})},initialData(){if(i)return i},initialDataUpdatedAt(){return i==null?void 0:i.loginAt},refetchInterval:1e3*60*30,retry:2,retryDelay:1e3*2});b.useEffect(()=>{p&&c(p)},[c,p]),b.useEffect(()=>{s&&(t(),j.error(s.message))},[t,s])}const h=new Set;h.add("login");h.add("list");h.add("forgot-passwd");h.add("register");h.add("privacy-policy");const _=h.has.bind(h);function Y(){z(),F(),H();const i=W(),c=E(),[t]=B(),{usr:s}=U(),p=b.useMemo(()=>{const u=c[c.length-1];if(!u)return console.error("Invalid nextRoute"),null;if(u.id==="login"){const x=t.get("returnURL")||"/";return s?C.jsx(N,{to:x,replace:!0}):i}if(_(u.id)||s)return i;const g=new URLSearchParams;g.set("returnURL",u.pathname);const P=g.toString(),S={pathname:"/login",search:u.id==="home"?void 0:P};return C.jsx(N,{to:S,replace:!0})},[c,t,i,s]);return C.jsx(C.Fragment,{children:p})}export{Y as Component};