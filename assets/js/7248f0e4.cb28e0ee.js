(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1298],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return s}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),s=a,k=d["".concat(u,".").concat(s)]||d[s]||m[s]||o;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6599:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(4034),a=r(9973),o=(r(7294),r(3905)),i={id:"mbed_mqtt_e",title:"Connect to Azure IoT Hub using WizFi360 MQTT AT Command",sidebar_label:"Mbed MQTT Cmd",keywords:["WizFi360","Mbed"]},l={unversionedId:"connect_to_cloud/mbed_mqtt_e",id:"connect_to_cloud/mbed_mqtt_e",isDocsHomePage:!1,title:"Connect to Azure IoT Hub using WizFi360 MQTT AT Command",description:"Getting started",source:"@site/docs/connect_to_cloud/mbed_mqtt_atcmd_e.md",sourceDirName:"connect_to_cloud",slug:"/connect_to_cloud/mbed_mqtt_e",permalink:"/Document/docs/connect_to_cloud/mbed_mqtt_e",editUrl:"https://github.com/wizfi/Document/tree/master/docs/connect_to_cloud/mbed_mqtt_atcmd_e.md",version:"current",sidebar_label:"Mbed MQTT Cmd",frontMatter:{id:"mbed_mqtt_e",title:"Connect to Azure IoT Hub using WizFi360 MQTT AT Command",sidebar_label:"Mbed MQTT Cmd",keywords:["WizFi360","Mbed"]},sidebar:"docs",previous:{title:"WizFi360 MQTT AT Command\ub97c \uc774\uc6a9\ud55c Azure IoT Hub \uc5f0\ub3d9 \uc608\uc81c",permalink:"/Document/docs/connect_to_cloud/mbed_mqtt"},next:{title:"NUCLEO-L476RG + WizFi360 Azure AT Command\ub97c \uc774\uc6a9\ud558\uc5ec Azure IoT Hub\uc5d0 \uc5f0\uacb0",permalink:"/Document/docs/connect_to_cloud/mbed_atcmd"}},u=[{value:"Getting started",id:"getting-started",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Step 1: Required items",id:"step-1-required-items",children:[{value:"Hadrware",id:"hadrware",children:[]},{value:"Software",id:"software",children:[]}]},{value:"Step 2: Device preparation",id:"step-2-device-preparation",children:[{value:"1. Hardware preparation",id:"1-hardware-preparation",children:[]},{value:"2. Device connection",id:"2-device-connection",children:[]}]},{value:"Step 3: Sample application",id:"step-3-sample-application",children:[{value:"1. Code Download &amp; Execution",id:"1-code-download--execution",children:[]},{value:"2. Parameter update",id:"2-parameter-update",children:[]},{value:"3. Project Build &amp; Run",id:"3-project-build--run",children:[]}]},{value:"Step 4: Results",id:"step-4-results",children:[]},{value:"References",id:"references",children:[]}],c={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Login to ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/"},(0,o.kt)("strong",{parentName:"a"},"Azure Portal")),"."),(0,o.kt)("p",{parentName:"blockquote"},"\u203b In this guide we will procedd with ",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/ko-kr/free/"},(0,o.kt)("strong",{parentName:"a"},"free account")),".\nTo learn how to create IoT Hub please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud"},"Azure Cloud Service Introduction"),"."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/ko-kr/azure/iot-hub/iot-hub-create-through-portal"},"[MS] Create IoT Hub using Azure Portal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/create_blob_storage_through_azure_portal.md"},"Create Blob storage using Azure Portal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/create_stream_analytics_through_azure_portal.md"},"Create Stream Analytics using Azure Portal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/configure_stream_analytics_job_input_output_and_define_the_transformation_query_through_azure_portal.md"},"Setup Queries in Stream Analytics using Azure Portal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/azure-iot-kr/blob/master/docs/IoT_device/Connectivities/Wi-Fi/standalone_mqtt_atcmd_wizfi360.md"},"Connect to Azure IoT Hub using WizFi360 MQTT AT Command")))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"It is possible to connect to ",(0,o.kt)("strong",{parentName:"p"},"Microsoft Azure Service")," using ",(0,o.kt)("strong",{parentName:"p"},"WizFi360"),", send data to cloud and monitor current status."),(0,o.kt)("p",null,"Data communication will be established as following."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/mqtt_data_communication_structure.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MQTT AT Commands")," will be used to connect to IoT Hub Service & send data."),(0,o.kt)("p",null,"Data sent to IoT Hub will be saved in Blob Storage through Stream Analytics."),(0,o.kt)("p",null,"In this guide we will use WizFi360 with ",(0,o.kt)("a",{parentName:"p",href:"https://www.mbed.com/en/"},"Mbed")," to connect to Microsoft Azure Services using MQTT AT Command."),(0,o.kt)("h2",{id:"step-1-required-items"},"Step 1: Required items"),(0,o.kt)("p",null,"Items below are required for this guide."),(0,o.kt)("h3",{id:"hadrware"},"Hadrware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Desktop or Laptop Computer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://wizwiki.net/wiki/doku.php/products:wizfi360:start"},"WizFi360-EVB-Shield"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://os.mbed.com/platforms/ST-Nucleo-L476RG/"},"NUCLEO-L476RG"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Mini USB Cable"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/mqtt_atcmd_wizfi360_required_item_2.png",alt:null})))),(0,o.kt)("h3",{id:"software"},"Software"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://os.mbed.com/studio/"},"Mbed Studio")),(0,o.kt)("li",{parentName:"ul"},"Preferred Serial Terminal (TeraTerm, Hercules, etc . . .)")),(0,o.kt)("h2",{id:"step-2-device-preparation"},"Step 2: Device preparation"),(0,o.kt)("h3",{id:"1-hardware-preparation"},"1. Hardware preparation"),(0,o.kt)("p",null,"WizFi360-EVB-Shield will be installed on top of NUCLEO-L476RG. Therefore DIP Switch and jumper cables shall be connected as following:"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"SW1 : Off"),(0,o.kt)("li",{parentName:"ul"},"SW2 : Off"),(0,o.kt)("li",{parentName:"ul"},"SW3 : On"),(0,o.kt)("li",{parentName:"ul"},"D2 : UART Tx"),(0,o.kt)("li",{parentName:"ul"},"D8 : UART Rx"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/set_wizfi360_evb_shield_dip_sw_2.png",alt:null})),(0,o.kt)("h3",{id:"2-device-connection"},"2. Device connection"),(0,o.kt)("p",null,"After connecting hardware, connect NUCLEO-L476RG to Desktop or Laptop using USB Cable."),(0,o.kt)("p",null,"Check ",(0,o.kt)("strong",{parentName:"p"},"COM Port")," from ",(0,o.kt)("strong",{parentName:"p"},"Device Manager"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If COM port cannot be found in Device manager, check link below and follow instructions."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.st.com/en/development-tools/stsw-link009.html"},"ST-LINK, ST-LINK/V2, ST-LINK/V2-1 USB driver")))),(0,o.kt)("h2",{id:"step-3-sample-application"},"Step 3: Sample application"),(0,o.kt)("h3",{id:"1-code-download--execution"},"1. Code Download & Execution"),(0,o.kt)("p",null,"After code download, open project by selecting ",(0,o.kt)("strong",{parentName:"p"},"File")," > ",(0,o.kt)("strong",{parentName:"p"},"Open Workspace"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Sample code is stored in following path."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"samples/Wi-Fi/Mbed_Mqtt_Atcmd_Wizfi360"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"samples/Wi-Fi/Mbed_Mqtt_Atcmd_Wizfi360_Azure_C_Shared_Utility")))),(0,o.kt)("p",{parentName:"blockquote"},"In case of ",(0,o.kt)("strong",{parentName:"p"},"Mbed_Mqtt_Atcmd_Wizfi360")," SAS Token was created using Device Explorer or Azure IoT Explorer."),(0,o.kt)("p",{parentName:"blockquote"},"In case of ",(0,o.kt)("strong",{parentName:"p"},"Mbed_Mqtt_Atcmd_Wizfi360_Azure_C_Shared_Utility")," there is no need to create SAS Token separately as azure_c_shared_utility Library was ported into Project.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/execute_project_through_mbed_studio_1.png",alt:null})),(0,o.kt)("h3",{id:"2-parameter-update"},"2. Parameter update"),(0,o.kt)("p",null,"To connect to Azure IoT Hub, update next parameters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'/* Wi-Fi info */\nchar ssid[] = "xxxxxxxxxx";\nchar password[] = "xxxxxxxxxx";\n\n/* MQTT info */\nint alive_time = xx;    // range : 30 ~ 300\n\n/* Azure info */\nchar hub_name[] = "xxxxxxxxxx";\nchar host_name[] = "xxxxxxxxxx";\nchar device_id[] = "xxxxxxxxxx";\nchar device_key[] = "xxxxxxxxxx";\nchar sas_token[] = "xxxxxxxxxx";\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/execute_project_through_mbed_studio_2.png",alt:null})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For ",(0,o.kt)("strong",{parentName:"p"},"SAS Token creation")," refer to below."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud/create_sas_token_through_device_explorer.md"},"Create SAS Token using Device Explorer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud/create_sas_token_through_azure_iot_explorer.md"},"Create SAS Token using Azure IoT Explore")))),(0,o.kt)("h3",{id:"3-project-build--run"},"3. Project Build & Run"),(0,o.kt)("p",null,"Press ",(0,o.kt)("strong",{parentName:"p"},"Run Program")," to Project Build & Run."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note :"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Start Stream Analytics")," in order to forward data to Blob Storage.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/execute_project_through_mbed_studio_3.png",alt:null})),(0,o.kt)("h2",{id:"step-4-results"},"Step 4: Results"),(0,o.kt)("p",null,"In terminal program we can check data sent from WizFi360 to Azure IoT Hub. In Blob Storage we can check received data."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/result_execute_project_through_mbed_studio_1.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/result_execute_project_through_mbed_studio_2.png",alt:null})),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/azure-iot-kr/blob/master/docs/IoT_device/Connectivities/Wi-Fi/standalone_mqtt_atcmd_wizfi360.md"},"Connect to Azure IoT Hub using WizFi360 MQTT AT Command"))))}p.isMDXComponent=!0}}]);