import{_ as s}from"./elevation.7f6c0241.js";import{o as a,c as t,L as n}from"./vendor.ea41cd30.js";const l={components:{}},e={class:"varlet-site-doc"},c=n(`<h1>Button</h1><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Button)
</code></pre></div><div class="card"><h3>Theme Color Button</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>Default Button<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Primary Button<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Info Button<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Success Button<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Warning Button<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Danger Button<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre></div><div class="card"><h3>Text Button</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">text</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Outline Button<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">text</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Plain Text Button<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre></div><div class="card"><h3>Disabled Status</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled Status<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">text</span> <span class="hljs-attr">outline</span>&gt;</span>Disabled Status<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">text</span>&gt;</span>Disabled Status<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre></div><div class="card"><h3>Loading Status</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>
  Loading Status
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">loading-type</span>=<span class="hljs-string">&quot;rect&quot;</span>&gt;</span>
  Loading Status
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">loading-type</span>=<span class="hljs-string">&quot;disappear&quot;</span>&gt;</span>
  Loading Status
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">loading-type</span>=<span class="hljs-string">&quot;cube&quot;</span>&gt;</span>
  Loading Status
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">loading-type</span>=<span class="hljs-string">&quot;wave&quot;</span>&gt;</span>
  Loading Status
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre></div><div class="card"><h3>Button Size</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Normal Button<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>Small Button<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>Mini Button<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>Large Button<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre></div><div class="card"><h3>Block Button</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Block Button<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre></div><div class="card"><h3>Custom Color</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#e91e63&quot;</span> <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>&gt;</span>Background/Text Color<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;linear-gradient(to right, #69dbaa, #3a7afe)&quot;</span>
  <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>
&gt;</span>
  Linear Gradient Color
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre></div><div class="card"><h3>Round Button</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">round</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;plus&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">round</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;information&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">round</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;check&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">round</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;warning&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">round</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;window-close&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre></div><div class="card"><h3>Events</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleClick&quot;</span>&gt;</span>Click<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> @<span class="hljs-attr">touchstart</span>=<span class="hljs-string">&quot;handleTouchstart&quot;</span>&gt;</span>Touchstart<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> {
      Snackbar.success(<span class="hljs-string">&#39;Click Success&#39;</span>)
    }

    <span class="hljs-keyword">const</span> handleTouchstart = <span class="hljs-function">() =&gt;</span> {
      Snackbar.success(<span class="hljs-string">&#39;Touchstart Success&#39;</span>)
    }

    <span class="hljs-keyword">return</span> {
      handleClick,
      handleTouchstart
    }
  }
}
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>type</code></td><td>Button type, Can be set to <code>default</code> <code>primary</code> <code>info</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>size</code></td><td>Button size, Can be set to <code>normal</code> <code>mini</code> <code>small</code> <code>large</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>loading</code></td><td>Loading status</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loading-radius</code></td><td>Loading radius, Can only be used when <code>loading-type=&quot;circle&quot;</code></td><td><em>string | number</em></td><td><code>12</code></td></tr><tr><td><code>loading-type</code></td><td>Loading type, Can be set to <code>circle</code> <code>wave</code> <code>cube</code> <code>rect</code> <code>disappear</code></td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loading-size</code></td><td>Loading size, Can be set to <code>large</code> <code>normal</code> <code>small</code> <code>mini</code> don\u2019t work on <code>loading-type=&quot;circle&quot;</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>round</code></td><td>Whether to be round button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>block</code></td><td>Whether to be block button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>text</code></td><td>Whether to be text button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>outline</code></td><td>Whether to be outline button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to be ripple button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>Button Text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>Button background color</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when the button is clicked. Not triggered when <code>loading</code> or <code>disabled</code> status is <code>true</code></td><td><code>event: Event</code></td></tr><tr><td><code>touchstart</code></td><td>Triggered when the button is touchstart, Not triggered when <code>loading</code> or <code>disabled</code> status is <code>true</code></td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Button content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--button-default-color</code></td><td><code>#f5f5f5</code></td></tr><tr><td><code>--button-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--button-danger-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--button-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--button-warning-color</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--button-info-color</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--button-disabled-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--button-disabled-text-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--button-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--button-mini-padding</code></td><td><code>0 9px</code></td></tr><tr><td><code>--button-small-padding</code></td><td><code>0 11px</code></td></tr><tr><td><code>--button-normal-padding</code></td><td><code>0 15px</code></td></tr><tr><td><code>--button-large-padding</code></td><td><code>0 22px</code></td></tr><tr><td><code>--button-round-padding</code></td><td><code>6px</code></td></tr><tr><td><code>--button-mini-height</code></td><td><code>20px</code></td></tr><tr><td><code>--button-small-height</code></td><td><code>28px</code></td></tr><tr><td><code>--button-normal-height</code></td><td><code>36px</code></td></tr><tr><td><code>--button-large-height</code></td><td><code>44px</code></td></tr></tbody></table></div>`,16),o=[c];function p(d,r,h,i,u,g){return a(),t("div",e,o)}var m=s(l,[["render",p]]);export{m as default};
