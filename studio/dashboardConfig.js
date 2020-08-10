export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f30ccab7f23731c79a084c1',
                  title: 'Sanity Studio',
                  name: 'devmetal-sanity-nextjs-landing-pages-studio',
                  apiId: '57ca0156-4de9-496c-8c9e-6d82d4572721'
                },
                {
                  buildHookId: '5f30ccab848de0290c493b01',
                  title: 'Landing pages Website',
                  name: 'devmetal-sanity-nextjs-landing-pages',
                  apiId: 'edd2cd67-ead1-44ed-9cdc-affc06692e9f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/devmetalbr/devmetal-sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://devmetal-sanity-nextjs-landing-pages.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
