import Image from "next/image"

import useSWR from "swr"
const fetcher = (url) => fetch(url).then(res => res.json())

function getFlagEmoji(countryCode) {
    return countryCode?.toUpperCase().replace(/./g, char => 
        String.fromCodePoint(127397 + char.charCodeAt())
    );
}

function ProfileCard({ UserId, PlayerName, Rank, GlickoRating, TotalMapsPlayed, CountryRegion, RankedMatchesPlayed }) {
    const percentile = (Rank / 143705 * 100).toFixed(2)

    const image = UserId ? <Image className="rounded w-[50%] bg-gray-900" src={`/api/roblox/thumbnails/${UserId}`} width={100} height={100}></Image> : null

    return <div className="flex mb-5 gap-3 w-[50%]">
        {image}
        <div>
            <h1 className="text-3xl text-gray-100"><b>{PlayerName} {getFlagEmoji(CountryRegion)} </b></h1>
            <p className="text-2xl text-yellow-200">{Math.round(GlickoRating)} MMR (<b>#{Rank}</b>)</p>
            <i className="text-lg">{TotalMapsPlayed} Maps Played / {RankedMatchesPlayed} Ranked Matches Played</i>
        </div>
    </div>
}

export default ProfileCard