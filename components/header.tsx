import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-lg lg:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 py-2 text-center">
      <Link href="/" className="hover:underline">
        Understanding The Web
      </Link>
    </h2>
  )
}
