import Link from 'next/link'

export default function Player({ PlayerName, GlickoRating, TotalMapsPlayed, UserId, key, rank }) {
    return (
        <tr key={key}>
            <td className="text-center">#{rank}</td>
            <td>
                <Link href={`/profile/${UserId}`}>
                    <a className="text-indigo-600 hover:text-indigo-900">{PlayerName ? PlayerName : ""}</a>
                </Link>
            </td>
            <td>{Math.round(GlickoRating)}</td>
            <td>{TotalMapsPlayed}</td>
        </tr>
    )
}
