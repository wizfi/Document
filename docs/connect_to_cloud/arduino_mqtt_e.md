---
id: arduino_mqtt_e
title: Connect to Azure IoT Hub using WizFi360 MQTT AT Command
sidebar_label: Arduino MQTT
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
> * [Connect to Azure IoT Hub using WizFi360 MQTT AT Command][Link-Standalone_Mqtt_Atcmd_Wizfi360]

## Introduction

It is possible to connect to **Microsoft Azure Service** using **WizFi360**, send data to cloud and monitor current status.

Data communication will be established as following.

![][Link-Data_Communication_Structure]

**MQTT AT Commands** will be used to connect to IoT Hub Service & send data.

Data sent to IoT Hub will be saved in Blob Storage through Stream Analytics.

In this guide we will use WizFi360 with [Arduino][Link-Arduino] to connect to Microsoft Azure Services using MQTT AT Command.


## Step 1: Required items

Items below are required for this guide.

### Hadrware
 - Desktop or Laptop Computer
 - [WizFi360-EVB-Shield][Link-Wizfi360-Evb-Shield]
 - [Arduino Mega 2560][Link-Arduino_Mega_2560]
 - USB Type-B Cable

 ![][Link-Required_Item]

### Software
 - [Arduino IDE][Link-Arduino_Ide]
 - Preferred Serial Terminal (TeraTerm, Hercules, etc . . .)

## Step 2: Device preparation

### 1. Hardware preparation

WizFi360-EVB-Shield will be installed on top of Arduino Mega 2560. Therefore DIP Switch and jumper cables shall be connected as following:

> * SW1 : Off
> * SW2 : Off
> * SW3 : On
> * WizFi360-EVB-Shield : D8 - Arduino Mega 2560 : 18
> * WizFi360-EVB-Shield : D2 - Arduino Mega 2560 : 19
> * WizFi360-EVB-Shield : SDA - Arduino Mega 2560 : 14

![][Link-Set_Wizfi360_Evb_Shield_Dip_Sw]

### 2. Device connection

After connecting hardware, connect Arduino Mega2560 to Desktop or Laptop using USB Type-B Cable.

Check **COM Port** from **Device Manager**.

![][Link-Device-Management]

> Please check port number in Arduino IDE as shown on picture above.
>
> If COM port cannot be found in Device manager, check link below and follow instructions.
>
> * [Manually install Drivers on Windows][Link-Manually_Install_Drivers_On_Windows]

## Step 3: Sample application

### 1. Code Download & Execution

After **Code Download** open .ino **Project**.

> Sample code is stored in following path.
>
> * **samples/Wi-Fi/Arduino_Mqtt_Atcmd_Wizfi360**

### 2. Parameter update

To connect to Azure IoT Hub, update next parameters.

```cpp
/* Wi-Fi info */
char ssid[] = "xxxxxxxxxx";
char password[] = "xxxxxxxxxx";

/* MQTT info */
int alive_time = xx;    // range : 30 ~ 300

/* Azure info */
char hub_name[] = "xxxxxxxxxx";
char host_name[] = "xxxxxxxxxx";
char device_id[] = "xxxxxxxxxx";
char device_key[] = "xxxxxxxxxx";
char sas_token[] = "xxxxxxxxxx";
```

![][Link-Execute_Project_Through_Arduino_Ide_1]

> For **SAS Token creation** refer to below.
>
> * [Create SAS Token using Device Explorer][Link-Create_Sas_Token_Through_Device_Explorer]
> * [Create SAS Token using Azure IoT Explore][Link-Create_Sas_Token_Through_Azure_Iot_Explorer]

### 3. Project Compile & Upload

Select corresponding Board, COM Port, then Compile & Upload.

> Note :
>
> **Start Stream Analytics** in order to forward data to Blob Storage.

![][Link-Execute_Project_Through_Arduino_Ide_2]

![][Link-Execute_Project_Through_Arduino_Ide_3]

![][Link-Execute_Project_Through_Arduino_Ide_4]


## Step 4: Results

In terminal program we can check data sent from WizFi360 to Azure IoT Hub. In Blob Storage we can check received data.

![][Link-Result_Execute_Project_Through_Arduino_Ide_1]

![][Link-Result_Execute_Project_Through_Arduino_Ide_2]


## References

- [Connect to Azure IoT Hub using WizFi360 MQTT AT Command][Link-Standalone_Mqtt_Atcmd_Wizfi360]



[Link-Azure-Portal]: https://portal.azure.com/
[Link-Azure-Account-Free]: https://azure.microsoft.com/ko-kr/free/
[Link-Azure_Cloud_Introduction]: https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud
[Link-Create_IoT_Hub_Through_Azure_Portal]: https://docs.microsoft.com/ko-kr/azure/iot-hub/iot-hub-create-through-portal
[Link-Create_Blob_Storage_Through_Azure_Portal]: https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/create_blob_storage_through_azure_portal.md
[Link-Create_Stream_Analytics_Through_Azure_Portal]: https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/create_stream_analytics_through_azure_portal.md
[Link-Configure_Stream_Analytics_Job_Input_Output_And_Define_The_Transformation_Query_Through_Azure_Portal]: https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/configure_stream_analytics_job_input_output_and_define_the_transformation_query_through_azure_portal.md
[Link-Data_Communication_Structure]: /Document/img/azure_cloud/mqtt_data_communication_structure.png
[Link-Arduino]: https://www.arduino.cc/
[Link-Wizfi360-Evb-Shield]: https://wizwiki.net/wiki/doku.php/products:wizfi360:start
[Link-Arduino_Mega_2560]: https://store.arduino.cc/usa/mega-2560-r3
[Link-Required_Item]: /Document/img/azure_cloud/mqtt_atcmd_wizfi360_required_item_3.png
[Link-Arduino_Ide]: https://www.arduino.cc/en/main/software
[Link-Set_Wizfi360_Evb_Shield_Dip_Sw]: /Document/img/azure_cloud/set_wizfi360_evb_shield_dip_sw_3.png
[Link-Device-Management]: /Document/img/azure_cloud/device_management_3.png
[Link-Manually_Install_Drivers_On_Windows]: https://www.arduino.cc/en/Guide/DriverInstallation
[Link-Execute_Project_Through_Arduino_Ide_1]: /Document/img/azure_cloud/execute_project_through_arduino_ide_1.png
[Link-Create_Sas_Token_Through_Device_Explorer]: https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud/create_sas_token_through_device_explorer.md
[Link-Create_Sas_Token_Through_Azure_Iot_Explorer]: https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud/create_sas_token_through_azure_iot_explorer.md
[Link-Execute_Project_Through_Arduino_Ide_2]: /Document/img/azure_cloud/execute_project_through_arduino_ide_2.png
[Link-Execute_Project_Through_Arduino_Ide_3]: /Document/img/azure_cloud/execute_project_through_arduino_ide_3.png
[Link-Execute_Project_Through_Arduino_Ide_4]: /Document/img/azure_cloud/execute_project_through_arduino_ide_4.png
[Link-Result_Execute_Project_Through_Arduino_Ide_1]: /Document/img/azure_cloud/result_execute_project_through_arduino_ide_1.png
[Link-Result_Execute_Project_Through_Arduino_Ide_2]: /Document/img/azure_cloud/result_execute_project_through_arduino_ide_2.png
[Link-Standalone_Mqtt_Atcmd_Wizfi360]: https://github.com/Wiznet/azure-iot-kr/blob/master/docs/IoT_device/Connectivities/Wi-Fi/standalone_mqtt_atcmd_wizfi360.md