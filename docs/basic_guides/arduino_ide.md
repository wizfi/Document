---
id: arduino_ide
title: Program WizFi360 using Arduino IDE
sidebar_label: Programming in Arduino IDE
keywords: 
    - WizFi360
    - Arduino IDE
---

## Introduction

It is possible to program WizFi360 using Arduino IDE.
In this guide we will show how to do it.

## Requirements

### Hardware

- WizFi360-EVB-mini or WizFi360-EVB-Shield
- USB cable
- Notebook or Desktop PC
- UartToUsb

Connect UartToUsb to WizFi360 evaluation board as below:
- WizFi360 RXD0 → UartToUSB TX
- WizFi360 TXD0 → UartToUSB RX
- WizFi360 3v3 → UartToUSB VCC
- WizFi360 GND → UartToUSB GND

![](/img/basic_guides/arduino_ide/arduino_ide_setup.jpg)

### Software

- Arduino IDE

:::important
For this guide hourly build of Arduino IDE was used.
Arduino IDE version was "LAST UPDATE 25 March 2020 23:34:57 GMT" at the moment of this guide creation.
:::

## Instructions

1. Open Preferences in Arduino IDE.

![](/img/basic_guides/arduino_ide/arduino_ide_preferences.png)   

2. In preferences window set compiler warnings to "All". Also check all items except "Use external editor".<br />Add http://wizwiki.net/download/WizFi360/arduino/package_WizFi360_index.json to board manager URL.

![](/img/basic_guides/arduino_ide/arduino_ide_preferences_1.png) 

3. Open board manager from Tools menu.

![](/img/basic_guides/arduino_ide/arduino_ide_board_manager.png) 

4. Search for WizFi360 in boards manager and install latest version.

![](/img/basic_guides/arduino_ide/arduino_ide_board_manager_1.png) 

5. Select WizFi360-EVB-Mini or Shield in Tools -> Board menu.

![](/img/basic_guides/arduino_ide/arduino_ide_board_manager_2.png) 

6. Set upload speed to 2000000 and check COM port.

![](/img/basic_guides/arduino_ide/arduino_ide_board_manager_3.png) 

7. Open example from File -> Examples

![](/img/basic_guides/arduino_ide/arduino_ide_example.png) 

8. Compile and upload.

![](/img/basic_guides/arduino_ide/arduino_ide_upload.png) 

**Congratulations! Process is completed!**
