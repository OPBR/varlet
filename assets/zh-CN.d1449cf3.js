import{_ as s}from"./elevation.7f6c0241.js";import{o as a,c as t,L as l}from"./vendor.ea41cd30.js";const e={components:{}},n={class:"varlet-site-doc"},d=l(`<h1>\u6ED1\u5757</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5728\u7ED9\u5B9A\u8303\u56F4\u5185\u53D6\u503C\u3002</p></div><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Slider } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Slider)
</code></pre></div><div class="card"><h3>\u57FA\u672C\u4F7F\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">3</span>)

    <span class="hljs-keyword">return</span> {
      value
    }
  }
}
</code></pre></div><div class="card"><h3>\u6307\u5B9A\u6B65\u957F</h3><p>\u901A\u8FC7<code>step</code>\u5C5E\u6027\u6765\u8BBE\u7F6E\u6B65\u8FDB\u589E\u91CF\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">step</span>=<span class="hljs-string">&quot;10&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u53CC\u6ED1\u5757</h3><p>\u901A\u8FC7<code>range</code>\u5C5E\u6027\u5F00\u542F\u53CC\u6ED1\u5757\u6A21\u5F0F\uFF0C\u786E\u4FDD<code>value</code>\u7684\u503C\u662F\u4E00\u4E2A<strong>\u6570\u7EC4</strong>\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">range</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span> /&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref([<span class="hljs-number">24</span>, <span class="hljs-number">50</span>])

    <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(value)
    }

    <span class="hljs-keyword">return</span> {
      value
    }
  }
}
</code></pre></div><div class="card"><h3>\u7981\u7528</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u53EA\u8BFB</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">readonly</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u4E0D\u540C\u5927\u5C0F</h3><p>\u901A\u8FC7<code>track-height</code> \u548C <code>thumb-size</code> \u63A7\u5236slider\u7684\u5927\u5C0F\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">track-height</span>=<span class="hljs-string">&quot;4&quot;</span> <span class="hljs-attr">thumb-size</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">range</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  <span class="hljs-attr">label-color</span>=<span class="hljs-string">&quot;purple&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#e0732c&quot;</span>
  <span class="hljs-attr">track-color</span>=<span class="hljs-string">&quot;#3a68b4&quot;</span>
  <span class="hljs-attr">thumb-color</span>=<span class="hljs-string">&quot;#e25241&quot;</span>
  <span class="hljs-attr">label-text-color</span>=<span class="hljs-string">&quot;#ededed&quot;</span>
/&gt;</span>
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u6309\u94AE</h3><p>\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u6309\u94AE\u65F6\uFF0C<code>label-visible</code>\u3001<code>label-text-color</code>\u3001<code>thumb-size</code>\u7B49\u5C5E\u6027\u5747\u65E0\u6548\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">range</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#52af77&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">button</span>=<span class="hljs-string">&quot;currentValue&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slider-example_block&quot;</span>&gt;</span>{{ currentValue }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-slider</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.slider-example_block</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">24px</span>;
  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#52af77</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#52af77</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">24px</span>;
  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> -<span class="hljs-number">12px</span>;
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">align-items</span>: center;
  <span class="hljs-attribute">justify-content</span>: center;
  <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">#ebebeb</span> <span class="hljs-number">0</span> <span class="hljs-number">2px</span> <span class="hljs-number">2px</span>;
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50%</span>;
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
  <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#fff</span>;
}
</code></pre></div><div class="card"><h3>\u663E\u793A\u6807\u7B7E</h3><p>\u901A\u8FC7 <code>label-visible</code> \u5C5E\u6027\u63A7\u5236\u6807\u7B7E\u7684\u663E\u793A\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">label-visible</span>=<span class="hljs-string">&quot;never&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">label-visible</span>=<span class="hljs-string">&quot;always&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>\u503C\u7684\u6821\u9A8C</h3><p>\u901A\u8FC7<code>rules</code>\u5C5E\u6027\u5BF9\u503C\u8FDB\u884C\u6821\u9A8C\u3002</p><p><span style="font-size:12px;"><code>rules</code>\u662F\u4E00\u4E2A\u53EF\u4EE5\u63A5\u53D7 <code>function</code>\u3001<code>boolean</code> \u548C <code>string</code> \u7684\u6570\u7EC4\u3002 \u51FD\u6570\u4F20\u9012\u8F93\u5165\u503C\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5FC5\u987B\u8FD4\u56DE <code>true</code> / <code>false</code> \u6216\u5305\u542B\u9519\u8BEF\u6D88\u606F\u7684 <code>string</code> \uFF0C \u5982\u679C\u51FD\u6570\u8FD4\u56DE (\u6216\u6570\u7EC4\u5305\u542B\u7684\u4EFB\u4F55\u503C) <code>false</code>\u6216<code>string</code>\uFF0C\u8F93\u5165\u5B57\u6BB5\u5C06\u8F93\u5165\u9519\u8BEF\u72B6\u6001\u3002</span></p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[(v) =&gt; v &gt; 35 || &#39;error message&#39;]&quot;</span> /&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u5F53\u524D\u8FDB\u5EA6\u503C</td><td><em>number | [number, number]</em></td><td><code>0</code></td></tr><tr><td><code>step</code></td><td>\u6B65\u957F\uFF0C\u53D6\u503C\u4E3A<code>1 ~ 100</code>\u95F4\u7684\u6574\u6570</td><td><em>string | number</em></td><td><code>1</code></td></tr><tr><td><code>range</code></td><td>\u662F\u5426\u542F\u7528\u53CC\u6ED1\u5757</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>label-visible</code></td><td>\u662F\u5426\u663E\u793A\u6807\u7B7E\uFF0C\u53EF\u9009\u503C\u4E3A<code>always, normal, never</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>label-text-color</code></td><td>\u6807\u7B7E\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>#fff</code></td></tr><tr><td><code>track-height</code></td><td>slider\u7684\u9AD8\u5EA6</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>thumb-size</code></td><td>\u6ED1\u5757\u7684\u5927\u5C0F</td><td><em>string | number</em></td><td><code>12</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>\u662F\u5426\u53EA\u8BFB</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>rules</code></td><td>\u6821\u9A8C\u89C4\u5219</td><td><em>array</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td><code>change</code></td><td>\u503C\u6539\u53D8\u65F6\u89E6\u53D1</td><td>value: \u5F53\u524D\u8FDB\u5EA6</td></tr><tr><td><code>start</code></td><td>\u5F00\u59CB\u62D6\u52A8\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr><tr><td><code>end</code></td><td>\u7ED3\u675F\u62D6\u52A8\u65F6\u89E6\u53D1</td><td>value: \u5F53\u524D\u8FDB\u5EA6</td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>button</code></td><td>\u81EA\u5B9A\u4E49\u6ED1\u52A8\u6309\u94AE</td><td><code>currentValue</code>: \u5F53\u524D\u8FDB\u5EA6</td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--slider-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--slider-track-background</code></td><td><code>#bdbdbd</code></td></tr><tr><td><code>--slider-track-fill-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-block-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-ripple-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-label-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-label-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr></tbody></table></div>`,18),c=[d];function r(p,o,h,i,j,u){return a(),t("div",n,c)}var v=s(e,[["render",r]]);export{v as default};
