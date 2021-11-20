import{_ as s}from"./elevation.548891b7.js";import{o as a,c as t,K as n}from"./vendor.8a125dba.js";const l={components:{}},e={class:"varlet-site-doc"},p=n(`<h1>Space</h1><div class="card"><h3>Intro</h3><p>The component library provides two auxiliary layout components, <code>&lt;var-space&gt;</code>, so that you can do flex layout more efficiently.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Space } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Space)
</code></pre></div><div class="card"><h3>Basic use</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-space</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Button1<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Button2<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Button3<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-space</span>&gt;</span>
</code></pre></div><div class="card"><h3>Vertical</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-space</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;column&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Button1<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Button2<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Button3<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-space</span>&gt;</span>
</code></pre></div><div class="card"><h3>Space Between</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-space</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;[&#39;30px&#39;,&#39;10px&#39;]&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Button1<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Button2<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Button3<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-space</span>&gt;</span>
</code></pre></div><div class="card"><h3>Right Align</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-space</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;end&quot;</span> &gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Button1<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Button2<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-space</span>&gt;</span>
</code></pre></div><div class="card"><h3>Space Around</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-space</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;space-around&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Button1<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Button2<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-space</span>&gt;</span>
</code></pre></div><div class="card"><h3>Align Center</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-space</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Button1<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Button2<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-space</span>&gt;</span>
</code></pre></div><div class="card"><h3>Space Between</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-space</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;space-between&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Button1<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Button2<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-space</span>&gt;</span>
</code></pre></div><h2>API</h2><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>align</code></td><td>Vertical arrangement, Can be set to <code>stretch</code> <code>center</code> <code>start</code> <code>end</code> <code>baseline</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>justify</code></td><td>Horizontal arrangement, Can be set to <code>start</code> <code>end</code> <code>center</code> <code>space-around</code> <code>space-between</code></td><td><em>string</em></td><td><code>start</code></td></tr><tr><td><code>size</code></td><td>spacing, Can be set to <code>mini</code> <code>small</code> <code>normal</code> <code>large</code> or <code>[Vertical, Horizontal]</code>(Support length unit)</td><td><em>string</em> |<em>number</em> | <em>[string | number, string | number]</em></td><td><code>normal</code></td></tr><tr><td><code>wrap</code></td><td>Whether to exceed the line break</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>direction</code></td><td>Layout direction, Can be set to <code>row</code> <code>column</code></td><td><em>string</em></td><td><code>row</code></td></tr><tr><td><code>inline</code></td><td>Is it an inline element</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>`,12),c=[p];function o(h,r,d,g,j,i){return a(),t("div",e,c)}var v=s(l,[["render",o]]);export{v as default};
