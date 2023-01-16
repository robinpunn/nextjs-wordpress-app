import Avatar from './avatar'
import Date from './date'
// import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className='border-solid border-2 border-indigo-500/50 shadow-lg shadow-indigo-500/50 flex-col justify-between rounded-2xl w-3/4 lg:w-1/2 mx-auto text-center group hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:text-slate-900 ease-in duration-300'>
      {/*<div className="mb-5">
        coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )
      </div>*/}
      <h3 className="my-10 mx-auto text-xl lg:text-3xl leading-tight px-5">
        <Link
          href={`/posts/${slug}`}
          className="hover:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Link>
      </h3>
      <div
        className="text-md lg:text-lg leading-relaxed my-5 px-5"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <div className="text-md lg:text-lg my-5 px-5">
        <Date dateString={date} />
      </div>
      {/* <Avatar author={author} /> */}
    </div>
  )
}
