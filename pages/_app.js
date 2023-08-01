import '../styles/globals.css'
import Image from 'next/image'
import Link from "next/link"
import styles from "../styles/Header.module.css"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="flex flex-row text-xl items-center gap-8">
          <Image alt="ok" width={200} height={200} src="/R.png"/>
          <Link href="/">HOME</Link>
          <Link href="/global">GLOBAL</Link>
          <Link href="https://github.com/RoVSRG">GITHUB</Link>
      </div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
