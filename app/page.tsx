import Image from 'next/image'
import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <div className="flex pb-8 space-x-8">
        <Image
          src="/assets/gelato-sq.png"
          alt="Scott Stahl"
          width={100}
          height={100}
          className="rounded-lg"
        />
        <h1 className="text-2xl font-semibold tracking-tighter content-end">
          Scott Stahl
        </h1>
      </div>
      <p className="mb-4">
        {`Full stack software engineer & web developer, mainly Python and React.
        Modular synthesist, mainly Mannequins & Make Noise modules.
        I was published in 2600 Magazine once.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
