import{_ as d}from"./elevation.c9ea9f5a.js";import{e as c,o as r,c as o,a as s,i as t,j as e,m as l,U as n}from"./vendor.49f89f0d.js";const h={components:{}},p={class:"varlet-site-doc"},i=s("h1",null,"\u6ED1\u5757",-1),u=s("div",{class:"card"},[s("h3",null,"\u4ECB\u7ECD"),s("p",null,"\u7528\u4E8E\u5728\u7ED9\u5B9A\u8303\u56F4\u5185\u53D6\u503C\u3002")],-1),j={class:"card"},_=s("h3",null,"\u5F15\u5165",-1),m=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),l(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'vue'"),l(`
`),s("span",{class:"hljs-keyword"},"import"),l(" { Slider } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'@varlet/ui'"),l(`

createApp().use(Slider)
`)])],-1),b={class:"card"},v=s("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-slider"),l(),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"value"'),l(" />")]),l(`
`)])],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),l(" { ref } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'vue'"),l(`

`),s("span",{class:"hljs-keyword"},"export"),l(),s("span",{class:"hljs-keyword"},"default"),l(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),l("("),s("span",{class:"hljs-params"}),l(")")]),l(` {
    `),s("span",{class:"hljs-keyword"},"const"),l(" value = ref("),s("span",{class:"hljs-number"},"3"),l(`)

    `),s("span",{class:"hljs-keyword"},"return"),l(` {
      value
    }
  }
}
`)])],-1),y={class:"card"},k=s("h3",null,"\u6307\u5B9A\u6B65\u957F",-1),x=s("p",null,[l("\u901A\u8FC7 "),s("code",null,"step"),l(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u6B65\u8FDB\u589E\u91CF\u3002")],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-slider"),l(),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"value"'),l(),s("span",{class:"hljs-attr"},"step"),l("="),s("span",{class:"hljs-string"},'"10"'),l(" />")]),l(`
`)])],-1),z={class:"card"},V=s("h3",null,"\u53CC\u6ED1\u5757",-1),C=s("p",null,[l("\u901A\u8FC7 "),s("code",null,"range"),l(" \u5C5E\u6027\u5F00\u542F\u53CC\u6ED1\u5757\u6A21\u5F0F\uFF0C\u786E\u4FDD "),s("code",null,"value"),l(" \u7684\u503C\u662F\u4E00\u4E2A"),s("strong",null,"\u6570\u7EC4"),l("\u3002")],-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-slider"),l(),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"value"'),l(),s("span",{class:"hljs-attr"},"range"),l(" @"),s("span",{class:"hljs-attr"},"change"),l("="),s("span",{class:"hljs-string"},'"handleChange"'),l(" />")]),l(`
`)])],-1),S=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),l(" { ref } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'vue'"),l(`

`),s("span",{class:"hljs-keyword"},"export"),l(),s("span",{class:"hljs-keyword"},"default"),l(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),l("("),s("span",{class:"hljs-params"}),l(")")]),l(` {
    `),s("span",{class:"hljs-keyword"},"const"),l(" value = ref(["),s("span",{class:"hljs-number"},"24"),l(", "),s("span",{class:"hljs-number"},"50"),l(`])

    `),s("span",{class:"hljs-keyword"},"const"),l(" handleChange = "),s("span",{class:"hljs-function"},[l("("),s("span",{class:"hljs-params"},"value"),l(") =>")]),l(` {
      `),s("span",{class:"hljs-built_in"},"console"),l(`.log(value)
    }

    `),s("span",{class:"hljs-keyword"},"return"),l(` {
      value
    }
  }
}
`)])],-1),$={class:"card"},A=s("h3",null,"\u7981\u7528",-1),B=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-slider"),l(),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"value"'),l(),s("span",{class:"hljs-attr"},"disabled"),l(" />")]),l(`
`)])],-1),P={class:"card"},E=s("h3",null,"\u53EA\u8BFB",-1),I=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-slider"),l(),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"value"'),l(),s("span",{class:"hljs-attr"},"readonly"),l(" />")]),l(`
`)])],-1),T={class:"card"},U=s("h3",null,"\u4E0D\u540C\u5927\u5C0F",-1),q=s("p",null,[l("\u901A\u8FC7 "),s("code",null,"track-height"),l(" \u548C "),s("code",null,"thumb-size"),l(" \u63A7\u5236slider\u7684\u5927\u5C0F\u3002")],-1),D=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-slider"),l(),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"value"'),l(),s("span",{class:"hljs-attr"},"track-height"),l("="),s("span",{class:"hljs-string"},'"4"'),l(),s("span",{class:"hljs-attr"},"thumb-size"),l("="),s("span",{class:"hljs-string"},'"8"'),l(),s("span",{class:"hljs-attr"},"range"),l(" />")]),l(`
`)])],-1),F={class:"card"},G=s("h3",null,"\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),H=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-slider"),l(`
  `),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"value"'),l(`
  `),s("span",{class:"hljs-attr"},"label-color"),l("="),s("span",{class:"hljs-string"},'"purple"'),l(`
  `),s("span",{class:"hljs-attr"},"active-color"),l("="),s("span",{class:"hljs-string"},'"#e0732c"'),l(`
  `),s("span",{class:"hljs-attr"},"track-color"),l("="),s("span",{class:"hljs-string"},'"#3a68b4"'),l(`
  `),s("span",{class:"hljs-attr"},"thumb-color"),l("="),s("span",{class:"hljs-string"},'"#e25241"'),l(`
  `),s("span",{class:"hljs-attr"},"label-text-color"),l("="),s("span",{class:"hljs-string"},'"#ededed"'),l(`
