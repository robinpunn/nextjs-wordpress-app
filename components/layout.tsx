import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

export default function Layout({ preview, children,filterMorePosts }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen m-0">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer filterMorePosts = {filterMorePosts}/>
    </>
  )
}
