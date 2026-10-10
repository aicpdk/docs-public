import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Only .md: Starlight's docsLoader would also load .mdx, which runs code.
export const collections = {
  docs: defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: 'src/content/docs' }),
    schema: docsSchema(),
  }),
};
