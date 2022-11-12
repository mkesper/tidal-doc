(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(208)),s={title:"Controls",id:"controls"},c={unversionedId:"reference/controls",id:"reference/controls",isDocsHomePage:!1,title:"Controls",description:"Control functions are used to turn patterns of strings (words) or numbers into control patterns. What is a control pattern you might say? A control pattern is a pattern that will govern how samples are playing in the SuperDirt audio synth (or other software you are using to control Tidal). This includes audio control functions such as gain and pan, sample manipulation functions such as begin and end, and effect functions such as delay and shape.",source:"@site/docs/reference/controls.md",slug:"/reference/controls",permalink:"/docs/reference/controls",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/controls.md",version:"current",lastUpdatedBy:"Joan Queralt",lastUpdatedAt:1668247055,sidebar:"reference",previous:{title:"Audio effects",permalink:"/docs/reference/audio_effects"},next:{title:"Tempo",permalink:"/docs/reference/tempo"}},i=[{value:"Controls patterns are patterns",id:"controls-patterns-are-patterns",children:[]},{value:"Control synthesizers",id:"control-synthesizers",children:[]},{value:"Control effects",id:"control-effects",children:[]},{value:"Combine everything",id:"combine-everything",children:[]},{value:"Learn more about control patterns",id:"learn-more-about-control-patterns",children:[]}],l={toc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Control functions are used to turn patterns of strings (words) or numbers into control patterns. What is a control pattern you might say? A control pattern is a pattern that will govern how samples are playing in the ",Object(a.b)("strong",{parentName:"p"},"SuperDirt")," audio synth (or other software you are using to control ",Object(a.b)("strong",{parentName:"p"},"Tidal"),"). This includes audio control functions such as ",Object(a.b)("inlineCode",{parentName:"p"},"gain")," and ",Object(a.b)("inlineCode",{parentName:"p"},"pan"),", sample manipulation functions such as ",Object(a.b)("inlineCode",{parentName:"p"},"begin")," and ",Object(a.b)("inlineCode",{parentName:"p"},"end"),", and effect functions such as ",Object(a.b)("inlineCode",{parentName:"p"},"delay")," and ",Object(a.b)("inlineCode",{parentName:"p"},"shape"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"TLDR"),": Control functions are functions that are used to shape the sounds your patterns make (effects, parameters)."),Object(a.b)("h2",{id:"controls-patterns-are-patterns"},"Controls patterns are patterns"),Object(a.b)("p",null,"Every parameter is patternable! Everything is patternable."),Object(a.b)("h2",{id:"control-synthesizers"},"Control synthesizers"),Object(a.b)("p",null,"The default synthesizers, or any ",Object(a.b)("strong",{parentName:"p"},"SuperDirt")," synthesizer can be activated using the ",Object(a.b)("inlineCode",{parentName:"p"},"sound")," control pattern. For instance, this pattern will alternate between multiple synths over the same melody:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0note "c d e f g a"\n   # sound "<superpiano supersquare supersaw>"\n')),Object(a.b)("h2",{id:"control-effects"},"Control effects"),Object(a.b)("p",null,"Most of the time, you will use control patterns to use effects on your patterns. For instance, this drum pattern will be filtered:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0s "bd hh bd hh*2"\n  # lpf "500 1000 1500"\n  # lpq 0.5\n')),Object(a.b)("h2",{id:"combine-everything"},"Combine everything"),Object(a.b)("p",null,"You can easily combine the last two examples to get a filtered melody playing every three instruments rotating for each note:  "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},'d1 $ note "c d e f g a"\n   # sound "<superpiano supersquare supersaw>"\n   # lpf "500 1000 1500"\n   # lpq 0.5\n')),Object(a.b)("h2",{id:"learn-more-about-control-patterns"},"Learn more about control patterns"),Object(a.b)("p",null,"Look at the sidebar. The ",Object(a.b)("inlineCode",{parentName:"p"},"Synthesizers")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Audio effects")," page will give you a list of all the existing controls you can use on the ",Object(a.b)("em",{parentName:"p"},"vanilla")," version of ",Object(a.b)("strong",{parentName:"p"},"Tidal"),"."))}p.isMDXComponent=!0},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(s,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);