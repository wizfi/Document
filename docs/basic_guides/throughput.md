---
id: throughput
title: Throughput
sidebar_label: Throughput
keywords: 
   - WizFi360
   - Throughput
---

## Test Environment

To UART throughput test, it controls using CTS / RTS and WizFi360 control software are required.

   - WizFi360 EVB or WizFi360io
   - STM32Fxxx EVB(NUCLEO-F401RE)
   - PC
   - Serial Tool 

YAT Serial Tool(Data Mode)
   -	WizFi360 Control Software(Command Mode)
   -	1Mbyte data file
   -	WiFi Router(exclude when it use in softAP mode)

When data mode uses, it sets RTS/CTS in flow control the using the YAT Serial Tool and it sets DTR as Data Read signal.
When command mode uses, it sets the AT+CIPSENDBUF=2048 as maximum length of the data to be transmitted and it sends data of 2048 length. Repeat the previous operation.

![](/Document/img/basic_guides/throughput/throughput_setup.png)

![](/Document/img/basic_guides/throughput/throughput_setup_1.png)

![](/Document/img/basic_guides/throughput/throughput_setup_2.png)

## Serial command usage

### Station Mode

| AT Command |  Terminal |
:-------------------------|:-------------------------|
| AT <br /> AT+CWMODE_CUR=1 <br /> AT+CWDHCP_CUR=1,1 <br />AT+CWLAP <br />AT+CWJAP_CUR=”wizms1”,”maker0701” <br />AT+CIPSTA_CUR? | ![](/Document/img/basic_guides/throughput/throughput_station_mode.png)|

### UART CTS/RTS Setting

| AT Command |  Terminal |
:-------------------------|:-------------------------|
| AT+CWUART_CUR = 115200,8,1,0,1 | ![](/Document/img/basic_guides/throughput/throughput_cts_rts.png)|

Terminal setting

| AT Command |  Terminal |
:-------------------------|:-------------------------|
| 1. Pressing Ctrl+Shift+S and Open the Terminal Settings window<br />2. You have to change the Hardware(RFR/CTS) in Flow Control | ![](/Document/img/basic_guides/throughput/throughput_cts_rts_1.png)|
| 3. If you can see under the terminal window that the CTS/DTR is green | ![](/Document/img/basic_guides/throughput/throughput_cts_rts_2.png)|

### TCP Client Mode

| AT Command |  Terminal |
:-------------------------|:-------------------------|
| AT+CIPSTART=”TCP”,”192.168.100.27”,5001<br />AT+CIPMODE=1<br />AT+CIPSEND | ![](/Document/img/basic_guides/throughput/throughput_client_data.png)|

Terminal setting

| AT Command |  Terminal |
:-------------------------|:-------------------------|
| 1. When DTR is red, it sends the 1M.txt<br /> 2. If you click the DTR, it changes the DTR is green and it is sending the data through Serial | ![](/Document/img/basic_guides/throughput/throughput_client_data_1.png)|

 ### TCP Client / Command mode

 | AT Command |  Terminal |
:-------------------------|:-------------------------|
| AT+CIPSTART=”TCP”,”192.168.100.27”,5001<br />AT+CIPMODE=0<br />AT+CIPSENDBUF=2048<br />Send the 2048byte data * 512times = 1Mbyte | ![](/Document/img/basic_guides/throughput/throughput_client_command.png)|

## Result of UART Throughput

PC sends the 1Mbyte through serial of WizFi360(UART1) and WizFi360 send the data to TCP Server.

![](/Document/img/basic_guides/throughput/throughput_table.png)

We measured the time from the start of data transfer to the end of data transfer using the wireshark tool, see Appendix 1.

## Appendix 1

|Item|Detail|
|:----------|:-------------------------|
| Baudrate | 115 200 |
| Data mode | ![](/Document/img/basic_guides/throughput/throughput_client_115200d.png) | 
| Command mode | ![](/Document/img/basic_guides/throughput/throughput_client_115200c.png) |
| Baudrate | 921 600 |
| Data mode | ![](/Document/img/basic_guides/throughput/throughput_client_921600d.png) | 
| Command mode | ![](/Document/img/basic_guides/throughput/throughput_client_921600c.png) |
| Baudrate | 1 000 000 |
| Data mode | ![](/Document/img/basic_guides/throughput/throughput_client_1000000d.png) | 
| Command mode | ![](/Document/img/basic_guides/throughput/throughput_client_1000000c.png) |
| Baudrate | 1 250 000 |
| Data mode | ![](/Document/img/basic_guides/throughput/throughput_client_1250000d.png) | 
| Command mode | ![](/Document/img/basic_guides/throughput/throughput_client_1250000c.png) |
| Baudrate | 1 500 000 |
| Data mode | ![](/Document/img/basic_guides/throughput/throughput_client_1500000d.png) | 
| Command mode | ![](/Document/img/basic_guides/throughput/throughput_client_1500000c.png) |
| Baudrate | 2 000 000 |
| Data mode | ![](/Document/img/basic_guides/throughput/throughput_client_2000000d.png) | 
| Command mode | ![](/Document/img/basic_guides/throughput/throughput_client_2000000c.png) |
