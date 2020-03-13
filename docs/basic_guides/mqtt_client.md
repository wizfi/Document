---
id: mqtt_client
title: MQTT Client
sidebar_label: MQTT Client
---

## Introduction

MQTT is a light weight messaging protocol for use on top of the TCP/IP protocol. It is designed for connections with remote locations where a “small code footprint” is required or the network bandwidth is limited.It is a communication protocol which almost can link all networked objects with the external, and it is used as a sensor. https://en.wikipedia.org/wiki/MQTT

## Local Test Environment

Brokers acting as Mqtt Servers mainly use the Mosquitto program. Download and install the Mosquitto tool from the following link. https://mosquitto.org
Connect your Mosquitto-installed PC and WizFi360 to the same Router (AP).

![](/Document/img/basic_guides/mqtt_client/fig1.png)

Open a command prompt window and navigate to the path where Mosquitto is installed. (cd C: \ Program Files \ mosquitto)
Then run the following command: (mosquitto -c mosquitto.conf -p 1883 -v) 1883 is the port number, and Mqtt usually uses the 1883 port number.

![](/Document/img/basic_guides/mqtt_client/fig2.png)

## WizFi360 AT Commands

Use following commands to connect to Wi-Fi AP.

### Station Mode

| AT Command | Terminal |
|:--------|:--------|
| AT<br /> AT+CWMODE_CUR=1<br />AT+CWDHCP_CUR=1,1<br />AT+CWLAP<br />AT+CWJAP_CUR=”ssid”,”password”<br />AT+CIPSTA_CUR? |![](/Document/img/basic_guides/mqtt_client/fig3.png)|

### MQTT Connect & Data Publish

| AT Command | Terminal |
|:--------|:--------|
| AT+MQTTSET="USER_ID","PASSWORD","CLIENT_ID",60<br />AT+MQTTTOPIC="PUB_TOPIC","SUB_TOPIC"<br />AT+MQTTCON=0,"192.168.1.102",1883<br />AT+MQTTPUB=”0123456789” |![](/Document/img/basic_guides/mqtt_client/fig4.png)|
