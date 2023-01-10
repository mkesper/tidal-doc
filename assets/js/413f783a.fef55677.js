"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8788],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(3117),o=(n(7294),n(3905));const a={title:"Controls",id:"controls"},s=void 0,l={unversionedId:"reference/controls",id:"reference/controls",title:"Controls",description:"Control functions are used to turn patterns of strings (words) or numbers into control patterns. What is a control pattern you might say? A control pattern is a pattern that will govern how samples are playing in the SuperDirt audio synth (or other software you are using to control Tidal). This includes audio control functions such as gain and pan, sample manipulation functions such as begin and end, and effect functions such as delay and shape.",source:"@site/docs/reference/controls.md",sourceDirName:"reference",slug:"/reference/controls",permalink:"/docs/reference/controls",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/controls.md",tags:[],version:"current",lastUpdatedBy:"Bernard Gray",lastUpdatedAt:1673343e3,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{title:"Controls",id:"controls"},sidebar:"reference",previous:{title:"Audio effects",permalink:"/docs/reference/audio_effects"},next:{title:"Tempo",permalink:"/docs/reference/tempo"}},i={},p=[{value:"Controls patterns are patterns",id:"controls-patterns-are-patterns",level:2},{value:"Control synthesizers",id:"control-synthesizers",level:2},{value:"Control effects",id:"control-effects",level:2},{value:"Combine everything",id:"combine-everything",level:2},{value:"Learn more about control patterns",id:"learn-more-about-control-patterns",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Control functions are used to turn patterns of strings (words) or numbers into control patterns. What is a control pattern you might say? A control pattern is a pattern that will govern how samples are playing in the ",(0,o.kt)("strong",{parentName:"p"},"SuperDirt")," audio synth (or other software you are using to control ",(0,o.kt)("strong",{parentName:"p"},"Tidal"),"). This includes audio control functions such as ",(0,o.kt)("inlineCode",{parentName:"p"},"gain")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pan"),", sample manipulation functions such as ",(0,o.kt)("inlineCode",{parentName:"p"},"begin")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"end"),", and effect functions such as ",(0,o.kt)("inlineCode",{parentName:"p"},"delay")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"shape"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TLDR"),": Control functions are functions that are used to shape the sounds your patterns make (effects, parameters)."),(0,o.kt)("h2",{id:"controls-patterns-are-patterns"},"Controls patterns are patterns"),(0,o.kt)("p",null,"Every parameter is patternable! Everything is patternable."),(0,o.kt)("h2",{id:"control-synthesizers"},"Control synthesizers"),(0,o.kt)("p",null,"The default synthesizers, or any ",(0,o.kt)("strong",{parentName:"p"},"SuperDirt")," synthesizer can be activated using the ",(0,o.kt)("inlineCode",{parentName:"p"},"sound")," control pattern. For instance, this pattern will alternate between multiple synths over the same melody:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0note "c d e f g a"\n   # sound "<superpiano supersquare supersaw>"\n')),(0,o.kt)("h2",{id:"control-effects"},"Control effects"),(0,o.kt)("p",null,"Most of the time, you will use control patterns to use effects on your patterns. For instance, this drum pattern will be filtered:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0s "bd hh bd hh*2"\n  # lpf "500 1000 1500"\n  # lpq 0.5\n')),(0,o.kt)("h2",{id:"combine-everything"},"Combine everything"),(0,o.kt)("p",null,"You can easily combine the last two examples to get a filtered melody playing every three instruments rotating for each note:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'d1 $ note "c d e f g a"\n   # sound "<superpiano supersquare supersaw>"\n   # lpf "500 1000 1500"\n   # lpq 0.5\n')),(0,o.kt)("h2",{id:"learn-more-about-control-patterns"},"Learn more about control patterns"),(0,o.kt)("p",null,"Look at the sidebar. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Synthesizers")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Audio effects")," page will give you a list of all the existing controls you can use on the ",(0,o.kt)("em",{parentName:"p"},"vanilla")," version of ",(0,o.kt)("strong",{parentName:"p"},"Tidal"),"."))}u.isMDXComponent=!0}}]);