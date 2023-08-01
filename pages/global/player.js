import Link from 'next/link'

export default function Player({ PlayerName, GlickoRating, TotalMapsPlayed, RankedMatchesPlayed, UserId, Accuracy, key, rank }) {
    return (
        <tr className="bg-gray-900 pb-5" key={key}>
            <td className="text-center">#{rank}</td>
            <td>
                <Link href={`/profile/${UserId}`}>
                    <a className="text-indigo-600 hover:text-indigo-900">{PlayerName ? PlayerName : ""}</a>
                </Link>
            </td>
            <td className="text-indigo-300">{Math.round(GlickoRating)}</td>
            <td>{TotalMapsPlayed}</td>
            <td>{RankedMatchesPlayed}</td>
            <td>{Accuracy.toFixed(2)}%</td>
        </tr>
    )
}
