import Link from "next/link"

export default function Categories({categories, filterPosts }) {

  const filteredCategories = categories.edges.filter(category => category.node.name !== 'Uncategorized')

  return (
    <span className="flex items-center justify-evenly flex-wrap">
      {categories.edges.length > 0 ? (
        filteredCategories.map((category, index) => (
          <Link
            key={index}
            className="mx-6 text-center font-semibold hover:cursor-pointer hover:text-white"
            href="/#more"
            onClick={() => {
                filterPosts(category.node.name)
              }
            }
          >
            {category.node.name}
          </Link>
        ))
      ) : (
        <span className="ml-1">{categories.edges.node.name}</span>
      )}
    </span>
  )
}


