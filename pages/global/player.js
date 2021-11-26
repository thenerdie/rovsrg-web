import styles from "../../styles/Global.module.css"

import Link from "next/link"

export default function Player({ PlayerName, Rating, TotalMapsPlayed, UserId, key, rank }) {
    return <tr className={styles.listItem} key={key}>
        <td>#{rank}</td>
        <td>
            <Link href={`/profile/${UserId}`}>{PlayerName ? PlayerName : ""}</Link>
        </td>
        <td>{Rating}</td>
        <td>{TotalMapsPlayed}</td>
    </tr>
}