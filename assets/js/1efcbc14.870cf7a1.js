"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?i.createElement(g,o(o({ref:t},d),{},{components:n})):i.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(3117),a=(n(7294),n(3905));const r={title:"Sublime Text",permalink:"wiki/Sublime_Text/",layout:"wiki"},o=void 0,l={unversionedId:"getting-started/editor/Sublime_Text",id:"getting-started/editor/Sublime_Text",title:"Sublime Text",description:"----",source:"@site/docs/getting-started/editor/Sublime_Text.md",sourceDirName:"getting-started/editor",slug:"/getting-started/editor/Sublime_Text",permalink:"/docs/getting-started/editor/Sublime_Text",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/editor/Sublime_Text.md",tags:[],version:"current",lastUpdatedBy:"Pierre Krafft",lastUpdatedAt:1672231607,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{title:"Sublime Text",permalink:"wiki/Sublime_Text/",layout:"wiki"},sidebar:"docs",previous:{title:"VS Code",permalink:"/docs/getting-started/editor/VS_Code"},next:{title:"Multi-User Tidal",permalink:"/docs/configuration/multiuser-tidal"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration for Tidal",id:"configuration-for-tidal",level:2},{value:"Legacy version",id:"legacy-version",level:3}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sublimelogo",src:n(2002).Z,width:"255",height:"255"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sublime Text")," is a popular cross-platform text editor. It is closed source and costs $70 USD. You can still use Sublime Text without buying it but be ready to deal with an ominous pop-up window that remind you to buy it every few minutes. Sublime Text is very lightweight and highly configurable."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"The installation process should be easy on every major operating system. Head to the ",(0,a.kt)("a",{parentName:"p",href:"https://sublimetext.com"},"official website")," to download/install it."),(0,a.kt)("h2",{id:"configuration-for-tidal"},"Configuration for Tidal"),(0,a.kt)("p",null,"To do live coding in ",(0,a.kt)("strong",{parentName:"p"},"Sublime Text"),", you need to install the package ",(0,a.kt)("strong",{parentName:"p"},"Sublime REPL")," via ",(0,a.kt)("em",{parentName:"p"},"Package Control"),". To avoid fiddling with the existing ",(0,a.kt)("strong",{parentName:"p"},"Haskell REPL")," supplied by ",(0,a.kt)("strong",{parentName:"p"},"Sublime REPL"),", simply clone this modified version of it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd\xa0~/Library/Application\xa0Support/Sublime\xa0Text\xa03/Packages/SublimeREPL/config\ngit\xa0clone\xa0https://gist.github.com/lvm/e0943b0d42507af60eee174ed263adde\xa0Tidal\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The boot up code used by the ",(0,a.kt)("strong",{parentName:"p"},"Sublime REPL")," is currently broken. A simple fix is to copy and paste the code from\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/Tidal/blob/main/BootTidal.hs"},"this link")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"\\~/Library/Application Support/Sublime Text\n3/Packages/SublimeREPL/config/Tidal/ghci-tidal.conf")," replacing whatever was already there.")),(0,a.kt)("h3",{id:"legacy-version"},"Legacy version"),(0,a.kt)("p",null,"If you are using classic ",(0,a.kt)("strong",{parentName:"p"},"Dirt")," rather than the new ",(0,a.kt)("strong",{parentName:"p"},"SuperDirt"),", an older version of the config can be used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd\xa0~/Library/Application\xa0Support/Sublime\xa0Text\xa03/Packages/SublimeREPL/config\ngit\xa0clone\xa0https://gist.github.com/lennart/8b811cd4f568f7d7100e\xa0Tidal\n")),(0,a.kt)("p",null,"This way, ",(0,a.kt)("inlineCode",{parentName:"p"},"Cmd+Shift+P -> \u201cSublime REPL: Tidal\u201d")," will load up a ",(0,a.kt)("inlineCode",{parentName:"p"},"ghci")," instance that loads Tidal, binds Dirt channels and adds macros for ",(0,a.kt)("inlineCode",{parentName:"p"},"hush")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"cps"),"."),(0,a.kt)("p",null,"Splitting windows beforehand (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"Cmd+Alt+Shift+2")," for two row layout) will load the REPL into the other splitscreen, so you can code in one and evaluate into the other. Code by line evaluation is mapped to ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+l")," by default but this can be customized to what you prefer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\xa0"keys":\xa0["shift+enter"],\n  \xa0"command":\xa0"repl_transfer_current",\n\xa0  "args":\xa0{"scope":\xa0"lines"}\xa0}\n')),(0,a.kt)("p",null,"If you get the error Cannot find REPL for ",(0,a.kt)("inlineCode",{parentName:"p"},"plain"),", try renaming your file to ",(0,a.kt)("inlineCode",{parentName:"p"},".hs")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},".tidal"),", since we are using a modified version of a Haskell REPL.\nOf course you have to make sure dirt is already running when you can hear any sound."))}u.isMDXComponent=!0},2002:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sublimelogo-fc5a90d19b089bca8812493ba11793d9.png"}}]);