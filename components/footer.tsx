import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <Container>
        <div className="py-10 flex flex-col items-center">
          <p className="py-5 text-l font-bold tracking-tighter leading-tight text-center m-auto lg:w-1/2">
            <Link
              href='/'
              className='mx-3 font-bold hover:underline hover:text-white ease-in duration-300'
            >
            blog posts
            </Link>
             by
            <Link
              href='https://www.robinpunn.com/'
              target='_blank'
              rel="noreferrer"
              className='mx-3 font-bold hover:underline hover:text-white ease-in duration-300'
            >
            robin punnoose
            </Link>
          </p>
          <p className="text-l font-bold tracking-tighter leading-tight text-center m-auto lg:w-1/2">
            created with
            <Link
              target="_blank"
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline hover:text-white ease-in duration-300"
            >
              NextJS
            </Link>
            and
            <Link
               target="_blank"
               href={`https://wordpress.org/`}
               className="mx-3 font-bold hover:underline hover:text-white ease-in duration-300"
            >
              WordPress
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  )
}
