var ne=Object.defineProperty,re=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var T=(e,t,o)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,u=(e,t)=>{for(var o in t||(t={}))ie.call(t,o)&&T(e,o,t[o]);if(L)for(var o of L(t))ae.call(t,o)&&T(e,o,t[o]);return e},S=(e,t)=>re(e,se(t));import{E as ce,G as le,H as E,x as de,g as ue,q as $,r as P,y as pe,o as h,k as he,m as p,n as me,I as fe,z as ge,d as ye,c as g,B as y,f as v,a as I,h as Ce,l as R,t as O,p as A}from"./vendor.8a125dba.js";const Se=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};Se();const ve="Varlet",be="var",Ne="localhost",ze=8080,we="VARLET",Ue="https://varlet.gitee.io/varlet-ui/varlet_icon.png",ke="zh-CN",xe={style:"./highlight.css"},Le={baidu:"https://hm.baidu.com/hm.js?5c628ce58967c90ff4dd9c8803d930fa"},Te=!0,Ee={menu:[{text:{"zh-CN":"\u5F00\u53D1\u6307\u5357","en-US":"Developer guide"},type:1},{text:{"zh-CN":"\u57FA\u672C\u4ECB\u7ECD","en-US":"Basic Introduce"},doc:"home",type:3},{text:{"zh-CN":"\u5FEB\u901F\u5F00\u59CB","en-US":"Quickstart"},doc:"quickstart",type:3},{text:{"zh-CN":"\u6309\u9700\u5F15\u5165","en-US":"Import on demand"},doc:"importOnDemand",type:3},{text:{"zh-CN":"\u6697\u9ED1\u6A21\u5F0F","en-US":"Dark Mode"},doc:"themes",type:2},{text:{"zh-CN":"\u6D4F\u89C8\u5668\u9002\u914D","en-US":"Browser Adaptation"},doc:"browserAdaptation",type:3},{text:{"zh-CN":"\u56FD\u9645\u5316","en-US":"Locale"},doc:"locale",type:3},{text:{"zh-CN":"\u5F00\u53D1\u5DE5\u5177\u652F\u6301","en-US":"IDE Code Support"},doc:"ide",type:3},{text:{"zh-CN":"\u7EC4\u4EF6\u5E93\u5FEB\u901F\u6210\u578B\u5DE5\u5177","en-US":"Components Library Tools"},doc:"cli",type:3},{text:{"zh-CN":"\u5F00\u6E90\u6307\u5357","en-US":"Open Source Guide"},doc:"openSourceGuide",type:3},{text:{"zh-CN":"\u57FA\u7840\u7EC4\u4EF6","en-US":"Basic Components"},type:1},{text:{"zh-CN":"StyleProvider \u6837\u5F0F\u5B9A\u5236","en-US":"StyleProvider"},doc:"style-provider",type:2},{text:{"zh-CN":"Button \u6309\u94AE","en-US":"Button"},doc:"button",type:2},{text:{"zh-CN":"Cell \u5355\u5143\u683C","en-US":"Cell"},doc:"cell",type:2},{text:{"zh-CN":"Icon \u56FE\u6807","en-US":"Icon"},doc:"icon",type:2},{text:{"zh-CN":"Image \u56FE\u7247","en-US":"Image"},doc:"image",type:2},{text:{"zh-CN":"Loading \u52A0\u8F7D","en-US":"Loading"},doc:"loading",type:2},{text:{"zh-CN":"Chip \u7EB8\u7247","en-US":"Chip"},doc:"chip",type:2},{text:{"zh-CN":"Badge \u5FBD\u6807","en-US":"Badge"},doc:"badge",type:2},{text:{"zh-CN":"Elevation \u6D77\u62D4\u6548\u679C","en-US":"Elevation"},doc:"styles",type:2},{text:{"zh-CN":"\u5C55\u793A\u7EC4\u4EF6","en-US":"Display Components"},type:1},{text:{"zh-CN":"Skeleton \u9AA8\u67B6\u5C4F","en-US":"Skeleton"},doc:"skeleton",type:2},{text:{"zh-CN":"Collapse \u62D3\u5C55\u9762\u677F","en-US":"Collapse"},doc:"collapse",type:2},{text:{"zh-CN":"Space \u95F4\u9694","en-US":"Space"},doc:"space",type:2},{text:{"zh-CN":"Layout \u5E03\u5C40","en-US":"Layout"},doc:"row",type:2},{text:{"zh-CN":"Sticky \u7C98\u6027\u5E03\u5C40","en-US":"Sticky"},doc:"sticky",type:2},{text:{"zh-CN":"Progress \u8FDB\u5EA6\u6761","en-US":"Progress"},doc:"progress",type:2},{text:{"zh-CN":"List \u65E0\u9650\u6EDA\u52A8\u5217\u8868","en-US":"List"},doc:"list",type:2},{text:{"zh-CN":"Swipe \u8F6E\u64AD","en-US":"Swipe"},doc:"swipe",type:2},{text:{"zh-CN":"Steps \u6B65\u9AA4\u6761","en-US":"Steps"},doc:"steps",type:2},{text:{"zh-CN":"ImagePreview \u56FE\u7247\u9884\u89C8","en-US":"ImagePreview"},doc:"image-preview",type:2},{text:{"zh-CN":"Card \u5361\u7247","en-US":"Card"},doc:"card",type:2},{text:{"zh-CN":"Divider \u5206\u5272\u7EBF","en-US":"Divider"},doc:"divider",type:2},{text:{"zh-CN":"Table \u8868\u683C","en-US":"Table"},doc:"table",type:2},{text:{"zh-CN":"\u5BFC\u822A\u7EC4\u4EF6","en-US":"Navigation Components"},type:1},{text:{"zh-CN":"Tabs \u9009\u9879\u5361","en-US":"Tabs"},doc:"tabs",type:2},{text:{"zh-CN":"IndexBar \u7D22\u5F15\u680F","en-US":"IndexBar"},doc:"index-bar",type:2},{text:{"zh-CN":"AppBar \u5BFC\u822A\u680F","en-US":"AppBar"},doc:"app-bar",type:2},{text:{"zh-CN":"\u529F\u80FD\u6307\u4EE4","en-US":"Functional Directives"},type:1},{text:{"zh-CN":"Ripple \u6C34\u6CE2\u6307\u4EE4","en-US":"Ripple"},doc:"ripple",type:2},{text:{"zh-CN":"Lazy \u61D2\u52A0\u8F7D","en-US":"Lazy"},doc:"lazy",type:2},{text:{"zh-CN":"\u53CD\u9988\u7EC4\u4EF6","en-US":"Action Components"},type:1},{text:{"zh-CN":"Snackbar \u6D88\u606F\u6761","en-US":"Snackbar"},doc:"snackbar",type:2},{text:{"zh-CN":"ActionSheet \u52A8\u4F5C\u9762\u677F","en-US":"ActionSheet"},doc:"action-sheet",type:2},{text:{"zh-CN":"Dialog \u5BF9\u8BDD\u6846","en-US":"Dialog"},doc:"dialog",type:2},{text:{"zh-CN":"PullRefresh \u4E0B\u62C9\u5237\u65B0","en-US":"PullRefresh"},doc:"pull-refresh",type:2},{text:{"zh-CN":"Popup \u5F39\u51FA\u5C42","en-US":"Popup"},doc:"popup",type:2},{text:{"zh-CN":"Pagination \u5206\u9875","en-US":"Pagination"},doc:"pagination",type:2},{text:{"zh-CN":"Menu \u83DC\u5355","en-US":"Menu"},doc:"menu",type:2},{text:{"zh-CN":"BackTop \u56DE\u5230\u9876\u90E8","en-US":"BackTop"},doc:"back-top",type:2},{text:{"zh-CN":"Countdown \u5012\u8BA1\u65F6","en-US":"Countdown"},doc:"countdown",type:2},{text:{"zh-CN":"Picker \u591A\u5217\u9009\u62E9\u5668","en-US":"Picker"},doc:"picker",type:2},{text:{"zh-CN":"DatePicker \u65E5\u671F\u9009\u62E9\u5668","en-US":"DatePicker"},doc:"date-picker",type:2},{text:{"zh-CN":"TimePicker \u65F6\u95F4\u9009\u62E9\u5668","en-US":"TimePicker"},doc:"time-picker",type:2},{text:{"zh-CN":"\u8868\u5355\u7EC4\u4EF6","en-US":"Form Components"},type:1},{text:{"zh-CN":"Form \u8868\u5355","en-US":"Form"},doc:"form",type:2},{text:{"zh-CN":"Input \u8F93\u5165\u6846","en-US":"Input"},doc:"input",type:2},{text:{"zh-CN":"Select \u9009\u62E9\u6846","en-US":"Select"},doc:"select",type:2},{text:{"zh-CN":"Radio \u5355\u9009\u6846","en-US":"Radio"},doc:"radio-group",type:2},{text:{"zh-CN":"Checkbox \u590D\u9009\u6846","en-US":"Checkbox"},doc:"checkbox-group",type:2},{text:{"zh-CN":"Counter \u8BA1\u6570\u5668","en-US":"Counter"},doc:"counter",type:2},{text:{"zh-CN":"Switch \u5F00\u5173","en-US":"Switch"},doc:"switch",type:2},{text:{"zh-CN":"Slider \u6ED1\u5757","en-US":"slider"},doc:"slider",type:2},{text:{"zh-CN":"Rate \u8BC4\u5206","en-US":"Rate"},doc:"rate",type:2},{text:{"zh-CN":"Uploader \u6587\u4EF6\u4E0A\u4F20","en-US":"Uploader"},doc:"uploader",type:2}],redirect:"/home",title:{"zh-CN":"Varlet \u9762\u5411Vue3\u7684Material\u98CE\u683C\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93","en-US":"Material design mobile components built for Vue3"},header:{i18n:{"zh-CN":"\u4E2D\u6587","en-US":"English"},github:"https://github.com/haoziqaq/varlet",darkMode:!0}},$e={redirect:"/home",title:{"zh-CN":"Varlet \u9762\u5411Vue3\u7684Material\u98CE\u683C\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93","en-US":"Material design mobile components built for Vue3"},header:{i18n:{"zh-CN":"\u4E2D\u6587","en-US":"English"},github:"https://github.com/haoziqaq/varlet",darkMode:!0}},Pe={"color-body":"#fff","color-bar":"#fff","color-sub-bar":"#f5f5f5","color-text":"#555","color-sub-text":"#888","color-border":"rgba(0, 0, 0, 0.12)","color-shadow":"#eee","color-introduce-border":"#2196f3","color-primary":"#2196f3","color-link":"#00c48f","color-type":"#00c48f","color-progress":"#1d92e9","color-progress-track":"#fff","color-side-bar":"#3a7afe","color-side-bar-active-background":"#3a7afe1a","color-app-bar":"#3a7afe","color-nav-button-hover-background":"rgba(0, 0, 0, 0.08)","color-mobile-cell-hover":"#3a7afe","color-pc-language-active":"#3a7afe","color-pc-language-active-background":"#edf5ff","color-mobile-language-active":"#3a7afe","color-mobile-language-active-background":"#edf5ff"},Ie={"color-body":"#121212","color-bar":"#1e1e1e","color-sub-bar":"#272727","color-text":"#fff","color-sub-text":"#aaa","color-border":"#333","color-shadow":"#121212","color-introduce-border":"#555","color-primary":"#5580f8","color-link":"#10c48f","color-type":"#10c48f","color-progress":"#5580f8","color-progress-track":"#202020","color-side-bar":"#4a7afe","color-side-bar-active-background":"#4a7afe1a","color-app-bar":"#4a7afe","color-nav-button-hover-background":"rgba(255, 255, 255, 0.08)","color-mobile-cell-hover":"#4a7afe","color-pc-language-active":"#4a7afe","color-pc-language-active-background":"#4a7afe20","color-mobile-language-active":"#4a7afe","color-mobile-language-active-background":"#4a7afe20"},Re={"import dayjs from 'dayjs/esm'\n":`import dayjs from 'dayjs'
`,"import isSameOrBefore from 'dayjs/esm/plugin/isSameOrBefore'\n":`import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
`,"import isSameOrAfter from 'dayjs/esm/plugin/isSameOrAfter'\n":`import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
`};var yt={name:ve,namespace:be,host:Ne,port:ze,title:we,logo:Ue,defaultLanguage:ke,highlight:xe,analysis:Le,useMobile:Te,pc:Ee,mobile:$e,themes:Pe,darkThemes:Ie,moduleCompatible:Re},B=(e,t)=>{for(const[o,n]of t)e[o]=n;return e};const C=e=>e==null?0:l(e)?(e=parseFloat(e),e=Number.isNaN(e)?0:e,e):Ae(e)?Number(e):e;function Oe(e){const t=/([^-])([A-Z])/g;return e.replace(t,"$1-$2").replace(t,"$1-$2").toLowerCase()}const l=e=>typeof e=="string",Ae=e=>typeof e=="boolean",M=e=>typeof e=="number",Be=e=>/^(http)|(\.*\/)/.test(e),_=e=>l(e)&&e.endsWith("rem"),Me=e=>l(e)&&e.endsWith("px")||M(e),_e=e=>l(e)&&e.endsWith("%"),D=e=>l(e)&&e.endsWith("vw"),F=e=>l(e)&&e.endsWith("vh"),De=e=>{if(M(e))return e;if(Me(e))return+e.replace("px","");if(D(e))return+e.replace("vw","")*window.innerWidth/100;if(F(e))return+e.replace("vh","")*window.innerHeight/100;if(_(e)){const t=+e.replace("rem",""),o=window.getComputedStyle(document.documentElement).fontSize;return t*parseFloat(o)}return l(e)?C(e):0},Fe=e=>e==null?null:_e(e)||D(e)||F(e)||_(e)?e:`${De(e)}px`;function Ve(e){return Object.entries(e!=null?e:{}).reduce((t,[o,n])=>{const r=o.startsWith("--")?o:`--${Oe(o)}`;return t[r]=n,t},{})}function Ct(e,t){return Array.isArray(t)?t.reduce((o,n)=>(o[n]=e[n],o),{}):e[t]}function je(e){const t=ce(e),o=document.createElement("div");return document.body.appendChild(o),{instance:t.mount(o),unmount(){t.unmount(),document.body.removeChild(o)}}}function St(e,t={},o={}){const n={setup(){return()=>le(e,u(u({},t),o))}},{unmount:r}=je(n);return{unmountInstance:r}}const b=[];function Xe(e={}){b.forEach(o=>document.documentElement.style.removeProperty(o)),b.length=0;const t=Ve(e);Object.entries(t).forEach(([o,n])=>{document.documentElement.style.setProperty(o,n),b.push(o)})}function Ye(e){return e.replace(/-(\w)/g,(t,o)=>o.toUpperCase())}function vt(e){return Ye(e).replace(e.charAt(0),e.charAt(0).toUpperCase())}function qe(){const[,e,t]=window.location.hash.split("/");return{language:e,menuName:t}}function bt(){return/Android|webOS|iPhone|iPod|BlackBerry|Pad/i.test(navigator.userAgent)}var V;(function(e){e[e.TITLE=1]="TITLE",e[e.COMPONENT=2]="COMPONENT",e[e.DOCUMENTATION=3]="DOCUMENTATION"})(V||(V={}));function Nt(){return window.self!==window.top}function zt(e={}){return Object.keys(e).reduce((t,o)=>{const n=e[o];return n&&(t[o]=n),t},{})}function j(){const{href:e}=window.location,t=e.slice(e.indexOf("?"));return new URLSearchParams(t)}function wt(e,t="mobile"){const o=()=>{var r;const n=t==="mobile"?(r=j().get("language"))!=null?r:"zh-CN":qe().language;e(n)};X(o),o()}function Ut(e){const t=()=>{var n;const o=(n=j().get("platform"))!=null?n:"mobile";e(o)};X(t),t()}function kt(e,t=!0){const o=n=>{const{data:r}=n;r.action==="themesChange"&&e(r.data,r.from)};window.addEventListener("message",o),t&&E(()=>{window.removeEventListener("message",o)}),e(We(),"default")}function X(e){de(()=>{window.addEventListener("hashchange",e),window.addEventListener("popstate",e)}),E(()=>{window.removeEventListener("hashchange",e),window.removeEventListener("popstate",e)})}function xt(e,t){const o=ue(e,t,{}),n=Object.entries(o).reduce((r,[i,s])=>(r[`--site-config-${i}`]=s,r),{});Xe(n)}function We(){var t;let e=window.localStorage.getItem("currentThemes");return e||(e=((t=window.matchMedia)==null?void 0:t.call(window,"(prefers-color-scheme: dark)").matches)?"darkThemes":"themes",window.localStorage.setItem("currentThemes",e)),e}const Ke="ontouchstart"in window;let N=!1,d;const Y=e=>e==="mousedown",He=e=>e==="mousemove",z=e=>e==="mouseup",Ge=e=>Y(e)||!d||d&&!d.dispatchEvent;function Qe(e,t,o){const{clientX:n,clientY:r,screenX:i,screenY:s,pageX:c,pageY:a}=o;this.identifier=t,this.target=e,this.clientX=n,this.clientY=r,this.screenX=i,this.screenY=s,this.pageX=c,this.pageY=a}function Ze(e){const t=w();return t.push(new Qe(d,1,e)),t}function w(){const e=[];return e.item=function(t){return this[t]||null},e}function q(e){const{type:t}=e;return z(t)?w():Ze(e)}function Je(e,t){const{altKey:o,ctrlKey:n,metaKey:r,shiftKey:i}=t,s=document.createEvent("Event");s.initEvent(e,!0,!0),s.altKey=o,s.ctrlKey=n,s.metaKey=r,s.shiftKey=i,s.touches=q(t),s.targetTouches=q(t),s.changedTouches=w(),d.dispatchEvent(s)}function U(e,t){const{type:o,target:n}=e;N=Y(o)?!0:z(o)?!1:N,!(He(o)&&!N)&&(Ge(o)&&(d=n),Je(t,e),z(o)&&(d=null))}function et(){window.addEventListener("mousedown",e=>U(e,"touchstart"),!0),window.addEventListener("mousemove",e=>U(e,"touchmove"),!0),window.addEventListener("mouseup",e=>U(e,"touchend"),!0)}Ke||et();const tt="modulepreload",W={},ot="./",Lt=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${ot}${n}`,n in W)return;W[n]=!0;const r=n.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":tt,r||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),r)return new Promise((c,a)=>{s.addEventListener("load",c),s.addEventListener("error",a)})})).then(()=>t())},nt={name:{type:String},size:{type:[Number,String]},color:{type:String},namespace:{type:String,default:"var-icon"},transition:{type:[Number,String],default:0},onClick:{type:Function}};const rt=$({name:"VarSiteIcon",props:nt,setup(e){const t=P(""),o=P(!1);return pe(()=>e.name,async(r,i)=>{const{transition:s}=e;if(i==null||C(s)===0){t.value=r;return}o.value=!0,await ge(),setTimeout(()=>{i!=null&&(t.value=r),o.value=!1},C(s))},{immediate:!0}),{nextName:t,shrinking:o,isURL:Be,toNumber:C,toSizeUnit:Fe}}});function st(e,t,o,n,r,i){return h(),he(fe(e.isURL(e.name)?"img":"i"),{class:p(["var-site-icon",[`${e.namespace}--set`,e.isURL(e.name)?"var-site-icon__image":`${e.namespace}-${e.nextName}`,e.shrinking?"var-site-icon--shrinking":null]]),style:me({color:e.color,transition:`all ${e.toNumber(e.transition)}ms`,width:e.isURL(e.name)?e.toSizeUnit(e.size):null,height:e.isURL(e.name)?e.toSizeUnit(e.size):null,fontSize:e.toSizeUnit(e.size)}),src:e.isURL(e.name)?e.nextName:null,onClick:e.onClick},null,8,["class","style","src","onClick"])}var m=B(rt,[["render",st]]);m.install=function(e){e.component(m.name,m)};const it={title:{type:[Number,String]},icon:{type:String},desc:{type:String},border:{type:Boolean,default:!1},iconClass:{type:String},titleClass:{type:String},descClass:{type:String},extraClass:{type:String}};const at=$({name:"VarSiteCell",components:{[m.name]:m},props:it}),ct={class:"var-site-cell__content"};function lt(e,t,o,n,r,i){const s=ye("var-site-icon");return h(),g("div",{class:p(["var-site-cell",[e.border?"var-site-cell--border":null]])},[e.$slots.icon||e.icon?(h(),g("div",{key:0,class:p(["var-site-cell__icon",[e.iconClass?e.iconClass:null]])},[y(e.$slots,"icon",{},()=>[Ce(s,{class:"var-site--flex",name:e.icon},null,8,["name"])])],2)):v("v-if",!0),I("div",ct,[I("div",{class:p(["var-site-cell__title",[e.titleClass?e.titleClass:null]])},[y(e.$slots,"default",{},()=>[R(O(e.title),1)])],2),e.$slots.desc||e.desc?(h(),g("div",{key:0,class:p(["var-site-cell__desc",[e.descClass?e.descClass:null]])},[y(e.$slots,"desc",{},()=>[R(O(e.desc),1)])],2)):v("v-if",!0)]),e.$slots.extra?(h(),g("div",{key:1,class:p(["var-site-cell__extra",[e.extraClass?e.extraClass:null]])},[y(e.$slots,"extra")],2)):v("v-if",!0)],2)}var k=B(at,[["render",lt]]);k.install=function(e){e.component(k.name,k)};const K={locks:{},zIndex:2e3,touchmoveForbid:!0};A(K);var H=A(K);const G=250;function dt(e){const{zIndex:t,position:o}=window.getComputedStyle(e);e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden",o==="static"&&(e.style.position="relative"),t==="auto"&&(e.style.zIndex="1")}function ut(e,t){const{top:o,left:n}=e.getBoundingClientRect(),{clientWidth:r,clientHeight:i}=e,s=Math.sqrt(r**2+i**2)/2,c=s*2,a=t.touches[0].clientX-n,f=t.touches[0].clientY-o,J=(r-s*2)/2,ee=(i-s*2)/2,te=a-s,oe=f-s;return{x:te,y:oe,centerX:J,centerY:ee,size:c}}function Q(e){const t=this._ripple;if(t.removeRipple(),t.disabled||t.tasker)return;const o=()=>{var f;t.tasker=null;const{x:n,y:r,centerX:i,centerY:s,size:c}=ut(this,e),a=document.createElement("div");a.classList.add("var-site-ripple"),a.style.opacity="0",a.style.transform=`translate(${n}px, ${r}px) scale3d(.3, .3, .3)`,a.style.width=`${c}px`,a.style.height=`${c}px`,a.style.backgroundColor=(f=t.color)!=null?f:"currentColor",a.dataset.createdAt=String(performance.now()),dt(this),this.appendChild(a),window.setTimeout(()=>{a.style.transform=`translate(${i}px, ${s}px) scale3d(1, 1, 1)`,a.style.opacity=".25"},20)};t.tasker=window.setTimeout(o,60)}function x(){const e=this._ripple,t=()=>{const o=this.querySelectorAll(".var-site-ripple");if(!o.length)return;const n=o[o.length-1],r=G-performance.now()+Number(n.dataset.createdAt);setTimeout(()=>{n.style.opacity="0",setTimeout(()=>{var i;return(i=n.parentNode)==null?void 0:i.removeChild(n)},G)},r)};e.tasker?setTimeout(t,60):t()}function Z(){const e=this._ripple;!e.touchmoveForbid||(e.tasker&&window.clearTimeout(e.tasker),e.tasker=null)}function pt(e,t){var o,n,r;e._ripple=S(u({tasker:null},(o=t.value)!=null?o:{}),{touchmoveForbid:(r=(n=t.value)==null?void 0:n.touchmoveForbid)!=null?r:H.touchmoveForbid,removeRipple:x.bind(e)}),e.addEventListener("touchstart",Q,{passive:!0}),e.addEventListener("touchmove",Z,{passive:!0}),e.addEventListener("dragstart",x,{passive:!0}),document.addEventListener("touchend",e._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",e._ripple.removeRipple,{passive:!0})}function ht(e){e.removeEventListener("touchstart",Q),e.removeEventListener("touchmove",Z),e.removeEventListener("dragstart",x),document.removeEventListener("touchend",e._ripple.removeRipple),document.removeEventListener("touchcancel",e._ripple.removeRipple)}function mt(e,t){var o,n,r;e._ripple=S(u(u({},e._ripple),(o=t.value)!=null?o:{}),{touchmoveForbid:(r=(n=t.value)==null?void 0:n.touchmoveForbid)!=null?r:H.touchmoveForbid,tasker:null})}const Tt={mounted:pt,unmounted:ht,updated:mt,install(e){e.directive("ripple",this)}};export{k as C,m as I,V as M,Tt as R,B as _,qe as a,Lt as b,yt as c,wt as d,Nt as e,vt as f,We as g,Ut as h,bt as i,St as m,Ct as p,zt as r,xt as s,C as t,kt as w};
