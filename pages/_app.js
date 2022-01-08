import '../styles/globals.css'
import Image from 'next/image'
import Link from "next/link"
import styles from "../styles/Header.module.css"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="flex flex-row items-center gap-5">
          <Image alt="ok" width={300} height={300} className={styles.image} src="/R.png"/>
          <Link href="/">Home</Link>
          <Link href="/global">Global</Link>
          <Link href="https://github.com/RoVSRG">GitHub</Link>
      </div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
