import { getAllCategories } from '../lib/api'
import { GetStaticProps } from 'next'
import { useState } from 'react'

export default function Categories({ categories,filterPosts }) {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const filteredCategories = categories.edges.filter(category => category.node.name !== 'Uncategorized')

  return (
    <span className="flex items-center justify-center">
      {categories.edges.length > 0 ? (
        filteredCategories.map((category, index) => (
          <span
            key={index}
            className="mx-6 text-center"
            onClick={() =>
              setSelectedCategory(category.node.name)
            }
          >
            {category.node.name}
          </span>
        ))
      ) : (
        <span className="ml-1">{categories.edges.node.name}</span>
      )}
    </span>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const categories = await getAllCategories()

  return {
    props: {
      categories: categories,
    },
    revalidate: 10,
  }
}