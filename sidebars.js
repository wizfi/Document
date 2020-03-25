/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
module.exports = {
  someSidebar: {
    Docusaurus: ['doc1', 'doc2', 'doc3'],
    Features: ['mdx'],
  },
};
*/

// sidebars.js
module.exports = {
  docs: {
    WizFi360: [
      'intro', 'resources','wizfi360_shield','wizfi360_mini','wizfi360io'
    ],
    'Application Guides': [
      {
        type: 'category',
        label: 'Basic Guides',
        items: [
          'basic_guides/quickstart',
          'basic_guides/firmware_upgrade',
          'basic_guides/spi_guide',
          'basic_guides/mqtt_client',
          'basic_guides/hardware_design',
          'basic_guides/http_client',
          'basic_guides/http_server',
          'basic_guides/throughput',
          'basic_guides/w600sdk',
          'basic_guides/airkiss'
        ]
      },
      {
        type: 'category',
        label: 'Connect to Cloud',
        items: [ 
          {
            type: 'category', 
            label: 'MS Azure', 
            items:['connect_to_cloud/standalone_mqtt',
              'connect_to_cloud/standalone_mqtt_e',
              'connect_to_cloud/standalone_atcmd',
              'connect_to_cloud/mbed_mqtt',
              'connect_to_cloud/mbed_mqtt_e',
              'connect_to_cloud/mbed_atcmd',
              'connect_to_cloud/arduino_atcmd',
              'connect_to_cloud/arduino_atcmd_e',
              'connect_to_cloud/arduino_mqtt',
              'connect_to_cloud/arduino_mqtt_e'
            ]
          },
          {
            type: 'category', 
            label: 'AWS', 
            items:['connect_to_cloud/standalone_aws_atcmd','connect_to_cloud/standalone_aws_atcmd_kr']
          },
          
        ],
      },
      {
        type: 'category',
        label: 'Other guides',
        items:[
          'other_guides/location_tracker'
        ]
      }
    ],
  },
};
