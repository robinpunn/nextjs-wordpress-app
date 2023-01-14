import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <Container>
        <div className="py-10 flex flex-col items-center">
          <p className="py-5 text-l font-bold tracking-tighter leading-tight text-center m-auto lg:w-1/2">
            blog posts by <a href='https://www.robinpunn.com/' target='_blank' rel="noreferrer" >robin punnoose</a>
          </p>
          <p className="text-l font-bold tracking-tighter leading-tight text-center m-auto lg:w-1/2">
            created with
            <a
              target="_blank"
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              NextJS
            </a>
            and
            <a
               target="_blank"
               href={`https://wordpress.org/`}
               className="mx-3 font-bold hover:underline"
            >
              WordPress
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
