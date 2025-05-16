import { getBlogPosts } from 'app/blog/utils'

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${process.env.BASE_URL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const routes = ['', '/blog'].map((route) => ({
    url: `${process.env.BASE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
