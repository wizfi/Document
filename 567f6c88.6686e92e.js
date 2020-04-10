(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"Highlight",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(1),r=n(9),a=(n(0),n(186)),o={id:"airkiss",title:"Airkiss Configuration Guide",sidebar_label:"Airkiss Configuration",keywords:["WizFi360","AirKiss"]},c={id:"basic_guides/airkiss",title:"Airkiss Configuration Guide",description:"export const Highlight = ({children, color}) => ( <span style={{\r",source:"@site/docs\\basic_guides\\airkiss.md",permalink:"/Document/docs/basic_guides/airkiss",editUrl:"https://github.com/wizfi/Document/tree/master/docs/basic_guides/airkiss.md",sidebar_label:"Airkiss Configuration",sidebar:"docs",previous:{title:"W600-SDK",permalink:"/Document/docs/basic_guides/w600sdk"},next:{title:"Program WizFi360 using Arduino IDE",permalink:"/Document/docs/basic_guides/arduino_ide"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Airkiss sequence",id:"airkiss-sequence",children:[]},{value:"Android Application",id:"android-application",children:[{value:"Connect with AirKiss",id:"connect-with-airkiss",children:[]},{value:"TCP Client Test",id:"tcp-client-test",children:[]}]}],l=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}}," ",t," ")},b={rightToc:s,Highlight:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"In this guide we introduce Airkiss method to configure WizFi360."),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/Document/img/basic_guides/airkiss/airkiss_diagran.png",alt:null}))),Object(a.b)("h2",{id:"airkiss-sequence"},"Airkiss sequence"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Set module to station mode using ",Object(a.b)(l,{color:"#1877F2",mdxType:"Highlight"},"AT+CWMODE_DEF=1"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Airkiss start using ",Object(a.b)(l,{color:"#1877F2",mdxType:"Highlight"},"AT+CWSTARTSMART=2"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Launch Android app and input WiFi AP' SSID and password.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Check AP connection status")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Start WizFi360 Server mode"))),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"\u2022 SmartConfig is only available in the Station mode. (AT+CWMODE_CUR=1)",Object(a.b)("br",null),'\n\u2022 The message "smart get wifi info" means that SmartConfig has successfully acquired the AP\ninformation. WizFi360 will try to connect to the target AP.',Object(a.b)("br",null),'\n\u2022 The message "smartconfig connected wifi" is printed if the connection is successful. Use command AT+CWSTOPSMART to stop SmartConfig before running other commands. Please make sure that you do not execute other commands during SmartConfig.',Object(a.b)("br",null),"\n\u2022 The LED(PB_07) is blinking fast during running Oneshot via Airkiss.",Object(a.b)("br",null),"\nThe LED(PB_07) is blinking slowly during running Oneshot via WebServer.\u2022 SmartConfig "))),Object(a.b)("h2",{id:"android-application"},"Android Application"),Object(a.b)("h3",{id:"connect-with-airkiss"},"Connect with AirKiss"),Object(a.b)("p",null,"Prior configuring WizFi360 module it is necessary to set settings in Android application.\nThis procedure is simple and contains following steps:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Launch application on smartphone which is connected to AP."),Object(a.b)("li",{parentName:"ol"},'Input SSID and password, then press "Setting" button.'),Object(a.b)("li",{parentName:"ol"},"Wait while WizFi360 is connected to AP."),Object(a.b)("li",{parentName:"ol"},"Upon completion app will display MAC and IP addresses.")),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/Document/img/basic_guides/airkiss/airkiss_android_app.png",alt:null}))),Object(a.b)("h3",{id:"tcp-client-test"},"TCP Client Test"),Object(a.b)("p",null,"It is possible to test TCP connection between WizFi360 and smartphone, where smartphone will be TCP client and WizFi360 will be used as server."),Object(a.b)("p",null,"To conduct test follow below procedures:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},'Press "Menu" button on top left side of application. Then press "TCP Client Test"'),Object(a.b)("li",{parentName:"ol"},'Check IP address and port, then click "Connect" button. When application is connected, button will be changed to "Disconnect".'),Object(a.b)("li",{parentName:"ol"},'Input a message and press "Send" button.'),Object(a.b)("li",{parentName:"ol"},"App will display message on the screen when it is received from server.")),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/Document/img/basic_guides/airkiss/airkiss_android_tcp.png",alt:null}))))}p.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=i,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||a;return n?r.a.createElement(m,c({ref:t},l,{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);