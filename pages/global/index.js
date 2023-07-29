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
            <table className={styles.listContainer}>
                <tbody>
                    <tr>
                        <th className="px-2 sm:px-4 py-1 sm:py-3 text-left text-xs sm:text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                        <th className="px-2 sm:px-4 py-1 sm:py-3 text-left text-xs sm:text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-2 sm:px-4 py-1 sm:py-3 text-left text-xs sm:text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                        <th className="px-2 sm:px-4 py-1 sm:py-3 text-left text-xs sm:text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Total Maps Played</th>
                    </tr>
                    {leaderboard}
                </tbody>
            </table>
        </div>
    )
}

export default Global
