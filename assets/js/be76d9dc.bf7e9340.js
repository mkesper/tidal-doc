"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8360],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),d=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return a?l.createElement(h,r(r({ref:t},u),{},{components:a})):l.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1837:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var l=a(3117),n=(a(7294),a(3905));const i={title:"Pulsar",permalink:"wiki/Pulsar/",layout:"wiki",id:"Pulsar"},r=void 0,o={unversionedId:"getting-started/editor/Pulsar",id:"getting-started/editor/Pulsar",title:"Pulsar",description:"----",source:"@site/docs/getting-started/editor/Pulsar.md",sourceDirName:"getting-started/editor",slug:"/getting-started/editor/Pulsar",permalink:"/docs/getting-started/editor/Pulsar",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/editor/Pulsar.md",tags:[],version:"current",lastUpdatedBy:"Pierre Krafft",lastUpdatedAt:1672231607,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{title:"Pulsar",permalink:"wiki/Pulsar/",layout:"wiki",id:"Pulsar"},sidebar:"docs",previous:{title:"Atom",permalink:"/docs/getting-started/editor/Atom"},next:{title:"Vim and Neovim",permalink:"/docs/getting-started/editor/Vim"}},s={},d=[{value:"Installation",id:"installation",level:2},{value:"Download &amp; start Pulsar",id:"download--start-pulsar",level:3},{value:"After install - fix file attributes (macOS)",id:"after-install---fix-file-attributes-macos",level:4},{value:"Manual install of Tidal package",id:"manual-install-of-tidal-package",level:3},{value:"Install the node.js modules",id:"install-the-nodejs-modules",level:3},{value:"Install nvm (node version manager - used to install and manage npm)",id:"install-nvm-node-version-manager---used-to-install-and-manage-npm",level:4},{value:"Install the tidalcycle node modules",id:"install-the-tidalcycle-node-modules",level:4},{value:"Validate results",id:"validate-results",level:4},{value:"Configure Pulsar",id:"configure-pulsar",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"More about the Tidalcycles Package",id:"more-about-the-tidalcycles-package",level:2},{value:"Forum discussion",id:"forum-discussion",level:3},{value:"GitHub repository",id:"github-repository",level:3}],u={toc:d};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"pulsaricon",src:a(9378).Z,width:"200",height:"200"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar-edit.dev/"},"Pulsar")," is a new code editor that is open-source and community-led. It is based on Atom and was started after the announcement to ",(0,n.kt)("a",{parentName:"p",href:"https://github.blog/2022-06-08-sunsetting-atom/"},"Sunset Atom"),". The ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar-edit.dev/about.html"},"stated goal"),' is to "modernize, update and improve the original Atom project into a contemporary, hackable and fully open editor." This includes support for the package repository which provides for community contributions, including our Tidal package.'),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"UPDATE - Dec 15,2022"),": ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pulsar-edit/pulsar/releases/tag/v1.100.0-beta"},"Pulsar v1.100.0")," is released (first tagged beta). See the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pulsar-edit/pulsar/blob/master/CHANGELOG.md"},"ChangeLog")," - including support for Apple Silicon. The new ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar-edit.dev/"},"Pulsar web site")," is also a good source of information, including downloads and documentation."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Known issues"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"macOS performance:")," this may be resolved by disabling the ",(0,n.kt)("inlineCode",{parentName:"li"},"github")," package"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"macOS dmg install:"),' Current binaries are not signed. Launching Pulsar will produce an error "Pulsar cannot be opened because the developer cannot be verified". This can be fixed by running:\n',(0,n.kt)("inlineCode",{parentName:"li"},"xattr -cr /Applications/Pulsar.app/"))),(0,n.kt)("p",null,"Other issues:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Auto-complete with default settings can be slower and more intrusive for livecoding. Possble workarounds:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"autocomplete-plus package:"),' increase "Delay Before Suggestions are Shown": to 100 or 1000.'),(0,n.kt)("li",{parentName:"ul"},"disable the autocomplete-plus package")))),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE for Atom Users"),": The timeline to have Pulsar ready with the Tidalcycles package automation is the end of 2022. Tidal users who have a working Atom editor configured with the Tidalcycles package can continue to use it. ",(0,n.kt)("em",{parentName:"p"},"However, the Atom package manager is no longer available to install or update the Tidal package and no further updates to Atom will be available.")," Tidal users are encouraged to migrate to Pulsar."),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Discord #pulsar channel"),": ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/channels/779427371270275082/1047429699346903132"},"https://discord.com/channels/779427371270275082/1047429699346903132")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Installation of the Tidalcycles Pulsar package is not currently automated. This improvement is expected soon. Check here for updates. Proceed with manual install only if you are comfortable with package installs, using git, troubleshooting, etc."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MacOS: see below"),(0,n.kt)("li",{parentName:"ul"},"Linux: the manual instructions below should generally apply to Linux. Be sure to get the correct Pulsar download for your flavor."),(0,n.kt)("li",{parentName:"ul"},"Linux with automated install: the Ansible install for a complete Tidal environment now includes Pulsar.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cleary/ansible-tidalcycles"},"Installation of tidalcycles and editor(s) with ansible")))),(0,n.kt)("li",{parentName:"ul"},"Windows (documentation coming)")),(0,n.kt)("h3",{id:"download--start-pulsar"},"Download & start Pulsar"),(0,n.kt)("p",null,"There are two ways to download:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Pulsar ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar-edit.dev/download.html"},"download page"),"."),(0,n.kt)("li",{parentName:"ol"},"Pulsar download link + add your specific query parameters:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://web.pulsar-edit.dev/download"},"https://web.pulsar-edit.dev/download")," (need to add query string)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pulsar-edit/package-frontend/blob/main/docs/download_links.md"},"https://github.com/pulsar-edit/package-frontend/blob/main/docs/download_links.md")," instructions on building your URL query string."),(0,n.kt)("li",{parentName:"ul"},"For example: ",(0,n.kt)("a",{parentName:"li",href:"https://web.pulsar-edit.dev/download?os=intel_mac&type=mac_dmg"},"https://web.pulsar-edit.dev/download?os=intel_mac&type=mac_dmg"))))),(0,n.kt)("h4",{id:"after-install---fix-file-attributes-macos"},"After install - fix file attributes (macOS)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"> xattr -cr /Applications/Pulsar.app/\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Start Pulsar")," This will create a hidden folder in your home directory ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.pulsar"),"."),(0,n.kt)("h3",{id:"manual-install-of-tidal-package"},"Manual install of Tidal package"),(0,n.kt)("p",null,"There is a community package for Tidal to be manually installed: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/atom-tidalcycles"},"atom-tidalcycles on github")),(0,n.kt)("p",null,"From a command line using ",(0,n.kt)("inlineCode",{parentName:"p"},"git"),": (make sure you have launched the Pulsar application)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"> cd ~/.pulsar/packages\n> git clone https://github.com/tidalcycles/atom-tidalcycles tidalcycles\n")),(0,n.kt)("p",null,"This will install the tidalcycles package into a directory named ",(0,n.kt)("inlineCode",{parentName:"p"},"tidalcycles"),"."),(0,n.kt)("h3",{id:"install-the-nodejs-modules"},"Install the node.js modules"),(0,n.kt)("p",null,"Pre-requisite: npm (node package manager)"),(0,n.kt)("h4",{id:"install-nvm-node-version-manager---used-to-install-and-manage-npm"},"Install nvm (node version manager - used to install and manage npm)"),(0,n.kt)("p",null,"If npm is installed, you can skip these steps and go to Install the tidalcycles node modules."),(0,n.kt)("p",null,"The recommended method to install npm is via the node version manager."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"NPM Docs")," for options and instructions."),(0,n.kt)("li",{parentName:"ul"},"Or go directly to the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm install script")," in GH. It has lots of detail, troubleshooting, and support for different OS, etc. See the section on Installing and Updating. The ",(0,n.kt)("inlineCode",{parentName:"li"},"curl")," option is good.  "),(0,n.kt)("li",{parentName:"ul"},"The nvm install script will add lines to your shell profile (.bash_profile, ~/.zshrc, ~/.bashrc etc). This can result in a short delay when starting the shell."),(0,n.kt)("li",{parentName:"ul"},"run ",(0,n.kt)("inlineCode",{parentName:"li"},"command -v nvm")," to verify nvm install - expected output ",(0,n.kt)("inlineCode",{parentName:"li"},"nvm"),"."),(0,n.kt)("li",{parentName:"ul"},"now use nvm to install npm:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"> nvm install node\n")),(0,n.kt)("h4",{id:"install-the-tidalcycle-node-modules"},"Install the tidalcycle node modules"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"> cd ~/.pulsar/packages/tidalcycles\n[userHome]/.pulsar/packages/tidalcycles > npm install\n")),(0,n.kt)("h4",{id:"validate-results"},"Validate results"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The node modules directory should now be present: ",(0,n.kt)("inlineCode",{parentName:"li"},"~/.pulsar/packages/tidalcycles/node_modules/")),(0,n.kt)("li",{parentName:"ul"},"There should be three sub-directories: ",(0,n.kt)("inlineCode",{parentName:"li"},"binpack")," ",(0,n.kt)("inlineCode",{parentName:"li"},"directory-tree")," ",(0,n.kt)("inlineCode",{parentName:"li"},"osc-min")),(0,n.kt)("li",{parentName:"ul"},"Restart the Pulsar app."),(0,n.kt)("li",{parentName:"ul"},"Create a Tidal file (file extension *.tidal) and run a command. See the ",(0,n.kt)("a",{parentName:"li",href:"https://tidalcycles.org/docs/getting-started/tidal_start"},"Start Tidal page")," for more instructions if you are new to Tidal.")),(0,n.kt)("h3",{id:"configure-pulsar"},"Configure Pulsar"),(0,n.kt)("p",null,"Pulsar works just like Atom. To configure and change preferences:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main menu: Pulsar > Preferences  (will load the Settings tab)"),(0,n.kt)("li",{parentName:"ul"},"Select: Packages > Community Packages > tidalcycles > Settings"),(0,n.kt)("li",{parentName:"ul"},"optional: Set your Sound Browser Folders - if you add the full path to your SuperCollider - Dirt-Samples, then you can easily browse and play these from Pulsar once you start tidal."),(0,n.kt)("li",{parentName:"ul"},"MacOS (optional): disable the GitHub package. There is a known performance issue on MacOS. See ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar-edit.dev/"},"https://pulsar-edit.dev/"))),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Potential errors:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Couldn't find module:  'Sound.Tidal.Context'"),"  This indicates that Pulsar could not load tidal properly."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Variable not in scope: streamSetCycle"),'  Your "BootTidal.hs" file is not compatible. There is an easy fix by commenting out this line: ',(0,n.kt)("inlineCode",{parentName:"li"},"-- setCycle = streamSetCycle tidal"))),(0,n.kt)("h2",{id:"more-about-the-tidalcycles-package"},"More about the Tidalcycles Package"),(0,n.kt)("h3",{id:"forum-discussion"},"Forum discussion"),(0,n.kt)("p",null,"The Tidal Package for Atom is developed by ",(0,n.kt)("inlineCode",{parentName:"p"},"ndr_brt")," - who is also working on preparing this for use in the new Pulsar package manager. There is a ",(0,n.kt)("a",{parentName:"p",href:"https://club.tidalcycles.org/t/the-atom-plugin-thread/2244"},"Tidal Club forum thread")," with more information and history of the development."),(0,n.kt)("h3",{id:"github-repository"},"GitHub repository"),(0,n.kt)("p",null,"There is a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/atom-tidalcycles"},"GitHub repository")," if you want to contribute, report an issue or follow the development."))}p.isMDXComponent=!0},9378:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/pulsaricon-180f9ce007553b403b723e7f049ba57d.png"}}]);