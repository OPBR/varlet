import{R as m}from"./index.931337ba.js";import{A as v}from"./AppType.eb8ea594.js";import{c as i}from"./index.510439cf.js";import{u as b,a as u,_ as f,b as k,c as h,d as C,w as x}from"./en-US.5c76beb1.js";import{_ as F}from"./elevation.7f6c0241.js";import{H as U,d as S,e as g,o as B,c as N,h as r,w as l,i as n,a as d,l as a,t as o,F as y}from"./vendor.ea41cd30.js";var j={click:"\u70B9\u51FB",basicUsage:"\u57FA\u672C\u4F7F\u7528",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",disabledStatus:"\u7981\u7528\u72B6\u6001"},w={click:"Click",basicUsage:"Basic Usage",customColor:"Custom Color",disabledStatus:"Disabled Status"};const{add:_,use:A,pack:z,packs:Q,merge:W}=b(),D=s=>{h(s),A(s)};u("zh-CN",f);u("en-US",k);_("zh-CN",j);_("en-US",w);const E={name:"RippleExample",components:{AppType:v},directives:{Ripple:m},setup(){const s=i.touchmoveForbid;return C(p=>{p==="pc"&&(i.touchmoveForbid=!1)}),x(D),U(()=>{i.touchmoveForbid=s}),{pack:z}}},T={class:"block var-elevation--2"},R={class:"block var-elevation--2"},V={class:"block var-elevation--2"};function L(s,p,H,e,I,P){const c=S("app-type"),t=g("ripple");return B(),N(y,null,[r(c,null,{default:l(()=>[a(o(e.pack.basicUsage),1)]),_:1}),n(d("div",T,[a(o(e.pack.click),1)],512),[[t]]),r(c,null,{default:l(()=>[a(o(e.pack.customColor),1)]),_:1}),n(d("div",R,[a(o(e.pack.click),1)],512),[[t,{color:"#2979ff"}]]),r(c,null,{default:l(()=>[a(o(e.pack.disabledStatus),1)]),_:1}),n(d("div",V,[a(o(e.pack.click),1)],512),[[t,{disabled:!0}]])],64)}var X=F(E,[["render",L],["__scopeId","data-v-b6c4777c"]]);export{X as default};
