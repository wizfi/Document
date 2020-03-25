---
id: standalone_mqtt_e
title: Connect to Azure IoT Hub using WizFi360 MQTT AT Command
sidebar_label: Standalone MQTT
---

## Getting started

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

It is possible to connect to **Microsoft Azure Service** using **WizFi360**, send data to cloud and monitor current status.

Data communication will be established as following.

![][Link-Data_Communication_Structure]

**MQTT AT Commands** will be used to connect to IoT Hub Service & send data.

Data sent to IoT Hub will be saved in Blob Storage through Stream Analytics.

In this guide we will use WizFi360 to connect to Microsoft Azure Services using MQTT AT Command.

## Step 1: Required items

Items below are required for this guide.

### Hadrware
 - Desktop or Laptop Computer
 - [WizFi360-EVB-Shield][Link-Wizfi360-Evb-Shield]
 - Micro 5 Pin USB Cable

 ![][Link-Required_Item]

### Software
 - Preferred Serial Terminal (TeraTerm, Hercules, etc . . .)


## Step 2: Device preparation

### 1. Hardware preparation

WizFi360-EVB-Shield will be used in **Standalone mode**. Therefore DIP Switch and jumper cables shall be connected as following:

> * SW1 : On
> * SW2 : Off
> * SW3 : Off

![][Link-Set_Wizfi360_Evb_Shield_Dip_Sw]

### 2. Device connection

After connecting hardware, connect WizFi360-EVB-Shield to Desktop or Laptop using USB Cable.

Check **COM Port** from **Device Manager**.

![][Link-Device-Management]

> If COM port cannot be found in Device manager, check drivers from link below.
>
> * [CP210x USB to UART Bridge VCP Drivers][Link-Cp210x_Usb_To_Uart_Bridge_Vcp_Drivers]


## Step 3: Sample application

To learn more about **WizFi360** please refer to [**Quick Start Guide**][Link-Wizfi360-Quick_Start_Guide], [**AT Instruction Set**][Link-Wizfi360-At_Instruction_Set].

### 1. Mode setting

|  Command | Response |
|:--------|:--------|
| AT+CWMODE_CUR=1 | OK |

### 2. DHCP setting

| Command | Response |
|:--------|:--------|
| AT+CWDHCP_CUR=1,1 | OK |

### 3. Connect to AP

| Command | Response |
|:--------|:--------|
| AT+CWJAP_CUR="**ssid**","**password**" <br /><br /> Example : <br /> AT+CWJAP_CUR="**wiznet**","**0123456789**" | WIFI CONNECTED <br /> WIFI GOT IP <br /><br /> OK |

### 4. MQTT Connection setting

| Command | Response |
|:--------|:--------|
| AT+MQTTSET="**iot_hub_host_name**/**device_id**/?api-version=2018-06-30","**sas_token**","**device_id**",60<br /><br /> Example : <br /> AT+MQTTSET="**MyWizFi360IoTHub.azure-devices.net**/**MyWizFi360IoTDevice**/?api-version=2018-06-30","**SharedAccessSignature sr=MyWizFi360IoTHub.azure-devices.net%2Fdevices%2FMyWizFi360IoTDevice&sig=t3R9nDS7ezMGBdb%2FNd5ktb3xQx5jx4NC02n325vRA6c%3D&se=1611895717**","**MyWizFi360IoTDevice**",60 | OK |

> For **SAS Token creation** please refer below.
>
> * [Create SAS Token using Device Explorer][Link-Create_Sas_Token_Through_Device_Explorer]
> * [Create SAS Token using Azure IoT Explorer][Link-Create_Sas_Token_Through_Azure_Iot_Explorer]

### 5. Topic Setting

| Command | Response |
|:--------|:--------|
| AT+MQTTTOPIC="devices/**device_id**/messages/events/",devices/**device_id**/messages/devicebound/# <br /><br /> Example : <br /> AT+MQTTTOPIC="devices/**MyWizFi360IoTDevice**/messages/events/","devices/**MyWizFi360IoTDevice**/messages/devicebound/#" | OK |

### 6. Connect to Broker

| Command | Response |
|:--------|:--------|
| AT+MQTTCON=1,"**iot_hub_host_name**",8883 <br /><br /> Example : <br /> AT+MQTTCON=1,"**MyWizFi360IoTHub.azure-devices.net**",8883 | CONNECT <br /><br /> OK |

### 7. Publish Message

> Note :
>
> When publishing data, [**Start Stream Analytics**](#Run_Stream_Analytics) to forward data to Blob Storage.

| Command | Response |
|:--------|:--------|
| AT+MQTTPUB="publish_data" <br /><br /> Example : <br /> AT+MQTTPUB="{"deviceId":"MyWizFi360IoTDevice","temperature":21.97,"humidity":43.58}"| OK |

![][Link-Standalone_Mqtt_Atcmd_Wizfi360_Set_Up_And_Run_Wizfi360_1]


## Step 4: Results

### 1. Start job in Stream Analytics

Select in Stream Analytics **Introduction** > **Start** > **Current** > **Start**.

![][Link-Start_The_Stream_Analytics_Job_And_Check_The_Output_1]

![][Link-Start_The_Stream_Analytics_Job_And_Check_The_Output_2]

![][Link-Start_The_Stream_Analytics_Job_And_Check_The_Output_3]

### 2. Check output

1) Select in Blob Storage **Introduction** > **Container**.

