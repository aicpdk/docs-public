import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';
import mermaid from 'astro-mermaid';
import { satteri } from '@astrojs/markdown-satteri';
import { noRawHtml } from './src/no-raw-html.mjs';

// Astro hashes its own scripts but skips Starlight's `is:inline` ones (theme, search shortcut,
// sidebar scroll). After a Starlight upgrade, the CSP build check names the new hashes.
const STARLIGHT_INLINE_SCRIPT_HASHES = [
  'sha256-VWo5Wp4aqSj6nSgMpeAp9cKieaoIfwFUAunAVugI5gA=',
  'sha256-f/zAUE74ucc3JYp4r4QQvkJofoQdkOIhHYK+jeZ6eko=',
  'sha256-GkZBRnvSuhtx/cvzvukVkX2JJZW+DdPlVr7BX8Tefqo=',
  'sha256-wX2yOADeV+NMngflD5uYi3vl50SHC4sfM1EmylVjlX4=',
  'sha256-7eCV4jtsr4t4knb3c4FCRPeu7GGZeOUGE3XvWix0XOQ=',
];

export default defineConfig({
  site: 'https://docs.aicpdk.com',
  markdown: { processor: satteri({ mdastPlugins: [noRawHtml] }) },
  security: { csp: {
    styleDirective: {
      resources: [
        { resource: "'unsafe-inline'", kind: 'attribute' },
        { resource: "'self'", kind: 'element' },
        { resource: "'unsafe-inline'", kind: 'element' },
      ],
    },
    scriptDirective: { hashes: STARLIGHT_INLINE_SCRIPT_HASHES },
  } },
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
            { label: 'TV board', slug: 'products/tv-board' },
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
