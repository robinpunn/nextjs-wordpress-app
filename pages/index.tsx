import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import ScrollTop from '../components/scrolltop'
import Layout from '../components/layout'
import { getAllPostsForHome, getAllCategories } from '../lib/api'
import { useState, useEffect} from 'react'
import Categories from '../components/categories'
import SectionSeparator from '../components/section-separator'

export default function Index({ allPosts: { edges }, preview, categories }) {
  const heroPost = edges[0]?.node
  const [filteredPosts, setFilteredPosts] = useState([])
  const [currentCategory, setCurrentCategory] = useState('')
  const [initialPosts, setInitialPosts] = useState(edges)

  const handleCategorySelect = (category) => {
    setCurrentCategory(category)
  }

  const filterMorePosts = () => {
      setFilteredPosts(initialPosts.slice(1));
      setCurrentCategory("More Posts");
  }

  useEffect(() => {
    setInitialPosts(edges);
    filterMorePosts();
  }, [edges]);

  const filterPosts = (category) => {
    if(edges.length>0){
      const filtered = edges.filter(edge => edge.node.categories.edges.some(c => c.node.name === category))
      setFilteredPosts(filtered)
    }
  }

  return (
    <Layout preview={preview} filterMorePosts={filterMorePosts}>
      <Head>
        <title>Headless WordPress || Powered by Next.js</title>
      </Head>
      <Container>
        <Intro />
        <SectionSeparator />
        <Categories categories={categories} filterPosts={filterPosts} handleCategorySelect={handleCategorySelect}/>
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
        {filteredPosts.length !== 0 ? <MoreStories posts={filteredPosts} currentCategory={currentCategory}/> : <MoreStories posts={edges.slice(1)} currentCategory={currentCategory}/>}
      </Container>
      <ScrollTop filterMorePosts={filterMorePosts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)
  const categories = await getAllCategories()
  // console.log("All Posts: ", allPosts)
  // console.log('categories:', categories)
  return {
    props: { allPosts, preview, categories:categories },
    revalidate: 10,
  }
}
