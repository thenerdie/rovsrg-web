export default function handler(request, response) {
    fetch(`https://games.roblox.com/v1/games?universeIds=${request.query.id}`, {
        method: "GET"
    }).then(data => {
        response.status(200).json(data.body);
    })
}