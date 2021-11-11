import{_ as s}from"./elevation.7f6c0241.js";import{o as a,c as t,L as d}from"./vendor.ea41cd30.js";const e={components:{}},l={class:"varlet-site-doc"},n=d(`<h1>\u5355\u9009\u6846</h1><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Radio, RadioGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(RadioGroup).use(Radio)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>\u5F53\u524D\u7684\u503C: {{ value }}<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">return</span> {
      value
    }
  }
}
</code></pre></div><div class="card"><h3>\u8BBE\u7F6E\u72B6\u6001\u503C</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span>
  <span class="hljs-attr">:unchecked-value</span>=<span class="hljs-string">&quot;0&quot;</span>
  <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;1&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  \u5F53\u524D\u7684\u503C: {{ value }}
<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">0</span>)

    <span class="hljs-keyword">return</span> {
      value
    }
  }
}
</code></pre></div><div class="card"><h3>\u4FEE\u6539\u56FE\u6807\u548C\u989C\u8272</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span>
  <span class="hljs-attr">unchecked-color</span>=<span class="hljs-string">&quot;#e99eb4&quot;</span>
  <span class="hljs-attr">checked-color</span>=<span class="hljs-string">&quot;#f44336&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">unchecked-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;heart-half-full&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span>/&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">checked-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;heart&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span>/&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>&gt;</span>
    \u5F53\u524D\u7684\u503C: {{ value }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u7981\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>\u5F53\u524D\u7684\u503C: {{ value }}<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u53EA\u8BFB</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>\u5F53\u524D\u7684\u503C: {{ value }}<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u5355\u9009\u6846\u7EC4</h3><p>\u5728\u5355\u9009\u6846\u7EC4\u4E2D\uFF0C\u9700\u8981\u7ED9<code>radio</code>\u8BBE\u7F6E<code>checked-value</code>\u7528\u6765\u6807\u8BC6\uFF0C \u5355\u9009\u6846\u7EC4\u4F1A\u7ED1\u5B9A\u9009\u62E9\u7684\u6807\u8BC6\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;0&quot;</span>&gt;</span>\u5403\u996D<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u7761\u89C9<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio-group</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">0</span>)

    <span class="hljs-keyword">return</span> {
      value
    }
  }
}
</code></pre></div><div class="card"><h3>\u5355\u9009\u6846\u5B57\u6BB5\u6821\u9A8C</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v || &#39;\u8BF7\u52FE\u9009&#39;]&quot;</span>
&gt;</span>
  \u5F53\u524D\u7684\u503C: {{ value }}
<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u5355\u9009\u6846\u7EC4\u5B57\u6BB5\u6821\u9A8C</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-radio-group</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v === 0 || &#39;\u5FC5\u987B\u9009\u62E9\u5403\u996D&#39;]&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;0&quot;</span>&gt;</span>\u5403\u996D<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-radio</span> <span class="hljs-attr">:checked-value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u7761\u89C9<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-radio-group</span>&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3></div><div class="card"><h3>RadioGroup Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u7ED1\u5B9A\u7684\u503C</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>direction</code></td><td>\u5E03\u5C40\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>rules</code></td><td>\u9A8C\u8BC1\u89C4\u5219\uFF0C\u8FD4\u56DE<code>true</code>\u8868\u793A\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u5176\u4F59\u7684\u503C\u5219\u8F6C\u6362\u4E3A\u6587\u672C\u4F5C\u4E3A\u7528\u6237\u63D0\u793A</td><td><em>Array&lt;(value: any) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Radio Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u7ED1\u5B9A\u7684\u503C</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-value</code></td><td>\u9009\u4E2D\u72B6\u6001\u7684\u503C</td><td><em>any</em></td><td><code>true</code></td></tr><tr><td><code>unchecked-value</code></td><td>\u672A\u9009\u4E2D\u72B6\u6001\u7684\u503C</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-color</code></td><td>\u9009\u4E2D\u72B6\u6001\u7684\u989C\u8272</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>unchecked-color</code></td><td>\u672A\u9009\u4E2D\u72B6\u6001\u7684\u989C\u8272</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>icon-size</code></td><td>\u56FE\u6807\u5C3A\u5BF8</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>\u662F\u5426\u53EA\u8BFB</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>\u662F\u5426\u5F00\u542F\u6C34\u6CE2\u7EB9</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>\u9A8C\u8BC1\u89C4\u5219\uFF0C\u8FD4\u56DE<code>true</code>\u8868\u793A\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u5176\u4F59\u7684\u503C\u5219\u8F6C\u6362\u4E3A\u6587\u672C\u4F5C\u4E3A\u7528\u6237\u63D0\u793A</td><td><em>Array&lt;(value: any) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3></div><div class="card"><h3>RadioGroup Methods</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>validate</code></td><td>\u89E6\u53D1\u6821\u9A8C</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>\u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>\u6E05\u7A7A\u7ED1\u5B9A\u7684\u503C(\u8BBE\u7F6E\u4E3A<code>undefined</code>)\u548C\u6821\u9A8C\u4FE1\u606F</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Radio Methods</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>validate</code></td><td>\u89E6\u53D1\u6821\u9A8C</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>\u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>\u6E05\u7A7A\u7ED1\u5B9A\u7684\u503C(\u8BBE\u7F6E\u4E3A<code>unchecked-value</code>)\u548C\u6821\u9A8C\u4FE1\u606F</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>toggle</code></td><td>\u5207\u6362\u9009\u4E2D\u72B6\u6001\uFF0C\u4F20<code>checked-value</code>\u4E3A\u9009\u4E2D\uFF0C<code>unchecked-value</code>\u4E3A\u53D6\u6D88\u9009\u4E2D\uFF0C\u4E0D\u4F20\u6216\u5176\u4ED6\u60C5\u51B5\u4E3A\u53D6\u53CD</td><td><code>value: any</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3></div><div class="card"><h3>RadioGroup Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>change</code></td><td>\u53D8\u66F4\u65F6\u89E6\u53D1</td><td><code>value: any</code></td></tr></tbody></table></div><div class="card"><h3>Radio Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>click</code></td><td>\u70B9\u51FB\u65F6\u89E6\u53D1</td><td><code>e: Event</code></td></tr><tr><td><code>change</code></td><td>\u72B6\u6001\u53D8\u66F4\u65F6\u89E6\u53D1</td><td><code>value: any</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3></div><div class="card"><h3>RadioGroup Slots</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u5355\u9009\u6846\u7EC4\u7684\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Radio Slots</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>checked-icon</code></td><td>\u9009\u4E2D\u56FE\u6807</td><td><code>-</code></td></tr><tr><td><code>unchecked-icon</code></td><td>\u672A\u9009\u4E2D\u56FE\u6807</td><td><code>-</code></td></tr><tr><td><code>default</code></td><td>\u663E\u793A\u7684\u6587\u672C</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684css\u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider\u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p></div><div class="card"><h3>Radio Variables</h3><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--radio-checked-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--radio-unchecked-color</code></td><td><code>#555</code></td></tr><tr><td><code>--radio-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--radio-error-color</code></td><td><code>var(color-danger)</code></td></tr><tr><td><code>--radio-action-padding</code></td><td><code>6px</code></td></tr><tr><td><code>--radio-icon-size</code></td><td><code>24px</code></td></tr></tbody></table></div>`,25),c=[n];function o(r,h,p,i,j,v){return a(),t("div",l,c)}var m=s(e,[["render",o]]);export{m as default};
