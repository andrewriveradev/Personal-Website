/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import { parseISO, format } from 'date-fns'

const About: NextPage = ({ source, blogData }) => {
  const blogText = hydrate(source)

  return (
    <>
      <article
        className="dark:text-gray-300 sm:px-4 py-16 mx-auto max-w-7xl pt-16 md:pt-28"
        itemID="#"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <div className="w-full mx-auto mb-8 text-left md:w-3/4 lg:w-1/2">
          <img
            src={blogData.cover_image}
            className="object-fit  h-auto sm:object-cover w-full md:h-64 bg-center rounded-lg"
            alt="Blog Cover"
          />
          <h1
            className="px-4 sm:px-0 mt-6 mb-6 text-3xl font-bold leading-tight text-white md:text-4xl"
            itemProp="headline"
            title={blogData.title}
          >
            {blogData.title}
          </h1>
          {/* <div className="flex mb-6 space-x-2 text-sm">
            {blogData.tag_list.map((tag) => (
              <p key={tag} className="text-gray-900 bg-gray-100 select-none px-1.5 py-0.75 rounded">
                {tag}
              </p>
            ))}
          </div> */}
          <div className="flex justify-between px-4 sm:px-0">
            <div className="flex items-center ">
              <div className="avatar ">
                <img className="rounded-full w-14 h-14" src={blogData.user.profile_image_90} alt={blogData.user.name} />
              </div>
              <div className="ml-2">
                <p className=" font-semibold "> {blogData.user.name}</p>
                <p className="text-sm text-gray-400">{format(parseISO(blogData.published_at), 'MMMM dd, yyyy')}</p>
              </div>
            </div>
            <div className="self-center">
              <p className="text-sm flex justify-end text-gray-400">{blogData.public_reactions_count} 💖</p>
              <p className="dark:text-gray-400 flex justify-end text-sm">{blogData.page_views_count} views</p>
            </div>
          </div>
        </div>

        <div className=" px-4 sm:px-0 dark:text-gray-300 w-full mx-auto prose prose-sm md:prose 2xl:prose-lg md:w-3/4 lg:w-1/2">
          {blogText}
        </div>
      </article>
    </>
  )
}
const getPosts = async () => {
  const params = { per_page: 1000 }
  const headers = { 'api-key': process.env.NEXT_API_KEY }
  const res = await fetch('https://dev.to/api/articles/me/published', { params, headers })
  const posts = await res.json()

  return posts
}

export const getStaticPaths = async () => {
  const devData = await getPosts()

  return {
    paths: devData.map((data) => ({
      params: { slug: data?.slug },
    })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const devData = await getPosts()

  const selectedBlog = devData.filter((data) => data?.slug === params?.slug)
  const markdown = selectedBlog[0]?.body_markdown
  const mdxSource = await renderToString(markdown)

  if (!devData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { source: mdxSource, blogData: selectedBlog[0] }, // will be passed to the page component as props
    revalidate: 60,
  }
}
export default About
