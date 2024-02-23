const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Gestione Magazzino',
  tagline: ' ',
  url: 'http://172.16.8.8:8000',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ec25p5e', // Usually your GitHub org/user name.
  projectName: 'InventoryDocs', // Usually your repo name.
  scripts: [
    'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js',
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ec25p5e/InventoryDocs/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      mySidebar: ['doc_admin_sidebar'],
      navbar: {
        title: 'Gestione Magazzino',
        logo: {
          alt: 'My Site Logo',
          src: 'https://www.sdk-csd.ch/admin/data/files/member/image/64/logo@3x_logo_big.png?lm=1572338395',
        },
        items: [
          {
            type: 'doc',
            docId: 'doc_admin_frontend/intro_doc_admin',
            position: 'left',
            label: 'Documentazione Admin',
          },
          {
            type: 'doc',
            docId: 'doc_admin_db/intro_doc_admin_db',
            position: 'left',
            label: 'Documentazione Admin - DB',
          },
          {
            type: 'doc',
            docId: 'doc_user/intro_doc_user',
            position: 'left',
            label: 'Documentazione utente',
          }
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Documentazione',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gestione Magazzino, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
      },
    }),
});
