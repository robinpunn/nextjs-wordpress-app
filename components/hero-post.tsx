import Avatar from './avatar'
import Date from './date'
// import CoverImage from './cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section className='border-solid border-2 border-indigo-500/50 shadow-lg shadow-indigo-500/50 flex-col justify-between rounded-2xl w-3/4 lg:w-1/2 mx-auto'>
      <div className="text-center">
          <h3 className="my-10 mx-auto text-2xl lg:text-6xl leading-tight px-5">
            <Link
              href={`/posts/${slug}`}
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>
          <div
            className="text-md lg:text-lg leading-relaxed my-10 px-5"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <div className="my-10 text-md lg:text-lg px-5">
            <Date dateString={date} />
          </div>
      </div>
    </section>
  )
}
