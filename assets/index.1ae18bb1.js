var Y=Object.defineProperty;var O=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var B=(e,n,t)=>n in e?Y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,j=(e,n)=>{for(var t in n||(n={}))G.call(n,t)&&B(e,t,n[t]);if(O)for(var t of O(n))J.call(n,t)&&B(e,t,n[t]);return e};import{R as K}from"./index.931337ba.js";import{p as Q,P as W}from"./index.92898db6.js";import{I as X}from"./index.89b2169f.js";import{p as Z,m as $}from"./components.b90d3f87.js";import{e as oo,f as eo}from"./shared.cba5a5a3.js";import{p as no,u as to,a as T,_ as ao,b as lo,c as so,d as co,w as io}from"./en-US.5c76beb1.js";import{_ as E}from"./elevation.7f6c0241.js";import{q as ro,r as v,y as uo,d as S,e as mo,o as _,k as z,w as d,a as F,B as N,A as V,t as r,c as U,j as po,i as yo,m as fo,n as Co,f as ko,F as D,p as g,z as ho,H as vo,h as s,l as u}from"./vendor.ea41cd30.js";import{A as wo}from"./AppType.eb8ea594.js";import{B as bo}from"./index.1a99b8c3.js";import{S as w}from"./index.411369e5.js";import{c as I}from"./index.510439cf.js";import"./lock.67e58c2a.js";import"./zIndex.c624737f.js";import"./elements.524bf92a.js";import"./index.c1a4d29c.js";const So=j({show:{type:Boolean,default:!1},actions:{type:Array,default:()=>[]},title:{type:String},closeOnClickAction:{type:Boolean,default:!0},onSelect:{type:Function},"onUpdate:show":{type:Function}},Z(Q,["overlay","overlayClass","overlayStyle","lockScroll","closeOnClickOverlay","teleport","onOpen","onClose","onOpened","onClosed","onClickOverlay","onRouteChange"]));const _o=ro({name:"VarActionSheet",directives:{Ripple:K},components:{VarPopup:W,VarIcon:X},inheritAttrs:!1,props:So,setup(e){const n=v(!1),t=o=>{var y;if(o.disabled)return;const{closeOnClickAction:c,onSelect:m}=e;m==null||m(o),c&&((y=e["onUpdate:show"])==null||y.call(e,!1))};return uo(()=>e.show,o=>{n.value=o},{immediate:!0}),{popupShow:n,pack:no,dt:oo,handleSelect:t}}}),Ao={class:"var-action-sheet__title"},go=["onClick"],Fo={class:"var-action-sheet__action-name"};function Uo(e,n,t,o,c,m){const y=S("var-icon"),i=S("var-popup"),f=mo("ripple");return _(),z(i,V({class:"var-action-sheet__popup-radius",position:"bottom",overlay:e.overlay,"overlay-class":e.overlayClass,"overlay-style":e.overlayStyle,"lock-scroll":e.lockScroll,"close-on-click-overlay":e.closeOnClickOverlay,teleport:e.teleport,show:e.popupShow},{"onUpdate:show":a=>{var b,A;return(A=(b=e.$props)["onUpdate:show"])==null?void 0:A.call(b,a)}},{onOpen:e.onOpen,onClose:e.onClose,onClosed:e.onClosed,onOpened:e.onOpened,onRouteChange:e.onRouteChange}),{default:d(()=>[F("div",V({class:"var-action-sheet var--box"},e.$attrs),[N(e.$slots,"title",{},()=>[F("div",Ao,r(e.dt(e.title,e.pack.actionSheetTitle)),1)]),N(e.$slots,"actions",{},()=>[(_(!0),U(D,null,po(e.actions,a=>yo((_(),U("div",{class:fo(["var-action-sheet__action-item",[a.className,a.disabled?"var-action-sheet--disabled":null]]),key:a.name,style:Co({color:a.color}),onClick:b=>e.handleSelect(a)},[a.icon?(_(),z(y,{key:0,class:"var-action-sheet__action-icon","var-action-sheet-cover":"",name:a.icon,size:a.iconSize},null,8,["name","size"])):ko("v-if",!0),F("div",Fo,r(a.name),1)],14,go)),[[f,{disabled:a.disabled}]])),128))])],16)]),_:3},16,["overlay","overlay-class","overlay-style","lock-scroll","close-on-click-overlay","teleport","show","onOpen","onClose","onClosed","onOpened","onRouteChange"])}var h=E(_o,[["render",Uo]]);let C;function p(e){return eo?new Promise(n=>{p.close();const t=g(e);t.teleport="body",C=t;const{unmountInstance:o}=$(h,t,{onSelect:c=>{var m;(m=t.onSelect)==null||m.call(t,c),n(c)},onClose:()=>{var c;(c=t.onClose)==null||c.call(t),n("close")},onClosed:()=>{var c;(c=t.onClosed)==null||c.call(t),o(),C===t&&(C=null)},onRouteChange:()=>{o(),C===t&&(C=null)},"onUpdate:show":c=>{t.show=c}});t.show=!0}):Promise.resolve()}p.Component=h;h.install=function(e){e.component(h.name,h)};p.close=()=>{if(C!=null){const e=C;C=null,ho().then(()=>{e.show=!1})}};p.install=function(e){e.component(h.name,h)};var Io={functionCall:"\u51FD\u6570\u8C03\u7528",basicUsage:"\u57FA\u672C\u4F7F\u7528",modifyTitle:"\u4FEE\u6539\u6807\u9898",componentCall:"\u7EC4\u4EF6\u8C03\u7528",yourSelected:"\u60A8\u9009\u62E9\u7684\u662F:",customTitle:"\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5427",disableCloseOnClickAction:"\u7981\u7528\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F",disabled:"\u7981\u7528\u9009\u9879",customActionStyles:"\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F"},Oo={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",componentCall:"Component Call",yourSelected:"Your selected is:",customTitle:"Choose whichever you like",disableCloseOnClickAction:"Disable close on click action",disabled:"Action Disabled",customActionStyles:"Custom Action Styles"};const{add:P,use:Bo,pack:k,packs:Xo,merge:Zo}=to(),jo=e=>{so(e),Bo(e)};T("zh-CN",ao);T("en-US",lo);P("zh-CN",Io);P("en-US",Oo);const To={name:"ActionSheetExample",components:{VarActionSheet:p.Component,VarButton:bo,AppType:wo},setup(){const e=[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi"}],n=[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi",disabled:!0}],t=[{name:"Item 01",icon:"account-circle",color:"#00c48f"},{name:"Item 02",icon:"notebook",color:"#ff9800"},{name:"Item 03",icon:"wifi",color:"#00afef"}],o=g(e),c=g(n),m=g(t),y=v(!1),i=v(!1),f=v(!1),a=v(!1),b=v(!1),A=async()=>{const l=await p({actions:e});l!=="close"&&w(`${k.value.yourSelected}${l.name}`)},R=async()=>{const l=await p({actions:e,title:k.value.customTitle});l!=="close"&&w(`${k.value.yourSelected}${l.name}`)},L=async()=>{const l=await p({actions:n});l!=="close"&&w(`${k.value.yourSelected}${l.name}`)},x=async()=>{const l=await p({actions:t});l!=="close"&&w(`${k.value.yourSelected}${l.name}`)},q=()=>{p({actions:[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi"}],closeOnClickAction:!1,onSelect:l=>w(`${k.value.yourSelected}${l.name}`)})},H=l=>{w(`${k.value.yourSelected}${l.name}`)},M=I.touchmoveForbid;return co(l=>{l==="pc"&&(I.touchmoveForbid=!1)}),vo(()=>{I.touchmoveForbid=M}),io(jo),{pack:k,show:y,show1:i,show2:f,show3:a,show4:b,actions:o,disabledActions:c,customStyleActions:m,createBasic:A,modifyTitle:R,disableAction:L,customActionStyles:x,handleSelect:H,disableCloseOnClickAction:q}}};function Eo(e,n,t,o,c,m){const y=S("app-type"),i=S("var-button"),f=S("var-action-sheet");return _(),U(D,null,[s(y,null,{default:d(()=>[u(r(o.pack.functionCall),1)]),_:1}),s(i,{type:"primary",block:"",onClick:o.createBasic},{default:d(()=>[u(r(o.pack.basicUsage),1)]),_:1},8,["onClick"]),s(i,{type:"primary",block:"",onClick:o.modifyTitle},{default:d(()=>[u(r(o.pack.modifyTitle),1)]),_:1},8,["onClick"]),s(i,{type:"primary",block:"",onClick:o.disableAction},{default:d(()=>[u(r(o.pack.disabled),1)]),_:1},8,["onClick"]),s(i,{type:"primary",block:"",onClick:o.disableCloseOnClickAction},{default:d(()=>[u(r(o.pack.disableCloseOnClickAction),1)]),_:1},8,["onClick"]),s(i,{type:"primary",block:"",onClick:o.customActionStyles},{default:d(()=>[u(r(o.pack.customActionStyles),1)]),_:1},8,["onClick"]),s(y,null,{default:d(()=>[u(r(o.pack.componentCall),1)]),_:1}),s(i,{type:"warning",block:"",onClick:n[0]||(n[0]=a=>o.show=!0)},{default:d(()=>[u(r(o.pack.basicUsage),1)]),_:1}),s(f,{actions:o.actions,show:o.show,"onUpdate:show":n[1]||(n[1]=a=>o.show=a),onSelect:o.handleSelect},null,8,["actions","show","onSelect"]),s(i,{type:"warning",block:"",onClick:n[2]||(n[2]=a=>o.show1=!0)},{default:d(()=>[u(r(o.pack.modifyTitle),1)]),_:1}),s(f,{title:o.pack.customTitle,actions:o.actions,show:o.show1,"onUpdate:show":n[3]||(n[3]=a=>o.show1=a),onSelect:o.handleSelect},null,8,["title","actions","show","onSelect"]),s(i,{type:"warning",block:"",onClick:n[4]||(n[4]=a=>o.show2=!0)},{default:d(()=>[u(r(o.pack.disabled),1)]),_:1}),s(f,{actions:o.disabledActions,show:o.show2,"onUpdate:show":n[5]||(n[5]=a=>o.show2=a),onSelect:o.handleSelect},null,8,["actions","show","onSelect"]),s(i,{type:"warning",block:"",onClick:n[6]||(n[6]=a=>o.show3=!0)},{default:d(()=>[u(r(o.pack.disableCloseOnClickAction),1)]),_:1}),s(f,{"close-on-click-action":!1,actions:o.actions,show:o.show3,"onUpdate:show":n[7]||(n[7]=a=>o.show3=a),onSelect:o.handleSelect},null,8,["actions","show","onSelect"]),s(i,{type:"warning",block:"",onClick:n[8]||(n[8]=a=>o.show4=!0)},{default:d(()=>[u(r(o.pack.customActionStyles),1)]),_:1}),s(f,{actions:o.customStyleActions,show:o.show4,"onUpdate:show":n[9]||(n[9]=a=>o.show4=a),onSelect:o.handleSelect},null,8,["actions","show","onSelect"])],64)}var $o=E(To,[["render",Eo],["__scopeId","data-v-e9dec4ce"]]);export{$o as default};
