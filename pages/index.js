import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Game from "./components/home/game"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>RoVSRG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <h1 className="font-bold mb-[5rem] mt-10 text-center text-6xl">RoBeats Community Server</h1>

      <div className="text-center mb-[6rem]">
        <h1 className="text-xl font-bold mb-5">Our Games</h1>

        <div className="flex flex-row justify-center gap-5">
          <Game universeId={1643537246} src="/thumbs/robeatscs.png">RoBeats CS</Game>
        </div>
      </div>
    </div>
  )
}
 