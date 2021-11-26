import { useRouter } from "next/dist/client/router"
import useSWR from "swr"

const fetcher = (url) => fetch(url).then(res => res.json())

export default function Profile() {
    const router = useRouter()
    const { data, error } = useSWR(`/api/profile/${router.query.id}`, fetcher)

    return (
        <div>
            {data?.result.Rank}
        </div>
    )
}