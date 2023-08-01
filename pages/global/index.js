import styles from "../../styles/Global.module.css"
import Head from "next/head"
import { useState } from "react"

import Player from "./player"

import useSWR from "swr"

const fetcher = (url) => fetch(url).then(res => res.json())

function Global() {
    const { data } = useSWR("/api/global", fetcher)

    let leaderboard = data?.map((element, i) => {
        return <Player key={i} rank={i+1} {...element}/>
    })

    return (
        <div>
            <Head>
                <title>Global</title>
            </Head>
            <table className="text-2xl text-left bg-gray-600 mx-auto w-[50%]">
                <tbody>
                    <tr>
                        <th className="text-center">Rank</th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Maps Played</th>
                        <th>Ranked Matches Played</th>
                        <th>Accuracy</th>
                    </tr>
                    {leaderboard}
                </tbody>
            </table>
        </div>
    )
}

export default Global
