import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {

  return (
      <div className="mx-auto my-8 w-9/12">
        <header>
          <h1 className="text-6xl font-bold text-center">My blog</h1>
          <nav className="my-4">
            <ul className="flex flex-row justify-center space-x-4">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Component {...pageProps} />
      </div>
    ) 
}

export default MyApp
