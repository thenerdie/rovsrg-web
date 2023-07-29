export default async function handler(request, response) {
    const data = await fetch(`https://games.roblox.com/v1/games?universeIds=${request.query.id}`, {
        method: "GET"
    })

    response.json((await data.json()).data)
}