import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE_TITLE = 'icel docs';

function pagePath(entryId: string): string {
  const withoutIndex = entryId.replace(/(^|\/)index$/, '');
  return withoutIndex === '' ? '/' : `/${withoutIndex}/`;
}

export const GET: APIRoute = async ({ site }) => {
  const pages = (await getCollection('docs', (page) => !page.data.draft)).sort((a, b) =>
    a.id.localeCompare(b.id),
  );

  const pageLines = pages.map((page) => {
    const url = new URL(pagePath(page.id), site);
    const description = page.data.description ? `: ${page.data.description}` : '';
    return `- [${page.data.title}](${url})${description}`;
  });

  const fullTextUrl = new URL('/llms-full.txt', site);
  const body = [
    `# ${SITE_TITLE}`,
    '## Pages',
    pageLines.join('\n'),
    '## Full text',
    `- [English pages, full text](${fullTextUrl})`,
  ].join('\n\n');

  return new Response(`${body}\n`);
};
