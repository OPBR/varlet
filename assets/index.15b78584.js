import{F as W,u as q}from"./provide.850c0c88.js";import{I as G}from"./index.35a7147c.js";import{b as f}from"./shared.61f3a471.js";import{a as H}from"./components.33246c91.js";import{_ as J}from"./elevation.7076906a.js";import{q as K,r as c,N as L,b as O,d as M,o as d,c as g,a as v,m as i,B as w,f as F,n as p,t as Q,h as X,z as Y,k as Z}from"./vendor.8a125dba.js";function _(e){return["text","password","number"].includes(e)}const x={modelValue:{type:String},type:{type:String,default:"text",validator:_},textarea:{type:Boolean,default:!1},rows:{type:[String,Number],default:8},placeholder:{type:String},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},maxlength:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},validateTrigger:{type:Array,default:()=>["onInput","onClear"]},rules:{type:Array},onFocus:{type:Function},onBlur:{type:Function},onClick:{type:Function},onClear:{type:Function},onInput:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const ee=K({name:"VarInput",components:{VarIcon:G,VarFormDetails:W},props:x,setup(e){const a=c(`var-input-${L().uid}`),h=c(null),m=c(!1),V=O(()=>{const{maxlength:n,modelValue:l}=e;return n?f(l)?`0 / ${n}`:`${String(l).length}/${n}`:""}),{bindForm:y,form:r}=q(),{errorMessage:b,validateWithTrigger:o,validate:D,resetValidation:C}=H(),u=n=>{Y(()=>{const{validateTrigger:l,rules:t,modelValue:s}=e;o(l,n,t,s)})},$=()=>{const{hint:n,modelValue:l}=e;if(!n&&!f(l))return"var-input--placeholder-hidden";if(n&&(!f(l)||m.value))return"var-input--placeholder-hint"},z=n=>{var l;m.value=!0,(l=e.onFocus)==null||l.call(e,n),u("onFocus")},T=n=>{var l;m.value=!1,(l=e.onBlur)==null||l.call(e,n),u("onBlur")},j=n=>{var t,s;const{value:l}=n.target;(t=e["onUpdate:modelValue"])==null||t.call(e,l),(s=e.onInput)==null||s.call(e,l,n),u("onInput")},N=n=>{var t;const{value:l}=n.target;(t=e.onChange)==null||t.call(e,l,n),u("onChange")},U=()=>{var S;const{disabled:n,readonly:l,clearable:t,onClear:s}=e;(r==null?void 0:r.disabled.value)||(r==null?void 0:r.readonly.value)||n||l||!t||((S=e["onUpdate:modelValue"])==null||S.call(e,""),s==null||s(""),u("onClear"))},E=n=>{const{disabled:l,onClick:t}=e;(r==null?void 0:r.disabled.value)||l||(t==null||t(n),u("onClick"))},k=()=>{var n;(n=e["onUpdate:modelValue"])==null||n.call(e,""),C()},I=()=>D(e.rules,e.modelValue),P=()=>{h.value.focus()},R=()=>{h.value.blur()},A={reset:k,validate:I,resetValidation:C};return y==null||y(A),{el:h,id:a,isFocus:m,errorMessage:b,maxlengthText:V,formDisabled:r==null?void 0:r.disabled,formReadonly:r==null?void 0:r.readonly,isEmpty:f,computePlaceholderState:$,handleFocus:z,handleBlur:T,handleInput:j,handleChange:N,handleClear:U,handleClick:E,validate:I,resetValidation:C,reset:k,focus:P,blur:R}}}),ne={key:0,class:"var-input__autocomplete"},le=["id","disabled","type","value","maxlength","rows"],ae=["id","disabled","type","value","maxlength"],oe=["for"];function re(e,a,h,m,V,y){const r=M("var-icon"),b=M("var-form-details");return d(),g("div",{class:i(["var-input var--box",[e.disabled?"var-input--disabled":null]]),onClick:a[8]||(a[8]=(...o)=>e.handleClick&&e.handleClick(...o))},[v("div",{class:i(["var-input__controller",[e.isFocus?"var-input--focus":null,e.errorMessage?"var-input--error":null,e.formDisabled||e.disabled?"var-input--disabled":null]]),style:p({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},[v("div",{class:i(["var-input__icon",[e.hint?null:"var-input--non-hint"]])},[w(e.$slots,"prepend-icon")],2),v("div",{class:i(["var-input__wrap",[e.hint?null:"var-input--non-hint"]])},[e.type==="password"?(d(),g("input",ne)):F("v-if",!0),e.textarea?(d(),g("textarea",{key:1,class:i(["var-input__input var-input--textarea",[e.formDisabled||e.disabled?"var-input--disabled":null,e.errorMessage?"var-input--caret-error":null]]),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.type,value:e.modelValue,maxlength:e.maxlength,rows:e.rows,style:p({color:e.textColor,caretColor:e.errorMessage?null:e.focusColor,resize:e.resize?"vertical":"none"}),onFocus:a[0]||(a[0]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onBlur:a[1]||(a[1]=(...o)=>e.handleBlur&&e.handleBlur(...o)),onInput:a[2]||(a[2]=(...o)=>e.handleInput&&e.handleInput(...o)),onChange:a[3]||(a[3]=(...o)=>e.handleChange&&e.handleChange(...o))},`
        `,46,le)):(d(),g("input",{key:2,class:i(["var-input__input",[e.formDisabled||e.disabled?"var-input--disabled":null,e.errorMessage?"var-input--caret-error":null]]),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.type,value:e.modelValue,maxlength:e.maxlength,style:p({color:e.textColor,caretColor:e.errorMessage?null:e.focusColor}),onFocus:a[4]||(a[4]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onBlur:a[5]||(a[5]=(...o)=>e.handleBlur&&e.handleBlur(...o)),onInput:a[6]||(a[6]=(...o)=>e.handleInput&&e.handleInput(...o)),onChange:a[7]||(a[7]=(...o)=>e.handleChange&&e.handleChange(...o))},null,46,ae)),v("label",{class:i([e.textarea?"var-input__textarea-placeholder":"var-input__placeholder",e.computePlaceholderState(),e.hint?null:"var-input--placeholder-non-hint"]),for:e.id},Q(e.placeholder),11,oe)],2),v("div",{class:i(["var-input__icon",[e.hint?null:"var-input--non-hint"]])},[w(e.$slots,"append-icon",{},()=>[e.clearable&&!e.isEmpty(e.modelValue)?(d(),Z(r,{key:0,class:"var-input__clear-icon","var-input-cover":"",name:"close-circle",size:"14px",onClick:e.handleClear},null,8,["onClick"])):F("v-if",!0)])],2)],6),e.line?(d(),g("div",{key:0,class:i(["var-input__line",[e.formDisabled||e.disabled?"var-input--line-disabled":null,e.errorMessage?"var-input--line-error":null]]),style:p({background:e.errorMessage?void 0:e.blurColor})},[v("div",{class:i(["var-input__dot",[e.isFocus?"var-input--spread":null,e.formDisabled||e.disabled?"var-input--line-disabled":null,e.errorMessage?"var-input--line-error":null]]),style:p({background:e.errorMessage?void 0:e.focusColor})},null,6)],6)):F("v-if",!0),X(b,{"error-message":e.errorMessage,"maxlength-text":e.maxlengthText},null,8,["error-message","maxlength-text"])],2)}var B=J(ee,[["render",re]]);B.install=function(e){e.component(B.name,B)};export{B as I};
