import{_ as s}from"./elevation.7f6c0241.js";import{o as a,c as t,L as l}from"./vendor.ea41cd30.js";const n={components:{}},e={class:"varlet-site-doc"},c=l(`<h1>\u8BC4\u5206</h1><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Rate } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Rate)
</code></pre></div><div class="card"><h3>\u57FA\u7840\u8BC4\u5206</h3><p>\u9ED8\u8BA4\u663E\u793A\u6837\u5F0F\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span>/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> score = ref(<span class="hljs-number">3</span>)

    <span class="hljs-keyword">return</span> {
      score
    }
  }
}
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u8BC4\u5206\u603B\u6570</h3><p>\u901A\u8FC7<code>count</code>\u5C5E\u6027\u8BBE\u7F6E\u8BC4\u5206\u603B\u6570\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:count</span>=<span class="hljs-string">&quot;8&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u8BC4\u5206\u56FE\u6807\u989C\u8272</h3><p>\u901A\u8FC7<code>color</code>\u548C<code>empty-color</code>\u5C5E\u6027\u8BBE\u7F6E\u9009\u4E2D\u548C\u672A\u9009\u4E2D\u65F6\u7684\u989C\u8272\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#9c27b0&quot;</span> <span class="hljs-attr">empty-color</span>=<span class="hljs-string">&quot;#d199da&quot;</span>/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#e91e63&quot;</span> <span class="hljs-attr">empty-color</span>=<span class="hljs-string">&quot;#f48fb1&quot;</span>/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#4caf50&quot;</span> <span class="hljs-attr">empty-color</span>=<span class="hljs-string">&quot;#a5d6a7&quot;</span>/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#3f51b5&quot;</span> <span class="hljs-attr">empty-color</span>=<span class="hljs-string">&quot;#9fa8da&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u8BC4\u5206\u56FE\u6807\u6837\u5F0F</h3><p>\u901A\u8FC7<code>icon</code>\u548C<code>empty-icon</code>\u5C5E\u6027\u8BBE\u7F6E\u9009\u4E2D\u548C\u672A\u9009\u65F6\u7684\u56FE\u6807\u6837\u5F0F\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;heart&quot;</span> <span class="hljs-attr">empty-icon</span>=<span class="hljs-string">&quot;heart-outline&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;red&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">var-rate</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u8BC4\u5206\u56FE\u6807\u5C3A\u5BF8</h3><p>\u901A\u8FC7<code>size</code>\u5C5E\u6027\u8BBE\u7F6E\u8BC4\u5206\u56FE\u6807\u7684\u5C3A\u5BF8\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;14&quot;</span>/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;16&quot;</span>/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;18&quot;</span>/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;20&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u56FE\u6807\u95F4\u9694</h3><p>\u901A\u8FC7<code>gap</code>\u5C5E\u6027\u8BBE\u7F6E\u8BC4\u5206\u4E4B\u95F4\u7684\u95F4\u9694\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:gap</span>=<span class="hljs-string">&quot;2&quot;</span>/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span>/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:gap</span>=<span class="hljs-string">&quot;6&quot;</span>/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:gap</span>=<span class="hljs-string">&quot;8&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>\u5141\u8BB8\u534A\u56FE\u6807</h3><p>\u901A\u8FC7<code>half</code>\u5C5E\u6027\u5C06\u8BC4\u5206\u8BBE\u7F6E\u4E3A\u53EF\u534A\u9009\uFF0C<code>half-icon</code>\u5C5E\u6027\u8BBE\u7F6E\u534A\u9009\u65F6\u7684\u6837\u5F0F\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:count</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">half</span>/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:count</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;heart&quot;</span> <span class="hljs-attr">half-icon</span>=<span class="hljs-string">&quot;heart-half-full&quot;</span> <span class="hljs-attr">empty-icon</span>=<span class="hljs-string">&quot;heart-outline&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;red&quot;</span> <span class="hljs-attr">half</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">var-rate</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> score = ref(<span class="hljs-number">3.5</span>)

    <span class="hljs-keyword">return</span> { score }
  }
}
</code></pre></div><div class="card"><h3>\u7981\u7528\u8BC4\u5206</h3><p>\u901A\u8FC7<code>disabled</code>\u5C5E\u6027\u5C06\u8BC4\u5206\u8BBE\u7F6E\u4E3A\u7981\u6B62\u70B9\u51FB\u72B6\u6001\uFF0C<code>disabled-color</code>\u8BBE\u7F6E\u7981\u7528\u65F6\u56FE\u6807\u7684\u989C\u8272\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">disabled-color</span>=<span class="hljs-string">&quot;#bbbbbb&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>\u53EA\u8BFB\u8BC4\u5206</h3><p>\u901A\u8FC7<code>readonly</code>\u5C5E\u6027\u5C06\u8BC4\u5206\u8BBE\u7F6E\u4E3A\u53EA\u8BFB\u72B6\u6001\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">readonly</span>/&gt;</span>
</code></pre></div><div class="card"><h3>\u7981\u6B62\u4F7F\u7528\u6C34\u6CE2\u7EB9</h3><p>\u901A\u8FC7\u628A<code>ripple</code>\u5C5E\u6027\u8BBE\u7F6E\u4E3A<code>false</code>\u6765\u7981\u6B62\u4F7F\u7528\u6C34\u6CE2\u7EB9\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:ripple</span>=<span class="hljs-string">&quot;false&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>\u76D1\u542Cchange\u4E8B\u4EF6</h3><p>\u901A\u8FC7\u8C03\u7528<code>change</code>\u4E8B\u4EF6\u5B8C\u6210\u5176\u4ED6\u4EA4\u4E92\u903B\u8F91\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span>/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">(<span class="hljs-params">score</span>) =&gt;</span> {
      Snackbar({
        <span class="hljs-attr">content</span>: <span class="hljs-string">\`click <span class="hljs-subst">\${score}</span>\`</span>,
        <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;top&#39;</span>
      })
    }

    <span class="hljs-keyword">return</span> {
      handleChange
    }
  }
}
</code></pre></div><div class="card"><h3>\u5B57\u6BB5\u6821\u9A8C</h3><p>\u901A\u8FC7\u4F20\u5165\u4E00\u4E2A\u6821\u9A8C\u5668\u6570\u7EC4\u53EF\u4EE5\u5BF9\u503C\u8FDB\u884C\u6821\u9A8C\uFF0C\u6821\u9A8C\u5668\u8FD4\u56DE<code>true</code>\u5219\u4E3A\u6821\u9A8C\u901A\u8FC7\u3002 \u4EE5\u5916\u7684\u503C\u5C06\u8F6C\u6362\u4E3A\u6587\u672C\u4F5C\u4E3A\u7528\u6237\u63D0\u793A\u3002</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[(v) =&gt; v &gt;= 3 || &#39;\u5FC5\u987B\u5927\u4E8E2&#39;]&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&#39;score&#39;</span> /&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>\u5F53\u524D\u5206\u6570</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>count</code></td><td>\u8BC4\u5206\u603B\u6570</td><td><em>number | string</em></td><td><code>5</code></td></tr><tr><td><code>color</code></td><td>\u9009\u4E2D\u65F6\u56FE\u6807\u7684\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>\u9009\u4E2D\u6574\u4E2A\u56FE\u6807\u65F6\u7684\u56FE\u6807\u6837\u5F0F</td><td><em>string</em></td><td><code>star</code></td></tr><tr><td><code>empty-color</code></td><td>\u672A\u9009\u4E2D\u65F6\u56FE\u6807\u7684\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>empty-icon</code></td><td>\u672A\u9009\u4E2D\u65F6\u56FE\u6807\u7684\u6837\u5F0F</td><td><em>string</em></td><td><code>star-outline</code></td></tr><tr><td><code>size</code></td><td>\u56FE\u6807\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A<code>px</code></td><td><em>number | string</em></td><td><code>20</code></td></tr><tr><td><code>gap</code></td><td>\u56FE\u6807\u95F4\u9694\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A<code>px</code></td><td><em>number | string</em></td><td><code>4</code></td></tr><tr><td><code>half</code></td><td>\u662F\u5426\u5141\u8BB8\u534A\u9009</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>half-icon</code></td><td>\u534A\u9009\u65F6\u56FE\u6807\u7684\u6837\u5F0F\uFF0C\u53EA\u6709\u5728<code>half</code>\u4E3A<code>true</code>\u65F6\u624D\u6709\u6548</td><td><em>string</em></td><td><code>star-half-full</code></td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u6B62\u8BC4\u5206</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled-color</code></td><td>\u7981\u6B62\u8BC4\u5206\u65F6\u56FE\u6807\u7684\u989C\u8272\uFF0C\u53EA\u6709\u5728<code>disabled</code>\u4E3A<code>true</code>\u65F6\u624D\u6709\u6548\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E<code>color</code>\u3001<code>empty-color</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>\u662F\u5426\u4F7F\u7528\u8BC4\u5206\u53EA\u8BFB</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>\u662F\u5426\u4F7F\u7528\u6C34\u6CE2\u7EB9</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>\u9A8C\u8BC1\u89C4\u5219\uFF0C\u8FD4\u56DE<code>true</code>\u8868\u793A\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u5176\u4F59\u7684\u503C\u5219\u8F6C\u6362\u4E3A\u6587\u672C\u4F5C\u4E3A\u7528\u6237\u63D0\u793A</td><td><em>Array&lt;(v: string | number) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u8BC4\u5206\u6539\u53D8\u65F6\u89E6\u53D1</td><td><code>value: string | number</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684css\u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider\u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--rate-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--rate-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--rate-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--rate-action-padding</code></td><td><code>4px</code></td></tr></tbody></table></div>`,18),p=[c];function r(o,d,h,j,i,g){return a(),t("div",e,p)}var q=s(n,[["render",r]]);export{q as default};
