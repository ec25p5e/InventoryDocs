const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Gestione Magazzino',
  tagline: ' ',
  url: 'http://localhost:3000',
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
          src: 'img/logo.svg',
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
          }
        ],
      },
      footer: {
        style: 'dark',
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
        darkTheme: darkCodeTheme,
      },
    }),
});
