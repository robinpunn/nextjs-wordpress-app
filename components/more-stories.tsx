import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
     <h2 id="more" className="my-8 mt-24 text-6xl md:text-7xl font-bold tracking-tighter leading-tight text-center">
        More Posts
      </h2>
      <div className="grid grid-cols-1 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
      {posts.map(({ node }) => {
      if(node){
        return (
            <PostPreview
              key={node.slug}
              title={node.title}
              date={node.date}
              author={node.author}
              slug={node.slug}
              excerpt={node.excerpt}
            />
          )
        }
      })}
      </div>
    </section>
  )
}
