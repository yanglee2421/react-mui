import{j as e,v as _,t as w,w as L,L as B,R as F}from"./index-TTh6u7Wr.js";import{u as G}from"./useQuery-VD8KcnlW.js";import{a as J,G as q,C as E,p as H,A as W,R as $}from"./platform-query-map-DS4G1hmD.js";import{_ as z}from"./react-apexcharts.min-cxNplvcC.js";import{u as Q}from"./useTheme-wFOvoZXw.js";import{C as M,a as T,b as A}from"./CardHeader-AYCryLZp.js";import{L as U}from"./Link-ELHpgGee.js";import{B as R}from"./Box-1tgznc3s.js";import{D as Y,G as K,a as V}from"./DataGrid-cTuv60Tg.js";import{M as D}from"./MenuItem-up_3gizb.js";import{F as X,I as Z,S as O}from"./TextField-2W1S6_Nl.js";import{I as tt}from"./InputAdornment--g2M3QPJ.js";import{G as c}from"./Grid-eMChz-HU.js";import{L as et}from"./LoadingButton-mkMjPrnm.js";import{s as rt}from"./ButtonBase-Qpy50vo6.js";import"./fabric-Y98Y_bQ5.js";import"./useBaseQuery-0a_kDHk-.js";import"./utils-1RRThafF.js";import"./createSvgIcon-PprR8B37.js";import"./Autocomplete-5Cwn_KXi.js";import"./OutlinedInput-qbl84Z5r.js";import"./Modal-y_45rI3s.js";import"./Backdrop-TW-wqQkC.js";import"./utils-7yFeARfI.js";import"./Transition-Mu2Vou9r.js";import"./ownerDocument-bIJBxlvi.js";import"./ownerWindow-LT9-6hbI.js";import"./Portal-qRGqc8P7.js";import"./isHostComponent-jcd54X0C.js";import"./Paper--A8AC-BD.js";import"./Grow-3ZEb0sf7.js";import"./List-iRUv8s6y.js";import"./ListContext-T4iwPxsA.js";import"./useFormControl-6e_5MtfC.js";import"./TextareaAutosize-ItGzBMMi.js";import"./IconButton-TIkL0xmx.js";import"./Popper-E3PBggSY.js";import"./useControlled-BkD29Xeb.js";import"./usePreviousProps-jH965J2Z.js";import"./Chip-DbobHvWX.js";import"./index-9djbFzGf.js";import"./Typography-adl__cJu.js";import"./extendSxProp-JGnEgg8J.js";import"./Badge-_DaXrK5T.js";import"./styled-SseMvMuO.js";import"./Divider-jG-CfWBl.js";import"./dividerClasses-b6r95EtF.js";import"./ListItemIcon-9YJZKDjq.js";import"./listItemIconClasses-GPnNvNMo.js";import"./ListItemText-8F3BLskU.js";import"./listItemTextClasses-98QpB4ej.js";import"./Checkbox-E8fkphGf.js";import"./SwitchBase-JQdzWRRy.js";import"./Switch-g4BdYAju.js";import"./Button-w9ywpE3s.js";import"./Tooltip-Sck434z4.js";import"./Skeleton-ML4OMBWJ.js";import"./CircularProgress-l7LXNSb0.js";import"./KeyboardArrowRight-9jqYe9-0.js";import"./Toolbar-2vkDIKT_.js";import"./FormControlLabel-vGjl4L_Z.js";import"./Stack-AIRYaIAH.js";import"./isMuiElement-qibW-xOb.js";function at(t,{project_id:r}){return J({url:`/projects/${r}/insights/trend/`,...t})}function ot(t,r){return G({queryKey:["insights_trend",t,r],queryFn({signal:a}){return at({signal:a,params:t},r)}})}function st(t){const{categories:r,series:a,...i}=t,l=Q();return e.jsx(e.Fragment,{children:e.jsx(z,{type:"line",height:400,series:a,options:it({theme:l,categories:r}),...i})})}function it(t){const{categories:r,theme:a}=t;return{chart:{parentHeightOffset:0,zoom:{enabled:!1},toolbar:{show:!1}},colors:["#ff9f43",_[500],w[500],L[400]],stroke:{curve:"straight"},dataLabels:{enabled:!1},markers:{strokeWidth:7,strokeOpacity:1,colors:["#ff9f43",_[500],w[500],L[400]],strokeColors:"#fff"},grid:{padding:{top:-10},borderColor:a.palette.divider,xaxis:{lines:{show:!0}}},yaxis:{labels:{style:{colors:a.palette.text.disabled}}},xaxis:{axisBorder:{show:!1},axisTicks:{color:a.palette.divider},crosshairs:{stroke:{color:a.palette.divider}},labels:{style:{colors:a.palette.text.disabled}},categories:r},legend:{labels:{colors:a.palette.text.primary}}}}function lt(t){const{rows:r,...a}=t;return e.jsx(e.Fragment,{children:e.jsxs(M,{...a,children:[e.jsx(T,{title:"Detailed results"}),e.jsx(A,{children:e.jsx(Y,{columns:nt(),rows:r,getRowId:i=>JSON.stringify(i.action),autoHeight:!0,hideFooterPagination:!0,disableRowSelectionOnClick:!0,slots:{toolbar:dt},slotProps:{baseFormControl:{}}})})]})})}function nt(){return[{field:"label",type:"string",flex:1,headerName:"SERIES",headerAlign:"left",align:"left",sortable:!1,renderCell(t){const r=new URLSearchParams;r.set("event",t.value);const a=r.toString();return e.jsx(U,{component:B,to:{pathname:"/posthog-events",search:a},underline:"always",children:t.value})}},{field:"count",type:"string",flex:1,headerName:"TOTAL SUM",headerAlign:"left",align:"left",sortable:!1}]}function dt(){return e.jsx(e.Fragment,{children:e.jsxs(R,{display:"flex",p:4,children:[e.jsx(K,{}),e.jsx(V,{sx:{ml:3}}),e.jsx(q,{sx:{ml:"auto"}})]})})}function pt(t){const{...r}=t,a=Array.from(d.entries(),([i,l])=>e.jsx(D,{value:l,children:i},i));return e.jsx(e.Fragment,{children:e.jsxs(X,{children:[e.jsx(Z,{children:"grouped by"}),e.jsx(O,{label:"grouped by",size:"small",sx:{"& .MuiSelect-select":{minWidth:"6rem"}},...r,children:a})]})})}const d=new Map;d.set("hour","hour");d.set("day","day");d.set("week","week");d.set("month","month");function ct(t){const{...r}=t,a=Array.from(s.entries(),([i,l])=>{const n=JSON.stringify(l);return e.jsx(D,{value:n,children:i},n)});return e.jsx(e.Fragment,{children:e.jsx(O,{size:"small",startAdornment:e.jsx(tt,{position:"start",children:e.jsx(E,{})}),...r,children:a})})}const s=new Map;s.set("Today",{date_from:"dStart"});s.set("Yesterday",{date_to:"-1dEnd",date_from:"-1dStart"});s.set("Last 24 hours",{date_from:"-24h"});s.set("Last 7 days",{date_from:"-7d"});s.set("Last 14 days",{date_from:"-14d"});s.set("Last 30 days",{date_from:"-30d"});s.set("Last 90 days",{date_from:"-90d"});s.set("Last 180 days",{date_from:"-180d"});s.set("This month",{date_from:"mStart"});s.set("Year to date",{date_from:"yStart"});s.set("All time",{date_from:"all"});function ke(){var m,u,x,f,h,g,y,b,j,v,S,k;const[t,r]=F.useState("day"),[a,i]=F.useState(()=>JSON.stringify({date_from:"-7d"})),l=H.get(3),n=l?[...l.values()]:[],N=[l,n].every(Boolean),o=ot({...I(a),interval:t,insight:"TRENDS",entity_type:"events",display:"ActionsLineGraph",compare:"",session_id:"",client_query_id:"",refresh:!0,events:JSON.stringify(n)},{project_id:1}),P=p=>{const C=String(p.target.value);switch(I(C).date_from){case"dStart":case"-1dStart":case"-24h":r("hour");break;case"-7d":case"-14d":r("day");break;case"-30d":case"mStart":r("week");break;case"-90d":case"-180d":case"yStart":case"all":r("month");break}i(C)};return N?e.jsx(e.Fragment,{children:e.jsxs(c,{container:!0,spacing:6,p:6,children:[e.jsx(c,{item:!0,xs:12,children:e.jsxs(mt,{children:[e.jsx(T,{title:"Trends",subheader:e.jsx(e.Fragment,{children:((m=o.data)==null?void 0:m.last_refresh)&&`Last refresh ${new Date(((u=o.data)==null?void 0:u.last_refresh)||"").toLocaleString()}`}),sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}},action:e.jsx(et,{loading:o.isRefetching,onClick:()=>o.refetch(),color:"success",startIcon:e.jsx($,{}),children:"refresh"})}),e.jsxs(A,{children:[e.jsxs(R,{display:"flex",gap:3,mb:3,children:[e.jsx(ct,{value:a,onChange:P}),e.jsx(pt,{value:t,onChange:p=>{r(String(p.target.value))}})]}),e.jsx(st,{categories:((x=o.data)==null?void 0:x.result[0].labels)||[],series:[{name:(f=o.data)==null?void 0:f.result[0].label,data:((h=o.data)==null?void 0:h.result[0].data)||[]},{name:(g=o.data)==null?void 0:g.result[1].label,data:((y=o.data)==null?void 0:y.result[1].data)||[]},{name:(b=o.data)==null?void 0:b.result[2].label,data:((j=o.data)==null?void 0:j.result[2].data)||[]},{name:(v=o.data)==null?void 0:v.result[3].label,data:((S=o.data)==null?void 0:S.result[3].data)||[]}]})]})]})}),e.jsx(c,{item:!0,xs:12,children:e.jsx(lt,{rows:((k=o.data)==null?void 0:k.result)||[]})})]})}):e.jsx(W,{severity:"error",children:"Invalid platform type"})}const mt=rt(M)(({theme:t})=>({"& .apexcharts-canvas":{"& line[stroke='transparent']":{display:"none"},"& .apexcharts-tooltip":{boxShadow:t.shadows[3],borderColor:t.palette.divider,background:t.palette.background.paper,"& .apexcharts-tooltip-title":{fontWeight:600,borderColor:t.palette.divider,background:t.palette.background.paper},"&.apexcharts-theme-light":{color:t.palette.text.primary},"&.apexcharts-theme-dark":{color:t.palette.common.white},"& .apexcharts-tooltip-series-group:first-of-type":{paddingBottom:0}},"& .apexcharts-xaxistooltip":{borderColor:t.palette.divider,background:t.palette.mode==="light"?t.palette.grey[50]:t.palette.background.default,"&:after":{borderBottomColor:t.palette.mode==="light"?t.palette.grey[50]:t.palette.background.default},"&:before":{borderBottomColor:t.palette.divider}},"& .apexcharts-yaxistooltip":{borderColor:t.palette.divider,background:t.palette.mode==="light"?t.palette.grey[50]:t.palette.background.default,"&:after":{borderLeftColor:t.palette.mode==="light"?t.palette.grey[50]:t.palette.background.default},"&:before":{borderLeftColor:t.palette.divider}},"& .apexcharts-xaxistooltip-text, & .apexcharts-yaxistooltip-text":{color:t.palette.text.primary},"& .apexcharts-yaxis .apexcharts-yaxis-texts-g .apexcharts-yaxis-label":{textAnchor:t.direction==="rtl"?"start":void 0},"& .apexcharts-text, & .apexcharts-tooltip-text, & .apexcharts-datalabel-label, & .apexcharts-datalabel, & .apexcharts-xaxistooltip-text, & .apexcharts-yaxistooltip-text, & .apexcharts-legend-text":{fontFamily:`${t.typography.fontFamily} !important`},"& .apexcharts-pie-label":{filter:"none",fill:t.palette.common.white},"& .apexcharts-marker":{boxShadow:"none"}}}));function I(t){try{return JSON.parse(t)}catch(r){return console.error(r),{}}}export{ke as Component};