import{_ as t}from"./elevation.7f6c0241.js";import{o as s,c as e,L as d}from"./vendor.ea41cd30.js";const a={components:{}},n={class:"varlet-site-doc"},c=d(`<h1>\u8BA1\u6570\u5668</h1><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Counter } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Counter)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">0</span>)

    <span class="hljs-keyword">return</span> { value }
  }
}
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>\u8BBE\u7F6E\u53D6\u503C\u8303\u56F4</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>\u8BBE\u7F6E\u6B65\u957F</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>\u4FDD\u7559\u5C0F\u6570</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span> <span class="hljs-attr">:decimal-length</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u8BBE\u7F6E\u5C3A\u5BF8</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span>
  <span class="hljs-attr">input-text-size</span>=<span class="hljs-string">&quot;18px&quot;</span>
  <span class="hljs-attr">input-width</span>=<span class="hljs-string">&quot;50px&quot;</span>
  <span class="hljs-attr">button-size</span>=<span class="hljs-string">&quot;36px&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
/&gt;</span>
</code></pre></div><div class="card"><h3>\u7981\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>\u53EA\u8BFB</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>\u5F02\u6B65\u53D8\u66F4</h3><p>\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\u9700\u8981\u7B49\u5F85\u670D\u52A1\u5668\u8FD4\u56DE\u6210\u529F\u4E4B\u540E\u518D\u6267\u884C\u53D8\u66F4\u3002 \u8BBE\u7F6E<code>lazy-change</code>\u540E\u4F1A\u963B\u6B62\u7EC4\u4EF6\u672C\u8EAB\u7684\u7ED1\u5B9A\u503C\u66F4\u65B0\u64CD\u4F5C\uFF0C \u5E76\u6CE8\u518C<code>before-change</code>\u4E8B\u4EF6\u8FDB\u884C\u624B\u52A8\u66F4\u65B0\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span>
  <span class="hljs-attr">lazy-change</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  @<span class="hljs-attr">before-change</span>=<span class="hljs-string">&quot;handleBeforeChange&quot;</span>
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">0</span>)

    <span class="hljs-keyword">const</span> handleBeforeChange = <span class="hljs-function">(<span class="hljs-params">value, change</span>) =&gt;</span> {
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> change(value), <span class="hljs-number">500</span>)
    }

    <span class="hljs-keyword">return</span> {
      value,
      handleBeforeChange
    }
  }
}
</code></pre></div><div class="card"><h3>\u5B57\u6BB5\u6821\u9A8C</h3><p>\u901A\u8FC7\u4F20\u5165\u4E00\u4E2A\u6821\u9A8C\u5668\u6570\u7EC4\u53EF\u4EE5\u5BF9\u503C\u8FDB\u884C\u6821\u9A8C\uFF0C\u6821\u9A8C\u5668\u8FD4\u56DE<code>true</code>\u5219\u4E3A\u6821\u9A8C\u901A\u8FC7\u3002 \u4EE5\u5916\u7684\u503C\u5C06\u8F6C\u6362\u4E3A\u6587\u672C\u4F5C\u4E3A\u7528\u6237\u63D0\u793A\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span>
  <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v &gt; 5 || &#39;\u8BF7\u9009\u62E9\u5927\u4E8E5\u7684\u503C&#39;]&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
/&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u7ED1\u5B9A\u7684\u503C</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>min</code></td><td>\u6700\u5C0F\u503C</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>max</code></td><td>\u6700\u5927\u503C</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>step</code></td><td>\u6B65\u957F</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>decimal-length</code></td><td>\u4FDD\u7559\u5C0F\u6570\u4F4D\u6570</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>input-width</code></td><td>\u8F93\u5165\u6846\u7684\u5BBD\u5EA6</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>input-text-size</code></td><td>\u8F93\u5165\u6846\u7684\u6587\u5B57\u5927\u5C0F</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>button-size</code></td><td>\u6309\u94AE\u5927\u5C0F</td><td><em>string</em></td><td><code>true</code></td></tr><tr><td><code>readonly</code></td><td>\u662F\u5426\u53EA\u8BFB</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disable-increment</code></td><td>\u662F\u5426\u7981\u7528\u589E\u52A0</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disable-decrement</code></td><td>\u662F\u5426\u7981\u7528\u51CF\u5C11</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disable-input</code></td><td>\u662F\u5426\u7981\u7528\u8F93\u5165</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>increment-button</code></td><td>\u662F\u5426\u663E\u793A\u589E\u52A0\u6309\u94AE</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>decrement-button</code></td><td>\u662F\u5426\u663E\u793A\u51CF\u5C11\u6309\u94AE</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>press</code></td><td>\u662F\u5426\u5F00\u542F\u6309\u94AE\u957F\u6309</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>ripple</code></td><td>\u662F\u5426\u5F00\u542F\u6C34\u6CE2\u7EB9</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>validate-trigger</code></td><td>\u89E6\u53D1\u9A8C\u8BC1\u7684\u65F6\u673A\uFF0C \u53EF\u9009\u503C\u4E3A <code>onInputChange</code> <code>onLazyChange</code> <code>onIncrement</code> <code>onDecrement</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onIncrement&#39;, &#39;onDecrement&#39;, &#39;onInputChange&#39;, &#39;onLazyChange&#39;]</code></td></tr><tr><td><code>rules</code></td><td>\u9A8C\u8BC1\u89C4\u5219\uFF0C\u8FD4\u56DE<code>true</code>\u8868\u793A\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u5176\u4F59\u7684\u503C\u5219\u8F6C\u6362\u4E3A\u6587\u672C\u4F5C\u4E3A\u7528\u6237\u63D0\u793A</td><td><em>Array&lt;(value: number) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>validate</code></td><td>\u89E6\u53D1\u6821\u9A8C</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>\u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>\u6E05\u7A7A\u7ED1\u5B9A\u7684\u503C(\u8BBE\u7F6E\u4E3A<code>min || 0</code>)\u548C\u6821\u9A8C\u4FE1\u606F</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>before-change</code></td><td>\u53D8\u66F4\u4E4B\u524D(\u4EC5\u9650lazy-change\u6A21\u5F0F)\u89E6\u53D1</td><td><code>value: number</code> <br> <code>change: (value: string | number) =&gt; void</code></td></tr><tr><td><code>change</code></td><td>\u53D8\u66F4\u65F6\u89E6\u53D1</td><td><code>value: number</code></td></tr><tr><td><code>increment</code></td><td>\u589E\u52A0\u65F6\u89E6\u53D1</td><td><code>value: number</code></td></tr><tr><td><code>decrement</code></td><td>\u51CF\u5C11\u65F6\u89E6\u53D1</td><td><code>value: number</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684css\u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider\u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--counter-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--counter-font-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--counter-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--counter-input-width</code></td><td><code>28px</code></td></tr><tr><td><code>--counter-input-margin</code></td><td><code>0 4px</code></td></tr><tr><td><code>--counter-input-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--counter-button-size</code></td><td><code>28px</code></td></tr><tr><td><code>--counter-button-icon-size</code></td><td><code>100%</code></td></tr><tr><td><code>--counter-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--input-error-color</code></td><td><code>var(--color-danger</code>)</td></tr></tbody></table></div>`,16),o=[c];function l(r,p,h,i,u,m){return s(),e("div",n,o)}var v=t(a,[["render",l]]);export{v as default};
