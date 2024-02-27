"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5609],{21304:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=t(85893),r=t(11151);t(74866),t(85162),t(77229);const s={id:"what-is",title:"What is Chain Abstraction?"},i=void 0,o={id:"abstraction/what-is",title:"What is Chain Abstraction?",description:"The idea behind chain abstraction is quite simple: blockchain technology should be abstracted away from the user experience. In other words, people should not realize when they are using a blockchain, nor which blockchain they are using.",source:"@site/../docs/8.abstraction/what-is.md",sourceDirName:"8.abstraction",slug:"/abstraction/what-is",permalink:"/zh-CN/abstraction/what-is",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/8.abstraction/what-is.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1708712355,formattedLastUpdatedAt:"2024\u5e742\u670823\u65e5",frontMatter:{id:"what-is",title:"What is Chain Abstraction?"},sidebar:"build",previous:{title:"Home",permalink:"/zh-CN/develop/welcome"},next:{title:"Building a Relayer",permalink:"/zh-CN/develop/relayers/build-relayer"}},l={},u=[{value:"Fast-Auth: Email onboarding",id:"fast-auth-email-onboarding",level:2},{value:"Relayers: Cover gas fees",id:"relayers-cover-gas-fees",level:2},{value:"Multi-chain signatures: One account, multiple chains",id:"multi-chain-signatures-one-account-multiple-chains",level:2}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",hr:"hr",img:"img",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The idea behind ",(0,a.jsx)(n.code,{children:"chain abstraction"})," is quite simple: ",(0,a.jsx)(n.strong,{children:"blockchain"})," technology should be ",(0,a.jsx)(n.strong,{children:"abstracted away"})," from the user experience. In other words, people should ",(0,a.jsx)(n.strong,{children:"not realize"})," when they are ",(0,a.jsx)(n.strong,{children:"using a blockchain"}),", nor ",(0,a.jsx)(n.strong,{children:"which blockchain"})," they are using."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"img",src:t(63325).Z+"",width:"1282",height:"470"})}),"\n",(0,a.jsxs)(n.p,{children:["To help on this task, NEAR Protocol provides services that allow to ",(0,a.jsx)(n.strong,{children:"create"})," and ",(0,a.jsx)(n.strong,{children:"recover accounts"})," using ",(0,a.jsx)(n.strong,{children:"email addresses"}),", use the account ",(0,a.jsx)(n.strong,{children:"without acquiring funds"}),", and ",(0,a.jsx)(n.strong,{children:"control accounts"})," in ",(0,a.jsx)(n.strong,{children:"other chains"}),". All in the most ",(0,a.jsx)(n.strong,{children:"seamless"})," way possible."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"fast-auth-email-onboarding",children:"Fast-Auth: Email onboarding"}),"\n",(0,a.jsx)(n.p,{children:"One of the first barriers that new users face when entering the world of Web3 is the need to create a crypto wallet. This generally implies the need to choose a wallet, create and store a recovery phrase, and obtain deposit funds to start using the account."}),"\n",(0,a.jsx)(n.p,{children:"With FastAuth, users only need to provide an email address to create a NEAR account. Using the same email address the user will be able to use their account across applications and devices."}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"FastAuth accounts are kept safe through multi-party computation (MPC) on a decentralized network. This means that the user's private key is never stored in a single location, and thus it is never exposed to any single party."})}),"\n",(0,a.jsx)("hr",{subclass:"subsection"}),"\n",(0,a.jsx)(n.h2,{id:"relayers-cover-gas-fees",children:"Relayers: Cover gas fees"}),"\n",(0,a.jsx)(n.p,{children:"Allowing users to start using a dApp without having to acquire funds is a powerful tool to increase user adoption. NEAR Protocol provides a service that allows developers to subsidize gas fees for their users."}),"\n",(0,a.jsxs)(n.p,{children:['This concept, known as "Account Abstraction" in other chains, is a ',(0,a.jsx)(n.strong,{children:"built-in feature"})," in NEAR. User can wrap transactions in messages known as ",(0,a.jsx)(n.strong,{children:"meta-transaction"}),", that any other account can relay to the network."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["In NEAR the relayers simply attach NEAR to cover gas fees, and pass the transaction to the network. There, the transaction is executed as if the ",(0,a.jsx)(n.strong,{children:"user had send it"}),"."]})}),"\n",(0,a.jsx)("hr",{subclass:"subsection"}),"\n",(0,a.jsx)(n.h2,{id:"multi-chain-signatures-one-account-multiple-chains",children:"Multi-chain signatures: One account, multiple chains"}),"\n",(0,a.jsx)(n.p,{children:"Currently, users and applications are siloed in different chains. This means that a user needs to create a new account for each chain they want to use. This is not only cumbersome for the user, but also for the developer who needs to maintain different codebases for each chain."}),"\n",(0,a.jsxs)(n.p,{children:["NEAR Protocol provides a multi-chain signature service that allows users to use their NEAR Account to sign transactions in ",(0,a.jsx)(n.strong,{children:"other chains"}),". This means that a user can use the same account to interact with ",(0,a.jsx)(n.strong,{children:"Ethereum"}),", ",(0,a.jsx)(n.strong,{children:"Binance Smart Chain"}),", ",(0,a.jsx)(n.strong,{children:"Avalanche"}),", and ",(0,a.jsx)(n.strong,{children:"NEAR"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Multi-chain signatures work by combining ",(0,a.jsx)(n.strong,{children:"smart contracts"})," that produce signatures, with indexers that listen for these signatures, and relayers that submit the transactions to other networks. This allows users to hold assets and use applications in ",(0,a.jsx)(n.strong,{children:"any"})," network, only needing to have a single NEAR account."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(67294),r=t(36905),s=t(12466),i=t(16550),o=t(20469),l=t(91980),u=t(67392),c=t(50012);function h(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function d(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,s=(0,i.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function b(e){var n,t,r,s,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,h=e.groupId,b=d(e),g=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:b})})),m=g[0],v=g[1],x=f({queryString:u,groupId:h}),j=x[0],w=x[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),t=(0,c.Nk)(n),r=t[0],s=t[1],[r,(0,a.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=y[0],A=y[1],N=function(){var e=null!=j?j:k;return p({value:e,tabValues:b})?e:null}();return(0,o.Z)((function(){N&&v(N)}),[N]),{selectedValue:m,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);v(e),w(e),A(e)}),[w,A,b]),tabValues:b}}var g=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function x(e){var n=e.className,t=e.block,a=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],u=(0,s.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(u(n),i(r))},h=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;t=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;t=null!=(s=l[i])?s:l[l.length-1]}null==(n=t)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return l.push(e)},onKeyDown:h,onClick:c},s,{className:(0,r.Z)("tabs__item",m.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,r=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function w(e){var n=b(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,v.jsx)(x,Object.assign({},e,n)),(0,v.jsx)(j,Object.assign({},e,n))]})}function y(e){var n=(0,g.Z)();return(0,v.jsx)(w,Object.assign({},e,{children:h(e.children)}),String(n))}},77229:(e,n,t)=>{t.d(n,{Ey:()=>c,O2:()=>l,SQ:()=>u});t(67294);var a=t(74866),r=t(85162),s=t(95665),i=t.n(s),o=t(85893);function l(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,o.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,o.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function u(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,a=(t.children,t.url),r=t.start,s=t.end,i=t.fname;if(e.type===c)return c({url:a,start:r,end:s,language:n,fname:i});return e}(e,t)})),1==n.length?(0,o.jsx)(r.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,o.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,o.jsx)(r.Z,{value:n,label:e.props.fname,children:e})}))})}function c(e){var n=e.url,t=e.start,a=e.end,r=e.language,s=e.fname,l=n+"#";return t&&a&&(l+="L"+t+"-L"+a+"#"),(0,o.jsx)(i(),{language:r,fname:s,children:l})}},63325:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/chain-abstraction-landing-6d4641c84ace816727acb447e6880e70.png"}}]);