var k=Object.defineProperty;var i=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var v=(e,a,u)=>a in e?k(e,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[a]=u,b=(e,a)=>{for(var u in a||(a={}))g.call(a,u)&&v(e,u,a[u]);if(i)for(var u of i(a))U.call(a,u)&&v(e,u,a[u]);return e};import{I as y}from"./index.e3c6bf2c.js";import{I as F}from"./index.89b2169f.js";import{A as C}from"./AppType.eb8ea594.js";import{u as I,a as h,_ as x,b as E,c as B,w as j}from"./en-US.5c76beb1.js";import{_ as A}from"./elevation.7f6c0241.js";import{p as T,Z as _,d as c,o as M,c as N,h as l,w as p,F as S,V as w,W as D,l as s,t,a as z}from"./vendor.ea41cd30.js";import"./provide.16c2d8dc.js";import"./components.b90d3f87.js";import"./shared.cba5a5a3.js";import"./elements.524bf92a.js";var L={basicUsage:"\u57FA\u672C\u4F7F\u7528",plainMode:"\u6734\u7D20\u6A21\u5F0F",textarea:"\u6587\u672C\u57DF",maxlength:"\u6700\u5927\u957F\u5EA6",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",clearable:"\u53EF\u6E05\u9664",displayIcon:"\u663E\u793A\u56FE\u6807",validate:"\u5B57\u6BB5\u6821\u9A8C",placeholder:"\u8BF7\u8F93\u5165\u6587\u672C",maxMessage:"\u6587\u672C\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E6",clearableText:"\u53EF\u6E05\u9664\u6587\u672C"},P={basicUsage:"Basic Usage",plainMode:"Plain Mode",textarea:"Textarea",maxlength:"Maxlength",disabled:"Disabled",readonly:"Readonly",clearable:"Clearable",displayIcon:"Display Icon",validate:"Validate",placeholder:"Please enter text",maxMessage:"Text length must be greater than 6",clearableText:"Clearable Text"};const{add:V,use:R,pack:f,packs:pe,merge:ne}=I(),W=e=>{B(e),R(e)};h("zh-CN",x);h("en-US",E);V("zh-CN",L);V("en-US",P);const Z={name:"InputExample",components:{VarInput:y,VarIcon:F,AppType:C},setup(){const e=T({value:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",value8:"",value9:""});return j(a=>{W(a),e.value5=f.value.clearableText}),b({pack:f},_(e))}},q=e=>(w("data-v-60d62d5a"),e=e(),D(),e),G=q(()=>z("div",{style:{height:"40px"}},null,-1));function H(e,a,u,o,J,K){const n=c("app-type"),r=c("var-input"),m=c("var-icon");return M(),N(S,null,[l(n,{class:"pb"},{default:p(()=>[s(t(o.pack.basicUsage),1)]),_:1}),l(r,{placeholder:o.pack.placeholder,modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=d=>e.value=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[s(t(o.pack.plainMode),1)]),_:1}),l(r,{hint:!1,line:!1,placeholder:o.pack.placeholder,modelValue:e.value7,"onUpdate:modelValue":a[1]||(a[1]=d=>e.value7=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[s(t(o.pack.textarea),1)]),_:1}),l(r,{placeholder:o.pack.placeholder,textarea:"",modelValue:e.value2,"onUpdate:modelValue":a[2]||(a[2]=d=>e.value2=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[s(t(o.pack.maxlength),1)]),_:1}),l(r,{placeholder:o.pack.placeholder,maxlength:10,modelValue:e.value8,"onUpdate:modelValue":a[3]||(a[3]=d=>e.value8=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[s(t(o.pack.disabled),1)]),_:1}),l(r,{placeholder:o.pack.placeholder,disabled:"",modelValue:e.value3,"onUpdate:modelValue":a[4]||(a[4]=d=>e.value3=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[s(t(o.pack.readonly),1)]),_:1}),l(r,{placeholder:o.pack.placeholder,readonly:"",modelValue:e.value4,"onUpdate:modelValue":a[5]||(a[5]=d=>e.value4=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[s(t(o.pack.clearable),1)]),_:1}),l(r,{placeholder:o.pack.placeholder,clearable:"",modelValue:e.value5,"onUpdate:modelValue":a[6]||(a[6]=d=>e.value5=d)},null,8,["placeholder","modelValue"]),l(n,{class:"pb"},{default:p(()=>[s(t(o.pack.displayIcon),1)]),_:1}),l(r,{placeholder:o.pack.placeholder,modelValue:e.value6,"onUpdate:modelValue":a[7]||(a[7]=d=>e.value6=d)},{"prepend-icon":p(()=>[l(m,{class:"prepend-icon",name:"plus"})]),"append-icon":p(()=>[l(m,{class:"append-icon",name:"minus"})]),_:1},8,["placeholder","modelValue"]),l(n,null,{default:p(()=>[s(t(o.pack.validate),1)]),_:1}),l(r,{placeholder:o.pack.placeholder,rules:[d=>d.length>6||o.pack.maxMessage],modelValue:e.value9,"onUpdate:modelValue":a[8]||(a[8]=d=>e.value9=d)},null,8,["placeholder","rules","modelValue"]),G],64)}var re=A(Z,[["render",H],["__scopeId","data-v-60d62d5a"]]);export{re as default};
