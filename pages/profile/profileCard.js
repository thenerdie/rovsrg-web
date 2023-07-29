import Image from "next/image"

function getFlagEmoji(countryCode) {
    return countryCode?.toUpperCase().replace(/./g, char => 
        String.fromCodePoint(127397 + char.charCodeAt())
    );
}

function ProfileCard({ UserId, PlayerName, Rank, Rating, TotalMapsPlayed, CountryRegion }) {
    const percentile = (Rank / 143705 * 100).toFixed(2)

    return <div className="flex mb-5 gap-3 w-[50%]">
        <Image className="rounded w-[50%] bg-gray-100" src={`https://www.roblox.com/headshot-thumbnail/image?userId=${UserId}&width=420&height=420&format=png`} width={100} height={100}></Image>
        <div>
            <h1 className="text-xl"><b>{PlayerName} {getFlagEmoji(CountryRegion)} </b></h1>
            <p>#{Rank}</p>
            <p>{Rating} SR <b>{percentile < 50 ? `(Top ${percentile}%)` : `Bottom ${percentile}`}</b></p>
            <p>{TotalMapsPlayed} Maps Played</p>
        </div>
    </div>
}

export default ProfileCard