import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome, getAllCategories } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import { useState } from 'react'
import Categories from '../components/categories'
import SectionSeparator from '../components/section-separator'

export default function Index({ allPosts: { edges }, preview, categories }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Robin || Full-Stack Developer || Headless {CMS_NAME} Powered by Next.js</title>
      </Head>
      <Container>
        <Intro />
        <SectionSeparator />
        <Categories categories={categories} />
        <SectionSeparator />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)
  const categories = await getAllCategories()

  return {
    props: { allPosts, preview, categories:categories },
    revalidate: 10,
  }
}
