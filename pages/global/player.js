import Link from 'next/link'

export default function Player({ PlayerName, GlickoRating, TotalMapsPlayed, UserId, key, rank }) {
    return (
        <tr key={key} className="bg-white hover:bg-gray-100 border-b border-gray-200 sm:flex sm:flex-row sm:items-center sm:justify-between">
            <td className="px-2 sm:px-4 py-1 sm:py-3 text-left text-xs sm:text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">#{rank}</td>
            <td className="px-2 sm:px-4 py-1 sm:py-3 text-left text-xs sm:text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                <Link href={`/profile/${UserId}`}>
                    <a className="text-indigo-600 hover:text-indigo-900">{PlayerName ? PlayerName : ""}</a>
                </Link>
            </td>
            <td className="px-2 sm:px-4 py-1 sm:py-3 text-left text-xs sm:text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">{Math.round(GlickoRating)}</td>
            <td className="px-2 sm:px-4 py-1 sm:py-3 text-left text-xs sm:text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">{TotalMapsPlayed}</td>
        </tr>
    )
}
