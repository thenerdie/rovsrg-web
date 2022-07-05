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
            <i className="text-sm">{play.Map ? play.Map.AudioFilename : "Unknown"}</i>
            <p className="text-xs">{play.Map ? play.Map.AudioArtist : "Unknown"}</p>
        </td>
        <td>{play.Rating.toFixed(2)}</td>
        <td>{play.Score}</td>
    </tr>)

    return (
        <div className="mx-auto w-[60%]">
            <ProfileCard {...profile}></ProfileCard>
            <h1 className="text-2xl mb-6"><b>Top Scores</b></h1>
            <table className="table-fixed">
                <tbody>
                    <tr>
                        <th className="w-[15%]">Rank</th>
                        <th className="w-[60%]">Song</th>
                        <th>Rating</th>
                        <th>Score</th>
                    </tr>
                    {scores}
                </tbody>
            </table>
        </div>
    )
}