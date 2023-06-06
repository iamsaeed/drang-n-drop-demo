import{o as $,c as F,a as f,_ as st,k as ut,t as ae,n as ke,l as dt,m as S,F as se,p as L,q as N,s as C,x as v,y as g,z as O,A,B as ce,C as U,T as ct,D as ft,e as k,E as pt,u as vt,r as Be,b,g as P,G as Me,H as Ne,I as Re,i as He,J as Ie}from"./app.30c6c5b7.js";import{u as mt}from"./titleStore.a8da10d5.js";function ht(e,t){return $(),F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})])}function gt(e,t){return $(),F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"})])}function wt(e,t){return $(),F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})])}function bt(e,t){return $(),F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"})])}function yt(e,t){return $(),F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})])}function xt(e,t){return $(),F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})])}function kt(e,t){return $(),F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})])}function _t(e,t){return $(),F("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}const Et={props:{label:{default:null},direction:{default:"tooltip-top"}}},$t={class:"tooltip justify-center"};function St(e,t,o,n,l,r){return $(),F("div",$t,[ut(e.$slots,"default"),f("span",{class:ke(["tooltiptext",o.direction])},ae(o.label),3)])}const Z=st(Et,[["render",St]]);function D(e,t,...o){if(e in t){let l=t[e];return typeof l=="function"?l(...o):l}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,D),n}var ue=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ue||{}),I=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(I||{});function T({visible:e=!0,features:t=0,ourProps:o,theirProps:n,...l}){var r;let a=Ft(n,o),i=Object.assign(l,{props:a});if(e||t&2&&a.static)return be(i);if(t&1){let s=(r=a.unmount)==null||r?0:1;return D(s,{[0](){return null},[1](){return be({...l,props:{...a,hidden:!0,style:{display:"none"}}})}})}return be(i)}function be({props:e,attrs:t,slots:o,slot:n,name:l}){var r;let{as:a,...i}=Ge(e,["unmount","static"]),s=(r=o.default)==null?void 0:r.call(o,n),d={};if(n){let c=!1,u=[];for(let[p,h]of Object.entries(n))typeof h=="boolean"&&(c=!0),h===!0&&u.push(p);c&&(d["data-headlessui-state"]=u.join(" "))}if(a==="template"){if(s=We(s!=null?s:[]),Object.keys(i).length>0||Object.keys(t).length>0){let[c,...u]=s!=null?s:[];if(!Pt(c)||u.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${l} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(i).concat(Object.keys(t)).sort((p,h)=>p.localeCompare(h)).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));return dt(c,Object.assign({},i,d))}return Array.isArray(s)&&s.length===1?s[0]:s}return S(a,Object.assign({},i,d),{default:()=>s})}function We(e){return e.flatMap(t=>t.type===se?We(t.children):[t])}function Ft(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},o={};for(let n of e)for(let l in n)l.startsWith("on")&&typeof n[l]=="function"?(o[l]!=null||(o[l]=[]),o[l].push(n[l])):t[l]=n[l];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(o).map(n=>[n,void 0])));for(let n in o)Object.assign(t,{[n](l,...r){let a=o[n];for(let i of a){if(l instanceof Event&&l.defaultPrevented)return;i(l,...r)}}});return t}function Ge(e,t=[]){let o=Object.assign({},e);for(let n of t)n in o&&delete o[n];return o}function Pt(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let At=0;function Ot(){return++At}function z(){return Ot()}var Ye=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ye||{});function R(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let Je=Symbol("Context");var q=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(q||{});function Tt(){return Te()!==null}function Te(){return L(Je,null)}function Dt(e){N(Je,e)}const fe=typeof window>"u"||typeof document>"u";function Q(e){if(fe)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=R(e);if(t)return t.ownerDocument}return document}let _e=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var te=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(te||{}),Qe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Qe||{}),Ct=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Ct||{});function Lt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(_e))}var Ke=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Ke||{});function jt(e,t=0){var o;return e===((o=Q(e))==null?void 0:o.body)?!1:D(t,{[0](){return e.matches(_e)},[1](){let n=e;for(;n!==null;){if(n.matches(_e))return!0;n=n.parentElement}return!1}})}function ee(e){e==null||e.focus({preventScroll:!0})}let Bt=["textarea","input"].join(",");function Mt(e){var t,o;return(o=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Bt))!=null?o:!1}function Nt(e,t=o=>o){return e.slice().sort((o,n)=>{let l=t(o),r=t(n);if(l===null||r===null)return 0;let a=l.compareDocumentPosition(r);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Ee(e,t,o=!0,n=null){var l;let r=(l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?l:document,a=Array.isArray(e)?o?Nt(e):e:Lt(e);n=n!=null?n:r.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(n))-1;if(t&4)return Math.max(0,a.indexOf(n))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,u=a.length,p;do{if(c>=u||c+u<=0)return 0;let h=s+c;if(t&16)h=(h+u)%u;else{if(h<0)return 3;if(h>=u)return 1}p=a[h],p==null||p.focus(d),c+=i}while(p!==r.activeElement);return t&6&&Mt(p)&&p.select(),p.hasAttribute("tabindex")||p.setAttribute("tabindex","0"),2}function ye(e,t,o){fe||C(n=>{document.addEventListener(e,t,o),n(()=>document.removeEventListener(e,t,o))})}function Rt(e,t,o=g(()=>!0)){function n(r,a){if(!o.value||r.defaultPrevented)return;let i=a(r);if(i===null||!i.getRootNode().contains(i))return;let s=function d(c){return typeof c=="function"?d(c()):Array.isArray(c)||c instanceof Set?c:[c]}(e);for(let d of s){if(d===null)continue;let c=d instanceof HTMLElement?d:R(d);if(c!=null&&c.contains(i))return}return!jt(i,Ke.Loose)&&i.tabIndex!==-1&&r.preventDefault(),t(r,i)}let l=v(null);ye("mousedown",r=>{var a,i;o.value&&(l.value=((i=(a=r.composedPath)==null?void 0:a.call(r))==null?void 0:i[0])||r.target)},!0),ye("click",r=>{!l.value||(n(r,()=>l.value),l.value=null)},!0),ye("blur",r=>n(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var de=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(de||{});let $e=O({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:o}){return()=>{let{features:n,...l}=e,r={"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return T({ourProps:r,theirProps:l,slot:{},attrs:o,slots:t,name:"Hidden"})}}});function Ht(e,t,o){fe||C(n=>{window.addEventListener(e,t,o),n(()=>window.removeEventListener(e,t,o))})}var Se=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Se||{});function It(){let e=v(0);return Ht("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Ze(e,t,o,n){fe||C(l=>{e=e!=null?e:window,e.addEventListener(t,o,n),l(()=>e.removeEventListener(t,o,n))})}function Ut(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}var Xe=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Xe||{});let X=Object.assign(O({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:Object,default:v(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:o,expose:n}){let l=v(null);n({el:l,$el:l});let r=g(()=>Q(l));Vt({ownerDocument:r},g(()=>Boolean(e.features&16)));let a=qt({ownerDocument:r,container:l,initialFocus:g(()=>e.initialFocus)},g(()=>Boolean(e.features&2)));zt({ownerDocument:r,container:l,containers:e.containers,previousActiveElement:a},g(()=>Boolean(e.features&8)));let i=It();function s(){let d=R(l);!d||D(i.value,{[Se.Forwards]:()=>Ee(d,te.First),[Se.Backwards]:()=>Ee(d,te.Last)})}return()=>{let d={},c={ref:l},{features:u,initialFocus:p,containers:h,..._}=e;return S(se,[Boolean(u&4)&&S($e,{as:"button",type:"button",onFocus:s,features:de.Focusable}),T({ourProps:c,theirProps:{...t,..._},slot:d,attrs:t,slots:o,name:"FocusTrap"}),Boolean(u&4)&&S($e,{as:"button",type:"button",onFocus:s,features:de.Focusable})])}}}),{features:Xe});function Vt({ownerDocument:e},t){let o=v(null);function n(){var r;o.value||(o.value=(r=e.value)==null?void 0:r.activeElement)}function l(){!o.value||(ee(o.value),o.value=null)}A(()=>{ce(t,(r,a)=>{r!==a&&(r?n():l())},{immediate:!0})}),U(l)}function qt({ownerDocument:e,container:t,initialFocus:o},n){let l=v(null),r=v(!1);return A(()=>r.value=!0),U(()=>r.value=!1),A(()=>{ce([t,o,n],(a,i)=>{if(a.every((d,c)=>(i==null?void 0:i[c])===d)||!n.value)return;let s=R(t);!s||Ut(()=>{var d,c;if(!r.value)return;let u=R(o),p=(d=e.value)==null?void 0:d.activeElement;if(u){if(u===p){l.value=p;return}}else if(s.contains(p)){l.value=p;return}u?ee(u):Ee(s,te.First|te.NoScroll)===Qe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.value=(c=e.value)==null?void 0:c.activeElement})},{immediate:!0,flush:"post"})}),l}function zt({ownerDocument:e,container:t,containers:o,previousActiveElement:n},l){var r;Ze((r=e.value)==null?void 0:r.defaultView,"focus",a=>{if(!l.value)return;let i=new Set(o==null?void 0:o.value);i.add(t);let s=n.value;if(!s)return;let d=a.target;d&&d instanceof HTMLElement?Wt(i,d)?(n.value=d,ee(d)):(a.preventDefault(),a.stopPropagation(),ee(s)):ee(n.value)},!0)}function Wt(e,t){var o;for(let n of e)if((o=n.value)!=null&&o.contains(t))return!0;return!1}let Ue="body > *",J=new Set,H=new Map;function Ve(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function qe(e){let t=H.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function Gt(e,t=v(!0)){C(o=>{if(!t.value||!e.value)return;let n=e.value,l=Q(n);if(l){J.add(n);for(let r of H.keys())r.contains(n)&&(qe(r),H.delete(r));l.querySelectorAll(Ue).forEach(r=>{if(r instanceof HTMLElement){for(let a of J)if(r.contains(a))return;J.size===1&&(H.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),Ve(r))}}),o(()=>{if(J.delete(n),J.size>0)l.querySelectorAll(Ue).forEach(r=>{if(r instanceof HTMLElement&&!H.has(r)){for(let a of J)if(r.contains(a))return;H.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),Ve(r)}});else for(let r of H.keys())qe(r),H.delete(r)})}})}let et=Symbol("ForcePortalRootContext");function Yt(){return L(et,!1)}let Fe=O({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:o}){return N(et,e.force),()=>{let{force:n,...l}=e;return T({theirProps:l,ourProps:{},slot:{},slots:t,attrs:o,name:"ForcePortalRoot"})}}});function Jt(e){let t=Q(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let o=t.getElementById("headlessui-portal-root");if(o)return o;let n=t.createElement("div");return n.setAttribute("id","headlessui-portal-root"),t.body.appendChild(n)}let tt=O({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:o}){let n=v(null),l=g(()=>Q(n)),r=Yt(),a=L(nt,null),i=v(r===!0||a==null?Jt(n.value):a.resolveTarget());return C(()=>{r||a!=null&&(i.value=a.resolveTarget())}),U(()=>{var s,d;let c=(s=l.value)==null?void 0:s.getElementById("headlessui-portal-root");!c||i.value===c&&i.value.children.length<=0&&((d=i.value.parentElement)==null||d.removeChild(i.value))}),()=>{if(i.value===null)return null;let s={ref:n,"data-headlessui-portal":""};return S(ct,{to:i.value},T({ourProps:s,theirProps:e,slot:{},attrs:o,slots:t,name:"Portal"}))}}}),nt=Symbol("PortalGroupContext"),Qt=O({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:o}){let n=ft({resolveTarget(){return e.target}});return N(nt,n),()=>{let{target:l,...r}=e;return T({theirProps:r,ourProps:{},slot:{},attrs:t,slots:o,name:"PortalGroup"})}}}),ot=Symbol("StackContext");var Pe=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Pe||{});function Kt(){return L(ot,()=>{})}function Zt({type:e,enabled:t,element:o,onUpdate:n}){let l=Kt();function r(...a){n==null||n(...a),l(...a)}A(()=>{ce(t,(a,i)=>{a?r(0,e,o):i===!0&&r(1,e,o)},{immediate:!0,flush:"sync"})}),U(()=>{t.value&&r(1,e,o)}),N(ot,r)}let rt=Symbol("DescriptionContext");function Xt(){let e=L(rt,null);if(e===null)throw new Error("Missing parent");return e}function en({slot:e=v({}),name:t="Description",props:o={}}={}){let n=v([]);function l(r){return n.value.push(r),()=>{let a=n.value.indexOf(r);a!==-1&&n.value.splice(a,1)}}return N(rt,{register:l,slot:e,name:t,props:o}),g(()=>n.value.length>0?n.value.join(" "):void 0)}let Hn=O({name:"Description",props:{as:{type:[Object,String],default:"p"}},setup(e,{attrs:t,slots:o}){let n=Xt(),l=`headlessui-description-${z()}`;return A(()=>U(n.register(l))),()=>{let{name:r="Description",slot:a=v({}),props:i={}}=n,s=e,d={...Object.entries(i).reduce((c,[u,p])=>Object.assign(c,{[u]:k(p)}),{}),id:l};return T({ourProps:d,theirProps:s,slot:a.value,attrs:t,slots:o,name:r})}}});function De(){let e=[],t=[],o={enqueue(n){t.push(n)},addEventListener(n,l,r,a){return n.addEventListener(l,r,a),o.add(()=>n.removeEventListener(l,r,a))},requestAnimationFrame(...n){let l=requestAnimationFrame(...n);o.add(()=>cancelAnimationFrame(l))},nextFrame(...n){o.requestAnimationFrame(()=>{o.requestAnimationFrame(...n)})},setTimeout(...n){let l=setTimeout(...n);o.add(()=>clearTimeout(l))},add(n){e.push(n)},dispose(){for(let n of e.splice(0))n()},async workQueue(){for(let n of t.splice(0))await n()}};return o}function tn(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var nn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(nn||{});let Ae=Symbol("DialogContext");function ne(e){let t=L(Ae,null);if(t===null){let o=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,ne),o}return t}let re="DC8F892D-2EBD-447C-A4C8-A03058436FF4",on=O({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:re},initialFocus:{type:Object,default:null}},emits:{close:e=>!0},setup(e,{emit:t,attrs:o,slots:n,expose:l}){var r;let a=v(!1);A(()=>{a.value=!0});let i=v(0),s=Te(),d=g(()=>e.open===re&&s!==null?D(s.value,{[q.Open]:!0,[q.Closed]:!1}):e.open),c=v(new Set),u=v(null),p=v(null),h=g(()=>Q(u));if(l({el:u,$el:u}),!(e.open!==re||s!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof d.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value===re?void 0:e.open}`);let _=g(()=>a.value&&d.value?0:1),K=g(()=>_.value===0),W=g(()=>i.value>1),ve=L(Ae,null)!==null,me=g(()=>W.value?"parent":"leaf");Gt(u,g(()=>W.value?K.value:!1)),Zt({type:"Dialog",enabled:g(()=>_.value===0),element:u,onUpdate:(w,m,y)=>{if(m==="Dialog")return D(w,{[Pe.Add](){c.value.add(y),i.value+=1},[Pe.Remove](){c.value.delete(y),i.value-=1}})}});let oe=en({name:"DialogDescription",slot:g(()=>({open:d.value}))}),he=`headlessui-dialog-${z()}`,G=v(null),j={titleId:G,panelRef:v(null),dialogState:_,setTitleId(w){G.value!==w&&(G.value=w)},close(){t("close",!1)}};return N(Ae,j),Rt(()=>{var w,m,y;return[...Array.from((m=(w=h.value)==null?void 0:w.querySelectorAll("body > *, [data-headlessui-portal]"))!=null?m:[]).filter(x=>!(!(x instanceof HTMLElement)||x.contains(R(p))||j.panelRef.value&&x.contains(j.panelRef.value))),(y=j.panelRef.value)!=null?y:u.value]},(w,m)=>{j.close(),pt(()=>m==null?void 0:m.focus())},g(()=>_.value===0&&!W.value)),Ze((r=h.value)==null?void 0:r.defaultView,"keydown",w=>{w.defaultPrevented||w.key===Ye.Escape&&_.value===0&&(W.value||(w.preventDefault(),w.stopPropagation(),j.close()))}),C(w=>{var m;if(_.value!==0||ve)return;let y=h.value;if(!y)return;let x=De();function E(M,Y,je){let we=M.style.getPropertyValue(Y);return Object.assign(M.style,{[Y]:je}),x.add(()=>{Object.assign(M.style,{[Y]:we})})}let B=y==null?void 0:y.documentElement,ge=((m=y.defaultView)!=null?m:window).innerWidth-B.clientWidth;if(E(B,"overflow","hidden"),ge>0){let M=B.clientWidth-B.offsetWidth,Y=ge-M;E(B,"paddingRight",`${Y}px`)}if(tn()){let M=window.pageYOffset;E(B,"position","fixed"),E(B,"marginTop",`-${M}px`),E(B,"width","100%"),x.add(()=>window.scrollTo(0,M))}w(x.dispose)}),C(w=>{if(_.value!==0)return;let m=R(u);if(!m)return;let y=new IntersectionObserver(x=>{for(let E of x)E.boundingClientRect.x===0&&E.boundingClientRect.y===0&&E.boundingClientRect.width===0&&E.boundingClientRect.height===0&&j.close()});y.observe(m),w(()=>y.disconnect())}),()=>{let w={...o,ref:u,id:he,role:"dialog","aria-modal":_.value===0?!0:void 0,"aria-labelledby":G.value,"aria-describedby":oe.value},{open:m,initialFocus:y,...x}=e,E={open:_.value===0};return S(Fe,{force:!0},()=>[S(tt,()=>S(Qt,{target:u.value},()=>S(Fe,{force:!1},()=>S(X,{initialFocus:y,containers:c,features:K.value?D(me.value,{parent:X.features.RestoreFocus,leaf:X.features.All&~X.features.FocusLock}):X.features.None},()=>T({ourProps:w,theirProps:x,slot:E,attrs:o,slots:n,visible:_.value===0,features:ue.RenderStrategy|ue.Static,name:"Dialog"}))))),S($e,{features:de.Hidden,ref:p})])}}});O({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:o}){let n=ne("DialogOverlay"),l=`headlessui-dialog-overlay-${z()}`;function r(a){a.target===a.currentTarget&&(a.preventDefault(),a.stopPropagation(),n.close())}return()=>T({ourProps:{id:l,"aria-hidden":!0,onClick:r},theirProps:e,slot:{open:n.dialogState.value===0},attrs:t,slots:o,name:"DialogOverlay"})}});O({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"}},inheritAttrs:!1,setup(e,{attrs:t,slots:o,expose:n}){let l=ne("DialogBackdrop"),r=`headlessui-dialog-backdrop-${z()}`,a=v(null);return n({el:a,$el:a}),A(()=>{if(l.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let i=e,s={id:r,ref:a,"aria-hidden":!0};return S(Fe,{force:!0},()=>S(tt,()=>T({ourProps:s,theirProps:{...t,...i},slot:{open:l.dialogState.value===0},attrs:t,slots:o,name:"DialogBackdrop"})))}}});let rn=O({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:o,expose:n}){let l=ne("DialogPanel"),r=`headlessui-dialog-panel-${z()}`;n({el:l.panelRef,$el:l.panelRef});function a(i){i.stopPropagation()}return()=>{let i={id:r,ref:l.panelRef,onClick:a};return T({ourProps:i,theirProps:e,slot:{open:l.dialogState.value===0},attrs:t,slots:o,name:"DialogPanel"})}}});O({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"}},setup(e,{attrs:t,slots:o}){let n=ne("DialogTitle"),l=`headlessui-dialog-title-${z()}`;return A(()=>{n.setTitleId(l),U(()=>n.setTitleId(null))}),()=>T({ourProps:{id:l},theirProps:e,slot:{open:n.dialogState.value===0},attrs:t,slots:o,name:"DialogTitle"})}});function ln(e){let t={called:!1};return(...o)=>{if(!t.called)return t.called=!0,e(...o)}}function xe(e,...t){e&&t.length>0&&e.classList.add(...t)}function le(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Oe=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Oe||{});function an(e,t){let o=De();if(!e)return o.dispose;let{transitionDuration:n,transitionDelay:l}=getComputedStyle(e),[r,a]=[n,l].map(i=>{let[s=0]=i.split(",").filter(Boolean).map(d=>d.includes("ms")?parseFloat(d):parseFloat(d)*1e3).sort((d,c)=>c-d);return s});return r!==0?o.setTimeout(()=>t("finished"),r+a):t("finished"),o.add(()=>t("cancelled")),o.dispose}function ze(e,t,o,n,l,r){let a=De(),i=r!==void 0?ln(r):()=>{};return le(e,...l),xe(e,...t,...o),a.nextFrame(()=>{le(e,...o),xe(e,...n),a.add(an(e,s=>(le(e,...n,...t),xe(e,...l),i(s))))}),a.add(()=>le(e,...t,...o,...n,...l)),a.add(()=>i("cancelled")),a.dispose}function V(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let Ce=Symbol("TransitionContext");var sn=(e=>(e.Visible="visible",e.Hidden="hidden",e))(sn||{});function un(){return L(Ce,null)!==null}function dn(){let e=L(Ce,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function cn(){let e=L(Le,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Le=Symbol("NestingContext");function pe(e){return"children"in e?pe(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function lt(e){let t=v([]),o=v(!1);A(()=>o.value=!0),U(()=>o.value=!1);function n(r,a=I.Hidden){let i=t.value.findIndex(({id:s})=>s===r);i!==-1&&(D(a,{[I.Unmount](){t.value.splice(i,1)},[I.Hidden](){t.value[i].state="hidden"}}),!pe(t)&&o.value&&(e==null||e()))}function l(r){let a=t.value.find(({id:i})=>i===r);return a?a.state!=="visible"&&(a.state="visible"):t.value.push({id:r,state:"visible"}),()=>n(r,I.Unmount)}return{children:t,register:l,unregister:n}}let at=ue.RenderStrategy,ie=O({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:o,slots:n,expose:l}){if(!un()&&Tt())return()=>S(it,{...e,onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave")},n);let r=v(null),a=v("visible"),i=g(()=>e.unmount?I.Unmount:I.Hidden);l({el:r,$el:r});let{show:s,appear:d}=dn(),{register:c,unregister:u}=cn(),p={value:!0},h=z(),_={value:!1},K=lt(()=>{_.value||(a.value="hidden",u(h),t("afterLeave"))});A(()=>{let m=c(h);U(m)}),C(()=>{if(i.value===I.Hidden&&!!h){if(s&&a.value!=="visible"){a.value="visible";return}D(a.value,{hidden:()=>u(h),visible:()=>c(h)})}});let W=V(e.enter),ve=V(e.enterFrom),me=V(e.enterTo),oe=V(e.entered),he=V(e.leave),G=V(e.leaveFrom),j=V(e.leaveTo);A(()=>{C(()=>{if(a.value==="visible"){let m=R(r);if(m instanceof Comment&&m.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function w(m){let y=p.value&&!d.value,x=R(r);!x||!(x instanceof HTMLElement)||y||(_.value=!0,s.value&&t("beforeEnter"),s.value||t("beforeLeave"),m(s.value?ze(x,W,ve,me,oe,E=>{_.value=!1,E===Oe.Finished&&t("afterEnter")}):ze(x,he,G,j,oe,E=>{_.value=!1,E===Oe.Finished&&(pe(K)||(a.value="hidden",u(h),t("afterLeave")))})))}return A(()=>{ce([s],(m,y,x)=>{w(x),p.value=!1},{immediate:!0})}),N(Le,K),Dt(g(()=>D(a.value,{visible:q.Open,hidden:q.Closed}))),()=>{let{appear:m,show:y,enter:x,enterFrom:E,enterTo:B,entered:ge,leave:M,leaveFrom:Y,leaveTo:je,...we}=e;return T({theirProps:we,ourProps:{ref:r},slot:{},slots:n,attrs:o,features:at,visible:a.value==="visible",name:"TransitionChild"})}}}),fn=ie,it=O({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:o,slots:n}){let l=Te(),r=g(()=>e.show===null&&l!==null?D(l.value,{[q.Open]:!0,[q.Closed]:!1}):e.show);C(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let a=v(r.value?"visible":"hidden"),i=lt(()=>{a.value="hidden"}),s=v(!0),d={show:r,appear:g(()=>e.appear||!s.value)};return A(()=>{C(()=>{s.value=!1,r.value?a.value="visible":pe(i)||(a.value="hidden")})}),N(Le,i),N(Ce,d),()=>{let c=Ge(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),u={unmount:e.unmount};return T({ourProps:{...u,as:"template"},theirProps:{},slot:{},slots:{...n,default:()=>[S(fn,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...o,...u,...c},n.default)]},attrs:{},features:at,visible:a.value==="visible",name:"Transition"})}}});const pn=f("div",{class:"fixed inset-0 bg-gray-600 bg-opacity-75"},null,-1),vn={class:"fixed inset-0 z-40 flex"},mn={class:"absolute top-0 right-0 -mr-12 pt-2"},hn=f("span",{class:"sr-only"},"Close sidebar",-1),gn=f("div",{class:"flex flex-shrink-0 items-center px-4"},[f("img",{class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300",alt:"Your Company"})],-1),wn={class:"mt-5 h-0 flex-1 overflow-y-auto"},bn={class:"space-y-1 px-2"},yn=f("div",{class:"w-14 flex-shrink-0","aria-hidden":"true"},null,-1),xn={class:"hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col"},kn={class:"flex flex-grow flex-col overflow-y-auto bg-primary pt-5"},_n=f("div",{class:"flex flex-shrink-0 items-center px-4"},[f("img",{class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300",alt:"Your Company"})],-1),En={class:"mt-5 flex flex-1 flex-col"},$n={class:"flex-1 space-y-1 px-2 pb-4"},Sn={class:"flex flex-1 flex-col md:pl-64"},Fn={class:"sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white dark:bg-gray-700 shadow"},Pn=f("span",{class:"sr-only"},"Open sidebar",-1),An={class:"flex flex-1 justify-between px-4"},On={class:"flex items-center mr-3 space-x-2"},Tn={class:"flex flex-1 items-center"},Dn={class:"ml-4 flex items-center md:ml-6"},Cn={key:0},Ln={key:1},jn={class:"ml-5"},Bn={class:"mx-auto max-w-7xl px-4 sm:px-6 md:px-8"},Mn={class:"py-2"},In={name:"NewLayout",setup(e){const t=vt(),o=mt(),n=[{name:"Dashboard",href:"dashboard",icon:yt,current:!1}],l=v(!1);t.dark_mode&&document.getElementById("html").classList.add("dark");function r(){Ie.go(1)}function a(){Ie.go(-1)}return(i,s)=>{const d=Be("router-link"),c=Be("router-view");return $(),F("div",null,[b(k(it),{as:"template",show:l.value},{default:P(()=>[b(k(on),{as:"div",class:"relative z-40 md:hidden",onClose:s[1]||(s[1]=u=>l.value=!1)},{default:P(()=>[b(k(ie),{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:P(()=>[pn]),_:1}),f("div",vn,[b(k(ie),{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:P(()=>[b(k(rn),{class:"relative flex w-full max-w-xs flex-1 flex-col bg-primary pt-5 pb-4"},{default:P(()=>[b(k(ie),{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:P(()=>[f("div",mn,[f("button",{type:"button",class:"ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:s[0]||(s[0]=u=>l.value=!1)},[hn,b(k(_t),{class:"h-6 w-6 text-white","aria-hidden":"true"})])])]),_:1}),gn,f("div",wn,[f("nav",bn,[($(),F(se,null,Me(n,u=>b(d,{key:u.name,to:{name:u.href},class:ke([u.current?"bg-indigo-800 text-white":"text-indigo-100 hover:bg-indigo-600","group flex items-center px-2 py-2 text-base rounded-md"])},{default:P(()=>[($(),Ne(Re(u.icon),{class:"mr-4 h-6 w-6 flex-shrink-0 text-indigo-300","aria-hidden":"true"})),He(" "+ae(u.name),1)]),_:2},1032,["to","class"])),64))])])]),_:1})]),_:1}),yn])]),_:1})]),_:1},8,["show"]),f("div",xn,[f("div",kn,[_n,f("div",En,[f("nav",$n,[($(),F(se,null,Me(n,u=>b(d,{key:u.name,to:{name:u.href},class:ke([u.current?"bg-indigo-800 text-white":"text-indigo-100 hover:bg-indigo-600","group flex items-center px-2 py-2 text-sm rounded-md"])},{default:P(()=>[($(),Ne(Re(u.icon),{class:"mr-3 h-6 w-6 flex-shrink-0 text-indigo-300","aria-hidden":"true"})),He(" "+ae(u.name),1)]),_:2},1032,["to","class"])),64))])])])]),f("div",Sn,[f("div",Fn,[f("button",{type:"button",class:"border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden",onClick:s[2]||(s[2]=u=>l.value=!0)},[Pn,b(k(bt),{class:"h-6 w-6","aria-hidden":"true"})]),f("div",An,[f("div",On,[b(Z,{direction:"tooltip-bottom",label:"Go Back"},{default:P(()=>[b(k(ht),{onClick:a,class:"h-5 w-5 text-primary cursor-pointer font-extrabold"})]),_:1}),b(Z,{direction:"tooltip-bottom",label:"Go Forward"},{default:P(()=>[b(k(wt),{onClick:r,class:"h-5 w-5 text-primary cursor-pointer font-extrabold"})]),_:1})]),f("div",Tn,[f("h3",null,ae(k(o).name),1)]),f("div",Dn,[k(t).dark_mode?($(),F("div",Cn,[b(Z,{label:"light mode",direction:"tooltip-bottom"},{default:P(()=>[b(k(kt),{onClick:s[3]||(s[3]=u=>k(t).toggleDarkModel()),class:"w-6 h-6 text-indigo-200 cursor-pointer"})]),_:1})])):($(),F("div",Ln,[b(Z,{label:"dark mode",direction:"tooltip-bottom"},{default:P(()=>[b(k(xt),{onClick:s[4]||(s[4]=u=>k(t).toggleDarkModel()),class:"w-6 h-6 text-indigo-200 cursor-pointer"})]),_:1})])),f("div",jn,[b(Z,{label:"Logout",direction:"tooltip-bottom"},{default:P(()=>[b(k(gt),{onClick:s[5]||(s[5]=u=>k(t).logout()),class:"w-6 h-6 text-indigo-200 cursor-pointer"})]),_:1})])])])]),f("main",null,[f("div",Bn,[f("div",Mn,[b(c)])])])])])}}};export{In as default};
