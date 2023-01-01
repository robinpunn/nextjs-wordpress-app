import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h3 className="text-3xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        Understanding The Web
      </h3>
      <h5 className="text-lg md:text-xl font-bold tracking-tighter leading-tight md:pr-8">
        the journey of a self taught web developer
      </h5>
    </section>
  )
}
