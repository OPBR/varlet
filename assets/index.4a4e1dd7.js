import{q as k,r as a,y as p,x as z,H as S,o as h,c as C,B as y,k as $,h as M,i as E,w as L,v as B,a as T,n as U,J as j,T as F,M as I}from"./vendor.8a125dba.js";import{t as A,g as w,a as N}from"./elements.524bf92a.js";import{u as V}from"./zIndex.2c847fc6.js";import{u as H}from"./components.581beddd.js";import{_ as O}from"./elevation.548891b7.js";function X(e){return["top","bottom"].includes(e)}const Y={show:{type:Boolean,default:!1},alignment:{type:String,default:"top",validator:X},offsetX:{type:[Number,String],default:0},offsetY:{type:[Number,String],default:0},teleport:{type:String,default:"body"},onOpen:{type:Function},onOpened:{type:Function},onClose:{type:Function},onClosed:{type:Function},"onUpdate:show":{type:Function}};const q=k({name:"VarMenu",props:Y,setup(e){const t=a(null),s=a(null),l=a(0),i=a(0),{zIndex:c}=V(()=>e.show,1),{disabled:r}=H();let d=!1;const g=n=>n==="top"?w(t.value):w(t.value)-s.value.offsetHeight,b=()=>{d=!0},v=()=>{var n;if(d){d=!1;return}!e.show||(n=e["onUpdate:show"])==null||n.call(e,!1)},o=()=>{l.value=g(e.alignment),i.value=N(t.value)};return p(()=>e.alignment,o),p(()=>e.show,async n=>{const{onOpen:u,onClose:f}=e;n&&o(),n?u==null||u():f==null||f()}),z(()=>{o(),document.addEventListener("click",v),window.addEventListener("resize",o)}),S(()=>{document.removeEventListener("click",v),window.removeEventListener("resize",o)}),{disabled:r,zIndex:c,host:t,menu:s,top:l,left:i,toSizeUnit:A,handleClick:b,resize:o}}});function D(e,t,s,l,i,c){return h(),C("div",{class:"var-menu",ref:"host",onClick:t[1]||(t[1]=(...r)=>e.handleClick&&e.handleClick(...r))},[y(e.$slots,"default"),(h(),$(I,{to:e.teleport,disabled:!e.teleport||e.disabled},[M(F,{name:"var-menu",onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:E(()=>[L(T("div",{class:"var-menu__menu var-elevation--3",ref:"menu",style:U({top:`calc(${e.top}px + ${e.toSizeUnit(e.offsetY)})`,left:`calc(${e.left}px + ${e.toSizeUnit(e.offsetX)})`,zIndex:e.zIndex}),onClick:t[0]||(t[0]=j(()=>{},["stop"]))},[y(e.$slots,"menu")],4),[[B,e.show]])]),_:3},8,["onAfterEnter","onAfterLeave"])],8,["to","disabled"]))],512)}var m=O(q,[["render",D]]);m.install=function(e){e.component(m.name,m)};export{m as M};
