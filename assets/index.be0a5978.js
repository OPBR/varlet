import{I as c}from"./index.07bfe65b.js";import{c as m}from"./components.5cba9644.js";import{_ as C}from"./elevation.c9ea9f5a.js";import{d as f,e as v,o as a,c as n,p as e,G as o,h as l,a as t,i as u,m as i,t as d}from"./vendor.49f89f0d.js";const y={title:{type:[Number,String]},icon:{type:String},desc:{type:String},border:{type:Boolean,default:!1},iconClass:{type:String},titleClass:{type:String},descClass:{type:String},extraClass:{type:String}};const{n:$,classes:g}=m("cell"),S=f({name:"VarCell",components:{VarIcon:c},props:y,setup(){return{n:$,classes:g}}});function N(s,V,k,b,B,I){const p=v("var-icon");return a(),n("div",{class:e(s.classes(s.n(),[s.border,s.n("--border")]))},[s.$slots.icon||s.icon?(a(),n("div",{key:0,class:e(s.classes(s.n("icon"),[s.iconClass,s.iconClass]))},[o(s.$slots,"icon",{},()=>[u(p,{class:"var--flex",name:s.icon},null,8,["name"])])],2)):l("v-if",!0),t("div",{class:e(s.n("content"))},[t("div",{class:e(s.classes(s.n("title"),[s.titleClass,s.titleClass]))},[o(s.$slots,"default",{},()=>[i(d(s.title),1)])],2),s.$slots.desc||s.desc?(a(),n("div",{key:0,class:e(s.classes(s.n("desc"),[s.descClass,s.descClass]))},[o(s.$slots,"desc",{},()=>[i(d(s.desc),1)])],2)):l("v-if",!0)],2),s.$slots.extra?(a(),n("div",{key:1,class:e(s.classes(s.n("extra"),[s.extraClass,s.extraClass]))},[o(s.$slots,"extra")],2)):l("v-if",!0)],2)}var r=C(S,[["render",N]]);r.install=function(s){s.component(r.name,r)};export{r as C};
