import{S as p}from"./index.aa073aa2.js";import{b as _,f as d}from"./components.581beddd.js";import{T as u,a as b}from"./provide.f6012337.js";import{_ as f}from"./elevation.548891b7.js";import{q as v,r as c,b as l,d as I,o as T,k as S,i as B,B as C,f as E,m as w}from"./vendor.8a125dba.js";function x(){const{parentProvider:e,bindParent:a}=_(u),{index:t}=d(b);if(!e||!a||!t)throw Error("<var-tab-item/> must in <var-tabs-items/>");return{index:t,tabsItems:e,bindTabsItems:a}}const P={name:{type:[String,Number]}};const j=v({name:"VarTabItem",components:{VarSwipeItem:p},props:P,setup(e){const a=c(!1),t=c(!1),r=l(()=>e.name),{index:n,bindTabsItems:o}=x();return o({index:n,name:r,setCurrent:m=>{!t.value&&m&&(t.value=!0),a.value=m}}),{current:a,initSlot:t}}});function A(e,a,t,r,n,o){const i=I("var-swipe-item");return T(),S(i,{class:w(["var-tab-item",[!e.current&&"var-tab-item--inactive"]]),"var-tab-item-cover":""},{default:B(()=>[e.initSlot?C(e.$slots,"default",{key:0}):E("v-if",!0)]),_:3},8,["class"])}var s=f(j,[["render",A]]);s.install=function(e){e.component(s.name,s)};export{s as T};
