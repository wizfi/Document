(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3788],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return d},kt:function(){return c}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=m(a),c=n,s=k["".concat(p,".").concat(c)]||k[c]||u[c]||l;return a?r.createElement(s,i(i({ref:e},d),{},{components:a})):r.createElement(s,i({ref:e},d))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},42:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return d}});var r=a(4034),n=a(9973),l=(a(7294),a(3905)),i={id:"mbed_atcmd",title:"NUCLEO-L476RG + WizFi360 Azure AT Command\ub97c \uc774\uc6a9\ud558\uc5ec Azure IoT Hub\uc5d0 \uc5f0\uacb0",sidebar_label:"Mbed AT Cmd (\ud55c\uad6d\uc5b4)",keywords:["WizFi360","Mbed"]},o={unversionedId:"connect_to_cloud/mbed_atcmd",id:"connect_to_cloud/mbed_atcmd",isDocsHomePage:!1,title:"NUCLEO-L476RG + WizFi360 Azure AT Command\ub97c \uc774\uc6a9\ud558\uc5ec Azure IoT Hub\uc5d0 \uc5f0\uacb0",description:"\uc2dc\uc791\ud558\uae30 \uc804\uc5d0",source:"@site/docs/connect_to_cloud/mbed_azure_atcmd.md",sourceDirName:"connect_to_cloud",slug:"/connect_to_cloud/mbed_atcmd",permalink:"/Document/docs/connect_to_cloud/mbed_atcmd",editUrl:"https://github.com/wizfi/Document/tree/master/docs/connect_to_cloud/mbed_azure_atcmd.md",version:"current",sidebar_label:"Mbed AT Cmd (\ud55c\uad6d\uc5b4)",frontMatter:{id:"mbed_atcmd",title:"NUCLEO-L476RG + WizFi360 Azure AT Command\ub97c \uc774\uc6a9\ud558\uc5ec Azure IoT Hub\uc5d0 \uc5f0\uacb0",sidebar_label:"Mbed AT Cmd (\ud55c\uad6d\uc5b4)",keywords:["WizFi360","Mbed"]},sidebar:"docs",previous:{title:"Connect to Azure IoT Hub using WizFi360 MQTT AT Command",permalink:"/Document/docs/connect_to_cloud/mbed_mqtt_e"},next:{title:"Connect to Azure IoT Hub using NUCLEO-L476RG + WizFi360 Azure AT Command",permalink:"/Document/docs/connect_to_cloud/mbed_atcmd_e"}},p=[{value:"\uc2dc\uc791\ud558\uae30 \uc804\uc5d0",id:"\uc2dc\uc791\ud558\uae30-\uc804\uc5d0",children:[{value:"Hardware Requirement",id:"hardware-requirement",children:[]},{value:"Software Requirement",id:"software-requirement",children:[]}]},{value:"\uc18c\uac1c",id:"\uc18c\uac1c",children:[]},{value:"\ub514\ubc14\uc774\uc2a4 \uc900\ube44",id:"\ub514\ubc14\uc774\uc2a4-\uc900\ube44",children:[{value:"\ud558\ub4dc\uc6e8\uc5b4 \uc124\uc815",id:"\ud558\ub4dc\uc6e8\uc5b4-\uc124\uc815",children:[]},{value:"\ub514\ubc14\uc774\uc2a4 \uc5f0\uacb0",id:"\ub514\ubc14\uc774\uc2a4-\uc5f0\uacb0",children:[]}]},{value:"AT \uba85\ub839\uc5b4",id:"at-\uba85\ub839\uc5b4",children:[{value:"1. Set current WiFi mode (not saved in flash)",id:"1-set-current-wifi-mode-not-saved-in-flash",children:[]},{value:"2. Enable DHCP",id:"2-enable-dhcp",children:[]},{value:"3. List available APs",id:"3-list-available-aps",children:[]},{value:"4. Connect to AP",id:"4-connect-to-ap",children:[]},{value:"5. Azure IoT Hub configuration set",id:"5-azure-iot-hub-configuration-set",children:[]},{value:"6. Set MQTT Topic",id:"6-set-mqtt-topic",children:[]},{value:"7. Connect to Azure",id:"7-connect-to-azure",children:[]},{value:"8. Publish a message",id:"8-publish-a-message",children:[]}]},{value:"\ub3d9\uc791 \uc608\uc81c",id:"\ub3d9\uc791-\uc608\uc81c",children:[{value:"Mbed \uc608\uc81c \ucf54\ub4dc \ub2e4\uc6b4\ub85c\ub4dc",id:"mbed-\uc608\uc81c-\ucf54\ub4dc-\ub2e4\uc6b4\ub85c\ub4dc",children:[]},{value:"Modify parameters",id:"modify-parameters",children:[]},{value:"\ub3d9\uc791 \uc608\uc81c \uacb0\uacfc",id:"\ub3d9\uc791-\uc608\uc81c-\uacb0\uacfc",children:[]}]},{value:"\ub354 \ubcf4\uae30",id:"\ub354-\ubcf4\uae30",children:[]}],m={toc:p};function d(t){var e=t.components,i=(0,n.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\uc2dc\uc791\ud558\uae30-\uc804\uc5d0"},"\uc2dc\uc791\ud558\uae30 \uc804\uc5d0"),(0,l.kt)("h3",{id:"hardware-requirement"},"Hardware Requirement"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://os.mbed.com/platforms/ST-Nucleo-L476RG/"},"NUCLEO-L476RG")),(0,l.kt)("li",{parentName:"ul"},"Desktop or laptop computer"),(0,l.kt)("li",{parentName:"ul"},"USB \ucf00\uc774\ube14"),(0,l.kt)("li",{parentName:"ul"},"WizFi360-EVB-Shield")),(0,l.kt)("h3",{id:"software-requirement"},"Software Requirement"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Microsoft Azure Account (Azure \uad6c\ub3c5\uc774 \uc544\uc9c1 \uc5c6\ub294 \uacbd\uc6b0 \uccb4\ud5d8 \ubb34\ub8cc",(0,l.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/ko-kr/free/"},"\uacc4\uc815"),"\uc744 \ub9cc\ub4ed\ub2c8\ub2e4.)"),(0,l.kt)("li",{parentName:"ul"},"Preferred Serial Terminal (TeraTerm, YAT, etc.)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://catalog.azureiotsolutions.com/docs?title=Azure/azure-iot-device-ecosystem/manage_iot_hub"},"Azure IoT Explorer")),(0,l.kt)("li",{parentName:"ul"},"MBED Studio / MBED Online Compiler")),(0,l.kt)("h2",{id:"\uc18c\uac1c"},"\uc18c\uac1c"),(0,l.kt)("p",null,"Microsoft Azure \ub294 Microsoft \uc758 \ud074\ub77c\uc6b0\ub4dc \ucef4\ud4e8\ud305 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4.\nMicrosoft Azure \uc758 \uc11c\ube44\uc2a4\uc5d0 ",(0,l.kt)("a",{parentName:"p",href:"https://wizwiki.net/wiki/doku.php/products:wizfi360:start"},"WizFi360")," \uc744 \uc5f0\ub3d9\ud558\uc5ec \ub370\uc774\ud130\ub97c \ud074\ub77c\uc6b0\ub4dc\ub85c \uc804\uc1a1\ud558\uace0, \ubaa8\ub2c8\ud130\ub9c1 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ubcf8 \ubb38\uc11c\uc5d0\uc11c\ub294 NUCLEO-L476G + WizFi360 \uc774\uc6a9\ud558\uc5ec MS Azure Services\uc5d0 \uc5f0\uacb0 \ubc29\ubc95\uc5d0 \ub300\ud55c \uac00\uc774\ub4dc\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.\n\uc774 \ud504\ub85c\uc138\uc2a4\ub294 \ub2e4\uc74c \ub2e8\uacc4\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Azure IoT Hub \uc900\ube44"),(0,l.kt)("li",{parentName:"ul"},"IoT \ub514\ubc14\uc774\uc2a4 \ub4f1\ub85d"),(0,l.kt)("li",{parentName:"ul"},"Azure IoT\uc640 \uc5f0\uacb0 \ubc0f \ub370\uc774\ud130 \ud1b5\uc2e0")),(0,l.kt)("p",null,"Azure IoT Hub \uc900\ube44\uc640 IoT \ub514\ubc14\uc774\uc2a4 \ub4f1\ub85d \uacfc\uc815 \ub300\ud574 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud"},"Azure Cloud \uc18c\uac1c")," \ucc38\uc870\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,l.kt)("p",null,"WiFi\ubaa8\ub4c8 \ud14c\uc2a4\ud2b8\ub97c \uc704\ud574 ",(0,l.kt)("a",{parentName:"p",href:"https://wizwiki.net/wiki/doku.php/products:wizfi360:board:wizfi360-evb:start"},"WizFi360-EVB-Shield")," Evaluation \ubcf4\ub4dc\ub97c \uc0ac\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(2504).Z})),(0,l.kt)("h2",{id:"\ub514\ubc14\uc774\uc2a4-\uc900\ube44"},"\ub514\ubc14\uc774\uc2a4 \uc900\ube44"),(0,l.kt)("h3",{id:"\ud558\ub4dc\uc6e8\uc5b4-\uc124\uc815"},"\ud558\ub4dc\uc6e8\uc5b4 \uc124\uc815"),(0,l.kt)("p",null,"WizFi360-EVB-Shield\ub294 NUCLEO-L476RG\uc640 \uacb0\ud569\uc744 \ud558\uc5ec \uc0ac\uc6a9\ub418\uc5b4 \uc9d1\ub2c8\ub2e4. \ub530\ub77c\uc11c WizFi360-EVB-Shield\uc758 DIP Switch \ubc0f UART Jumper Pin\uc744 \ub2e4\uc74c\uacfc \uac19\uc774 \uc124\uc815\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"SW1 : Off"),(0,l.kt)("li",{parentName:"ul"},"SW2 : Off"),(0,l.kt)("li",{parentName:"ul"},"SW3 : On"),(0,l.kt)("li",{parentName:"ul"},"D2 : UART Tx"),(0,l.kt)("li",{parentName:"ul"},"D8 : UART Rx"))),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(2571).Z})),(0,l.kt)("h3",{id:"\ub514\ubc14\uc774\uc2a4-\uc5f0\uacb0"},"\ub514\ubc14\uc774\uc2a4 \uc5f0\uacb0"),(0,l.kt)("p",null,"Hardware \uc124\uc815 \ud6c4, Mini USB Cable\uc744 \uc774\uc6a9\ud558\uc5ec NUCLEO-L476RG\ub97c Desktop \ud639\uc740 Laptop Computer\uc640 \uc5f0\uacb0\uc744 \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uc7a5\uce58 \uad00\ub9ac\uc790"),"\uc5d0\uc11c NUCLEO-L476RG\uc640 \uc5f0\uacb0\ub41c ",(0,l.kt)("strong",{parentName:"p"},"COM Port"),"\ub97c \ud655\uc778 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/device_management_2.png",alt:null})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc7a5\uce58 \uad00\ub9ac\uc790\uc5d0\uc11c COM Port\ub97c \ud655\uc778 \ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0, \ub2e4\uc74c Link\uc5d0\uc11c Driver\ub97c Downlonad\ud558\uc5ec \uc124\uce58\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"[ST-LINK, ST-LINK/V2, ST-LINK/V2-1 USB driver][Link-St_Link_St_Link_V2_St_Link_V2_1_Usb_Driver]"))),(0,l.kt)("h2",{id:"at-\uba85\ub839\uc5b4"},"AT \uba85\ub839\uc5b4"),(0,l.kt)("h3",{id:"1-set-current-wifi-mode-not-saved-in-flash"},"1. Set current WiFi mode (not saved in flash)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"AT Command:")," AT+CWMODE_CUR\nSyntax:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Query"),(0,l.kt)("td",{parentName:"tr",align:"left"},"AT+CWMODE_CUR?"),(0,l.kt)("td",{parentName:"tr",align:"left"},"+CWMODE:","<","mode",">"," ",(0,l.kt)("br",null)," OK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Set"),(0,l.kt)("td",{parentName:"tr",align:"left"},"AT+CWMODE_CUR=","<","mode",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"OK")))),(0,l.kt)("p",null,"Defined values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Mode"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Station mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SoftAP mode (factory default)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Station+SoftAP mode")))),(0,l.kt)("h3",{id:"2-enable-dhcp"},"2. Enable DHCP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"AT Command:")," AT+CWDHCP_CUR\nSyntax:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Query"),(0,l.kt)("td",{parentName:"tr",align:"left"},"AT+CWDHCP_CUR?"),(0,l.kt)("td",{parentName:"tr",align:"left"},"+CWDHCP_CUR:","<","para",">"," ",(0,l.kt)("br",null)," OK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Set"),(0,l.kt)("td",{parentName:"tr",align:"left"},"AT+CWMODE_CUR=","<","para",">",",","<","en",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"OK")))),(0,l.kt)("p",null,"Defined values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SoftAP DHCP \uc640 Station DHCP \ub97c disable \ud55c\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SoftAP DHCP \ub294 enable \ud558\uace0 Station DHCP \ub294 disable \ud55c\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2: SoftAP DHCP \ub294 disable \ud558\uace0 Station DHCP \ub294 enable \ud55c\ub2e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SoftAP DHCP \uc640 Station DHCP \ub97c enable \ud55c\ub2e4. (factory default)")))),(0,l.kt)("h3",{id:"3-list-available-aps"},"3. List available APs"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"AT Command:")," AT+CWLAP\nSyntax:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Query"),(0,l.kt)("td",{parentName:"tr",align:"left"},"AT+CWLAP"),(0,l.kt)("td",{parentName:"tr",align:"left"},"+CWLAP:(","[<","ecn",">",",","<","ssid",">",",","<","rssi",">",",","<","mac",">",",","<","channel",">",",","<","wps",">]",")")))),(0,l.kt)("p",null,"Defined values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<","ecn",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0: Open ",(0,l.kt)("br",null)," 1: WEP ",(0,l.kt)("br",null)," 2: WPA_PSK",(0,l.kt)("br",null),"3: WPA2_PSK",(0,l.kt)("br",null),"4:WPA_WPA2_PSK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<","ssid",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string parameter. AP\uc758 ssid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<","rssi",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"signal strength")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<","mac",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string parameter. AP\uc758 mac")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<","wps",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0: WPS\ub294 disable\ub41c\ub2e4 ",(0,l.kt)("br",null)," 1: WPS\ub294 enable\ub41c\ub2e4")))),(0,l.kt)("h3",{id:"4-connect-to-ap"},"4. Connect to AP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"AT Command:")," AT+CWJAP_CUR\nSyntax:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Set"),(0,l.kt)("td",{parentName:"tr",align:"left"},"AT+CWJAP_CUR=","<","ssid",">",",","<","pwd",">",",","[<","bssid",">]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"+CWJAP_CUR:","<","ssid",">",",","<","bssid",">",",","<","channel",">",",","<","rssi",">"," ",(0,l.kt)("br",null)," OK")))),(0,l.kt)("p",null,"Defined values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<","ssid",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string parameter. Target AP\uc758 ssid. MAX: 32 bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<","pwd",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string parameter. Target AP\uc758 password. MAX: 64-byte ASCII")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<","bssid",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string parameter, target AP \uc758 MAC address, \uac19\uc740 SSID \ub97c \uac00\uc9c4 \uc5ec\ub7ec \uac1c\uc758 AP \ub4e4\uc774 \uc788\uc744 \ub54c \uc0ac\uc6a9\ub41c\ub2e4.")))),(0,l.kt)("h3",{id:"5-azure-iot-hub-configuration-set"},"5. Azure IoT Hub configuration set"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"AT Command:")," AT+AZSET"),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Set"),(0,l.kt)("td",{parentName:"tr",align:"left"},"AT+AZSET=","<","iothub_name",">",",","<","device_id",">",",","<","device_key",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"OK")))),(0,l.kt)("p",null,"Defined values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<","hub ID",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string parameter. IoT Hub\uc758 ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<","device ID",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string parameter. IoT Device\uc758 ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<","key",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string parameter, IoT Device\uc758 Key")))),(0,l.kt)("h3",{id:"6-set-mqtt-topic"},"6. Set MQTT Topic"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"AT Command:")," AT+MQTTTOPIC"),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Set"),(0,l.kt)("td",{parentName:"tr",align:"left"},"AT+MQTTTOPIC=","<","publish topic",">",",","<","subscribe topic",">",",","<","subscribe topic2",">",",","<","subscribe topic3",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"OK")))),(0,l.kt)("p",null,"Defined values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<","publish topic",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string parameter, WizFi360 \uc774 publish \ud558\ub294 topic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<","subscribe topic",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string parameter, WizFi360 \uc774 subscribe \ud558\ub294 topic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<","subscribe topic2",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string parameter, WizFi360 \uc774 subscribe \ud558\ub294 topic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"<","subscribe topic3",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string parameter, WizFi360 \uc774 subscribe \ud558\ub294 topic")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note:"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\uc774 command \ub294 broker \uc5d0 \uc5f0\uacb0\ud558\uae30\uc804\uc5d0 \uc124\uc815\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"<","subscribe topic2",">"," \uc640 ","<","subscribe topic3",">","\ub294 Firmware v1.0.5.0 \uc774\ud6c4 version \ubd80\ud130 \uc0ac\uc6a9\uac00\ub2a5 \ud569\ub2c8\ub2e4."))),(0,l.kt)("h3",{id:"7-connect-to-azure"},"7. Connect to Azure"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"AT Command:")," AT+AZCON"),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Set"),(0,l.kt)("td",{parentName:"tr",align:"left"},"AT+AZCON"),(0,l.kt)("td",{parentName:"tr",align:"left"},"CONNECT ",(0,l.kt)("br",null)," OK")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note:\n\u2022 \uc774 command \ub97c \uc804\uc1a1\ud558\uae30\uc804\uc5d0 AT+AZSET command \uc640 AT+MQTTTOPIC command \ub97c \uc124\uc815\ud569\ub2c8\ub2e4.\n\u2022 Connect \uc774\ud6c4 AT+MQTTPUB command \ub97c \ud1b5\ud574 Azure Sever \uc5d0 \ub370\uc774\ud130\ub97c \uc804\uc1a1\ud569\ub2c8\ub2e4.\n\u2022 \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support"},"https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support")," \ub97c \ucc38\uc870\ud558\uc138\uc694.")),(0,l.kt)("h3",{id:"8-publish-a-message"},"8. Publish a message"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"AT Command:")," AT+MQTTPUB"),(0,l.kt)("p",null,"Syntax:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Set"),(0,l.kt)("td",{parentName:"tr",align:"left"},"AT+MQTTPUB=","<","message",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"OK")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note:\n\u2022 \uc774 command \ub294 MQTT \uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc744 \ub54c \uc0ac\uc6a9\ub429\ub2c8\ub2e4.\n\u2022 Publish \ud55c data \uc758 topic \uc740 AT+MQTTTOPIC command \uc5d0 \uc758\ud574 \uacb0\uc815\ub418\uba70, \uc0ac\uc6a9\uc790\ub294 broker \uc5d0 \uc5f0\uacb0\ud558\uae30\uc804\uc5d0 topic \uc744 \uc124\uc815\ud569\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"\ub3d9\uc791-\uc608\uc81c"},"\ub3d9\uc791 \uc608\uc81c"),(0,l.kt)("h3",{id:"mbed-\uc608\uc81c-\ucf54\ub4dc-\ub2e4\uc6b4\ub85c\ub4dc"},"Mbed \uc608\uc81c \ucf54\ub4dc \ub2e4\uc6b4\ub85c\ub4dc"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uc608\uc81c Download"),"\ub97c \ud55c \ud6c4, ",(0,l.kt)("strong",{parentName:"p"},"File")," > ",(0,l.kt)("strong",{parentName:"p"},"Open Workspace"),"\uc744 \uc120\ud0dd\ud558\uc5ec ",(0,l.kt)("strong",{parentName:"p"},"Project \uc2e4\ud589"),"\ud569\ub2c8\ub2e4."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc608\uc81c\ub294 \ub2e4\uc74c \uacbd\ub85c\uc5d0 \uc704\uce58\ud558\uace0 \uc788\ub294 Project\ub97c \ucc38\uace0 \ubc14\ub78d\ub2c8\ub2e4."),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"samples/Wi-Fi/Mbed_Azure_Atcmd_Wizfi360"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/execute_project_through_mbed_studio_1.png",alt:null})),(0,l.kt)("p",null,"Online Compiler \uacbd\uc6b0 \ub2e4\uc74c \ub9c1\ud06c\uc5d0\uc11c Compiler\uc5d0 import\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://os.mbed.com/users/vikshin/code/Mbed-Azure-Atcmd-WizFi360/"},"https://os.mbed.com/users/vikshin/code/Mbed-Azure-Atcmd-WizFi360/"),"\n",(0,l.kt)("img",{src:a(1524).Z}))),(0,l.kt)("h3",{id:"modify-parameters"},"Modify parameters"),(0,l.kt)("p",null,"Azure IoT Hub \uc5f0\uacb0 \uc704\ud55c WiFi ssid, WiFi password, Hub ID, Device ID, Device Key \ubcc0\uacbd\ud558\uc5ec \ud14c\uc2a4\ud2b8 \ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'/* WiFi info */\nchar ssid[] = "XXXXXXXXXXXXXXXXXXXXXXXX";\nchar password[] = "XXXXXXXXXXXXXXXXXXXXXXXXXX";\n\n/* Azure info */\nchar hub_name[] = "XXXXXXXXXXXXXXXXXXXXXXXXXX";\nchar device_id[] = "XXXXXXXXXXXXXXXXXXXXXXXXXX";\nchar device_primary_key[] = "XXXXXXXXXXXXXXXXXXXXXXXXXX=";\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Run Program"),"\uc744 \ub20c\ub7ec Project Build \ubc0f Run\uc744 \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/execute_project_through_mbed_studio_3.png",alt:null})),(0,l.kt)("p",null,"\uc5c5\ub85c\ub4dc\ub97c \uc644\ub8cc\ud55c \ud6c4, \uc2dc\ub9ac\uc5bc \ubaa8\ub2c8\ud130\ub97c \uc774\uc6a9\ud558\uc5ec \uc815\uc0c1\uc801\uc73c\ub85c Nucleo \ubcf4\ub4dc\uc5d0 \uc5c5\ub85c\ub4dc \ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n",(0,l.kt)("img",{src:a(4215).Z})),(0,l.kt)("h3",{id:"\ub3d9\uc791-\uc608\uc81c-\uacb0\uacfc"},"\ub3d9\uc791 \uc608\uc81c \uacb0\uacfc"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'IoT Explorer \uc5d0\uc11c Telemetry Section\uc548\uc5d0 "Start" \ubc84\ud2bc\uc744 \ub204\ub985\ub2c8\ub2e4.',(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},'MQTTPUB \uba85\ub839\uc744 \ud1b5\ud574 \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0b4\uae30 \uc804\uc5d0 "Start" \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc57c \ud569\ub2c8\ub2e4.'))),(0,l.kt)("li",{parentName:"ol"},"MQTTPUB command\uc73c\ub85c \uc218\uc2e0\ud55c \ub370\uc774\ud130\ub97c \ud655\uc778 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(7770).Z})),(0,l.kt)("h2",{id:"\ub354-\ubcf4\uae30"},"\ub354 \ubcf4\uae30"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/azure-iot-kr/blob/master/docs/IoT_device/Connectivities/Wi-Fi/standalone_azure_atcmd_wizfi360.md"},"WizFi360 Azure AT Command\ub97c \uc774\uc6a9\ud558\uc5ec Azure IoT Hub\uc5d0 \uc5f0\uacb0")))}d.isMDXComponent=!0},7770:function(t,e,a){"use strict";e.Z=a.p+"assets/images/Mbed_Azure_atcmd_iot_explorer-faa5d34a3c42d3075316ab66d091191d.JPG"},4215:function(t,e,a){"use strict";e.Z=a.p+"assets/images/Mbed_Azure_atcmd_serial_monitor-fd6ae06f31937732649008d8b89aad02.JPG"},1524:function(t,e,a){"use strict";e.Z=a.p+"assets/images/Mbed_Azure_online_compiler-21ba999b2cc091e4661710a214d86352.JPG"},2504:function(t,e,a){"use strict";e.Z=a.p+"assets/images/mqtt_atcmd_wizfi360_required_item_1-38ab32515c9da42d3228fe2d327ea6ad.png"},2571:function(t,e,a){"use strict";e.Z=a.p+"assets/images/mqtt_atcmd_wizfi360_required_item_2-e5f6d27300c90c8a176fed42b794d2e1.png"}}]);