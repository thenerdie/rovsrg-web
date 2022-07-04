import styles from "../../styles/Global.module.css"

import Link from "next/link"
import Image from "next/image"

export default function Player({ PlayerName, Rating, TotalMapsPlayed, UserId, CountryRegion, key, rank }) {
    return <tr key={key}>
        <td className="text-center">#{rank}</td>
        <td className="flex items-center gap-3">
            <Image src={`https://www.roblox.com/headshot-thumbnail/image?userId=${UserId}&width=420&height=420&format=png`} width={50} height={50}></Image>
            <Link href={`/profile/${UserId}`}>{PlayerName ? PlayerName : ""}</Link>
        </td>
        <td className="text-center">{Rating}</td>
        <td className="text-center">{TotalMapsPlayed}</td>
    </tr>
}