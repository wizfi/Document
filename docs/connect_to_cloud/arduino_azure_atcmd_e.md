---
id: arduino_atcmd_e
title: Connect to Azure IoT Hub using Arduino Mega 2560 + WizFi360 Azure AT Command
sidebar_label: Arduino AT Cmd
keywords:
    - WizFi360
    - Arduino
---

## Getting Started

### Hardware Requirement
-   Arduino Mega 2560 board
-   Desktop or laptop computer
-   USB cable
-   WizFi360-EVB-Shield

### Software Requirement

- MS Azure Account (To create Azure account [press here].)
- Preferred Serial Terminal (TeraTerm, YAT, etc.)
- [Azure IoT Explorer]
- Arduino IDE

## Introduction

Microsoft Azure is cloud computing service.
Using [WizFi360] we can connect to Azure services, transmit data and monitor status.

In this document we will guide how to connect Arduino Mega 2560 + WizFi360 to MS Azure Services.
Thic process consists of following steps:
- Azure IoT Hub preparation
- IoT device registration
- Connect to Azure IoT and transmit data

For Azure IoT Hub setup and IoT device creation please refer to [Azure Cloud Introduction].

For this guide [WizFi360-EVB-Shield] Evaluation board was used.

![](/Document/img/azure_cloud/mqtt_atcmd_wizfi360_required_item_1.png)

## Device preparation

### Hardware configuration

In this guide we will use Arduino Mega2560 and WizFi360-EVB-SHield. In Arduino Code we will use UART1 for ocmmunication with WizFi360-EVB-Shield. To do so we need to connect TX1, RX1 pins of Arduino board with RXD and TXD pins of WizFi360-EVB-Shield. Also, switch RXD/TXD Selector OFF in order to enable communication through pin not USB.

![](/Document/img/azure_cloud/Arduino_Azure_atcmd_wizfi360_connection_new.png)

To use DHT11 sensor from WizFi360-EVB-Shield connect D14 pin on EVB board to D14 pin on Arduino Mega.

### Device connection

After configuring hardware connect Arduino Mega2560 board with PC. CHeck port number in Device Manager.

![](/Document/img/azure_cloud/Arduino_Azure_atcmd_device_manager_port.png)

> If everything setup correctly, then COM port can be checked in Device manager as shown on picture above.

## AT Commands

### 1. Set current WiFi mode (not saved in flash)

**AT Command:** AT+CWMODE_CUR
Syntax:

| Type | Command | Response |
|:--------|:--------|:--------|
| Query | AT+CWMODE_CUR? | +CWMODE:&lt;mode&gt; <br /> OK |
| Set| AT+CWMODE_CUR=&lt;mode&gt; | OK |

Defined values:

| Mode | Value |
|:--------|:--------|
| 1 | Station mode|
| 2 | SoftAP mode (factory default) |
| 3 | Station+SoftAP mode|

### 2. Enable DHCP

**AT Command:** AT+CWDHCP_CUR
Syntax:

| Type | Command | Response |
|:--------|:--------|:--------|
| Query | AT+CWDHCP_CUR? | +CWDHCP_CUR:&lt;para&gt; <br /> OK |
| Set | AT+CWMODE_CUR=&lt;para&gt;,&lt;en&gt; | OK |

Defined values:

| Parameter | Value |
|:--------|:--------|
| 0 | DIsable SoftAP DHCP & Station DHCP.|
| 1 | Enable SoftAP DHCP & Disable Station DHCP. |
| 2 | Disable SoftAP DHCP & enable Station DHCP. |
| 3 | Enable SoftAP DHCP & Station DHCP. (factory default)|

### 3. List available APs

**AT Command:** AT+CWLAP
Syntax:

| Type | Command | Response |
|:--------|:--------|:--------|
| Query | AT+CWLAP | +CWLAP:([&lt;ecn&gt;,&lt;ssid&gt;,&lt;rssi&gt;,&lt;mac&gt;,&lt;channel&gt;,&lt;wps&gt;]) |


Defined values:

| Parameter | Value |
|:--------|:--------|
| &lt;ecn&gt;| 0: Open <br /> 1: WEP <br /> 2: WPA_PSK<br />3: WPA2_PSK<br />4:WPA_WPA2_PSK |
| &lt;ssid&gt; | string parameter. AP의 ssid |
| &lt;rssi&gt; | signal strength |
| &lt;mac&gt; |  string parameter. AP의 mac|
| &lt;wps&gt; | 0: Disable WPS <br /> 1: Enable WPS |

### 4. Connect to AP

**AT Command:** AT+CWJAP_CUR
Syntax:

| Type | Command | Response |
|:--------|:--------|:--------|
| Set | AT+CWJAP_CUR=&lt;ssid&gt;,&lt;pwd&gt;,[&lt;bssid&gt;] | +CWJAP_CUR:&lt;ssid&gt;,&lt;bssid&gt;,&lt;channel&gt;,&lt;rssi&gt; <br /> OK|

Defined values:

