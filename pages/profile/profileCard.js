import Image from "next/image"

import useSWR from "swr"
const fetcher = (url) => fetch(url).then(res => res.json())

function getFlagEmoji(countryCode) {
    return countryCode?.toUpperCase().replace(/./g, char => 
        String.fromCodePoint(127397 + char.charCodeAt())
    );
}

function ProfileCard({ UserId, PlayerName, Rank, GlickoRating, TotalMapsPlayed, CountryRegion }) {
    const percentile = (Rank / 143705 * 100).toFixed(2)

    const image = UserId ? <Image className="rounded w-[50%] bg-gray-100" src={`/api/roblox/thumbnails/${UserId}`} width={100} height={100}></Image> : null

    return <div className="flex mb-5 gap-3 w-[50%]">
        {image}
        <div>
            <h1 className="text-xl"><b>{PlayerName} {getFlagEmoji(CountryRegion)} </b></h1>
            <p>#{Rank}</p>
            <p>{Math.round(GlickoRating)} MMR <b>{percentile < 50 ? `(Top ${percentile}%)` : `Bottom ${percentile}`}</b></p>
            <p>{TotalMapsPlayed} Maps Played</p>
        </div>
    </div>
}

export default ProfileCard