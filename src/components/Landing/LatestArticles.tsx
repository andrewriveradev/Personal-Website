/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'

interface User {
  github_username: string
  name: string
  profile_image: string
  profile_image_90: string
  twitter_username: string
  username: string
  website_url?: null | string
}

interface BlogPost {
  id: number
  title: string
  description: string
  type_of: string
  tag_list: string[]
  canonical_url: string
  slug: string
  body_markdown: string
  comments_count: number
  cover_image: string
  page_views_count: number
  path: string
  positive_reactions_count: number
  public_reactions_count: number
  published: boolean
  published_at: string
  published_timestamp: string
  url: string
  user: User
}

interface Posts {
  devData: BlogPost[]
}

const LatestArticles: React.FC<Posts> = (props) => {
  const { devData } = props

  function compare(a: { public_reactions_count: number }, b: { public_reactions_count: number }) {
    const countA = a.public_reactions_count
    const countB = b.public_reactions_count

    let comparison = 0
    if (countA < countB) {
      comparison = 1
    } else if (countA > countB) {
      comparison = -1
    }
    return comparison
  }

  const mostLikedData = devData.sort(compare).slice(0, 2)

  return (
    <section>
      <div className="text-left ">
        <h2 className="text-3xl md:text-4xl font-bold ">Popular Articles</h2>
      </div>
      <div className="flex flex-col">
        {devData &&
          mostLikedData.map(({ description, title, slug, positive_reactions_count }) => (
            <Link href={`/blog/${slug}`}>
              <div
                key={slug}
                className="p-4 cursor-pointer border border-gray-600 hover:border-gray-400 transition rounded-lg mt-5"
              >
                <div className="flex justify-between">
                  <h3 className=" mb-2 md:mb-3 text-xl  font-semibold tracking-normal">{title}</h3>
                  <span className="text-gray-300 text-sm flex pl-5">
                    {positive_reactions_count}&nbsp;
                    <span role="img" aria-label="Heart">
                      💖
                    </span>
                  </span>
                </div>

                <div className="text-sm md:text-base font-normal text-gray-300">
                  {description}
                  {/* <Link href={`/blog/${slug}`}>
                      <a className="cursor-pointer ml-2 text-blue-500 hover:text-blue-700 focus:text-blue-700 inline-flex items-center">
                        Read More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </Link> */}
                </div>
              </div>
            </Link>
          ))}
      </div>
      <Link href="/blog">
        <div className="text-center text-sm p-3 cursor-pointer">More Articles</div>
      </Link>
    </section>
  )
}

export default LatestArticles
