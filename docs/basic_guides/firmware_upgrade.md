---
id: firmware_upgrade
title: Firmware Upgrade Guide
sidebar_label: Firmware Upgrade
---

# There are three methods to update firmware: Tera Term(Serial Program), Cloud or Upgrade Tool.

## Using Tera Term (Serial)

### Required hardware and software

- WizFi360-EVB
- Tera Term
- USB cable or TTL-to-USB module
- WizFi360 Firmware .img file

### How to download using Serial

#### Step 1

Update Firmware by communicating with Tera Term through Serial. Use UART0 or UART1 for serial communication. In case of UART1 use USB cable and in case of UART0 use TTL to USB module.

| UART1 | UART0 |
|:--------|:--------|
| ![](/Document/img/basic_guides/firmware_upgrade/wizfi360_shield_UART1.jpg) | ![](/Document/img/basic_guides/firmware_upgrade/wizfi360_shield_UART0.jpg) |

#### Step 2

Run the Tera Term, go to ‘File - New connection’ menu, select ‘Serial’, and choose the port to which WizFi360 is connected. Set speed to 115200bps.


| ![](/Document/img/basic_guides/firmware_upgrade/tera+term.png) | ![](/Document/img/basic_guides/firmware_upgrade/tera_term_serial.png) |
|:--------|:--------|


#### Step 3

While holding down the ESC key on the keyboard, press the reset button on the WizFi360 to enter the Boot mode. When boot mode is entered, the below screen is displayed.
![](/Document/img/basic_guides/firmware_upgrade/tera_term_esc.png) 

#### Step 4

Go to 'File - Transfer - XMODEM - Send' menu, select the binary file and click OK button to proceed the firmware update.

| ![](/Document/img/basic_guides/firmware_upgrade/tera_term_xmodem.png) | ![](/Document/img/basic_guides/firmware_upgrade/tera_term_xmodem_select.jpg) |
|:--------|:--------|

#### Step 5

When the firmware update is completed, 'ready' is displayed on the terminal.

| ![](/Document/img/basic_guides/firmware_upgrade/tera_term_xmodem_transmit.jpg) | ![](/Document/img/basic_guides/firmware_upgrade/tera_term_result.png) |
|:--------|:--------|

## Using Cloud (Wi-Fi)

### Required hardware & software

- WizFi360-EVB
- USB cable or TTL-to-USB module

### How to upgrade using Cloud

#### Step 1

Update Firmware by connecting to Cloud through WiFi. Connect PC, WizFi360, and Router as shown below. The router must be connected to the Internet, and the WizFi360 and WizFi360 and PC are assigned an IP by DHCP Server of router.
To use AT Command, serial communication is used UART0 or UART1. In case of UART1 use USB cable and in case of UART0 use TTL to USB module.

 ![](/Document/img/basic_guides/firmware_upgrade/wifi_configuration.png)

 #### Step 2
 
 Use the AT command to upgrade the firmware like below.

![](/Document/img/basic_guides/firmware_upgrade/at_command_screen.png)

## Using WizFi Upgrade Tool

### Required hardware & software

-	WizFi360-EVB
-	WizFi360 Upgrade Tool
-	USB Cable or TTL to USB module
-	WizFi360 Firmware: WizFi360_SDK.img

### How to upgrade using Upgrade Tool (Serial)

#### Step 1

Update Firmware by communicating with Upgrade tool through Serial.
Use UART0 or UART1 for serial communication. In case of UART1 use USB cable and in case of UART0 use TTL to USB module.

| UART1 | UART0 |
|:--------|:--------|
| ![](/Document/img/basic_guides/firmware_upgrade/wizfi360_shield_UART1.jpg) | ![](/Document/img/basic_guides/firmware_upgrade/wizfi360_shield_UART0.jpg) |

#### Step 2

Open the WizFi Upgrade Tool and Open the Serial port of WizFi360.
![](/Document/img/basic_guides/firmware_upgrade/upgradetool_step1.png)

#### Step 3

Click the folder icon to select the WizFi360 Firmware binary file. (WizFi360_SDK.img)

| ![](/Document/img/basic_guides/firmware_upgrade/upgradetool_step1_1.png) | ![](/Document/img/basic_guides/firmware_upgrade/upgradetool_step1_2.jpg) |
|:--------|:--------|

#### Step 4

Click the Start Upgrade button (arrow icon) and check the "Please Press reset button message."

| ![](/Document/img/basic_guides/firmware_upgrade/upgradetool_step1_3.png) | ![](/Document/img/basic_guides/firmware_upgrade/upgradetool_step1_4.png) |
|:--------|:--------|

#### Step 5

Firmware upload is progressed and uploaded firmware size is displayed.

| ![](/Document/img/basic_guides/firmware_upgrade/upgradetool_step1_5.png) | ![](/Document/img/basic_guides/firmware_upgrade/upgradetool_step1_6.png) |
|:--------|:--------|

### How to upgrade using Upgrade Tool (Wi-Fi)

#### Step 1

Update Firmware by communicating with Upgrade Tool through Wi-Fi. Select Firmware binary file to update in Upgrade Tool, and update firmware using AT Command (AT + CIUPDATE) in WizFi360.
To use AT Command, serial communication is used UART0 or UART1. In case of UART1 use USB cable and in case of UART0 use TTL to USB module.

 ![](/Document/img/basic_guides/firmware_upgrade/wifi_configuration.png)

#### Step 2

Click the WiFi option of the Upgrade Tool.
![](/Document/img/basic_guides/firmware_upgrade/upgradetool_wifi.png)

#### Step 3

Click IP list and select IP of PC.

| ![](/Document/img/basic_guides/firmware_upgrade/upgradetool_wifi_1.png) | ![](/Document/img/basic_guides/firmware_upgrade/upgradetool_wifi_2.png) |
|:--------|:--------|

#### Step 4

In Select FW, click the folder icon to select the WizFi360 Firmware binary file. (WizFi360_SDK.img)

| ![](/Document/img/basic_guides/firmware_upgrade/upgradetool_wifi_3.png) | ![](/Document/img/basic_guides/firmware_upgrade/upgradetool_wifi_4.png) |
|:--------|:--------|

#### Step 5

When WizFi360's Firmware Upgrade is ready, the following message will be displayed
![](/Document/img/basic_guides/firmware_upgrade/upgradetool_wifi_5.png)

#### Step 6

Use the AT command to upgrade the firmware.

| ![](/Document/img/basic_guides/firmware_upgrade/upgradetool_wifi_6.png) | ![](/Document/img/basic_guides/firmware_upgrade/upgradetool_wifi_7.png) |
|:--------|:--------|