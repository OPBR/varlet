import{I as $}from"./index.35a7147c.js";import{h as P,c as L}from"./elements.6bb3d81f.js";import{t as y}from"./shared.61f3a471.js";import{_ as b}from"./elevation.7076906a.js";import{q as M,r as u,b as h,y as x,x as C,d as g,o as _,c as T,a as A,h as F,m as V,n as O,B as U,S as z,k as N,i as R,j as Y,l as q,t as X,F as G}from"./vendor.8a125dba.js";import{C as H}from"./index.53a2492b.js";import{d as J}from"./index.77fe3760.js";import{a as K}from"./utils.efdc8a96.js";const Q={modelValue:{type:Boolean},disabled:{type:Boolean,default:!1},animationDuration:{type:[Number,String],default:300},successDuration:{type:[Number,String],default:2e3},bgColor:{type:String},successBgColor:{type:String},color:{type:String},successColor:{type:String},onRefresh:{type:Function},"onUpdate:modelValue":{type:Function}};const f=100,v=-50;let w;const W=M({name:"VarPullRefresh",components:{VarIcon:$},props:Q,setup(e){const a=u(null),c=u(0),o=u(v),l=u("arrow-down"),s=u("default"),r=u(!1),t=h(()=>s.value!=="loading"&&s.value!=="success"&&!e.disabled),i=h(()=>({"var-pull-refresh__icon":!0,"var-pull-refresh__animation":s.value==="loading"})),m=h(()=>({transform:`translate3d(0px, ${o.value}px, 0px) translate(-50%, 0)`,transition:r.value?`transform ${e.animationDuration}ms`:void 0,background:e.successBgColor||e.bgColor,color:e.successColor||e.color})),E=h(()=>s.value==="success"),k=n=>{!t.value||(s.value="pulling",c.value=n.touches[0].clientY)},B=n=>{const d=L(w);if(d>0||!t.value)return;d===0&&o.value>v&&n.cancelable&&n.preventDefault();const S=(n.touches[0].clientY-c.value)/2+v;o.value=S>=f?f:S,l.value=o.value>=f*.2?"refresh":"arrow-down"},I=()=>{var n,d;!t.value||(r.value=!0,o.value>=f*.2?(s.value="loading",o.value=f*.3,(n=e["onUpdate:modelValue"])==null||n.call(e,!0),(d=e.onRefresh)==null||d.call(e)):(s.value="loosing",l.value="arrow-down",o.value=v,setTimeout(()=>{r.value=!1},y(e.animationDuration))))},j=()=>{setTimeout(()=>{s.value="default",l.value="arrow-down",r.value=!1},y(e.animationDuration))};return x(()=>e.modelValue,n=>{n===!1&&(r.value=!0,s.value="success",l.value="checkbox-marked-circle",setTimeout(()=>{o.value=v,j()},y(e.successDuration)))}),C(()=>{w=P(a.value)}),{freshNode:a,touchStart:k,touchMove:B,touchEnd:I,iconName:l,iconClass:i,controlStyle:m,isSuccess:E}}});function Z(e,a,c,o,l,s){const r=g("var-icon");return _(),T("div",{ref:"freshNode",class:"var-pull-refresh",onTouchstart:a[0]||(a[0]=(...t)=>e.touchStart&&e.touchStart(...t)),onTouchmove:a[1]||(a[1]=(...t)=>e.touchMove&&e.touchMove(...t)),onTouchend:a[2]||(a[2]=(...t)=>e.touchEnd&&e.touchEnd(...t)),onTouchcancel:a[3]||(a[3]=(...t)=>e.touchEnd&&e.touchEnd(...t))},[A("div",{class:V(["var-pull-refresh__control var-elevation--2",[e.isSuccess?"var-pull-refresh__control-success":null]]),style:O(e.controlStyle)},[F(r,{name:e.iconName,transition:200,class:V(e.iconClass),"var-pull-refresh-cover":""},null,8,["name","class"])],6),U(e.$slots,"default")],544)}var p=b(W,[["render",Z]]);p.install=function(e){e.component(p.name,p)};const D=Array(10).fill("List Item"),ee=Array(10).fill("This is new List Item"),ae={name:"PullRefreshExample",components:{VarPullRefresh:p,VarCell:H},setup(){const e=u(!1),a=u(D),c=()=>{setTimeout(()=>{a.value=a.value[0]==="List Item"?ee:D,e.value=!1},2e3)},o=l=>{l.preventDefault()};return C(()=>{document.body.addEventListener("touchmove",o,{passive:!1})}),z(()=>{document.body.removeEventListener("touchmove",o)}),K(J),{refresh:c,isRefresh:e,data:a}}};function oe(e,a,c,o,l,s){const r=g("var-cell"),t=g("var-pull-refresh");return _(),N(t,{onRefresh:o.refresh,modelValue:o.isRefresh,"onUpdate:modelValue":a[0]||(a[0]=i=>o.isRefresh=i),"success-duration":"2000"},{default:R(()=>[(_(!0),T(G,null,Y(o.data,(i,m)=>(_(),N(r,{key:m,border:""},{default:R(()=>[q(X(i+" "+(m+1)),1)]),_:2},1024))),128))]),_:1},8,["onRefresh","modelValue"])}var de=b(ae,[["render",oe],["__scopeId","data-v-5ca1ba7a"]]);export{de as default};
