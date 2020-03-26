---
id: mbed_mqtt_e
title: Connect to Azure IoT Hub using WizFi360 MQTT AT Command
sidebar_label: Mbed MQTT Cmd
keywords:
    - WizFi360
    - Mbed
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

In this guide we will use WizFi360 with [Mbed][Link-Mbed] to connect to Microsoft Azure Services using MQTT AT Command.

## Step 1: Required items

Items below are required for this guide.

### Hadrware
 - Desktop or Laptop Computer
 - [WizFi360-EVB-Shield][Link-Wizfi360-Evb-Shield]
 - [NUCLEO-L476RG][Link-Nucleo-L476rg]
 - Mini USB Cable

 ![][Link-Required_Item]

### Software
 - [Mbed Studio][Link-Mbed_Studio]
 - Preferred Serial Terminal (TeraTerm, Hercules, etc . . .)


## Step 2: Device preparation

### 1. Hardware preparation

WizFi360-EVB-Shield will be installed on top of NUCLEO-L476RG. Therefore DIP Switch and jumper cables shall be connected as following:

> * SW1 : Off
> * SW2 : Off
> * SW3 : On
> * D2 : UART Tx
> * D8 : UART Rx

![][Link-Set_Wizfi360_Evb_Shield_Dip_Sw]

### 2. Device connection

After connecting hardware, connect NUCLEO-L476RG to Desktop or Laptop using USB Cable.

Check **COM Port** from **Device Manager**.

> If COM port cannot be found in Device manager, check link below and follow instructions.
>
> * [ST-LINK, ST-LINK/V2, ST-LINK/V2-1 USB driver][Link-St_Link_St_Link_V2_St_Link_V2_1_Usb_Driver]


## Step 3: Sample application

### 1. Code Download & Execution

After code download, open project by selecting **File** > **Open Workspace**.

> Sample code is stored in following path.
>
> * **samples/Wi-Fi/Mbed_Mqtt_Atcmd_Wizfi360**
>
> * **samples/Wi-Fi/Mbed_Mqtt_Atcmd_Wizfi360_Azure_C_Shared_Utility**
>
> In case of **Mbed_Mqtt_Atcmd_Wizfi360** SAS Token was created using Device Explorer or Azure IoT Explorer.
>
> In case of **Mbed_Mqtt_Atcmd_Wizfi360_Azure_C_Shared_Utility** there is no need to create SAS Token separately as azure_c_shared_utility Library was ported into Project.

![][Link-Execute_Project_Through_Mbed_Studio_1]

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

![][Link-Execute_Project_Through_Mbed_Studio_2]

> For **SAS Token creation** refer to below.
>
> * [Create SAS Token using Device Explorer][Link-Create_Sas_Token_Through_Device_Explorer]
> * [Create SAS Token using Azure IoT Explore][Link-Create_Sas_Token_Through_Azure_Iot_Explorer]

### 3. Project Build & Run

Press **Run Program** to Project Build & Run.

> Note :
>
> **Start Stream Analytics** in order to forward data to Blob Storage.

![][Link-Execute_Project_Through_Mbed_Studio_3]


## Step 4: Results

In terminal program we can check data sent from WizFi360 to Azure IoT Hub. In Blob Storage we can check received data.

![][Link-Result_Execute_Project_Through_Mbed_Studio_1]

![][Link-Result_Execute_Project_Through_Mbed_Studio_2]


## References

- [Connect to Azure IoT Hub using WizFi360 MQTT AT Command][Link-Standalone_Mqtt_Atcmd_Wizfi360]

[Link-Azure-Portal]: https://portal.azure.com/
[Link-Azure-Account-Free]: https://azure.microsoft.com/ko-kr/free/
[Link-Azure_Cloud_Introduction]: https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud
[Link-Create_IoT_Hub_Through_Azure_Portal]: https://docs.microsoft.com/ko-kr/azure/iot-hub/iot-hub-create-through-portal
[Link-Create_Blob_Storage_Through_Azure_Portal]: https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/create_blob_storage_through_azure_portal.md
[Link-Create_Stream_Analytics_Through_Azure_Portal]: https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/create_stream_analytics_through_azure_portal.md
[Link-Configure_Stream_Analytics_Job_Input_Output_And_Define_The_Transformation_Query_Through_Azure_Portal]: https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/configure_stream_analytics_job_input_output_and_define_the_transformation_query_through_azure_portal.md
[Link-Standalone_Mqtt_Atcmd_Wizfi360]: https://github.com/Wiznet/azure-iot-kr/blob/master/docs/IoT_device/Connectivities/Wi-Fi/standalone_mqtt_atcmd_wizfi360.md
[Link-Data_Communication_Structure]: /Document/img/azure_cloud/mqtt_data_communication_structure.png
[Link-Mbed]: https://www.mbed.com/en/
[Link-Wizfi360-Evb-Shield]: https://wizwiki.net/wiki/doku.php/products:wizfi360:start
[Link-Nucleo-L476rg]:https://os.mbed.com/platforms/ST-Nucleo-L476RG/
[Link-Required_Item]: /Document/img/azure_cloud/mqtt_atcmd_wizfi360_required_item_2.png
[Link-Mbed_Studio]: https://os.mbed.com/studio/
[Link-Set_Wizfi360_Evb_Shield_Dip_Sw]: /Document/img/azure_cloud/set_wizfi360_evb_shield_dip_sw_2.png
[Link-Device-Management]: /Document/img/azure_cloud/device_management_2.png
[Link-St_Link_St_Link_V2_St_Link_V2_1_Usb_Driver]: https://www.st.com/en/development-tools/stsw-link009.html
[Link-Execute_Project_Through_Mbed_Studio_1]: /Document/img/azure_cloud/execute_project_through_mbed_studio_1.png
[Link-Execute_Project_Through_Mbed_Studio_2]: /Document/img/azure_cloud/execute_project_through_mbed_studio_2.png
[Link-Create_Sas_Token_Through_Device_Explorer]: https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud/create_sas_token_through_device_explorer.md
[Link-Create_Sas_Token_Through_Azure_Iot_Explorer]: https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud/create_sas_token_through_azure_iot_explorer.md
[Link-Execute_Project_Through_Mbed_Studio_3]: /Document/img/azure_cloud/execute_project_through_mbed_studio_3.png
[Link-Result_Execute_Project_Through_Mbed_Studio_1]: /Document/img/azure_cloud/result_execute_project_through_mbed_studio_1.png
[Link-Result_Execute_Project_Through_Mbed_Studio_2]: /Document/img/azure_cloud/result_execute_project_through_mbed_studio_2.png
[Link-Standalone_Mqtt_Atcmd_Wizfi360]: https://github.com/Wiznet/azure-iot-kr/blob/master/docs/IoT_device/Connectivities/Wi-Fi/standalone_mqtt_atcmd_wizfi360.md
