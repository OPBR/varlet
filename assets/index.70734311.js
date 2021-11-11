var B=Object.defineProperty,b=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var m=(e,a,o)=>a in e?B(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,v=(e,a)=>{for(var o in a||(a={}))U.call(a,o)&&m(e,o,a[o]);if(i)for(var o of i(a))y.call(a,o)&&m(e,o,a[o]);return e},V=(e,a)=>b(e,F(a));import{C as c}from"./index.bef376cd.js";import{A as k}from"./AppType.eb8ea594.js";import{u as z,a as f,_ as j,b as E,c as h,w as S}from"./en-US.5c76beb1.js";import{_ as A}from"./elevation.7f6c0241.js";import{p as N,Z as D,d as g,o as w,c as _,h as u,w as t,F as x,V as I,W as T,l as p,t as r,a as M}from"./vendor.ea41cd30.js";import"./index.89b2169f.js";import"./shared.cba5a5a3.js";import"./elements.524bf92a.js";import"./provide.16c2d8dc.js";import"./components.b90d3f87.js";import"./index.931337ba.js";import"./index.510439cf.js";var L={basicUsage:"\u57FA\u672C\u4F7F\u7528",range:"\u8BBE\u7F6E\u53D6\u503C\u8303\u56F4",step:"\u8BBE\u7F6E\u6B65\u957F",toFixed:"\u4FDD\u7559\u5C0F\u6570",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",lazyChange:"\u5F02\u6B65\u53D8\u66F4",size:"\u8BBE\u7F6E\u5C3A\u5BF8",validate:"\u5B57\u6BB5\u6821\u9A8C",validateMessage:"\u8BF7\u9009\u62E9\u5927\u4E8E5\u7684\u503C"},R={basicUsage:"Basic Usage",range:"Set the value range",step:"Set step",toFixed:"Decimal length",disabled:"Disabled",readonly:"Readonly",lazyChange:"Asynchronous change",size:"Set size",validate:"Validate",validateMessage:"Please select a value greater than 5"};const{add:C,use:P,pack:W,packs:pe,merge:re}=z(),Z=e=>{h(e),P(e)};f("zh-CN",j);f("en-US",E);C("zh-CN",L);C("en-US",R);const q={name:"CounterExample",components:{VarCounter:c,AppType:k},setup(){const e=N({value:0,value2:0,value3:0,value4:0,value5:0,value6:0,value7:0,value8:0,value9:0}),a=(o,d)=>{setTimeout(()=>{d(o)},500)};return S(Z),V(v({pack:W},D(e)),{handleBeforeChange:a})}},G=e=>(I("data-v-d424eb36"),e=e(),T(),e),H=G(()=>M("div",{class:"space"},null,-1));function J(e,a,o,d,K,O){const n=g("app-type"),s=g("var-counter");return w(),_(x,null,[u(n,null,{default:t(()=>[p(r(d.pack.basicUsage),1)]),_:1}),u(s,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[p(r(d.pack.range),1)]),_:1}),u(s,{min:0,max:5,modelValue:e.value2,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value2=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[p(r(d.pack.step),1)]),_:1}),u(s,{step:10,modelValue:e.value3,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value3=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[p(r(d.pack.toFixed),1)]),_:1}),u(s,{"decimal-length":1,modelValue:e.value4,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value4=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[p(r(d.pack.size),1)]),_:1}),u(s,{"input-text-size":"18px","input-width":"50px","button-size":"36px",modelValue:e.value5,"onUpdate:modelValue":a[4]||(a[4]=l=>e.value5=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[p(r(d.pack.disabled),1)]),_:1}),u(s,{disabled:"",modelValue:e.value6,"onUpdate:modelValue":a[5]||(a[5]=l=>e.value6=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[p(r(d.pack.readonly),1)]),_:1}),u(s,{readonly:"",modelValue:e.value7,"onUpdate:modelValue":a[6]||(a[6]=l=>e.value7=l)},null,8,["modelValue"]),u(n,null,{default:t(()=>[p(r(d.pack.lazyChange),1)]),_:1}),u(s,{"lazy-change":"",modelValue:e.value8,"onUpdate:modelValue":a[7]||(a[7]=l=>e.value8=l),onBeforeChange:d.handleBeforeChange},null,8,["modelValue","onBeforeChange"]),u(n,null,{default:t(()=>[p(r(d.pack.validate),1)]),_:1}),u(s,{rules:[l=>l>5||d.pack.validateMessage],modelValue:e.value9,"onUpdate:modelValue":a[8]||(a[8]=l=>e.value9=l)},null,8,["rules","modelValue"]),H],64)}var ie=A(q,[["render",J],["__scopeId","data-v-d424eb36"]]);export{ie as default};
