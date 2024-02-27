/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  doc_admin_sidebar: [
    'doc_admin_frontend/intro_doc_admin',
    {
      type: 'category',
      label: 'Gestione articoli',
      items: [
        'doc_admin_frontend/product_edit'
      ],
    },
  ],
  doc_admin_db_sidebar: [
    'doc_admin_db/intro_doc_admin_db',
    {
      type: 'category',
      label: 'Gestione articoli',
      items: [
          'doc_admin_db/products_db_schema'
      ]
    },
  ],
  doc_user_sidebar: [
    'doc_user/intro_doc_user',
    {
      type: 'category',
      label: 'Articoli economato',
      items: [
          'doc_user/product_list'
      ]
    }
  ]
};
