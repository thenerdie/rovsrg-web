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
            <table className="mx-auto w-[50%]">
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Total Maps Played</th>
                    </tr>
                    {leaderboard}
                </tbody>
            </table>
        </div>
    )
}

export default Global
