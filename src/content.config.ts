import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Updates = the farm's blog. Adam & Danyca add a post by dropping a Markdown
// file into src/content/updates/ — no CMS needed (KISS).
const updates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/updates' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    // Optional hero photo for the post. Until real photos exist, set `photo`
    // to a short description and it renders as a labeled placeholder.
    photo: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { updates };
