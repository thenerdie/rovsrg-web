import Image from "next/image"

function ProfileCard({ UserId, PlayerName, Rank, Rating, TotalMapsPlayed }) {
    return <div className="flex mx-auto gap-3 w-[40%]">
        <Image className="rounded w-[50%] bg-gray-100" src={`https://www.roblox.com/headshot-thumbnail/image?userId=${UserId}&width=420&height=420&format=png`} width={100} height={100}></Image>
        <div>
            <h1 className="text-xl"><b>{PlayerName}</b></h1>
            <p>#{Rank}</p>
            <p>{Rating} SR</p>
            <p>{TotalMapsPlayed} Maps Played</p>
        </div>
    </div>
}

export default ProfileCard