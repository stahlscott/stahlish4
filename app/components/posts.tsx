import React from 'react';
import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

type BlogPostsType = {
  // A limit on the number of posts to show
  limit?: number;
}

export function BlogPosts({ limit }: BlogPostsType) {
  // Sort posts in order of publishing date, from oldest to newest
  // Filter out any posts with a published date in the future
  const sortedBlogs = getBlogPosts().sort((a, b) => (
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1
  )).filter(post => new Date(post.metadata.publishedAt) <= new Date())

  // If a limit is provided, take only the first (limit) posts from the list
  const visibleBlogs = limit ? sortedBlogs.slice(0, limit) : sortedBlogs
  // If a limit is provided, include a link to the full list of posts
  const showMoreLink = limit && limit < sortedBlogs.length;

  return (
    <div>
      {visibleBlogs.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blog/${post.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-400 w-[140px] tabular-nums">
              {formatDate(post.metadata.publishedAt)}
            </p>
            <p className="text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
          </div>
        </Link>
      ))}
      {showMoreLink && (
        <Link
          href={`/blog`}
          className="transition-all hover:text-neutral-200"
        >
          ...more
        </Link>
      )}
    </div>
  )
}