| Parameter | Value |
|:--------|:--------|
| &lt;ssid&gt; | string parameter. Target AP' ssid. MAX: 32 bytes |
| &lt;pwd&gt; | string parameter. Target AP' password. MAX: 64-byte ASCII |
| &lt;bssid&gt; | string parameter, target AP' MAC address, used in case if there are several APs with same SSID. |

### 5. Azure IoT Hub configuration set

**AT Command:** AT+AZSET

Syntax:

| Type | Command | Response |
|:--------|:--------|:--------|
| Set | AT+AZSET=&lt;iothub_name&gt;,&lt;device_id&gt;,&lt;device_key&gt; | OK |

Defined values:

| Parameter | Value |
|:--------|:--------|
| &lt;hub ID&gt; | string parameter. IoT Hub ID |
| &lt;device ID&gt; | string parameter. IoT Device ID |
| &lt;key&gt; | string parameter, IoT Device Key |

### 6. Set MQTT Topic

**AT Command:** AT+MQTTTOPIC

Syntax:

| Type | Command | Response |
|:--------|:--------|:--------|
| Set | AT+MQTTTOPIC=&lt;publish topic&gt;,&lt;subscribe topic&gt;,&lt;subscribe topic2&gt;,&lt;subscribe topic3&gt; | OK |

Defined values:

| Parameter | Value |
|:--------|:--------|
| &lt;publish topic&gt; | string parameter, topic where WizFi360 will publish |
| &lt;subscribe topic&gt; |  string parameter, topic where WizFi360 will subscribe |
| &lt;subscribe topic2&gt; | string parameter, topic where WizFi360 will subscribe |
| &lt;subscribe topic3&gt; | string parameter, topic where WizFi360 will subscribe |

> Note:
- This command shall be set before connecting to broker.
- &lt;subscribe topic2&gt; & &lt;subscribe topic3&gt; are available in Firmware v1.0.5.0 and later.

### 7. Connect to Azure

**AT Command:** AT+AZCON

Syntax:

| Type | Command | Response |
|:--------|:--------|:--------|
| Set | AT+AZCON | CONNECT <br /> OK |

> Note:
• Before sending this ocmmand, AT+AZSET command & AT+MQTTTOPIC command shall be set.
• After connection data can be sent to Azure server using AT+MQTTPUB command.
• For more details please refer to https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support.

### 8. Publish a message

**AT Command:** AT+MQTTPUB

Syntax:

| Type | Command | Response |
|:--------|:--------|:--------|
| Set | AT+MQTTPUB=&lt;message&gt;| OK |

> Note:
• This command shall be used when MQTT connection is established.
• Topic where data will be published is set with AT+MQTTTOPIC command, user shall define topic before connecting to broker.

## Running sample code

### Download sample Arduino code

Please download Arduino sample code from link below and open ino project file.

> Sample can be found at below path.
>
> **samples/Wi-Fi/Arduino_Azure_Atcmd_Wizfi360**

### Modify parameters

Update your credentials (WiFi ssid, WiFi pwd, Hub ID, Device ID, Device Key) in order to connect to Azure IoT Hub.
````cpp
//WiFi credentials
char ssid[] = "XXXXXXXXXXXXXXXXXX";    // your network SSID (name)
char pass[] = "XXXXXXXXXXXXXXXXXX";        // your network password

//Azure Hub & Device credentials
char IotHubname[] = "XXXXXXXXXXXXXXX";
char DeviceId[] = "XXXXXXXXXXXXX";
char DevicePrimaryKey[] = "XXXXXXXXXXXXXXXXXX";
````

As shown on below picture, check your board & port, then compile code.

![](/Document/img/azure_cloud/Arduino_Azure_atcmd_ide_port_check.png)

![](/Document/img/azure_cloud/Arduino_Azure_atcmd_ide_board_check.png)

When compile is done, upload to board. When upload is done, you will see 'avrdude done. Thank you.' message. 

![](/Document/img/azure_cloud/Arduino_Azure_atcmd_ide_upload.png)

Use Serial monitor to check if code was successfully uploaded to Adruino Mega2560 board.

![](/Document/img/azure_cloud/Arduino_Azure_atcmd_serial_monitor_results.JPG)


### Results

1. Press "Start" button in Telemetry Section in IoT Hub Explorer.
> "Start" button shall be pressed before sending data using MQTTPUB commands.
2. Check data sent with MQTTPUB command.

![](/Document/img/azure_cloud/Arduino_Azure_atcmd_IoT_Explorer_results.JPG)



[press here]: https://azure.microsoft.com/ko-kr/free/
[Azure Portal]: https://portal.azure.com/
[WizFi360]: https://wizwiki.net/wiki/doku.php/products:wizfi360:start
[WizFi360-EVB-Shield]: https://wizwiki.net/wiki/doku.php/products:wizfi360:board:wizfi360-evb:start
[Azure IoT Explorer]: https://catalog.azureiotsolutions.com/docs?title=Azure/azure-iot-device-ecosystem/manage_iot_hub
[Silicon Labs CP210x USB to UART Driver]: https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers
[Communicate with your IoT hub using the MQTT protocol: Using the MQTT protocol directly (as a device)]: https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support
[Azure Cloud Introduction]: https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud
