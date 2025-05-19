import React from 'react'
import Image from 'next/image'
import { BlogPosts } from 'app/components/posts'
import gelato from 'public/assets/gelato-sq.png'
import { leetTextTransform } from './blog/utils'

export default function Page() {
  return (
    <section>
      <div className="flex pb-8 space-x-8">
        <Image
          src={gelato}
          alt="Scott Stahl"
          width={100}
          height={100}
          className="rounded-lg"
        />
        <h1 className="text-2xl font-semibold tracking-tighter content-end primary-header standard-text">
          Scott Stahl
        </h1>
        <h1 className="text-2xl font-semibold tracking-tighter content-end primary-header leet-text">
          {leetTextTransform('Scott Stahl')}
        </h1>
      </div>
      <p className="mb-4 primary-text standard-text">
        Full stack software engineer & web developer, mainly Python and React.
        <br/>
        Modular synthesizers, mainly Mannequins & Make Noise modules.
        <br/>
        I was published in 2600 Magazine once.
      </p>
      <p className="mb-4 primary-text leet-text">
        {leetTextTransform('Full stack software engineer & web developer, mainly Python and React.')}
        <br/>
        {leetTextTransform('Modular synthesizers, mainly Mannequins & Make Noise modules.')}
        <br/>
        {leetTextTransform('I was published in 2600 Magazine once.')}
      </p>
      <div className="my-8">
        <BlogPosts limit={5} />
      </div>
    </section>
  )
}
