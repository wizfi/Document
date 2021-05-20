---
id: standalone_atcmd_e
title: Connect to Azure IoT Hub using WizFi360 Azure AT Command
sidebar_label: Standalone AT Cmd
keywords:
  - WizFi360
  - Azure
---

## Getting Started

### Hardware Requirement
-   Desktop or laptop computer
-   MicroUSB cable
-   WizFi360-EVB-Shield

### Software Requirement

-   Preferred Serial Terminal (TeraTerm, YAT, etc.)
-   [Azure IoT Explorer]

> Login to [**Azure Portal**][Link-Azure-Portal].
>
> ※ In this guide we will procedd with [**free account**][Link-Azure-Account-Free].
> To learn how to create IoT Hub please refer to [Azure Cloud Service Introduction][Link-Azure_Cloud_Introduction].
>
> * [[MS] Create IoT Hub using Azure Portal][Link-Create_IoT_Hub_Through_Azure_Portal]
> * [Create Blob storage using Azure Portal][Link-Create_Blob_Storage_Through_Azure_Portal]
> * [Create Stream Analytics using Azure Portal][Link-Create_Stream_Analytics_Through_Azure_Portal]
> * [Setup Queries in Stream Analytics using Azure Portal][Link-Configure_Stream_Analytics_Job_Input_Output_And_Define_The_Transformation_Query_Through_Azure_Portal]

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

![](/img/azure_cloud/mqtt_atcmd_wizfi360_required_item_1.png)

## Device preparation

### Hardware configuration

WizFi360-EVB-Shield will be used in **Standalone mode**. Therefore DIP Switch and jumper cables shall be connected as following:

> * SW1 : On
> * SW2 : Off
> * SW3 : Off

![](/img/azure_cloud/WizFi360EVB_SW1.JPG)

### Device connection

After connecting hardware, connect WizFi360-EVB-Shield to Desktop or Laptop using USB Cable.

Check **COM Port** from **Device Manager**.

![](/img/azure_cloud/DeviceManager.JPG)

> If COM port cannot be found in Device manager, check drivers from link below.
  - [Silicon Labs CP210x USB to UART Driver]


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
| &lt;ssid&gt; | string parameter. AP ssid |
| &lt;rssi&gt; | signal strength |
| &lt;mac&gt; |  string parameter. AP mac|
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
| &lt;ssid&gt; | string parameter. Target AP의 ssid. MAX: 32 bytes |
| &lt;pwd&gt; | string parameter. Target AP의 password. MAX: 64-byte ASCII |
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

### Connect in serial terminal & code execution

For connection use following configuration in terminal: 115200-8-N-1, None.

### WiFi setting

#### 1.  Set Wifi station mode

| Command | Response |
|:--------|:--------|
| AT+CWMODE_CUR=1 // station mode | OK |

#### 2.  Set DHCP Enable

| Command | Response |
|:--------|:--------|
| AT+CWDHCP_CUR=1,1 // DHCP enable on Station mode | OK |

#### 3.  Get possible Wi-Fi AP List for connection

| Command | Response |
|:--------|:--------|
| AT+CWLAP  | +CWLAP : (3,"ssid",-57,"mac address",1,1) // encryption method, ssid, rssi, mac address, channel, wps |

#### 4.  Connect to Wi-Fi AP

| Command | Response |
|:--------|:--------|
| AT+CWJAP_CUR="ssid","password"  | WIFI CONNECTED <br /> WIFI GOT IP |

#### 5.  Query WizFi360 device' IP address

| Command | Response |
|:--------|:--------|
| AT+CIPSTA_CUR?  | +CIPSTA_CUR:ip:”192.168.10.13” <br /> +CIPSTA_CUR:gateway:”192.168.10.1” <br /> +CIPSTA_CUR:network:”255.255.255.0” |

### Connect to Azure services using next AT commands

#### 1.  Set Azure connection


| Command | Response |
|:--------|:--------|
| AT+AZSET="iothub_name","device_id","device_key" | OK |

#### 2. Set MQTT Topic

| Command | Response |
|:--------|:--------|
| AT+MQTTTOPIC="/devices/{device_id}/messages/events/","/devices/{device_id}/messages/devicebound/#"<br /><br />Example<br /> AT+MQTTTOPIC="/devices/testDevice/messages/events/","/devices/testDevice/messages/devicebound/#"| OK |

> Note: 
> MQTT Topic follows the rules defined in Azure IoT Hub. 
> Refer to document: [Communicate with your IoT hub using the MQTT protocol: Using the MQTT protocol directly (as a device)]

##### 3. Connect to Azure

| Command | Response |
|:--------|:--------|
| AT+AZCON | OK |

##### 4. Publish data

| Command | Response |
|:--------|:--------|
| AT+MQTTPUB="{"deviceId":"WizFi360","temperature":28.16,"humidity":46.04}" | OK |

![](/img/azure_cloud/Token2Shell.jpg)

### Results

1. Press "Start" button in Telemetry Section in IoT Hub Explorer.
> "Start" button shall be pressed before sending data using MQTTPUB commands.
2. Check data sent with MQTTPUB command.

![](/img/azure_cloud/azure_iot_explorer.png)


[Link-Azure-Portal]: https://portal.azure.com/
[Link-Azure-Account-Free]: https://azure.microsoft.com/ko-kr/free/
[Link-Data_Communication_Structure]: https://github.com/Wiznet/azure-iot-kr/blob/master/Document/img/azure_cloud/standalone_mqtt_atcmd_wizfi360_data_communication_structure.png
[Link-Azure_Cloud_Introduction]: https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud
[Link-Create_IoT_Hub_Through_Azure_Portal]: https://docs.microsoft.com/ko-kr/azure/iot-hub/iot-hub-create-through-portal
[Link-Create_Blob_Storage_Through_Azure_Portal]: https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/create_blob_storage_through_azure_portal.md
[Link-Create_Stream_Analytics_Through_Azure_Portal]: https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/create_stream_analytics_through_azure_portal.md
[Link-Configure_Stream_Analytics_Job_Input_Output_And_Define_The_Transformation_Query_Through_Azure_Portal]: https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/configure_stream_analytics_job_input_output_and_define_the_transformation_query_through_azure_portal.md
[계정]: https://azure.microsoft.com/ko-kr/free/
[Azure Portal]: https://portal.azure.com/
[WizFi360]: https://wizwiki.net/wiki/doku.php/products:wizfi360:start
[WizFi360-EVB-Shield]: https://wizwiki.net/wiki/doku.php/products:wizfi360:board:wizfi360-evb:start
[Azure IoT Explorer]: https://catalog.azureiotsolutions.com/docs?title=Azure/azure-iot-device-ecosystem/manage_iot_hub
[Silicon Labs CP210x USB to UART Driver]: https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers
[Communicate with your IoT hub using the MQTT protocol: Using the MQTT protocol directly (as a device)]: https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support
[Azure Cloud 소개]: https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud
[Arduino Example]: https://github.com/Wiznet/azure-iot-kr/blob/master/docs/IoT_device/Connectivities/Wi-Fi/arduino_azure_atcmd_wizfi360.md
[Mbed Example]: https://github.com/Wiznet/azure-iot-kr/blob/master/docs/IoT_device/Connectivities/Wi-Fi/mbed_azure_atcmd_wizfi360.md