![][Link-Start_The_Stream_Analytics_Job_And_Check_The_Output_4]

2) Select Container in List.

![][Link-Start_The_Stream_Analytics_Job_And_Check_The_Output_5]

3) Select Blob in list.

![][Link-Start_The_Stream_Analytics_Job_And_Check_The_Output_6]

4) Click **Edit** to check data received from WizFi360.

![][Link-Start_The_Stream_Analytics_Job_And_Check_The_Output_7]

![][Link-Start_The_Stream_Analytics_Job_And_Check_The_Output_8]

[Link-Azure-Portal]: https://portal.azure.com/
[Link-Azure-Account-Free]: https://azure.microsoft.com/ko-kr/free/
[Link-Data_Communication_Structure]: /Document/img/azure_cloud/mqtt_data_communication_structure.png
[Link-Azure_Cloud_Introduction]: https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud
[Link-Create_IoT_Hub_Through_Azure_Portal]: https://docs.microsoft.com/ko-kr/azure/iot-hub/iot-hub-create-through-portal
[Link-Create_Blob_Storage_Through_Azure_Portal]: https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/create_blob_storage_through_azure_portal.md
[Link-Create_Stream_Analytics_Through_Azure_Portal]: https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/create_stream_analytics_through_azure_portal.md
[Link-Configure_Stream_Analytics_Job_Input_Output_And_Define_The_Transformation_Query_Through_Azure_Portal]: https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/configure_stream_analytics_job_input_output_and_define_the_transformation_query_through_azure_portal.md
[Link-Wizfi360-Evb-Shield]: https://wizwiki.net/wiki/doku.php/products:wizfi360:start
[Link-Required_Item]: /Document/img/azure_cloud/mqtt_atcmd_wizfi360_required_item_1.png
[Link-Set_Wizfi360_Evb_Shield_Dip_Sw]: /Document/img/azure_cloud/set_wizfi360_evb_shield_dip_sw_1.png
[Link-Device-Management]: /Document/img/azure_cloud/device_management_1.png
[Link-Cp210x_Usb_To_Uart_Bridge_Vcp_Drivers]: https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers
[Link-Wizfi360-Quick_Start_Guide]: http://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360qs_v113k.pdf
[Link-Wizfi360-At_Instruction_Set]: http://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360_atset_v106k.pdf
[Link-Create_Sas_Token_Through_Device_Explorer]: https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud/create_sas_token_through_device_explorer.md
[Link-Create_Sas_Token_Through_Azure_Iot_Explorer]: https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud/create_sas_token_through_azure_iot_explorer.md
[Link-Standalone_Mqtt_Atcmd_Wizfi360_Set_Up_And_Run_Wizfi360_1]: /Document/img/azure_cloud/standalone_mqtt_atcmd_wizfi360_set_up_and_run_wizfi360_1.png
[Link-Start_The_Stream_Analytics_Job_And_Check_The_Output_1]: /Document/img/azure_cloud/start_the_stream_analytics_job_and_check_the_output_1.png
[Link-Start_The_Stream_Analytics_Job_And_Check_The_Output_2]: /Document/img/azure_cloud/start_the_stream_analytics_job_and_check_the_output_2.png
[Link-Start_The_Stream_Analytics_Job_And_Check_The_Output_3]: /Document/img/azure_cloud/start_the_stream_analytics_job_and_check_the_output_3.png
[Link-Start_The_Stream_Analytics_Job_And_Check_The_Output_4]: /Document/img/azure_cloud/start_the_stream_analytics_job_and_check_the_output_4.png
[Link-Start_The_Stream_Analytics_Job_And_Check_The_Output_5]: /Document/img/azure_cloud/start_the_stream_analytics_job_and_check_the_output_5.png
[Link-Start_The_Stream_Analytics_Job_And_Check_The_Output_6]: /Document/img/azure_cloud/start_the_stream_analytics_job_and_check_the_output_6.png
[Link-Start_The_Stream_Analytics_Job_And_Check_The_Output_7]: /Document/img/azure_cloud/start_the_stream_analytics_job_and_check_the_output_7.png
[Link-Start_The_Stream_Analytics_Job_And_Check_The_Output_8]: /Document/img/azure_cloud/start_the_stream_analytics_job_and_check_the_output_8.png
[Link-Mbed_Mqtt_Atcmd_Wizfi360]: https://github.com/Wiznet/azure-iot-kr/blob/master/docs/IoT_device/Connectivities/Wi-Fi/mbed_mqtt_atcmd_wizfi360.md
[Link-Arduino_Mqtt_Atcmd_Wizfi360]: https://github.com/Wiznet/azure-iot-kr/blob/master/docs/IoT_device/Connectivities/Wi-Fi/arduino_mqtt_atcmd_wizfi360.md