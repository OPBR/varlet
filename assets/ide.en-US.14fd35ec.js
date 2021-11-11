import{_ as e}from"./elevation.7f6c0241.js";import{o as t,c as o,L as s}from"./vendor.ea41cd30.js";const i={components:{}},r={class:"varlet-site-doc"},n=s(`<h1>IDE Code Support</h1><div class="card"><h3>Intro</h3><p>The component library provides the ability to highlight the component syntax for <code>webstorm</code> and <code>vscode</code>. the <code>Syntax highlight</code>,<code>Code completion</code>,<code>Documentation popup</code>, can be obtained through plugins and Settings. The component library provides a separate helper plugin for <code>vscode</code>, which can be downloaded from the extension market</p></div><div class="card"><h3>Webstorm</h3><p>Open the library properties documentation by setting \u2018editor-&gt; general-&gt; Code Completion-&gt;Show the documentation popup in ___ ms\u2019.</p><img style="width:100%;margin-top:10px;border-radius:5px;" src="https://varlet.gitee.io/varlet-ui/hl_wb_setting.png" alt="webstorm setting"><img style="width:100%;margin-top:10px;border-radius:5px;" src="https://varlet.gitee.io/varlet-ui/hl_wb.jpg" alt="webstorm highlight"></div><div class="card"><h3>VSCode</h3><p>Install the <code>Volar</code> plugin and configure <code>ts.config.json</code> as follows to get type hints in the template.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">{
  <span class="hljs-attr">&quot;compilerOptions&quot;</span>: {
    <span class="hljs-attr">&quot;types&quot;</span>: [<span class="hljs-string">&quot;@varlet/ui/types/global&quot;</span>]
  }
}
</code></pre><img style="width:100%;margin-top:10px;border-radius:5px;" src="https://varlet.gitee.io/varlet-ui/hl_vsc_setting.png" alt="vscode setting"><img style="width:100%;margin-top:10px;border-radius:5px;" src="https://varlet.gitee.io/varlet-ui/hl_vsc.png" alt="vscode highlight"></div><div class="card"><h3>VSCode Extension</h3><p>Search the <code>varlet-vscode-extension</code> installation in the <code>vscode</code> plugin market. When you hover over the component name, you can go directly to the component\u2019s document address via a link</p><img style="width:50%;margin-top:10px;border-radius:5px;" src="https://varlet.gitee.io/varlet-ui/ext_vsc.png" alt="vscode ext"><img style="width:78%;margin-top:10px;border-radius:5px;" src="https://varlet.gitee.io/varlet-ui/ext_vsc_link.png" alt="vscode ext link"></div>`,5),a=[n];function c(d,p,l,h,g,v){return t(),o("div",r,a)}var _=e(i,[["render",c]]);export{_ as default};
