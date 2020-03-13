---
id: wizfi360_mini
title: WizFi360-EVB-Mini
sidebar_label: WizFi360-EVB-Mini
---

![WizFi360-EVB-Mini](/Document/img/wizfi360-mini3.png)

## Overview

This document describes WizFi360-EVB-Mini. WizFi360-EVB-Mini is a compact development board for experiment, test and verification of WizFi360. WizFi360-EVB-Mini is the same form factor as the NodeMCU V2. WizFi360 is a low cost and low-power consumption industrial-grade WiFi module. It is compatible with IEEE802.11 b/g/n standard and supports SoftAP, Station and SoftAP+Station modes. The serial port baud rate can be up to 2Mbps, which can meet the requirement of various applications.

## Feature

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
- ETC
    - Built-in UART to USB chip
        - CP2104-GM
        - Micro USB B Type Connector

## Quick Start Guide

[Quick Start Guide](https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360qs_v113e.pdf)

## Datasheet

[Download](https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360-evb-mini_ds_100_en.pdf)

## Technical Reference

### Ref Schematic & Other Board Schematics

[Link to Github](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/07_WizFi_Module/WizFi360-EVB-Shield)

### Library

[Link to Github](https://github.com/wizfi/Release)

## ETC

### Serial Port Driver

[CP210x USB to UART Bridge VCP Drivers](http://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)