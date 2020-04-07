(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var i=n(1),a=n(9),r=(n(0),n(186)),c={id:"quickstart",title:"Quickstart Guide",sidebar_label:"Quickstart",keywords:["WizFi360"]},o={id:"basic_guides/quickstart",title:"Quickstart Guide",description:"## Environment setting\r",source:"@site/docs\\basic_guides\\quickstart.md",permalink:"/Document/docs/basic_guides/quickstart",editUrl:"https://github.com/wizfi/Document/tree/master/docs/basic_guides/quickstart.md",sidebar_label:"Quickstart",sidebar:"docs",previous:{title:"WizFi360io",permalink:"/Document/docs/wizfi360io"},next:{title:"Firmware Upgrade Guide",permalink:"/Document/docs/basic_guides/firmware_upgrade"}},b=[{value:"Environment setting",id:"environment-setting",children:[]},{value:"TCP CLient Example",id:"tcp-client-example",children:[]}],s={rightToc:b};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"environment-setting"},"Environment setting"),Object(r.b)("p",null,"There are two types of WizFi360-EVB, which can be classified as \u2018Shield\u2019 and \u2018Mini\u2019 versions. WizFi360 is controlled by sending AT command through UART. WizFi360-EVB-Mini and WizFi360-EVB-Shield uses UART1 by connecting Micro USB."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"WizFi360-EVB-Mini"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"WizFi360-EVB-Shield"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"center"}),Object(r.b)("img",Object(i.a)({parentName:"td"},{src:"/Document/img/WizFi360-mini.png",alt:"WizFi360-CON"}))),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"center"}),Object(r.b)("img",Object(i.a)({parentName:"td"},{src:"/Document/img/img_evb_mini.png",alt:"WizFi360-PA"})))))),Object(r.b)("p",null,"In addition, WizFi360-EVB-Shield is Pin compatible with Arduino. So you can use UART in two cases. If you use Micro USB, turn SW1 ON and connect Micro USB. In case of using Arduino H/W compatible pin, turn SW1 OFF and select RXD / TXD pin for Arduino using jumper cap. See the figure below."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"Micro USB"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"center"}),"Arduino H/W compatible pin"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"center"}),Object(r.b)("img",Object(i.a)({parentName:"td"},{src:"/Document/img/basic_guides/quickstart/quickstart_microusb.png",alt:"WizFi360-CON"}))),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"center"}),Object(r.b)("img",Object(i.a)({parentName:"td"},{src:"/Document/img/basic_guides/quickstart/quickstart_arduino.png",alt:"WizFi360-PA"})))))),Object(r.b)("p",null,"If WizFi360-EVB-Shield or WizFi360-EVB-Mini is connected to a PC with a Mini USB Cable, run the serial program for UART communication on the PC. Open Port in Serial Program and input AT. If WizFi360 return OK, AT command can be used."),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/Document/img/basic_guides/quickstart/quickstart_terminal.png",alt:null}))),Object(r.b)("h2",{id:"tcp-client-example"},"TCP CLient Example"),Object(r.b)("p",null,"A brief AT command describe for operating of WizFi360 as TCP Client in single connection mode. If you need AT command example of another mode, see the documentation called ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360atcomex_v103e.pdf"}),'"AT command examples"')),Object(r.b)("p",null,"Open TCP Server from PC which is connected to the same WiFi AP that WizFi360 is connected to. (",Object(r.b)("em",{parentName:"p"},"IP : 192.168.10.100  Port : 5000"),")"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),'//Set WizFi Station mode\nAT+CWMODE_CUR=1 //Station mode, in case of AT+CWMODE_DEF, it is stored in flash.\nOK\n\n//Set Single Connection Mode\nAT+CIPMUX=0\nOK\n\n//Set DHCP enable\nAT+CWDHCP_CUR=1,1\nOK\n\n//Get possible WiFi AP list for WizFi360 connection\nAT+CWLAP\n+CWLAP:(3,"ssid",-5,"mac address",1,1)\n\n//Connect to WiFi AP\nAT+CWJAP_CUR="ssid","password"\nWIFI CONNECTED\nWIFI GOT IP\n\nOK\n\n//Query WizFi360 device\' IP address\nAT+CIPSTA_CUR?\n+CIPSTA_CUR:ip:"192.168.10.13"\n+CIPSTA_CUR:gateway:"192.168.10.1"\n+CIPSTA_CUR:network:"255.255.255.0"\n\nOK\n\n//Connect to TCP server as client\nAT+CIPSTART="TCP","192.168.10.100",5000    //protocol, server IP, port\nCONNECT\n\nOK\n\n//WizFi360 sends data to the TCP Server\nAT+CIPSEND=10    //set data length, such as 10 bytes. \nOK\n>  // return ">" to begin receiving of serial data.\n1234567890    //enter the data, no <CR><LF>\n\nRecv 10 bytes\n\nSEND OK \n\n//When WizFi360 received data from TCP Server, it will prompt message below:\n+IPD,10:1234567890\n\n//End the TCP Connection\nAT+CIPCLOSE\nCLOSED \n\nOK\n\n')),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In normal transmission mode, there are three commands to send data. (For more details, refer to AT Instruction set.)\n1. AT+CIPSEND\n2. AT+CIPSENDBUF\n3. AT+CIPSENDEX"),Object(r.b)("p",{parentName:"div"},"In AT+CIPSEND and AT+CIPSENDEX, If the data is entered more than the length set (n) :"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"the system will send the first n bytes and discard exceeded data.")),Object(r.b)("p",{parentName:"div"},"In AT+CIPSENDBUF, If the data is entered more than the length set (n) :"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"the system will reply busy and send the first n bytes"),Object(r.b)("li",{parentName:"ul"},"and discard exceeded data.")))))}d.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},l=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),l=d(n),p=i,u=l["".concat(c,".").concat(p)]||l[p]||m[p]||r;return n?a.a.createElement(u,o({ref:t},s,{components:n})):a.a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=p;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<r;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);