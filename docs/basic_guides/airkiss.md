---
id: airkiss
title: Airkiss Configuration Guide
sidebar_label: Airkiss Configuration
keywords: 
  - WizFi360
  - AirKiss
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}> {children} </span> );

## Introduction

In this guide we introduce Airkiss method to configure WizFi360.

![](/img/basic_guides/airkiss/airkiss_diagran.png)

## Airkiss sequence

1. Set module to station mode using <Highlight color="#1877F2">AT+CWMODE_DEF=1</Highlight>

2. Airkiss start using <Highlight color="#1877F2">AT+CWSTARTSMART=2</Highlight>

3. Launch Android app and input WiFi AP' SSID and password.

4. Check AP connection status

5. Start WizFi360 Server mode

:::important
• SmartConfig is only available in the Station mode. (AT+CWMODE_CUR=1)<br />
• The message "smart get wifi info" means that SmartConfig has successfully acquired the AP
information. WizFi360 will try to connect to the target AP.<br /> 
• The message "smartconfig connected wifi" is printed if the connection is successful. Use command AT+CWSTOPSMART to stop SmartConfig before running other commands. Please make sure that you do not execute other commands during SmartConfig.<br />
• The LED(PB_07) is blinking fast during running Oneshot via Airkiss.<br />
  The LED(PB_07) is blinking slowly during running Oneshot via WebServer.• SmartConfig 
:::


## Android Application

### Connect with AirKiss

Prior configuring WizFi360 module it is necessary to set settings in Android application.
This procedure is simple and contains following steps:

1. Launch application on smartphone which is connected to AP.
2. Input SSID and password, then press "Setting" button.
3. Wait while WizFi360 is connected to AP.
4. Upon completion app will display MAC and IP addresses.

![](/img/basic_guides/airkiss/airkiss_android_app.png)

### TCP Client Test

It is possible to test TCP connection between WizFi360 and smartphone, where smartphone will be TCP client and WizFi360 will be used as server.

To conduct test follow below procedures:

1. Press "Menu" button on top left side of application. Then press "TCP Client Test"
2. Check IP address and port, then click "Connect" button. When application is connected, button will be changed to "Disconnect".
3. Input a message and press "Send" button.
4. App will display message on the screen when it is received from server.

![](/img/basic_guides/airkiss/airkiss_android_tcp.png)