/>`)]),l(`
`)])],-1),J={class:"card"},K=s("h3",null,"\u81EA\u5B9A\u4E49\u6309\u94AE",-1),L=s("p",null,[l("\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u6309\u94AE\u65F6\uFF0C"),s("code",null,"label-visible"),l("\u3001"),s("code",null,"label-text-color"),l("\u3001"),s("code",null,"thumb-size"),l(" \u7B49\u5C5E\u6027\u5747\u65E0\u6548\u3002")],-1),M=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-slider"),l(),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"value"'),l(),s("span",{class:"hljs-attr"},"range"),l(),s("span",{class:"hljs-attr"},"active-color"),l("="),s("span",{class:"hljs-string"},'"#52af77"'),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"template"),l(" #"),s("span",{class:"hljs-attr"},"button"),l("="),s("span",{class:"hljs-string"},'"{ currentValue }"'),l(">")]),l(`
    `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"div"),l(),s("span",{class:"hljs-attr"},"class"),l("="),s("span",{class:"hljs-string"},'"slider-example_block"'),l(">")]),l("{{ currentValue }}"),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"div"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-slider"),l(">")]),l(`
`)])],-1),O=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-class"},".slider-example_block"),l(` {
  `),s("span",{class:"hljs-attribute"},"width"),l(": "),s("span",{class:"hljs-number"},"24px"),l(`;
  `),s("span",{class:"hljs-attribute"},"border"),l(": "),s("span",{class:"hljs-number"},"1px"),l(" solid "),s("span",{class:"hljs-number"},"#52af77"),l(`;
  `),s("span",{class:"hljs-attribute"},"color"),l(": "),s("span",{class:"hljs-number"},"#52af77"),l(`;
  `),s("span",{class:"hljs-attribute"},"height"),l(": "),s("span",{class:"hljs-number"},"24px"),l(`;
  `),s("span",{class:"hljs-attribute"},"margin"),l(": "),s("span",{class:"hljs-number"},"0"),l(" -"),s("span",{class:"hljs-number"},"12px"),l(`;
  `),s("span",{class:"hljs-attribute"},"display"),l(`: flex;
  `),s("span",{class:"hljs-attribute"},"align-items"),l(`: center;
  `),s("span",{class:"hljs-attribute"},"justify-content"),l(`: center;
  `),s("span",{class:"hljs-attribute"},"box-shadow"),l(": "),s("span",{class:"hljs-number"},"#ebebeb"),l(),s("span",{class:"hljs-number"},"0"),l(),s("span",{class:"hljs-number"},"2px"),l(),s("span",{class:"hljs-number"},"2px"),l(`;
  `),s("span",{class:"hljs-attribute"},"border-radius"),l(": "),s("span",{class:"hljs-number"},"50%"),l(`;
  `),s("span",{class:"hljs-attribute"},"font-size"),l(": "),s("span",{class:"hljs-number"},"12px"),l(`;
  `),s("span",{class:"hljs-attribute"},"background-color"),l(": "),s("span",{class:"hljs-number"},"#fff"),l(`;
}
`)])],-1),Q={class:"card"},R=s("h3",null,"\u663E\u793A\u6807\u7B7E",-1),W=s("p",null,[l("\u901A\u8FC7 "),s("code",null,"label-visible"),l(" \u5C5E\u6027\u63A7\u5236\u6807\u7B7E\u7684\u663E\u793A\u3002")],-1),X=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-slider"),l(),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"value"'),l(),s("span",{class:"hljs-attr"},"label-visible"),l("="),s("span",{class:"hljs-string"},'"never"'),l(" />")]),l(`
`),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-slider"),l(),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"value1"'),l(" />")]),l(`
`),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-slider"),l(),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"value2"'),l(),s("span",{class:"hljs-attr"},"label-visible"),l("="),s("span",{class:"hljs-string"},'"always"'),l(" />")]),l(`
`)])],-1),Y={class:"card"},Z=n('<h3>\u503C\u7684\u6821\u9A8C</h3><p>\u901A\u8FC7 <code>rules</code> \u5C5E\u6027\u5BF9\u503C\u8FDB\u884C\u6821\u9A8C\u3002</p><p><span style="font-size:12px;"><code>rules</code> \u662F\u4E00\u4E2A\u53EF\u4EE5\u63A5\u53D7 <code>function</code>\u3001<code>boolean</code> \u548C <code>string</code> \u7684\u6570\u7EC4\u3002 \u51FD\u6570\u4F20\u9012\u8F93\u5165\u503C\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5FC5\u987B\u8FD4\u56DE <code>true</code> / <code>false</code> \u6216\u5305\u542B\u9519\u8BEF\u6D88\u606F\u7684 <code>string</code>\uFF0C\u5982\u679C\u51FD\u6570\u8FD4\u56DE (\u6216\u6570\u7EC4\u5305\u542B\u7684\u4EFB\u4F55\u503C) <code>false</code> \u6216 <code>string</code>\uFF0C\u8F93\u5165\u5B57\u6BB5\u5C06\u8F93\u5165\u9519\u8BEF\u72B6\u6001\u3002</span></p>',3),ss=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-slider"),l(),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"value"'),l(),s("span",{class:"hljs-attr"},":rules"),l("="),s("span",{class:"hljs-string"},`"[(v) => v > 35 || 'error message']"`),l(" />")]),l(`
`)])],-1),ls=n('<h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u5F53\u524D\u8FDB\u5EA6\u503C</td><td><em>number | [number, number]</em></td><td><code>0</code></td></tr><tr><td><code>step</code></td><td>\u6B65\u957F\uFF0C\u53D6\u503C\u4E3A <code>1 ~ 100</code> \u95F4\u7684\u6574\u6570</td><td><em>string | number</em></td><td><code>1</code></td></tr><tr><td><code>range</code></td><td>\u662F\u5426\u542F\u7528\u53CC\u6ED1\u5757</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>label-visible</code></td><td>\u662F\u5426\u663E\u793A\u6807\u7B7E\uFF0C\u53EF\u9009\u503C\u4E3A <code>always normal never</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>label-text-color</code></td><td>\u6807\u7B7E\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>#fff</code></td></tr><tr><td><code>track-height</code></td><td>slider\u7684\u9AD8\u5EA6</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>thumb-size</code></td><td>\u6ED1\u5757\u7684\u5927\u5C0F</td><td><em>string | number</em></td><td><code>12</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>\u662F\u5426\u53EA\u8BFB</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>rules</code></td><td>\u6821\u9A8C\u89C4\u5219</td><td><em>array</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>change</code></td><td>\u503C\u6539\u53D8\u65F6\u89E6\u53D1</td><td>value: \u5F53\u524D\u8FDB\u5EA6</td></tr><tr><td><code>start</code></td><td>\u5F00\u59CB\u62D6\u52A8\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>end</code></td><td>\u7ED3\u675F\u62D6\u52A8\u65F6\u89E6\u53D1</td><td>value: \u5F53\u524D\u8FDB\u5EA6</td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>button</code></td><td>\u81EA\u5B9A\u4E49\u6ED1\u52A8\u6309\u94AE</td><td><code>currentValue</code>: \u5F53\u524D\u8FDB\u5EA6</td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--slider-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--slider-track-background</code></td><td><code>#bdbdbd</code></td></tr><tr><td><code>--slider-track-fill-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-block-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-ripple-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-label-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-label-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr></tbody></table></div>',5);function as(ts,es,ns,ds,cs,rs){const a=c("var-site-code-example");return r(),o("div",p,[i,u,s("div",j,[_,t(a,null,{default:e(()=>[m]),_:1})]),s("div",b,[v,t(a,null,{default:e(()=>[g]),_:1}),t(a,null,{default:e(()=>[f]),_:1})]),s("div",y,[k,x,t(a,null,{default:e(()=>[w]),_:1})]),s("div",z,[V,C,t(a,null,{default:e(()=>[N]),_:1}),t(a,null,{default:e(()=>[S]),_:1})]),s("div",$,[A,t(a,null,{default:e(()=>[B]),_:1})]),s("div",P,[E,t(a,null,{default:e(()=>[I]),_:1})]),s("div",T,[U,q,t(a,null,{default:e(()=>[D]),_:1})]),s("div",F,[G,t(a,null,{default:e(()=>[H]),_:1})]),s("div",J,[K,L,t(a,null,{default:e(()=>[M]),_:1}),t(a,null,{default:e(()=>[O]),_:1})]),s("div",Q,[R,W,t(a,null,{default:e(()=>[X]),_:1})]),s("div",Y,[Z,t(a,null,{default:e(()=>[ss]),_:1})]),ls])}var ps=d(h,[["render",as]]);export{ps as default};
