import Image from "next/image"

import { BsFillPlayCircleFill } from "react-icons/bs"

import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

function Game(props) {
    const { data } = useSWR(`/api/roblox/game/${props.universeId}`, fetcher)

    if (!data) {
        return null
    }

    const gameData = data.data[0]

    return (
        <div>
            <Image className="rounded-lg" src={props.src} width={200} height={200}></Image>
            <h1 className="text-xl mt-1">{props.children}</h1>
            <p className="flex flex-row justify-center gap-1 items-center"> <BsFillPlayCircleFill/> {gameData.playing}</p>
        </div>
    )
}

export default Game