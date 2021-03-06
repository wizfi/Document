module.exports = {
  title: 'WizFi360',
  tagline: 'Designed for applications from IoT projects to industrial & smart devices',
  url: 'https://wizfi.github.io',
  baseUrl: '/Document/',
  favicon: 'img/favicon.ico',
  organizationName: 'wizfi', // Usually your GitHub org/user name.
  projectName: 'Document', // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'supportus',
      content:
        '⭐️ If you like WizFi modules, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/wizfi">GitHub</a>! ⭐️',
      textColor: '#fafbfc',
    },  
    algolia: {
      apiKey: '07f8cbc0d0a5ef7b848bfcf27fc1197f',
      indexName: 'wizfi',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    navbar: {
      // title: 'WizFi360',
      logo: {
        alt: 'My Site Logo',
        src: 'img/wizfi.png',
      },
      
      items: [
        {
          label: 'Docs',
          position: 'left',
          items: [
            {
              label: 'WizFi360',
              to: 'docs/intro'
            },
           // {
              //label: 'WizFi630',
              //to: ''
           // }
          ]
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {href: 'https://wiznet.io', label: 'Where to Buy', position: 'left'},
        {href: 'https://github.com/wizfi/Release/tree/master/Binary', label: 'Download Firmware', position: 'left'},
        {href: '/Document/img/all_guides.pdf', label: 'Download PDF', position: 'left'},
        {
          href: 'https://github.com/wizfi/Document',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/intro',
            },
            {
              label: 'Application guides',
              to: 'docs/basic_guides/firmware_upgrade',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'WIZnet Forum',
              href: 'https://forum.wiznet.io',
            },
            {
              label: 'WIZnet Maker',
              href: 'http://maker.wiznet.io/',
            },
          ],
        },
        {
          title: 'Family Site',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'WIZnet',
              href: 'https://wiznet.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WIZnet Co., Ltd. All Rights Reserved.`,
    },
  },
  plugins: ['./sitePlugin'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/wizfi/Document/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
