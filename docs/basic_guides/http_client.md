---
id: http_client
title: HTTP Client using WizFi360
sidebar_label: HTTP Client
---

## Introduction

HTTP(Hypertext transfer protocol) is a communication protocol for exchanging data between server and client on the Web. HTTP exchanges data in the form that the client sends the request and the server sends the reply to the request. At this time, Server transmits response such as HTML, JSON, etc., and uses port 80. HTTP is a TCP-based protocol. WizFi360 can communicate the HTTP communication by creating TCP Server. The HTTP protocol must be implemented by the user.

## Hardware environment

This document uses Arduino Mega2560 and WizFi360-EVB-Shield. To communicate with the WizFi360-EVB-Shield using UART1 in the Arduino Code, connect the TX1 and RX1 pins of Arduino to the RXD and TXD pins of the WizFi360-EVB-Shield. In the WizFi360-EVB-Shield, change the RXD / TXD Selector to OFF to enable UART communication via the pin, not the USB.

You can also use D0 ~ D8 Pin as TXD / RXD Pin by using UART Select Pin header. If you use it, you can connect without Wiring by placing WizFi360-EVB-Shield on Arduino. 

![](/Document/img/basic_guides/http_client/http_client.png)

## Library download

Download the library from [Github](https://github.com/wizfi/WizFi360EVB-Arduino) and copy it in the “libraries” folder inside your sketchbook.

## Execution

### Open example

Launch Arduino and Open the WebClientRepeating example as shown below.

![](/Document/img/basic_guides/http_client/http_client_arduino_ide.png)

### Code

Update your AP credentials (SSID and password) to connect WizFi360.
Serial1 is the serial communicating with Arduino and WizFi360 and should have the same baud rate as WizFi360. The factory default baud rate for WizFi360 is 115200, and if you have not changed it, enter 115200.
Enter the address of the HTTP server to connect to server. You can enter ip address or domain address. In this case, connect to arduino.cc.

![](/Document/img/basic_guides/http_client/http_client_code.png)

In this guide, Arduino (WizFi360EVB) connects to Web Server and sends the following data. Request /ascillogo.txt using the GET method.

![](/Document/img/basic_guides/http_client/http_client_execution.png)

### Result

Receive the following data from the server.

![](/Document/img/basic_guides/http_client/http_client_result.png)