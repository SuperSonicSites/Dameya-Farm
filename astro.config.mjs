import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static marketing site — fast, cheap to host, no server needed.
// TODO: set `site` to the real production domain when the family has one
// (used for the sitemap and canonical/Open Graph URLs).
export default defineConfig({
  site: 'https://dameyafarm.example.com',
  output: 'static',
  integrations: [sitemap()],
});
