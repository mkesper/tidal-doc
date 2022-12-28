"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7940],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(3117),a=(r(7294),r(3905));const i={title:"Friends and relations",permalink:"wiki/Friends_and_relations/",layout:"wiki"},l=void 0,o={unversionedId:"resource/Friends_and_relations",id:"resource/Friends_and_relations",title:"Friends and relations",description:"Starting a list of projects connected with TidalCycles - ones that",source:"@site/docs/resource/Friends_and_relations.md",sourceDirName:"resource",slug:"/resource/Friends_and_relations",permalink:"/docs/resource/Friends_and_relations",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/resource/Friends_and_relations.md",tags:[],version:"current",lastUpdatedBy:"Pierre Krafft",lastUpdatedAt:1672231607,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{title:"Friends and relations",permalink:"wiki/Friends_and_relations/",layout:"wiki"},sidebar:"community",previous:{title:"Community",permalink:"/docs/resource/Community"},next:{title:"Contributing tests",permalink:"/docs/resource/Contributing_tests"}},s={},p=[{value:"Editor plugins",id:"editor-plugins",level:2},{value:"SuperCollider (or SuperDirt) add-ons",id:"supercollider-or-superdirt-add-ons",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Starting a list of projects connected with TidalCycles - ones that\ninterface with/inspired/are inspired by tidal."),(0,a.kt)("p",null,"(For a long list of ","_","all","_"," the live coding environments, see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/toplap/awesome-livecoding"},"all\nthings livecoding")," list.)"),(0,a.kt)("h1",{id:"ports-and-parsers"},"Ports and parsers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/dktr0/estuary"},"Estuary"),' is a platform for\ncollaboration and learning through live coding, hosting a range of\nenvironments in a web-browser, including "minitidal", a parser for\ntidal')),(0,a.kt)("h1",{id:"editors"},"Editors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/dktr0/extramuros"},"Extramuros"),", a\nlanguage-neutral shared-buffer networked live coding system in the\nbrowser (precursor of Estuary)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/yaxu/feedforward"},"Feedforward"),", a strange\nterminal-based editor in development"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cannc4/Siren"},"Siren")," - a tracker interface for\nTidalCycles and SuperCollider"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/qirky/troop"},"Troop"),", a real-time collaborative\ntool that enables group live coding within the same document across\nmultiple computers. Works with a range of live coding languages,\nincluding Tidal")),(0,a.kt)("h2",{id:"editor-plugins"},"Editor plugins"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tidalcycles/Tidal/blob/master/tidal.el"},"Emacs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tidalcycles.org/index.php/Sublime_Text"},"Sublime text")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/supercollider/scvim"},"vim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tidalcycles/vscode-tidalcycles"},"VS Code"))),(0,a.kt)("h1",{id:"synths-and-samplers"},"Synths and samplers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tidalcycles/dirt"},"Dirt")," - the original 'classic'\ndirt, implemented in c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/musikinformatik/SuperDirt/"},"SuperDirt")," - the\nSuperCollider rewrite, recommended for general use (unless running\nin a web browser)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/dktr0/WebDirt"},"webdirt")," - the javascript\nrewrite, part of estuary")),(0,a.kt)("h2",{id:"supercollider-or-superdirt-add-ons"},"SuperCollider (or SuperDirt) add-ons"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/calumgunn/StageMaster"},"StageMaster")," - light\nmastering chain for use during live performance in SuperCollider")),(0,a.kt)("h1",{id:"visual-systems"},"Visual systems"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ivan-abreu/didacticpatternvisualizer"},"Didactic pattern\nvisualizer")," -\nSound pattern visualizer programmed in Processing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Dsm0/p5jsDirt/"},"p5jsDirt")," - integration with\np5.js")),(0,a.kt)("h1",{id:"syncing--interfacing"},"Syncing / interfacing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Deep-Symmetry/carabiner"},"Carabiner"),", for\nbridging with the Link protocol"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/dktr0/espgrid"},"ESPGrid"),", synchronisation\ndesigned for live coding environments including supercollider,\nfoxdot as well as tidal"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@vliegwerk/tidal"},"Node.js interface"),"\nfor sending messages between javascript and tidal")),(0,a.kt)("h1",{id:"tidal-inspired-systems"},"Tidal-inspired systems"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Mdashdotdashn/krill"},"Krill")," - a javascript-based\nlive coding environment inspired by tidal"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gibber-cc/tidal.pegjs"},"tidal.pegjs")," - is a\nparsing expression grammar for the TidalCycles mini-notation,\nwritten using PEG.js. The goal of the PEG is to easily translate\nstrings of Tidal-style mini notation into annotated JavaScript data\nstructures for use in sequencing. Works with\n",(0,a.kt)("a",{parentName:"li",href:"http://gibber.cc/"},"Gibber")," and\n",(0,a.kt)("a",{parentName:"li",href:"https://hydra-editor.glitch.me/"},"Hydra"),"!")),(0,a.kt)("h1",{id:"systems-that-inspired-tidal"},"Systems that inspired Tidal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://bolprocessor.sourceforge.net/"},"Bol processor")," - algorithmic\nmusic system based on compositional grammars, grown from research\ninto symbolic notation of tabla rhythms"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.euterpea.com/"},"Euterpea")," is a cross-platform,\ndomain-specific language for computer music applications embedded in\nthe Haskell programming language"),(0,a.kt)("li",{parentName:"ul"},"Douglas Repetto's beat rotation experiments, e.g. rotcomposer in\n",(0,a.kt)("a",{parentName:"li",href:"http://www.meapsoft.com/showcase.php"},"MEAPsoft"))))}d.isMDXComponent=!0}}]);