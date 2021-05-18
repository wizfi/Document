(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8371],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return p},kt:function(){return m}});var r=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(i),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||n;return i?r.createElement(f,o(o({ref:t},p),{},{components:i})):r.createElement(f,o({ref:t},p))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<n;u++)o[u]=i[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},2097:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=i(4034),a=i(9973),n=(i(7294),i(3905)),o={id:"wizfi360io",title:"WizFi360io",sidebar_label:"WizFi360io",keywords:["WizFi360io"]},l={unversionedId:"wizfi360io",id:"wizfi360io",isDocsHomePage:!1,title:"WizFi360io",description:"Overview",source:"@site/docs/wizfi360io.md",sourceDirName:".",slug:"/wizfi360io",permalink:"/Document/docs/wizfi360io",editUrl:"https://github.com/wizfi/Document/tree/master/docs/wizfi360io.md",version:"current",sidebar_label:"WizFi360io",frontMatter:{id:"wizfi360io",title:"WizFi360io",sidebar_label:"WizFi360io",keywords:["WizFi360io"]},sidebar:"docs",previous:{title:"WizFi360-EVB-Mini",permalink:"/Document/docs/wizfi360_mini"},next:{title:"Quickstart Guide",permalink:"/Document/docs/basic_guides/quickstart"}},c=[{value:"Overview",id:"overview",children:[]},{value:"WizFi360io-C",id:"wizfi360io-c",children:[]},{value:"WizFi360io-H",id:"wizfi360io-h",children:[]},{value:"Features",id:"features",children:[]},{value:"Quick Start Guide",id:"quick-start-guide",children:[]},{value:"Datasheet",id:"datasheet",children:[]},{value:"Technical Reference",id:"technical-reference",children:[{value:"Ref Schematic &amp; Other Board Schematics",id:"ref-schematic--other-board-schematics",children:[]},{value:"Library",id:"library",children:[]}]},{value:"ETC",id:"etc",children:[{value:"WizFi360io-C Connector Datasheet",id:"wizfi360io-c-connector-datasheet",children:[]}]}],u={toc:c};function p(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This page describes the io interface boards using WizFi360. WizFi360io series boards can be customized according to customers' requests."),(0,n.kt)("h2",{id:"wizfi360io-c"},"WizFi360io-C"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"WizFi360io-C",src:i(6265).Z})),(0,n.kt)("p",null,"WizFi360io-C cable connector type io interface board. The operating voltage of the WizFi360io-C and the UART voltage are 5V. WizFi360io-C can connect the UART interface to the connector. The part name of the connector mounted on WizFi360io-C is \u201cSMW200-06\u201d. The cable connector that can be connected to \u201cSMW200-06\u201d is \u201cSMH200-06\u201d."),(0,n.kt)("h2",{id:"wizfi360io-h"},"WizFi360io-H"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"WizFi360io-H",src:i(698).Z})),(0,n.kt)("p",null,"WizFi360io-H is a pin header type io interface board. The form factor of WizFi360io is an Xbee interface module. 2.00mm pin header is used, similar to the Xbee pin layout. But it is not exactly compatible."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"WizFi360",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"WiFi 2.4G, 802.11 b/g/n"),(0,n.kt)("li",{parentName:"ul"},"Support Station / SoftAP / SoftAP+Station operation modes"),(0,n.kt)("li",{parentName:"ul"},"Support \u201cData pass-through\u201d and \u201cAT command data transfer\u201d mode"),(0,n.kt)("li",{parentName:"ul"},"Support serial AT command configuration"),(0,n.kt)("li",{parentName:"ul"},"Support TCP Server / TCP Client / UDP operating mode"),(0,n.kt)("li",{parentName:"ul"},"Support configuration of operating channel 0 ~ 13"),(0,n.kt)("li",{parentName:"ul"},"Support auto 20MHz / 40MHz bandwidth"),(0,n.kt)("li",{parentName:"ul"},"Support WPA_PSK / WPA2_PSK encryption"),(0,n.kt)("li",{parentName:"ul"},"Serial port baud rate up from 600bps to 2Mbps with 16 common values"),(0,n.kt)("li",{parentName:"ul"},"Support up to 5 TCP / UDP links"),(0,n.kt)("li",{parentName:"ul"},"Obtaining IP address automatically from the DHCP server (Station mode)"),(0,n.kt)("li",{parentName:"ul"},"DHCP service for Wireless LAN clients (AP mode)"),(0,n.kt)("li",{parentName:"ul"},"Support DNS for communication with servers by domain name"),(0,n.kt)("li",{parentName:"ul"},"Support \u201cKeep-Alive\u201d to monitor TCP connection"),(0,n.kt)("li",{parentName:"ul"},"Support \u201cPing\u201d for monitoring network status"),(0,n.kt)("li",{parentName:"ul"},"Built-in SNTP client for receiving the network time"),(0,n.kt)("li",{parentName:"ul"},"Support built-in unique MAC address and user configurable"),(0,n.kt)("li",{parentName:"ul"},"Support firmware upgrade by UART Download / OTA (via WLAN)"),(0,n.kt)("li",{parentName:"ul"},"Industrial grade (operating temperature range: -40 \xb0 C ~ 85 \xb0 C)"),(0,n.kt)("li",{parentName:"ul"},"CE, FCC certification"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"WizFi360io-C"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"5V Operating Voltage",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Built-in LDO"),(0,n.kt)("li",{parentName:"ul"},"WizFi360 operates at 3.3V"))),(0,n.kt)("li",{parentName:"ul"},"5V voltage level UART",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Built-in Level Shifters"),(0,n.kt)("li",{parentName:"ul"},"WizFi360 operates at 3.3V"))),(0,n.kt)("li",{parentName:"ul"},"SMW200-06 Mounted",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Cable side connector is SMH200-06"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"WizFi360io-H"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"3.3V Operating Voltage",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Xbee Form Factor"),(0,n.kt)("li",{parentName:"ul"},"2.00mm Pin Header")))))),(0,n.kt)("h2",{id:"quick-start-guide"},"Quick Start Guide"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"basic_guides/quickstart"},"Quick Start Guide")),(0,n.kt)("h2",{id:"datasheet"},"Datasheet"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360io-c_ds_102_en.pdf"},"WizFi360io-C")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360io-h_ds_101_en.pdf"},"WizFi360io-H")),(0,n.kt)("h2",{id:"technical-reference"},"Technical Reference"),(0,n.kt)("h3",{id:"ref-schematic--other-board-schematics"},"Ref Schematic & Other Board Schematics"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/07_WizFi_Module/WizFi360-EVB-Shield"},"Link to Github")),(0,n.kt)("h3",{id:"library"},"Library"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/wizfi/Release"},"Link to Github")),(0,n.kt)("h2",{id:"etc"},"ETC"),(0,n.kt)("h3",{id:"wizfi360io-c-connector-datasheet"},"WizFi360io-C Connector Datasheet"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:board:wizfi360io-c:smw200-nn.pdf"},"SMW200-06")))}p.isMDXComponent=!0},698:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi360-h-a9cfc4e126e0affad7b7b7ee728c8151.png"},6265:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi360io-c-7135def2e01f66903826d2f9bad925d7.png"}}]);