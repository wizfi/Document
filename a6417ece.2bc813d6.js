(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{166:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return O}));var n=a(1),b=a(9),r=(a(0),a(186)),l={id:"hardware_design",title:"Hardware Design Guide",sidebar_label:"Hardware Design Guide",keywords:["WizFi360","hardware design"]},i={id:"basic_guides/hardware_design",title:"Hardware Design Guide",description:"## Overview\r",source:"@site/docs\\basic_guides\\hardware_design.md",permalink:"/Document/docs/basic_guides/hardware_design",editUrl:"https://github.com/wizfi/Document/docs/basic_guides/hardware_design.md",sidebar_label:"Hardware Design Guide",sidebar:"docs",previous:{title:"MQTT Client",permalink:"/Document/docs/basic_guides/mqtt_client"},next:{title:"HTTP Client using WizFi360",permalink:"/Document/docs/basic_guides/http_client"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Pin definition",id:"pin-definition",children:[{value:"Initial value of GPIO Pins",id:"initial-value-of-gpio-pins",children:[]}]},{value:"Circuit",id:"circuit",children:[{value:"System",id:"system",children:[]},{value:"Power",id:"power",children:[]},{value:"UART",id:"uart",children:[]},{value:"ETC",id:"etc",children:[]}]},{value:"PCB Footprint",id:"pcb-footprint",children:[]},{value:"PCB Layout",id:"pcb-layout",children:[]}],o={rightToc:c};function O(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"If you are designing hardware using the WizFi360 please refer to this document."),Object(r.b)("p",null,"This document includes a reference circuit diagram and a PCB guide."),Object(r.b)("h2",{id:"pin-definition"},"Pin definition"),Object(r.b)("p",null,"Figure 1. WizFi360 Pinout"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/basic_guides/spi_guide/wizfi360_pinout.png",alt:null}))),Object(r.b)("p",null,"Table 1. Pin Definitions"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Pin Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Pin Function"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RST"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Module Reset Pin (Active Low)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NC"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WizFi360-PA\tReserved")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ANT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WizFi360-CON\tANT pin for external antenna")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PA0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BOOT Pin (Active low) ",Object(r.b)("br",null)," When power on or reset is low, it operates in Boot mode. ",Object(r.b)("br",null)," In the normal operating mode, this pin can be controlled by AT command.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WP"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WAKEUP Pin (Active High) ",Object(r.b)("br",null)," If the wake-up pin is high in Standby mode, the WizFi360 is reset to the normal operating mode.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PA1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pull down over 3s for taking effect. ",Object(r.b)("br",null)," UART1's current parameter changes to default value (please refer to the AT+UART_CUR command in WizFi360 AT command manual).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB6"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This pin can be controlled by AT command.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB9"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CTS Pin of UART1 ",Object(r.b)("br",null)," If you don't use the CTS function, this pin can be controlled by AT command.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VCC"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"P"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Power Pin (Typical Value 3.3V)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB15"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This pin can be controlled by AT command.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB18"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This pin can be controlled by AT command.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB13"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This pin can be controlled by AT command.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB14"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This pin can be controlled by AT command.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB17"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This pin can be controlled by AT command.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB16"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This pin can be controlled by AT command.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GND"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ground Pin")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB10"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RTS Pin of UART1 ",Object(r.b)("br",null)," If you don't use the RTS function, this pin can be controlled by AT command.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TXD0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TXD Pin of UART0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RXD0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RXD Pin of UART0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB7"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LED Light output (Active low). Go to Low while each TX/RX packet and then back to high. ",Object(r.b)("br",null),"Note: It has been connected to onboard LED for WizFi360-PA")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB8"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This pin can be controlled by AT command.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RXD1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RXD Pin of UART1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TXD1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TXD Pin of UART1")))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"UART1 is used for AT command and data communication. UART0 is used for debugging and firmware upgrade."))),Object(r.b)("h3",{id:"initial-value-of-gpio-pins"},"Initial value of GPIO Pins"),Object(r.b)("p",null,"This is the initial value of GPIO when using AT command to use GPIO on WizFi360."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Pin Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Pull up/down"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PA0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"High"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pull up")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB6"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Low"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pull down")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB9"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Low"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pull down")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB15"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"High"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pull down")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB18"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"High"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pull down")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB13"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"High"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pull down")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB14"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"High"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pull down")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB17"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"High"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pull down")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB16"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"High"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pull down")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB10"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Low"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pull down")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB07"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"High"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pull down")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PB08"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I/O"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"High"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pull down")))),Object(r.b)("h2",{id:"circuit"},"Circuit"),Object(r.b)("h3",{id:"system"},"System"),Object(r.b)("p",null,"The WizFi360 has a very simple circuit. You can connect power to the WizFi360 and send and receive data through UART1. Please pay attention to four pins."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/basic_guides/hardware_design/reference_schematic.png",alt:"Figure 2. Reference Schematic"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Reset")," ",Object(r.b)("br",null),"\nReset circuit offers to design with RC circuit. WizFi360 reset automatically by low level power. If RESET pin controlled by external circuit, the WizFi360 will reset when the level is below 2.0V. The low level needs to last more than 100\xb5s."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PA0")," ",Object(r.b)("br",null),"\nPA0 circuit offers to design 10k pull-up. PA0 is used as a boot pin, but it's use unlikely for normal users. This pin is used at the factory stage. (Module production)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PA1")," ",Object(r.b)("br",null),"\nPA1 circuit offers to design 10k pull-up. If PA1 is Low for 3 seconds, UART1's current parameter changes to default value (please refer to the AT+UART_CUR command in WizFi360 AT command manual)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"WP")," ",Object(r.b)("br",null),"\nWP circuit offers to design user configuration. You must control this pin if you are using standby mode. If this pin is high in Standby mode, the WizFi360 is reset to the normal operating mode.")),Object(r.b)("h3",{id:"power"},"Power"),Object(r.b)("p",null,"WizFi360 requires the use of a power supply capable of supplying 3.0V to 3.6V and more than 500mA. Because WizFi360 operates normally from 3.0V to 3.6V, it consumes up to 230mA of instantaneous current. The wiring width should not be less than 30mil.\nThe power stabilizing capacitor (100nF) should be placed close to the VCC pin."),Object(r.b)("h3",{id:"uart"},"UART"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/basic_guides/hardware_design/uart.png",alt:"Figure 3. UART"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"UART1 ",Object(r.b)("br",null),"\nUART1 is the main communication UART. AT command communication is possible with UART1 and data communication is possible."),Object(r.b)("li",{parentName:"ul"},"UART0 ",Object(r.b)("br",null),"\nUART0 is not available to normal users. This UART is used at the factory stage (Module production) and intended for internal firmware developers of the WizFi360.")),Object(r.b)("h3",{id:"etc"},"ETC"),Object(r.b)("p",null,"This session is an additional circuit guide for using the WizFi360. You don't have to keep this session. But if you need it, you design it."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"UART Flow Control")," ",Object(r.b)("br",null),"\nIf you want to use UART Flow Control, you need to design a circuit as shown in Figure 3. PB9 is CTS1, PB10 is RTS1.")),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/basic_guides/hardware_design/uart_flow_control.png",alt:"Figure 4. UART Flow Control"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"UART Level Shifter")," ",Object(r.b)("br",null),"\nThe UART voltage on the WizFi360 is 3.3V. However, your MCU may not have a voltage of 3.3V. If so you need a Level Shifter to connect the WizFi360 to your MCU. You can design a Level Shifter circuit by referring to Figure 4. Connect your MCU\u2019s UART voltage to the VCCIO at Figure 4.")),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/basic_guides/hardware_design/uart_level_shifter.png",alt:"Figure 5. UART Level Shifter"}))),Object(r.b)("h2",{id:"pcb-footprint"},"PCB Footprint"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/basic_guides/hardware_design/pcb_land_pattern.png",alt:"Figure 6. Recommended PCB Land Pattern of WizFi360"}))),Object(r.b)("h2",{id:"pcb-layout"},"PCB Layout"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Power wiring width should not be less than 30mil."),Object(r.b)("li",{parentName:"ul"},"Except for the antenna portion of WizFi360, the bottom layer of the shield can must have a GND plane.")),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/basic_guides/hardware_design/gnd.png",alt:"Figure 7. GND"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Figures. 6 and Figures. 7 are 2 antenna placement which can best performance of antenna. We suggest customers to choose one of these 2 modes to design the placement. For the second placement mode, PCB antenna should be at least 5.0mm from both sides of the bottom board.")),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/basic_guides/hardware_design/best_placement_1.png",alt:"Figure 8. Best Placement 1"}))),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/basic_guides/hardware_design/best_placement_2.png",alt:"Figure 9. Best Placement 2"}))))}O.isMDXComponent=!0},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),O=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},u=function(e){var t=O(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=O(a),j=n,p=u["".concat(l,".").concat(j)]||u[j]||d[j]||r;return a?b.a.createElement(p,i({ref:t},o,{components:a})):b.a.createElement(p,i({ref:t},o))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=j;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<r;o++)l[o]=a[o];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);