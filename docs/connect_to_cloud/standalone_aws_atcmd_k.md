---
id: standalone_aws_atcmd_kr
title: WizFi360 AT Command를 이용하여 AWS IoT에 연결
sidebar_label: Standalone AT Cmd (한국어)
---

## 시작하기 전에

### Hardware Requirement
-   Desktop or laptop computer
-   MicroUSB 케이블
-   WizFi360-EVB-Shield

### Software Requirement

-   Preferred Serial Terminal (TeraTerm, YAT, etc.)
-   AWS Console account
-   본 문서에서는 Firmware v.1.1.0.595사용되었습니다. Firmware 받으실려면 문의해주시기 바랍니다.

<details open>
<summary> 시작하기전에 AWS IoT Core 준비할것</summary>

- [**AWS Console에 로그인**][Link-AWS-Console]
- [**사물 생성**][Link-create-thing]
- [**인증서 생성**][Link-create-certi]
:::important
 Certificate 생성할때 꼭 인증서를 다운해야됩니다.
![](/Document/img/aws_cloud/sdk-attach-policy.png)
AWS root CA [**여기서**][link-aws-ca] 다운로드 할 수 있습니다.
:::
- [**정책 생성**][Link-create-policy]
- [**디바이스 인증서에 정책 연결**][Link-attach-policy]
- [**사물에 인증서 연결**][Link-attach-certi]

</details>

## 소개

AWS IoT은(는) 인터넷 연결 제품(센서, 액추에이터, 내장형 마이크로 컨트롤러, 스마트 애플리케이션 등)과 AWS 클라우드 간에 안전한 양방향 통신을 제공합니다.
AWS의 서비스에 [WizFi360] 을 연동하여 데이터를 클라우드로 전송하고, 모니터링 할 수 있습니다.

본 문서에서는 WizFi360 이용하여 AWS Services에 연결 방법에 대한 가이드를 제공합니다.
이 프로세스는 다음 단계로 구성됩니다.
- AWS Account 준비
- IoT 디바이스 등록
- AWS IoT와 연결 및 데이터 통신

WiFi모듈 테스트를 위해 [WizFi360-EVB-Shield] Evaluation 보드를 사용되었습니다.

![](/Document/img/azure_cloud/mqtt_atcmd_wizfi360_required_item_1.png)

## 디바이스 준비

### 하드웨어 설정

본 문서에서 WizFi360-EVB-Shield가 standalone mode에서 사용됩니다. 따라서 UART를 위해 MicroUSB를 사용할겁니다.
MicroUSB 사용하는경우 SW1을 ON 시키고 MicroUSB 연결해야됩니다.

![](/Document/img/azure_cloud/WizFi360EVB_SW1.JPG)

### 디바이스 연결

하드웨어 설정 후 MicroUSB 이용하여 PC와 연결합니다. PC운영체제에서 보드와 연결된 COM 포트를 확인할 수 있습니다.
> 윈도우 운영체제의 경우, 장치 관리자(Device Manager)에서 COM 포트를 확인할 수 있습니다.

![](/Document/img/azure_cloud/DeviceManager.JPG)

:::tip
장치 관리자에서 COM 포트를 확인할 수 없는 경우, 다음 링크에서 드라이버를 다운로드하여 설치하시기 바랍니다.
  - [Silicon Labs CP210x USB to UART Driver]
:::

## AT 명령어

**WizFi360**의 조금 더 상세한 **사용 방법**은 [**Quick Start Guide**][Link-Wizfi360-Quick_Start_Guide], **AT Command**는 [**AT Instruction Set**][AT Instruction Set]을 참고 바랍니다.

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

Certificate 확인하려면 **AT+CASEND?** 입력합니다.

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

Private Key 확인하려면 **AT+AWSPKSEND?** 입력합니다.

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

Certificate 확인하려면 **AT+CLICASEND?** 입력합니다.

### 4. Connect to AWS

**AT Command:** AT+AWSCON

Syntax:

| Type | Command | Response |
|:--------|:--------|:--------|
| Set | AT+AWSCON="&lt;Thing ARN&gt;" | CONNECT <br /> OK |

:::important
AWS에 접속하기 전에 certificates, MQTTTOPIC and MQTTSET 세팅 해야 됩니다.<br />
그렇지 않으면 AT+AWSCON에서 오류가 반환됩니다.
:::

## 동작 예제

### 모듈 연결 및 터미널 실행

터미널에서 다음 setting 해서 WizFi360에 연결합니다: 115200-8-N-1, None.

### WizFi360 WiFi설정

````cpp
//  Mode 설정
AT+CWMODE_CUR=1

// AP list
AT+CWLAP 

// AP 접속
AT+CWJAP_CUR="ssid","password" 

// Query WizFi360 IP address
AT+CIPSTA_CUR? 
````
### 인증서 저장

````cpp
//AWS Root CA 저장
AT+CASEND=1

//Private key 저장
AT+AWSPKSEND=1

//Client ceritificate 저장
AT+CLICASEND=1

````
인증서 저장할때 Begin certificate 라인부터 End certificate 라인까지 복사해서 라인 하나씩 입력해야됩니다.

아래 그림에 참조하시기 바랍니다.
![](/Document/img/aws_cloud/terminal_ca_send.gif)

### AWS에 연결

````cpp
// 사물 섀도우 업데이트 및 업데이트 숭인 "상호 작용" 메뉴에서 복사합니다
AT+MQTTTOPIC="shadow_update_link","shadow_accepted_link"

// Username 및 password 입력 안해도 됩니다. ClientID는 사물이름입니다 
AT+MQTTSET="","","thing_name",60

// Rest API 엔드포인트를 입력합니다
AT+AWSCON="REST_API_endpoint" 

// Publish message
AT+MQTTPUB="{"state":{"reported":{"temp":"40","led":"on"}}}"  

// Disconnect from a broker
AT+MQTTDIS 
````
<details>
<summary>섀도우 링크 및 엔드포인트 못 찾으면 클릭</summary>

:::tip
AWS IoT -> 관리 -> 사물 -> **사물 이름** -> 상호 작용.<br />
아래 그림 참조하시기 바랍니다.
:::

![](/Document/img/aws_cloud/aws_shadow_interact.PNG)
</details>

<br />

아래 터미널 screenshot 참조하시기 바랍니다.

![](/Document/img/aws_cloud/token2shell.PNG)

## 동작 예제 결과

1. 동작 예제 결과 AWS -> AWS IoT -> 관리 -> 사물 -> 섀도우 메뉴에서 확인 할 수 있습니다.
2. MQTTSET에서 "업데이트 숭인" topic에 subscribe 되어서 MQTT 메시지 전송할 때 바로 결과 볼 수 있습니다.

![](/Document/img/aws_cloud/aws_shadow.PNG)

**축하합니다**

이제 AWS에 연결 및 MQTT 메시지 전송 마쳤습니다.


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
[Link-Wizfi360-Quick_Start_Guide]: http://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360qs_v113k.pdf