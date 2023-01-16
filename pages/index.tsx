import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome, getAllCategories } from '../lib/api'
import { useState} from 'react'
import Categories from '../components/categories'
import SectionSeparator from '../components/section-separator'

export default function Index({ allPosts: { edges }, preview, categories }) {
  const heroPost = edges[0]?.node
  const [filteredPosts, setFilteredPosts] = useState([]);

  console.log('initial:',filteredPosts)

  const filterPosts = (category) => {
    if(edges.length>0){
      const filtered = edges.filter(edge => edge.node.categories.edges.some(c => c.node.name === category))
      console.log('Filtered data:', filtered)
      setFilteredPosts(filtered)
      console.log('filteredPosts', filteredPosts)
    }
  }


  return (
    <Layout preview={preview}>
      <Head>
        <title>Robin || Full-Stack Developer || Headless WordPress Powered by Next.js</title>
      </Head>
      <Container>
        <Intro />
        <SectionSeparator />
        <Categories categories={categories} filterPosts={filterPosts}/>
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
        {filteredPosts.length !== 0 ? <MoreStories posts={filteredPosts}/> : <MoreStories posts={edges.slice(1)}/>}
      </Container>
    </Layout>
  )
}

console.log('before api call')
export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)
  const categories = await getAllCategories()
  console.log("All Posts: ", allPosts)
  console.log('categories:', categories)
  return {
    props: { allPosts, preview, categories:categories },
    revalidate: 10,
  }
}
