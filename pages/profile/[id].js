import { useRouter } from "next/dist/client/router"
import useSWR from "swr"

import { format, formatDistance, formatRelative, subDays } from 'date-fns'

import ProfileCard from "./profileCard"

const fetcher = (url) => fetch(url).then(res => res.json())

export default function Profile() {
    const router = useRouter()

    const { data: profile, error } = useSWR(`/api/profile/${router.query.id}`, fetcher)
    const { data: plays } = useSWR(`/api/profile/plays/${router.query.id}`, fetcher)

    // if (!profile) return <p>Loading...</p>
    if (error) return <div>failed to load</div>

    let scores = plays?.slice(0, 50).map((play, i) => <tr className="text-lg bg-gray-900 pb-5">
        <td className="text-center">#{i + 1}</td>
        <td className="flex flex-col">
            <p className="text-xl -mb-2 truncate ...">{play.Map ? play.Map.AudioFilename : "Unknown"} [{(play.Rate / 100).toFixed(2)}x]</p>
            <p className="text-md text-gray-300 flex">{play.Map ? play.Map.AudioArtist : "Unknown"} // <p className="ml-1 text-gray-400">Mapped by {play.Map?.AudioMapper ? play.Map.AudioMapper : "Unknown"}</p></p>
            <i className="text-sm text-gray-500 -mt-2 truncate ...">{formatDistance(new Date(play._updated_at), new Date(), { addSuffix: true })}</i>
        </td>
        <td className={"text-2xl text-indigo-300 text-shadow-lg"}>{Math.round(play.Rating)}</td>
        <td>{play.Accuracy.toFixed(2)}%</td>
        <td>{play.Score}</td>
        <td>{play.Mean.toFixed(2)} ms</td>
        <td className="text-left">{play.Marvelouses}</td>
        <td className="text-left text-yellow-300">{play.Perfects}</td>
        <td className="text-left text-green-500">{play.Greats}</td>
        <td className="text-left text-blue-600">{play.Goods}</td>
        <td className="text-left text-purple-600">{play.Bads}</td>
        <td className="text-left text-red-600">{play.Misses}</td>
    </tr>)

    return (
        <div className="mx-auto w-[60%]">
            <ProfileCard {...profile}></ProfileCard>
            <h1 className="text-3xl mb-2"><b>Top Scores</b></h1>
            <table className="min-w-full shadow-xl rounded">
                <tbody>
                    <tr className="bg-gray-600">
                        <th className="text-center">Rank</th>
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