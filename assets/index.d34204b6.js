var E=Object.defineProperty,U=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var w=(a,e,l)=>e in a?E(a,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[e]=l,h=(a,e)=>{for(var l in e||(e={}))A.call(e,l)&&w(a,l,e[l]);if(B)for(var l of B(e))S.call(e,l)&&w(a,l,e[l]);return a},b=(a,e)=>U(a,D(e));import{D as m}from"./index.9868ae6e.js";import{B as F}from"./index.0f8f6e8b.js";import{I as x}from"./index.35a7147c.js";import{S as p}from"./index.d5218f0f.js";import{C as T}from"./index.53a2492b.js";import{A as N}from"./AppType.e7bf62d3.js";import{d as I}from"./index.77fe3760.js";import{u as V,a as _,_ as z,b as M,c as P}from"./en-US.51e06fb5.js";import{w as H,a as L}from"./utils.efdc8a96.js";import{_ as R}from"./elevation.7076906a.js";import{p as W,Z,d as C,o as q,c as G,h as s,i as n,F as J,l as t,t as i}from"./vendor.8a125dba.js";import"./index.bd85c36e.js";import"./lock.2797eacf.js";import"./index.789f7251.js";import"./zIndex.2c847fc6.js";import"./components.33246c91.js";import"./shared.61f3a471.js";import"./index.23ced9c1.js";import"./index.143bfef2.js";import"./elements.6bb3d81f.js";var K={functionCall:"\u51FD\u6570\u8C03\u7528",basicUsage:"\u57FA\u672C\u4F7F\u7528",modifyTitle:"\u4FEE\u6539\u6807\u9898",hideButton:"\u9690\u85CF\u6309\u94AE",handleUserBehavior:"\u5904\u7406\u7528\u6237\u884C\u4E3A",asyncClose:"\u5F02\u6B65\u5173\u95ED",componentCall:"\u7EC4\u4EF6\u8C03\u7528",title:"\u5170\u4EAD\u5E8F",message:"\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34",customSlots:"\u81EA\u5B9A\u4E49\u63D2\u69FD",asyncCloseProgress:"\u6B63\u5728\u5F02\u6B65\u5173\u95ED"},O={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",hideButton:"Hide Button",handleUserBehavior:"Handle User Behavior",asyncClose:"Asynchronous closing",componentCall:"Component Call",title:"Beat It",message:"Don't Wanna See No Blood, Don't Be A Macho Man",customSlots:"Custom Slots",asyncCloseProgress:"Asynchronous shutdown in progress"};const{add:j,use:Q,pack:u,packs:we,merge:he}=V(),X=a=>{P(a),Q(a)};_("zh-CN",z);_("en-US",M);j("zh-CN",K);j("en-US",O);const Y={name:"DialogExample",components:{VarDialog:m.Component,VarButton:F,VarIcon:x,VarCell:T,AppType:N},setup(){const a=W({show:!1,show1:!1,show2:!1,value:""}),e={confirm:()=>p.success("confirm"),cancel:()=>p.error("cancel"),close:()=>p.info("close")},l=()=>m({message:u.value.message}),o=async()=>e[await m(u.value.message)](),y=()=>{m({title:u.value.title,message:u.value.message})},v=()=>{m({message:u.value.message,confirmButton:!1,cancelButton:!1})},d=(f,k)=>{p.loading(u.value.asyncCloseProgress),setTimeout(()=>{e[f](),k()},1e3)},r=()=>{m({message:u.value.message,onBeforeClose:d})};return H(X),L(I),b(h({pack:u},Z(a)),{asyncClose:r,createBasic:l,createAction:o,modifyTitle:y,hideButton:v,onBeforeClose:d,Snackbar:p})}};function $(a,e,l,o,y,v){const d=C("app-type"),r=C("var-button"),f=C("var-dialog"),k=C("var-icon"),g=C("var-cell");return q(),G(J,null,[s(d,null,{default:n(()=>[t(i(o.pack.functionCall),1)]),_:1}),s(r,{type:"primary",block:"",onClick:o.createBasic},{default:n(()=>[t(i(o.pack.basicUsage),1)]),_:1},8,["onClick"]),s(r,{type:"primary",block:"",onClick:o.modifyTitle},{default:n(()=>[t(i(o.pack.modifyTitle),1)]),_:1},8,["onClick"]),s(r,{type:"primary",block:"",onClick:o.hideButton},{default:n(()=>[t(i(o.pack.hideButton),1)]),_:1},8,["onClick"]),s(r,{type:"primary",block:"",onClick:o.createAction},{default:n(()=>[t(i(o.pack.handleUserBehavior),1)]),_:1},8,["onClick"]),s(r,{type:"primary",block:"",onClick:o.asyncClose},{default:n(()=>[t(i(o.pack.asyncClose),1)]),_:1},8,["onClick"]),s(d,null,{default:n(()=>[t(i(o.pack.componentCall),1)]),_:1}),s(r,{type:"warning",block:"",onClick:e[0]||(e[0]=c=>a.show=!0)},{default:n(()=>[t(i(o.pack.basicUsage),1)]),_:1}),s(f,{show:a.show,"onUpdate:show":e[1]||(e[1]=c=>a.show=c),title:o.pack.title,message:o.pack.message,onConfirm:e[2]||(e[2]=()=>o.Snackbar.success("confirm")),onCancel:e[3]||(e[3]=()=>o.Snackbar.error("cancel")),onClosed:e[4]||(e[4]=()=>o.Snackbar.info("closed"))},null,8,["show","title","message"]),s(r,{type:"warning",block:"",onClick:e[5]||(e[5]=c=>a.show1=!0)},{default:n(()=>[t(i(o.pack.asyncClose),1)]),_:1}),s(f,{show:a.show1,"onUpdate:show":e[6]||(e[6]=c=>a.show1=c),title:o.pack.title,message:o.pack.message,onBeforeClose:o.onBeforeClose},null,8,["show","title","message","onBeforeClose"]),s(r,{type:"warning",block:"",onClick:e[7]||(e[7]=c=>a.show2=!0)},{default:n(()=>[t(i(o.pack.customSlots),1)]),_:1}),s(f,{show:a.show2,"onUpdate:show":e[8]||(e[8]=c=>a.show2=c)},{title:n(()=>[s(k,{name:"information",color:"#2979ff"})]),default:n(()=>[s(g,null,{default:n(()=>[t(i(o.pack.message),1)]),_:1}),s(g,null,{default:n(()=>[t(i(o.pack.message),1)]),_:1}),s(g,null,{default:n(()=>[t(i(o.pack.message),1)]),_:1})]),_:1},8,["show"])],64)}var be=R(Y,[["render",$],["__scopeId","data-v-7374df38"]]);export{be as default};
