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
      'intro', 'resources'
    ],
    'Application Guides': [
      {
        type: 'category',
        label: 'Basic Guides',
        items: [
          'basic_guides/firmware_upgrade',
          'basic_guides/spi_guide',
          'basic_guides/mqtt_client'
        ]
      },
      {
        type: 'category',
        label: 'Connect to Cloud',
        items: [ 
          {
            type: 'category', 
            label: 'MS AZure', 
            items:['connect_to_cloud/standalone_mqtt',
              'connect_to_cloud/standalone_atcmd',
              'connect_to_cloud/mbed_mqtt',
              'connect_to_cloud/mbed_atcmd',
              'connect_to_cloud/arduino_atcmd',
              'connect_to_cloud/arduino_mqtt'
            ]
          },
          {
            type: 'category', 
            label: 'AWS', 
            items:['doc3']
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
