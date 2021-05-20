---
id: quickstart
title: Quickstart Guide
sidebar_label: Quickstart
keywords: 
    - WizFi360
---

## Environment setting

There are two types of WizFi360-EVB, which can be classified as ‘Shield’ and ‘Mini’ versions. WizFi360 is controlled by sending AT command through UART. WizFi360-EVB-Mini and WizFi360-EVB-Shield uses UART1 by connecting Micro USB.

WizFi360-EVB-Mini|  WizFi360-EVB-Shield
:-------------------------:|:-------------------------:|
![WizFi360-CON](/img/WizFi360-mini.png) | ![WizFi360-PA](/img/img_evb_mini.png)|

In addition, WizFi360-EVB-Shield is Pin compatible with Arduino. So you can use UART in two cases. If you use Micro USB, turn SW1 ON and connect Micro USB. In case of using Arduino H/W compatible pin, turn SW1 OFF and select RXD / TXD pin for Arduino using jumper cap. See the figure below.

| Micro USB | Arduino H/W compatible pin | 
:-------------------------:|:-------------------------:|
![WizFi360-CON](/img/basic_guides/quickstart/quickstart_microusb.png) | ![WizFi360-PA](/img/basic_guides/quickstart/quickstart_arduino.png)|

If WizFi360-EVB-Shield or WizFi360-EVB-Mini is connected to a PC with a Mini USB Cable, run the serial program for UART communication on the PC. Open Port in Serial Program and input AT. If WizFi360 return OK, AT command can be used.

![](/img/basic_guides/quickstart/quickstart_terminal.png)

## TCP CLient Example

A brief AT command describe for operating of WizFi360 as TCP Client in single connection mode. If you need AT command example of another mode, see the documentation called ["AT command examples"](https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360atcomex_v103e.pdf)

Open TCP Server from PC which is connected to the same WiFi AP that WizFi360 is connected to. (*IP : 192.168.10.100  Port : 5000*)

````cpp
//Set WizFi Station mode
AT+CWMODE_CUR=1 //Station mode, in case of AT+CWMODE_DEF, it is stored in flash.
OK

//Set Single Connection Mode
AT+CIPMUX=0
OK

//Set DHCP enable
AT+CWDHCP_CUR=1,1
OK

//Get possible WiFi AP list for WizFi360 connection
AT+CWLAP
+CWLAP:(3,"ssid",-5,"mac address",1,1)

//Connect to WiFi AP
AT+CWJAP_CUR="ssid","password"
WIFI CONNECTED
WIFI GOT IP

OK

//Query WizFi360 device' IP address
AT+CIPSTA_CUR?
+CIPSTA_CUR:ip:"192.168.10.13"
+CIPSTA_CUR:gateway:"192.168.10.1"
+CIPSTA_CUR:network:"255.255.255.0"

OK

//Connect to TCP server as client
AT+CIPSTART="TCP","192.168.10.100",5000    //protocol, server IP, port
CONNECT

OK

//WizFi360 sends data to the TCP Server
AT+CIPSEND=10    //set data length, such as 10 bytes. 
OK
>  // return ">" to begin receiving of serial data.
1234567890    //enter the data, no <CR><LF>

Recv 10 bytes

SEND OK 

//When WizFi360 received data from TCP Server, it will prompt message below:
+IPD,10:1234567890

//End the TCP Connection
AT+CIPCLOSE
CLOSED 

OK

````

:::important
In normal transmission mode, there are three commands to send data. (For more details, refer to AT Instruction set.)
1. AT+CIPSEND
2. AT+CIPSENDBUF
3. AT+CIPSENDEX

In AT+CIPSEND and AT+CIPSENDEX, If the data is entered more than the length set (n) :
- the system will send the first n bytes and discard exceeded data.

In AT+CIPSENDBUF, If the data is entered more than the length set (n) :
- the system will reply busy and send the first n bytes
- and discard exceeded data.

:::