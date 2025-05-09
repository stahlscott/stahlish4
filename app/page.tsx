import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Scott Stahl
      </h1>
      <p className="mb-4">
        {`Full stack software engineer & web developer. Modular synthesist. I was published in 2600 Magazine once.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
