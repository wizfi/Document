---
id: standalone_aws_atcmd
title: Connect WizFi360 to AWS IoT using AT Command
sidebar_label: Standalone AT Cmd
keywords:
  - WizFi360
  - AWS
---

## Getting Started

### Hardware Requirement
-   Desktop or laptop computer
-   MicroUSB cable
-   WizFi360-EVB-Shield

### Software Requirement

-   Preferred Serial Terminal (TeraTerm, YAT, etc.)
-   AWS Console account
-   Firmware v. 1.1.0.595 was used in this guide. Please contact us to receive this version.

<details open>
<summary> AWS IoT Core preparation before start</summary>

- [**Sign to console**][Link-AWS-Console]
- [**Create a thing**][Link-create-thing]
- [**Create certificate**][Link-create-certi]
:::important
 Save certificates and key during creation.
![](/Document/img/aws_cloud/sdk-attach-policy.png)
AWS root CA can be downloaded from [**here**][link-aws-ca]
:::
- [**Create a policy**][Link-create-policy]
- [**Attach policy to certificate**][Link-attach-policy]
- [**Attach certificate to a thing**][Link-attach-certi]

</details>

## Introduction

AWS IoT provides secure, bi-directional communication between Internet-connected devices such as sensors, actuators, embedded micro-controllers, or smart appliances and the AWS Cloud.
It is possible to connect to AWS via [WizFi360] and send data using MQTT.

In this document we will provide guide how to connect to AWS services.
Process consists of following steps:
- Creation of AWS account
- Creation & configuration of Thing in IoT Core
- Connection & Message transfer

For this guide we used evaluation board [WizFi360-EVB-Shield]

![](/Document/img/azure_cloud/mqtt_atcmd_wizfi360_required_item_1.png)

## Device preparation

### Hardware setting

We are going to use WizFi360-EVB-Shield in standalone mode. MicroUSB cable will be used to connect through UART.
Switch SW1 into ON position and connect MicroUSB.

![](/Document/img/azure_cloud/WizFi360EVB_SW1.JPG)

### Device connection

Please check COM port number in Device Manager.

![](/Document/img/azure_cloud/DeviceManager.JPG)

:::tip
If COM port cannot be found in Device Manager, please install drivers below.
  - [Silicon Labs CP210x USB to UART Driver]
:::

## AT Commands Description

Please refer to [AT Instruction Set] to find information about all AT Commands.
Below we will describe commands created for AWS connection.

### 1. Set SSL Certificate

**AT Command:** AT+CASEND

Syntax:

| Type | Command | Response |
|:--------|:--------|:--------|
| Set | AT+CASEND=&lt;parameter&gt; | OK |

Defined values:

| Parameter | Value |
|:--------|:--------|
| &lt;parameter&gt; | 0: delete certificate <br /> 1: generate certificate |

In order to check current certificate enter command **AT+CASEND?**

### 2. Set Private Key

**AT Command:** AT+AWSPKSEND

Syntax:

| Type | Command | Response |
|:--------|:--------|:--------|
| Set | AT+AWSPKSEND=&lt;parameter&gt; | OK |

Defined values:

| Parameter | Value |
|:--------|:--------|
| &lt;parameter&gt; | 0: delete private key <br /> 1: save new private key |

In order to check current key enter command **AT+AWSPKSEND?**

### 3. Set Certificate for Thing

**AT Command:** AT+CLICASEND

Syntax:

| Type | Command | Response |
|:--------|:--------|:--------|
| Set | AT+CLICASEND=&lt;parameter&gt; | OK |

Defined values:

| Parameter | Value |
|:--------|:--------|
| &lt;parameter&gt; | 0: delete Certificate <br /> 1: save new certificate for Thing |

In order to check current certificate enter command **AT+CLICASEND?**

### 4. Connect to AWS

**AT Command:** AT+AWSCON

Syntax:

| Type | Command | Response |
|:--------|:--------|:--------|
| Set | AT+AWSCON="&lt;Thing ARN&gt;" | CONNECT <br /> OK |

:::important
Before connection to AWS certificates, MQTTTOPIC and MQTTSET shall be set.<br />
Otherwise AT+AWSCON will return error.
:::

## Connection procedure

### Connect your device and launch terminal

For connection use following configuration in terminal: 115200-8-N-1, None.

### Connect WizFi360 to WiFi

````cpp
// Set module to station mode
AT+CWMODE_CUR=1

// Get AP list
AT+CWLAP 

// Connect to AP
AT+CWJAP_CUR="ssid","password" 

// Query WizFi360 IP address
AT+CIPSTA_CUR?

// SSL 설정. WizFi360 SSL인증서를 체크합니다. 체크 실패경우에 서버에 접속 불가능합니다.
AT+CIPSSLCCONF=2
````

### Enter Certificate 

````cpp
//Enter AWS Root CA
AT+CASEND=1

//Enter Private key
AT+AWSPKSEND=1

//Enter Client ceritificate
AT+CLICASEND=1

````
When saving certificate or private key, all lines shall be sent one by one from "Begin certificate" line till "End certificate" line.

Please refer to below image.
![](/Document/img/aws_cloud/terminal_ca_send.gif)


### Connection to AWS

````cpp
// Shadow update and accepted links  should be copied from "Interact" menu in AWS Console
AT+MQTTTOPIC="shadow_update_link","shadow_accepted_link"

// User & password can be empty, thing name shall be entered 
AT+MQTTSET="","","thing_name",60

// Type your Rest API endpoint
AT+AWSCON="REST_API_endpoint" 

// Publish message
AT+MQTTPUB="{"state":{"reported":{"temp":"40","led":"on"}}}"  

// Disconnect from a broker
AT+MQTTDIS 
````
<details>
<summary>Can't find shadow links & Rest API endpoint? (Click here)</summary>

:::tip
Go to AWS IoT -> Manage -> Things -> **Your thing** -> Interact menu.<br />
Check screenshot below.
:::

![](/Document/img/aws_cloud/aws_shadow_interact.PNG)
</details>

<br />
Below is screenshot from terminal

![](/Document/img/aws_cloud/token2shell.PNG)

## Results

1. Results can be checked in AWS -> AWS IoT -> Manage -> Things -> Shadow.
2. Since we subscribed to "updated" topic, when MQTT message is sent we can see reply message instantly.

![](/Document/img/aws_cloud/aws_shadow.PNG)


**Congratulations**

WizFi360 is successfully connected to AWS!

[Link-AWS-Console]: https://aws.amazon.com/ko/console/
[Link-create-thing]: https://docs.aws.amazon.com/iot/latest/developerguide/create-aws-thing.html
[Link-create-certi]: https://docs.aws.amazon.com/iot/latest/developerguide/create-device-certificate.html
[Link-create-policy]: https://docs.aws.amazon.com/iot/latest/developerguide/create-iot-policy.html
[Link-attach-policy]: https://docs.aws.amazon.com/iot/latest/developerguide/attach-policy-to-certificate.html
[Link-attach-certi]: https://docs.aws.amazon.com/iot/latest/developerguide/attach-cert-thing.html
[WizFi360]: https://wizwiki.net/wiki/doku.php/products:wizfi360:start
[WizFi360-EVB-Shield]: https://wizwiki.net/wiki/doku.php/products:wizfi360:board:wizfi360-evb:start
[Silicon Labs CP210x USB to UART Driver]: https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers
[AT Instruction Set]: https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360_atset_v107.2e.pdf
[link-aws-ca]: https://docs.aws.amazon.com/iot/latest/developerguide/server-authentication.html#server-authentication-certs