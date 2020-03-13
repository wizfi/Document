---
id: wizfi360io
title: WizFi360io
sidebar_label: WizFi360io
---

## Overview

This page describes the io interface boards using WizFi360. WizFi360io series boards can be customized according to customers' requests.

## WizFi360io-C

![WizFi360io-C](/Document/img/wizfi360io-c.png)

WizFi360io-C cable connector type io interface board. The operating voltage of the WizFi360io-C and the UART voltage are 5V. WizFi360io-C can connect the UART interface to the connector. The part name of the connector mounted on WizFi360io-C is “SMW200-06”. The cable connector that can be connected to “SMW200-06” is “SMH200-06”.

## WizFi360io-H

![WizFi360io-H](/Document/img/wizfi360-h.png)

WizFi360io-H is a pin header type io interface board. The form factor of WizFi360io is an Xbee interface module. 2.00mm pin header is used, similar to the Xbee pin layout. But it is not exactly compatible.

## Features


- WizFi360
    - WiFi 2.4G, 802.11 b/g/n
    - Support Station / SoftAP / SoftAP+Station operation modes
    - Support “Data pass-through” and “AT command data transfer” mode
    - Support serial AT command configuration
    - Support TCP Server / TCP Client / UDP operating mode
    - Support configuration of operating channel 0 ~ 13
    - Support auto 20MHz / 40MHz bandwidth
    - Support WPA_PSK / WPA2_PSK encryption
    - Serial port baud rate up from 600bps to 2Mbps with 16 common values
    - Support up to 5 TCP / UDP links
    - Obtaining IP address automatically from the DHCP server (Station mode)
    - DHCP service for Wireless LAN clients (AP mode)
    - Support DNS for communication with servers by domain name
    - Support “Keep-Alive” to monitor TCP connection
    - Support “Ping” for monitoring network status
    - Built-in SNTP client for receiving the network time
    - Support built-in unique MAC address and user configurable
    - Support firmware upgrade by UART Download / OTA (via WLAN)
    - Industrial grade (operating temperature range: -40 ° C ~ 85 ° C)
    - CE, FCC certification
- **WizFi360io-C**
    - 5V Operating Voltage
        - Built-in LDO
        - WizFi360 operates at 3.3V
    - 5V voltage level UART
        - Built-in Level Shifters
        - WizFi360 operates at 3.3V
    - SMW200-06 Mounted
        - Cable side connector is SMH200-06
- **WizFi360io-H**
    - 3.3V Operating Voltage
        - Xbee Form Factor
        - 2.00mm Pin Header

## Quick Start Guide

[Quick Start Guide](https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360qs_v113e.pdf)

## Datasheet

[WizFi360io-C](https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360io-c_ds_102_en.pdf)

[WizFi360io-H](https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360io-h_ds_101_en.pdf)

## Technical Reference

### Ref Schematic & Other Board Schematics

[Link to Github](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/07_WizFi_Module/WizFi360-EVB-Shield)

### Library

[Link to Github](https://github.com/wizfi/Release)

## ETC

### WizFi360io-C Connector Datasheet

[SMW200-06](https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:board:wizfi360io-c:smw200-nn.pdf)