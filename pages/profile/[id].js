import { useRouter } from "next/dist/client/router"
import useSWR from "swr"

import ProfileCard from "./profileCard"

const fetcher = (url) => fetch(url).then(res => res.json())

export default function Profile() {
    const router = useRouter()

    const { data: profile, error } = useSWR(`/api/profile/${router.query.id}`, fetcher)
    const { data: plays } = useSWR(`/api/profile/plays/${router.query.id}`, fetcher)

    // if (!profile) return <p>Loading...</p>

    if (error) return <div>failed to load</div>

    let scores = plays?.slice(0, 20).map((play, i) => <tr className="text-md bg-gray-100 pb-5">
        <td className="text-center">#{i + 1}</td>
        <td className="flex flex-col">
            <i className="text-sm truncate ...">{play.Map ? play.Map.AudioFilename : "Unknown"}</i>
            <p className="text-xs">{play.Map ? play.Map.AudioArtist : "Unknown"}</p>
        </td>
        <td>{play.Rating.toFixed(2)}</td>
        <td>{play.Accuracy.toFixed(2)}%</td>
        <td>{play.Score}</td>
        <td>{play.Mean.toFixed(2)}</td>
        <td className="text-left">{play.Marvelouses}</td>
        <td className="text-left">{play.Perfects}</td>
        <td className="text-left">{play.Greats}</td>
        <td className="text-left">{play.Goods}</td>
        <td className="text-left">{play.Bads}</td>
        <td className="text-left">{play.Misses}</td>
    </tr>)

    return (
        <div className="mx-auto w-[60%]">
            <ProfileCard {...profile}></ProfileCard>
            <h1 className="text-2xl mb-6"><b>Top Scores</b></h1>
            <table className="min-w-full shadow-md rounded">
                <tbody>
                    <tr className="bg-gray-300">
                        <th className="text-left">Rank</th>
                        <th className="text-left">Song</th>
                        <th className="text-left pr-5">Rating</th>
                        <th className="text-left pr-5">Accuracy</th>
                        <th className="text-left">Score</th>
                        <th className="text-left pr-3">Mean</th>
                        <th className="text-left">Marv</th>
                        <th className="text-left">Perf</th>
                        <th className="text-left">Great</th>
                        <th className="text-left">Good</th>
                        <th className="text-left">Bad</th>
                        <th className="text-left">Miss</th>
                    </tr>
                    {scores}
                </tbody>
            </table>
        </div>
    )
}