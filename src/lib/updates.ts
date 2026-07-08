import { getCollection } from 'astro:content';
import { formatDate } from './format';

// Shared helper: published updates, newest first, with display date + url.
export async function getSortedUpdates() {
  const posts = await getCollection('updates', ({ data }) => !data.draft);
  return posts
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map((post) => ({
      ...post,
      displayDate: formatDate(post.data.date),
      href: `/updates/${post.id}/`,
    }));
}
