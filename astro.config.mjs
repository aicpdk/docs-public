import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';
import mermaid from 'astro-mermaid';

export default defineConfig({
  site: 'https://docs.aicpdk.com',
  integrations: [
    mermaid(),
    starlight({
      title: 'icel docs',
      sidebar: [
        {
          label: 'About icel',
          items: [
            { label: 'Overview', slug: 'organisation/overview' },
            { label: 'Departments', slug: 'organisation/departments' },
            { label: 'Who to contact', slug: 'organisation/contact' },
            { label: 'Glossary', slug: 'organisation/glossary' },
          ],
        },
        {
          label: 'Products',
          items: [
            { label: 'Mudawama', slug: 'products/mudawama' },
            { label: 'Registry', slug: 'products/registry' },
            { label: 'CMS', slug: 'products/cms' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Logging in', slug: 'guides/logging-in' },
            { label: 'Getting access to a product', slug: 'guides/getting-access' },
            { label: 'Editing these docs', slug: 'guides/editing-these-docs' },
            { label: 'Managing members as a department admin', slug: 'guides/managing-members' },
          ],
        },
      ],
      plugins: [starlightLlmsTxt()],
    }),
  ],
});
