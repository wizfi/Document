---
id: intro
title: Getting Started
sidebar_label: Introduction
keywords:
  - WizFi360
---

## Overview

WizFi360-CON             |  WizFi360-PA
:-------------------------:|:-------------------------:
![WizFi360-CON](/Document/img/wizfi360-con.png) | ![WizFi360-PA](/Document/img/wizfi360-pa.png)


WizFi360 is a low cost and low-power consumption industrial-grade WiFi
module. It is compatible with IEEE802.11 b/g/n standard and supports
SoftAP, Station and SoftAP+Station modes. The serial port baud rate can
be up to 2Mbps, which can meet requirements of various applications.

## Features

  - WiFi 2.4G, 802.11 b/g/n
  - Support Station / SoftAP / SoftAP+Station operation modes
  - Support “Data pass-through” and “AT command data transfer” mode
  - Support serial AT command configuration
  - Support TCP Server / TCP Client / UDP operating mode
  - Support configuration of operating channel 0 \~ 13
  - Support auto 20MHz / 40MHz bandwidth
  - Support WPA\_PSK / WPA2\_PSK encryption
  - Serial port baud rate up from 600bps to 2Mbps with 16 common values
  - Support up to 5 TCP / UDP links
  - Obtaining IP address automatically from the DHCP server (Station
    mode)
  - DHCP service for Wireless LAN clients (AP mode)
  - Support DNS for communication with servers by domain name
  - Support “Keep-Alive” to monitor TCP connection
  - Support “Ping” for monitoring network status
  - Built-in SNTP client for receiving the network time
  - Support built-in unique MAC address and user configurable
  - Support firmware upgrade by UART Download / OTA (via WLAN)
  - Industrial grade (operating temperature range: -40 ° C \~ 85 ° C)
  - CE, FCC certification


## Details

  - [Documents](http://wizwiki.net/wiki/doku.php?id=products:wizfi360:wizfi360ds:start)
    
      - [Datasheet](http://wizwiki.net/wiki/doku.php?id=products:wizfi360:wizfi360ds:start#datasheet)
        : A brief introduce about WizFi360. These documents describe the
        Features, package information and etc. 
      -  [AT Instruction
        set](http://wizwiki.net/wiki/doku.php?id=products:wizfi360:wizfi360ds:start#at_instruction_set):
        It describes the AT Command of WizFi360 and you can confirm the
        return message by AT command of WizFi360.
      -  [AT command Example](http://wizwiki.net/wiki/doku.php?id=products:wizfi360:wizfi360ds:start#at_command_examples):
        It includes the Basic example using AT command and it is
        examples of TCP, UDP, SSL use.
      - [Quick Start Guide](basic_guides/quickstart):
        The examples using the WizFi360-EVB or WizFi360io, it describes
        the scenarios in order from Hardware setting to example of AT
        command use


## Evaluation Boards

[WizFi360-EVB-Mini](wizfi360_mini)|  [WizFi360-EVB-Shield](wizfi360_shield)
:-------------------------:|:-------------------------:
![WizFi360-CON](/Document/img/WizFi360-mini.png) | ![WizFi360-PA](/Document/img/img_evb_mini.png)
- NodeMCU Pin-Compatible | Arduino Pin-Compatible



## Custom Modules

[WizFi360io-H](wizfi360io)          |  [WizFi360io-C](wizfi360io)
:-------------------------:|:-------------------------:
![WizFi360-CON](/Document/img/img_evb_mini_2.png) | ![WizFi360-PA](/Document/img/img_evb_shield_2.png)
Similar to XBee pinout|5V operation
