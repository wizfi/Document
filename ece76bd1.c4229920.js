(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{171:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(0),c=t.n(r),i=t(182),l=t.n(i),s=t(186),o=t(183),m=t(181),u=t(191),d=t(172),h=t.n(d),p=[{title:c.a.createElement(c.a.Fragment,null,"Easy to Use"),imageUrl:"img/easy_to_use.JPG",description:c.a.createElement(c.a.Fragment,null,"WizFi360 is fast & simple plug-and-play module for the addition of wireless capabilities.")},{title:c.a.createElement(c.a.Fragment,null,"SDK Customization"),imageUrl:"img/img_sdk.png",description:c.a.createElement(c.a.Fragment,null,"To minimize customers' burden we provide software customization services, like AT command customization.")},{title:c.a.createElement(c.a.Fragment,null,"HDK Customization"),imageUrl:"img/img_hdk.png",description:c.a.createElement(c.a.Fragment,null,"Need more pins or different dimensions? Let us know, we will modify our module according to your project requirements.")}];function g(e){var a=e.imageUrl,t=e.title,n=e.description,r=Object(u.a)(a);return c.a.createElement("div",{className:l()("col col--4",h.a.feature)},r&&c.a.createElement("div",{className:"text--center"},c.a.createElement("img",{className:h.a.featureImage,src:r,alt:t})),c.a.createElement("h3",null,t),c.a.createElement("p",null,n))}a.default=function(){var e=Object(m.a)().siteConfig,a=void 0===e?{}:e;return c.a.createElement(s.a,{title:"All about "+a.title,description:"Description will go into a meta tag in <head />"},c.a.createElement("header",{className:l()("hero hero--primary",h.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:l()("col col--5 col--offset-1")},c.a.createElement("h1",{className:"hero__title"},a.title),c.a.createElement("p",{className:"hero__subtitle"},a.tagline),c.a.createElement("div",{className:h.a.buttons},c.a.createElement(o.a,{className:l()("button button--outline button--secondary button--lg",h.a.getStarted),to:Object(u.a)("docs/intro")},"Get Started"))),c.a.createElement("div",{className:l()("col col--5")},c.a.createElement("img",{className:h.a.heroImg,src:"img/img_slide1_wizfi360_1.png"}))))),c.a.createElement("main",null,p&&p.length&&c.a.createElement("section",{className:h.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},p.map((function(e,a){return c.a.createElement(g,Object(n.a)({key:a},e))})))))))}},187:function(e,a,t){"use strict";t(51),t(23),t(17),t(18),t(71);var n=t(0),r=t.n(n),c=t(182),i=t.n(c),l=t(181),s=t(184);t(127);a.a=function(e){var a=Object(n.useState)(!1),c=a[0],o=a[1],m=Object(n.useRef)(null),u=Object(l.a)().siteConfig,d=(void 0===u?{}:u).themeConfig.algolia,h=Object(s.b)();var p=function(e){void 0===e&&(e=!0),c||Promise.all([t.e(46).then(t.t.bind(null,188,7)),t.e(32).then(t.t.bind(null,190,7))]).then((function(a){var t=a[0].default;o(!0),window.docsearch=t,function(e){window.docsearch({appId:d.appId,apiKey:d.apiKey,indexName:d.indexName,inputSelector:"#search_input_react",algoliaOptions:d.algoliaOptions,handleSelected:function(e,a,t){var n=document.createElement("a");n.href=t.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;h.push(r)}}),e&&m.current.focus()}(e)}))},g=Object(n.useCallback)((function(){p(),c&&m.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),E=Object(n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),b=Object(n.useCallback)((function(e){var a="mouseover"!==e.type;p(a)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:i()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:g,onKeyDown:g,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:i()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:b,onFocus:b,onBlur:E,ref:m}))}}}]);