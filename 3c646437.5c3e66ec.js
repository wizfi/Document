(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(1),b=a(9),c=(a(0),a(186)),r={id:"standalone_aws_atcmd_kr",title:"WizFi360 AT Command\ub97c \uc774\uc6a9\ud558\uc5ec AWS IoT\uc5d0 \uc5f0\uacb0",sidebar_label:"Standalone AT Cmd (\ud55c\uad6d\uc5b4)",keywords:["WizFi360","AWS"]},i={id:"connect_to_cloud/standalone_aws_atcmd_kr",title:"WizFi360 AT Command\ub97c \uc774\uc6a9\ud558\uc5ec AWS IoT\uc5d0 \uc5f0\uacb0",description:"## \uc2dc\uc791\ud558\uae30 \uc804\uc5d0\r",source:"@site/docs\\connect_to_cloud\\standalone_aws_atcmd_k.md",permalink:"/docs/connect_to_cloud/standalone_aws_atcmd_kr",editUrl:"https://github.com/wizfi/Document/tree/master/docs/connect_to_cloud/standalone_aws_atcmd_k.md",sidebar_label:"Standalone AT Cmd (\ud55c\uad6d\uc5b4)",sidebar:"docs",previous:{title:"Connect WizFi360 to AWS IoT using AT Command",permalink:"/docs/connect_to_cloud/standalone_aws_atcmd"},next:{title:"Location Tracker with WizFi360",permalink:"/docs/other_guides/location_tracker"}},l=[{value:"\uc2dc\uc791\ud558\uae30 \uc804\uc5d0",id:"\uc2dc\uc791\ud558\uae30-\uc804\uc5d0",children:[{value:"Hardware Requirement",id:"hardware-requirement",children:[]},{value:"Software Requirement",id:"software-requirement",children:[]}]},{value:"\uc18c\uac1c",id:"\uc18c\uac1c",children:[]},{value:"\ub514\ubc14\uc774\uc2a4 \uc900\ube44",id:"\ub514\ubc14\uc774\uc2a4-\uc900\ube44",children:[{value:"\ud558\ub4dc\uc6e8\uc5b4 \uc124\uc815",id:"\ud558\ub4dc\uc6e8\uc5b4-\uc124\uc815",children:[]},{value:"\ub514\ubc14\uc774\uc2a4 \uc5f0\uacb0",id:"\ub514\ubc14\uc774\uc2a4-\uc5f0\uacb0",children:[]}]},{value:"AT \uba85\ub839\uc5b4",id:"at-\uba85\ub839\uc5b4",children:[{value:"1. Set SSL Certificate",id:"1-set-ssl-certificate",children:[]},{value:"2. Set Private Key",id:"2-set-private-key",children:[]},{value:"3. Set Certificate for Thing",id:"3-set-certificate-for-thing",children:[]},{value:"4. Connect to AWS",id:"4-connect-to-aws",children:[]}]},{value:"\ub3d9\uc791 \uc608\uc81c",id:"\ub3d9\uc791-\uc608\uc81c",children:[{value:"\ubaa8\ub4c8 \uc5f0\uacb0 \ubc0f \ud130\ubbf8\ub110 \uc2e4\ud589",id:"\ubaa8\ub4c8-\uc5f0\uacb0-\ubc0f-\ud130\ubbf8\ub110-\uc2e4\ud589",children:[]},{value:"WizFi360 WiFi\uc124\uc815",id:"wizfi360-wifi\uc124\uc815",children:[]},{value:"\uc778\uc99d\uc11c \uc800\uc7a5",id:"\uc778\uc99d\uc11c-\uc800\uc7a5",children:[]},{value:"AWS\uc5d0 \uc5f0\uacb0",id:"aws\uc5d0-\uc5f0\uacb0",children:[]}]},{value:"\ub3d9\uc791 \uc608\uc81c \uacb0\uacfc",id:"\ub3d9\uc791-\uc608\uc81c-\uacb0\uacfc",children:[]}],o={rightToc:l};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\uc2dc\uc791\ud558\uae30-\uc804\uc5d0"},"\uc2dc\uc791\ud558\uae30 \uc804\uc5d0"),Object(c.b)("h3",{id:"hardware-requirement"},"Hardware Requirement"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Desktop or laptop computer"),Object(c.b)("li",{parentName:"ul"},"MicroUSB \ucf00\uc774\ube14"),Object(c.b)("li",{parentName:"ul"},"WizFi360-EVB-Shield")),Object(c.b)("h3",{id:"software-requirement"},"Software Requirement"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Preferred Serial Terminal (TeraTerm, YAT, etc.)"),Object(c.b)("li",{parentName:"ul"},"AWS Console account"),Object(c.b)("li",{parentName:"ul"},"\ubcf8 \ubb38\uc11c\uc5d0\uc11c\ub294 Firmware v.1.1.0.595\uc0ac\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4. Firmware \ubc1b\uc73c\uc2e4\ub824\uba74 \ubb38\uc758\ud574\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.")),Object(c.b)("details",{open:!0},Object(c.b)("summary",null," \uc2dc\uc791\ud558\uae30\uc804\uc5d0 AWS IoT Core \uc900\ube44\ud560\uac83"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://aws.amazon.com/ko/console/"}),Object(c.b)("strong",{parentName:"a"},"AWS Console\uc5d0 \ub85c\uadf8\uc778"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/iot/latest/developerguide/create-aws-thing.html"}),Object(c.b)("strong",{parentName:"a"},"\uc0ac\ubb3c \uc0dd\uc131"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/iot/latest/developerguide/create-device-certificate.html"}),Object(c.b)("strong",{parentName:"a"},"\uc778\uc99d\uc11c \uc0dd\uc131")),Object(c.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-important alert alert--info"}),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"}," Certificate \uc0dd\uc131\ud560\ub54c \uaf2d \uc778\uc99d\uc11c\ub97c \ub2e4\uc6b4\ud574\uc57c\ub429\ub2c8\ub2e4.\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/aws_cloud/sdk-attach-policy.png",alt:null})),"\nAWS root CA ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/iot/latest/developerguide/server-authentication.html#server-authentication-certs"}),Object(c.b)("strong",{parentName:"a"},"\uc5ec\uae30\uc11c"))," \ub2e4\uc6b4\ub85c\ub4dc \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/iot/latest/developerguide/create-iot-policy.html"}),Object(c.b)("strong",{parentName:"a"},"\uc815\ucc45 \uc0dd\uc131"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/iot/latest/developerguide/attach-policy-to-certificate.html"}),Object(c.b)("strong",{parentName:"a"},"\ub514\ubc14\uc774\uc2a4 \uc778\uc99d\uc11c\uc5d0 \uc815\ucc45 \uc5f0\uacb0"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/iot/latest/developerguide/attach-cert-thing.html"}),Object(c.b)("strong",{parentName:"a"},"\uc0ac\ubb3c\uc5d0 \uc778\uc99d\uc11c \uc5f0\uacb0"))))),Object(c.b)("h2",{id:"\uc18c\uac1c"},"\uc18c\uac1c"),Object(c.b)("p",null,"AWS IoT\uc740(\ub294) \uc778\ud130\ub137 \uc5f0\uacb0 \uc81c\ud488(\uc13c\uc11c, \uc561\ucd94\uc5d0\uc774\ud130, \ub0b4\uc7a5\ud615 \ub9c8\uc774\ud06c\ub85c \ucee8\ud2b8\ub864\ub7ec, \uc2a4\ub9c8\ud2b8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub4f1)\uacfc AWS \ud074\ub77c\uc6b0\ub4dc \uac04\uc5d0 \uc548\uc804\ud55c \uc591\ubc29\ud5a5 \ud1b5\uc2e0\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.\nAWS\uc758 \uc11c\ube44\uc2a4\uc5d0 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://wizwiki.net/wiki/doku.php/products:wizfi360:start"}),"WizFi360")," \uc744 \uc5f0\ub3d9\ud558\uc5ec \ub370\uc774\ud130\ub97c \ud074\ub77c\uc6b0\ub4dc\ub85c \uc804\uc1a1\ud558\uace0, \ubaa8\ub2c8\ud130\ub9c1 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("p",null,"\ubcf8 \ubb38\uc11c\uc5d0\uc11c\ub294 WizFi360 \uc774\uc6a9\ud558\uc5ec AWS Services\uc5d0 \uc5f0\uacb0 \ubc29\ubc95\uc5d0 \ub300\ud55c \uac00\uc774\ub4dc\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.\n\uc774 \ud504\ub85c\uc138\uc2a4\ub294 \ub2e4\uc74c \ub2e8\uacc4\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"AWS Account \uc900\ube44"),Object(c.b)("li",{parentName:"ul"},"IoT \ub514\ubc14\uc774\uc2a4 \ub4f1\ub85d"),Object(c.b)("li",{parentName:"ul"},"AWS IoT\uc640 \uc5f0\uacb0 \ubc0f \ub370\uc774\ud130 \ud1b5\uc2e0")),Object(c.b)("p",null,"WiFi\ubaa8\ub4c8 \ud14c\uc2a4\ud2b8\ub97c \uc704\ud574 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://wizwiki.net/wiki/doku.php/products:wizfi360:board:wizfi360-evb:start"}),"WizFi360-EVB-Shield")," Evaluation \ubcf4\ub4dc\ub97c \uc0ac\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/azure_cloud/mqtt_atcmd_wizfi360_required_item_1.png",alt:null}))),Object(c.b)("h2",{id:"\ub514\ubc14\uc774\uc2a4-\uc900\ube44"},"\ub514\ubc14\uc774\uc2a4 \uc900\ube44"),Object(c.b)("h3",{id:"\ud558\ub4dc\uc6e8\uc5b4-\uc124\uc815"},"\ud558\ub4dc\uc6e8\uc5b4 \uc124\uc815"),Object(c.b)("p",null,"\ubcf8 \ubb38\uc11c\uc5d0\uc11c WizFi360-EVB-Shield\uac00 standalone mode\uc5d0\uc11c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c UART\ub97c \uc704\ud574 MicroUSB\ub97c \uc0ac\uc6a9\ud560\uac81\ub2c8\ub2e4.\nMicroUSB \uc0ac\uc6a9\ud558\ub294\uacbd\uc6b0 SW1\uc744 ON \uc2dc\ud0a4\uace0 MicroUSB \uc5f0\uacb0\ud574\uc57c\ub429\ub2c8\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/azure_cloud/WizFi360EVB_SW1.JPG",alt:null}))),Object(c.b)("h3",{id:"\ub514\ubc14\uc774\uc2a4-\uc5f0\uacb0"},"\ub514\ubc14\uc774\uc2a4 \uc5f0\uacb0"),Object(c.b)("p",null,"\ud558\ub4dc\uc6e8\uc5b4 \uc124\uc815 \ud6c4 MicroUSB \uc774\uc6a9\ud558\uc5ec PC\uc640 \uc5f0\uacb0\ud569\ub2c8\ub2e4. PC\uc6b4\uc601\uccb4\uc81c\uc5d0\uc11c \ubcf4\ub4dc\uc640 \uc5f0\uacb0\ub41c COM \ud3ec\ud2b8\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\uc708\ub3c4\uc6b0 \uc6b4\uc601\uccb4\uc81c\uc758 \uacbd\uc6b0, \uc7a5\uce58 \uad00\ub9ac\uc790(Device Manager)\uc5d0\uc11c COM \ud3ec\ud2b8\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/azure_cloud/DeviceManager.JPG",alt:null}))),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\uc7a5\uce58 \uad00\ub9ac\uc790\uc5d0\uc11c COM \ud3ec\ud2b8\ub97c \ud655\uc778\ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0, \ub2e4\uc74c \ub9c1\ud06c\uc5d0\uc11c \ub4dc\ub77c\uc774\ubc84\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc5ec \uc124\uce58\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers"}),"Silicon Labs CP210x USB to UART Driver"))))),Object(c.b)("h2",{id:"at-\uba85\ub839\uc5b4"},"AT \uba85\ub839\uc5b4"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"WizFi360"),"\uc758 \uc870\uae08 \ub354 \uc0c1\uc138\ud55c ",Object(c.b)("strong",{parentName:"p"},"\uc0ac\uc6a9 \ubc29\ubc95"),"\uc740 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360qs_v113k.pdf"}),Object(c.b)("strong",{parentName:"a"},"Quick Start Guide")),", ",Object(c.b)("strong",{parentName:"p"},"AT Command"),"\ub294 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360_atset_v107.2e.pdf"}),Object(c.b)("strong",{parentName:"a"},"AT Instruction Set")),"\uc744 \ucc38\uace0 \ubc14\ub78d\ub2c8\ub2e4."),Object(c.b)("h3",{id:"1-set-ssl-certificate"},"1. Set SSL Certificate"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"AT Command:")," AT+CASEND"),Object(c.b)("p",null,"Syntax:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Set"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AT+CASEND=","<","parameter",">"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OK")))),Object(c.b)("p",null,"Defined values:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"<","parameter",">"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0: delete certificate ",Object(c.b)("br",null)," 1: generate certificate")))),Object(c.b)("p",null,"Certificate \ud655\uc778\ud558\ub824\uba74 ",Object(c.b)("strong",{parentName:"p"},"AT+CASEND?")," \uc785\ub825\ud569\ub2c8\ub2e4."),Object(c.b)("h3",{id:"2-set-private-key"},"2. Set Private Key"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"AT Command:")," AT+AWSPKSEND"),Object(c.b)("p",null,"Syntax:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Set"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AT+AWSPKSEND=","<","parameter",">"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OK")))),Object(c.b)("p",null,"Defined values:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"<","parameter",">"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0: delete private key ",Object(c.b)("br",null)," 1: save new private key")))),Object(c.b)("p",null,"Private Key \ud655\uc778\ud558\ub824\uba74 ",Object(c.b)("strong",{parentName:"p"},"AT+AWSPKSEND?")," \uc785\ub825\ud569\ub2c8\ub2e4."),Object(c.b)("h3",{id:"3-set-certificate-for-thing"},"3. Set Certificate for Thing"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"AT Command:")," AT+CLICASEND"),Object(c.b)("p",null,"Syntax:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Set"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AT+CLICASEND=","<","parameter",">"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OK")))),Object(c.b)("p",null,"Defined values:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"<","parameter",">"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0: delete Certificate ",Object(c.b)("br",null)," 1: save new certificate for Thing")))),Object(c.b)("p",null,"Certificate \ud655\uc778\ud558\ub824\uba74 ",Object(c.b)("strong",{parentName:"p"},"AT+CLICASEND?")," \uc785\ub825\ud569\ub2c8\ub2e4."),Object(c.b)("h3",{id:"4-connect-to-aws"},"4. Connect to AWS"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"AT Command:")," AT+AWSCON"),Object(c.b)("p",null,"Syntax:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Set"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'AT+AWSCON="',"<","Thing ARN",">",'"'),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CONNECT ",Object(c.b)("br",null)," OK")))),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"AWS\uc5d0 \uc811\uc18d\ud558\uae30 \uc804\uc5d0 certificates, MQTTTOPIC and MQTTSET \uc138\ud305 \ud574\uc57c \ub429\ub2c8\ub2e4.",Object(c.b)("br",null),"\n\uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 AT+AWSCON\uc5d0\uc11c \uc624\ub958\uac00 \ubc18\ud658\ub429\ub2c8\ub2e4."))),Object(c.b)("h2",{id:"\ub3d9\uc791-\uc608\uc81c"},"\ub3d9\uc791 \uc608\uc81c"),Object(c.b)("h3",{id:"\ubaa8\ub4c8-\uc5f0\uacb0-\ubc0f-\ud130\ubbf8\ub110-\uc2e4\ud589"},"\ubaa8\ub4c8 \uc5f0\uacb0 \ubc0f \ud130\ubbf8\ub110 \uc2e4\ud589"),Object(c.b)("p",null,"\ud130\ubbf8\ub110\uc5d0\uc11c \ub2e4\uc74c setting \ud574\uc11c WizFi360\uc5d0 \uc5f0\uacb0\ud569\ub2c8\ub2e4: 115200-8-N-1, None."),Object(c.b)("h3",{id:"wizfi360-wifi\uc124\uc815"},"WizFi360 WiFi\uc124\uc815"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),'//  Mode \uc124\uc815\nAT+CWMODE_CUR=1\n\n// AP list\nAT+CWLAP \n\n// AP \uc811\uc18d\nAT+CWJAP_CUR="ssid","password" \n\n// Query WizFi360 IP address\nAT+CIPSTA_CUR? \n')),Object(c.b)("h3",{id:"\uc778\uc99d\uc11c-\uc800\uc7a5"},"\uc778\uc99d\uc11c \uc800\uc7a5"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"//AWS Root CA \uc800\uc7a5\nAT+CASEND=1\n\n//Private key \uc800\uc7a5\nAT+AWSPKSEND=1\n\n//Client ceritificate \uc800\uc7a5\nAT+CLICASEND=1\n\n")),Object(c.b)("p",null,"\uc778\uc99d\uc11c \uc800\uc7a5\ud560\ub54c Begin certificate \ub77c\uc778\ubd80\ud130 End certificate \ub77c\uc778\uae4c\uc9c0 \ubcf5\uc0ac\ud574\uc11c \ub77c\uc778 \ud558\ub098\uc529 \uc785\ub825\ud574\uc57c\ub429\ub2c8\ub2e4."),Object(c.b)("p",null,"\uc544\ub798 \uadf8\ub9bc\uc5d0 \ucc38\uc870\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/aws_cloud/terminal_ca_send.gif",alt:null}))),Object(c.b)("h3",{id:"aws\uc5d0-\uc5f0\uacb0"},"AWS\uc5d0 \uc5f0\uacb0"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),'// \uc0ac\ubb3c \uc100\ub3c4\uc6b0 \uc5c5\ub370\uc774\ud2b8 \ubc0f \uc5c5\ub370\uc774\ud2b8 \uc22d\uc778 "\uc0c1\ud638 \uc791\uc6a9" \uba54\ub274\uc5d0\uc11c \ubcf5\uc0ac\ud569\ub2c8\ub2e4\nAT+MQTTTOPIC="shadow_update_link","shadow_accepted_link"\n\n// Username \ubc0f password \uc785\ub825 \uc548\ud574\ub3c4 \ub429\ub2c8\ub2e4. ClientID\ub294 \uc0ac\ubb3c\uc774\ub984\uc785\ub2c8\ub2e4 \nAT+MQTTSET="","","thing_name",60\n\n// Rest API \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \uc785\ub825\ud569\ub2c8\ub2e4\nAT+AWSCON="REST_API_endpoint" \n\n// Publish message\nAT+MQTTPUB="{"state":{"reported":{"temp":"40","led":"on"}}}"  \n\n// Disconnect from a broker\nAT+MQTTDIS \n')),Object(c.b)("details",null,Object(c.b)("summary",null,"\uc100\ub3c4\uc6b0 \ub9c1\ud06c \ubc0f \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \ubabb \ucc3e\uc73c\uba74 \ud074\ub9ad"),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"AWS IoT -> \uad00\ub9ac -> \uc0ac\ubb3c -> ",Object(c.b)("strong",{parentName:"p"},"\uc0ac\ubb3c \uc774\ub984")," -> \uc0c1\ud638 \uc791\uc6a9.",Object(c.b)("br",null),"\n\uc544\ub798 \uadf8\ub9bc \ucc38\uc870\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."))),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/aws_cloud/aws_shadow_interact.PNG",alt:null})))),Object(c.b)("br",null),Object(c.b)("p",null,"\uc544\ub798 \ud130\ubbf8\ub110 screenshot \ucc38\uc870\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/aws_cloud/token2shell.PNG",alt:null}))),Object(c.b)("h2",{id:"\ub3d9\uc791-\uc608\uc81c-\uacb0\uacfc"},"\ub3d9\uc791 \uc608\uc81c \uacb0\uacfc"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\ub3d9\uc791 \uc608\uc81c \uacb0\uacfc AWS -> AWS IoT -> \uad00\ub9ac -> \uc0ac\ubb3c -> \uc100\ub3c4\uc6b0 \uba54\ub274\uc5d0\uc11c \ud655\uc778 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("li",{parentName:"ol"},'MQTTSET\uc5d0\uc11c "\uc5c5\ub370\uc774\ud2b8 \uc22d\uc778" topic\uc5d0 subscribe \ub418\uc5b4\uc11c MQTT \uba54\uc2dc\uc9c0 \uc804\uc1a1\ud560 \ub54c \ubc14\ub85c \uacb0\uacfc \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.')),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/aws_cloud/aws_shadow.PNG",alt:null}))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\ucd95\ud558\ud569\ub2c8\ub2e4")),Object(c.b)("p",null,"\uc774\uc81c AWS\uc5d0 \uc5f0\uacb0 \ubc0f MQTT \uba54\uc2dc\uc9c0 \uc804\uc1a1 \ub9c8\ucce4\uc2b5\ub2c8\ub2e4."))}p.isMDXComponent=!0},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),b=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),p=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},m=function(e){var t=p(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,j=m["".concat(r,".").concat(d)]||m[d]||O[d]||c;return a?b.a.createElement(j,i({ref:t},o,{components:a})):b.a.createElement(j,i({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,r=new Array(c);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var o=2;o<c;o++)r[o]=a[o];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);