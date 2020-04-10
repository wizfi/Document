(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{171:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(1),c=a(9),r=(a(0),a(186)),i={id:"standalone_aws_atcmd",title:"Connect WizFi360 to AWS IoT using AT Command",sidebar_label:"Standalone AT Cmd",keywords:["WizFi360","AWS"]},b={id:"connect_to_cloud/standalone_aws_atcmd",title:"Connect WizFi360 to AWS IoT using AT Command",description:"## Getting Started\r",source:"@site/docs\\connect_to_cloud\\standalone_aws_atcmd.md",permalink:"/docs/connect_to_cloud/standalone_aws_atcmd",editUrl:"https://github.com/wizfi/Document/tree/master/docs/connect_to_cloud/standalone_aws_atcmd.md",sidebar_label:"Standalone AT Cmd",sidebar:"docs",previous:{title:"Connect to Azure IoT Hub using WizFi360 MQTT AT Command",permalink:"/docs/connect_to_cloud/arduino_mqtt_e"},next:{title:"WizFi360 AT Command\ub97c \uc774\uc6a9\ud558\uc5ec AWS IoT\uc5d0 \uc5f0\uacb0",permalink:"/docs/connect_to_cloud/standalone_aws_atcmd_kr"}},o=[{value:"Getting Started",id:"getting-started",children:[{value:"Hardware Requirement",id:"hardware-requirement",children:[]},{value:"Software Requirement",id:"software-requirement",children:[]}]},{value:"Introduction",id:"introduction",children:[]},{value:"Device preparation",id:"device-preparation",children:[{value:"Hardware setting",id:"hardware-setting",children:[]},{value:"Device connection",id:"device-connection",children:[]}]},{value:"AT Commands Description",id:"at-commands-description",children:[{value:"1. Set SSL Certificate",id:"1-set-ssl-certificate",children:[]},{value:"2. Set Private Key",id:"2-set-private-key",children:[]},{value:"3. Set Certificate for Thing",id:"3-set-certificate-for-thing",children:[]},{value:"4. Connect to AWS",id:"4-connect-to-aws",children:[]}]},{value:"Connection procedure",id:"connection-procedure",children:[{value:"Connect your device and launch terminal",id:"connect-your-device-and-launch-terminal",children:[]},{value:"Connect WizFi360 to WiFi",id:"connect-wizfi360-to-wifi",children:[]},{value:"Enter Certificate",id:"enter-certificate",children:[]},{value:"Connection to AWS",id:"connection-to-aws",children:[]}]},{value:"Results",id:"results",children:[]}],l={rightToc:o};function d(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("h3",{id:"hardware-requirement"},"Hardware Requirement"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Desktop or laptop computer"),Object(r.b)("li",{parentName:"ul"},"MicroUSB cable"),Object(r.b)("li",{parentName:"ul"},"WizFi360-EVB-Shield")),Object(r.b)("h3",{id:"software-requirement"},"Software Requirement"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Preferred Serial Terminal (TeraTerm, YAT, etc.)"),Object(r.b)("li",{parentName:"ul"},"AWS Console account"),Object(r.b)("li",{parentName:"ul"},"Firmware v. 1.1.0.595 was used in this guide. Please contact us to receive this version.")),Object(r.b)("details",{open:!0},Object(r.b)("summary",null," AWS IoT Core preparation before start"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://aws.amazon.com/ko/console/"}),Object(r.b)("strong",{parentName:"a"},"Sign to console"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/iot/latest/developerguide/create-aws-thing.html"}),Object(r.b)("strong",{parentName:"a"},"Create a thing"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/iot/latest/developerguide/create-device-certificate.html"}),Object(r.b)("strong",{parentName:"a"},"Create certificate")),Object(r.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-important alert alert--info"}),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"}," Save certificates and key during creation.\n",Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/aws_cloud/sdk-attach-policy.png",alt:null})),"\nAWS root CA can be downloaded from ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/iot/latest/developerguide/server-authentication.html#server-authentication-certs"}),Object(r.b)("strong",{parentName:"a"},"here")))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/iot/latest/developerguide/create-iot-policy.html"}),Object(r.b)("strong",{parentName:"a"},"Create a policy"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/iot/latest/developerguide/attach-policy-to-certificate.html"}),Object(r.b)("strong",{parentName:"a"},"Attach policy to certificate"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/iot/latest/developerguide/attach-cert-thing.html"}),Object(r.b)("strong",{parentName:"a"},"Attach certificate to a thing"))))),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"AWS IoT provides secure, bi-directional communication between Internet-connected devices such as sensors, actuators, embedded micro-controllers, or smart appliances and the AWS Cloud.\nIt is possible to connect to AWS via ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://wizwiki.net/wiki/doku.php/products:wizfi360:start"}),"WizFi360")," and send data using MQTT."),Object(r.b)("p",null,"In this document we will provide guide how to connect to AWS services.\nProcess consists of following steps:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Creation of AWS account"),Object(r.b)("li",{parentName:"ul"},"Creation & configuration of Thing in IoT Core"),Object(r.b)("li",{parentName:"ul"},"Connection & Message transfer")),Object(r.b)("p",null,"For this guide we used evaluation board ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://wizwiki.net/wiki/doku.php/products:wizfi360:board:wizfi360-evb:start"}),"WizFi360-EVB-Shield")),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/azure_cloud/mqtt_atcmd_wizfi360_required_item_1.png",alt:null}))),Object(r.b)("h2",{id:"device-preparation"},"Device preparation"),Object(r.b)("h3",{id:"hardware-setting"},"Hardware setting"),Object(r.b)("p",null,"We are going to use WizFi360-EVB-Shield in standalone mode. MicroUSB cable will be used to connect through UART.\nSwitch SW1 into ON position and connect MicroUSB."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/azure_cloud/WizFi360EVB_SW1.JPG",alt:null}))),Object(r.b)("h3",{id:"device-connection"},"Device connection"),Object(r.b)("p",null,"Please check COM port number in Device Manager."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/azure_cloud/DeviceManager.JPG",alt:null}))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If COM port cannot be found in Device Manager, please install drivers below."),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers"}),"Silicon Labs CP210x USB to UART Driver"))))),Object(r.b)("h2",{id:"at-commands-description"},"AT Commands Description"),Object(r.b)("p",null,"Please refer to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360_atset_v107.2e.pdf"}),"AT Instruction Set")," to find information about all AT Commands.\nBelow we will describe commands created for AWS connection."),Object(r.b)("h3",{id:"1-set-ssl-certificate"},"1. Set SSL Certificate"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"AT Command:")," AT+CASEND"),Object(r.b)("p",null,"Syntax:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Set"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AT+CASEND=","<","parameter",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OK")))),Object(r.b)("p",null,"Defined values:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"<","parameter",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0: delete certificate ",Object(r.b)("br",null)," 1: generate certificate")))),Object(r.b)("p",null,"In order to check current certificate enter command ",Object(r.b)("strong",{parentName:"p"},"AT+CASEND?")),Object(r.b)("h3",{id:"2-set-private-key"},"2. Set Private Key"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"AT Command:")," AT+AWSPKSEND"),Object(r.b)("p",null,"Syntax:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Set"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AT+AWSPKSEND=","<","parameter",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OK")))),Object(r.b)("p",null,"Defined values:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"<","parameter",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0: delete private key ",Object(r.b)("br",null)," 1: save new private key")))),Object(r.b)("p",null,"In order to check current key enter command ",Object(r.b)("strong",{parentName:"p"},"AT+AWSPKSEND?")),Object(r.b)("h3",{id:"3-set-certificate-for-thing"},"3. Set Certificate for Thing"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"AT Command:")," AT+CLICASEND"),Object(r.b)("p",null,"Syntax:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Set"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"AT+CLICASEND=","<","parameter",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OK")))),Object(r.b)("p",null,"Defined values:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"<","parameter",">"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0: delete Certificate ",Object(r.b)("br",null)," 1: save new certificate for Thing")))),Object(r.b)("p",null,"In order to check current certificate enter command ",Object(r.b)("strong",{parentName:"p"},"AT+CLICASEND?")),Object(r.b)("h3",{id:"4-connect-to-aws"},"4. Connect to AWS"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"AT Command:")," AT+AWSCON"),Object(r.b)("p",null,"Syntax:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Command"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Set"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'AT+AWSCON="',"<","Thing ARN",">",'"'),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CONNECT ",Object(r.b)("br",null)," OK")))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Before connection to AWS certificates, MQTTTOPIC and MQTTSET shall be set.",Object(r.b)("br",null),"\nOtherwise AT+AWSCON will return error."))),Object(r.b)("h2",{id:"connection-procedure"},"Connection procedure"),Object(r.b)("h3",{id:"connect-your-device-and-launch-terminal"},"Connect your device and launch terminal"),Object(r.b)("p",null,"For connection use following configuration in terminal: 115200-8-N-1, None."),Object(r.b)("h3",{id:"connect-wizfi360-to-wifi"},"Connect WizFi360 to WiFi"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),'// Set module to station mode\nAT+CWMODE_CUR=1\n\n// Get AP list\nAT+CWLAP \n\n// Connect to AP\nAT+CWJAP_CUR="ssid","password" \n\n// Query WizFi360 IP address\nAT+CIPSTA_CUR? \n')),Object(r.b)("h3",{id:"enter-certificate"},"Enter Certificate"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"//Enter AWS Root CA\nAT+CASEND=1\n\n//Enter Private key\nAT+AWSPKSEND=1\n\n//Enter Client ceritificate\nAT+CLICASEND=1\n\n")),Object(r.b)("p",null,'When saving certificate or private key, all lines shall be sent one by one from "Begin certificate" line till "End certificate" line.'),Object(r.b)("p",null,"Please refer to below image.\n",Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/aws_cloud/terminal_ca_send.gif",alt:null}))),Object(r.b)("h3",{id:"connection-to-aws"},"Connection to AWS"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),'// Shadow update and accepted links  should be copied from "Interact" menu in AWS Console\nAT+MQTTTOPIC="shadow_update_link","shadow_accepted_link"\n\n// User & password can be empty, thing name shall be entered \nAT+MQTTSET="","","thing_name",60\n\n// Type your Rest API endpoint\nAT+AWSCON="REST_API_endpoint" \n\n// Publish message\nAT+MQTTPUB="{"state":{"reported":{"temp":"40","led":"on"}}}"  \n\n// Disconnect from a broker\nAT+MQTTDIS \n')),Object(r.b)("details",null,Object(r.b)("summary",null,"Can't find shadow links & Rest API endpoint? (Click here)"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Go to AWS IoT -> Manage -> Things -> ",Object(r.b)("strong",{parentName:"p"},"Your thing")," -> Interact menu.",Object(r.b)("br",null),"\nCheck screenshot below."))),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/aws_cloud/aws_shadow_interact.PNG",alt:null})))),Object(r.b)("br",null),"Below is screenshot from terminal",Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/aws_cloud/token2shell.PNG",alt:null}))),Object(r.b)("h2",{id:"results"},"Results"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Results can be checked in AWS -> AWS IoT -> Manage -> Things -> Shadow."),Object(r.b)("li",{parentName:"ol"},'Since we subscribed to "updated" topic, when MQTT message is sent we can see reply message instantly.')),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/aws_cloud/aws_shadow.PNG",alt:null}))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Congratulations")),Object(r.b)("p",null,"WizFi360 is successfully connected to AWS!"))}d.isMDXComponent=!0},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var l=c.a.createContext({}),d=function(e){var t=c.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},p=function(e){var t=d(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=d(a),s=n,O=p["".concat(i,".").concat(s)]||p[s]||m[s]||r;return a?c.a.createElement(O,b({ref:t},l,{components:a})):c.a.createElement(O,b({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var l=2;l<r;l++)i[l]=a[l];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);