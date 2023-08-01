const { Readable } = require("stream")

export default async function handler(req, res) {
    const image = await fetch(`https://thumbnails.roblox.com/v1/users/avatar-bust?userIds=${req.query.id}&size=420x420&format=Png`)
    const imageInfo = await image.json()

    const imageData = await fetch(imageInfo.data[0].imageUrl)
  
    // Set the correct content type
    res.setHeader('Content-Type', imageData.headers.get('Content-Type'))
    res.setHeader('Content-Length', imageData.headers.get('Content-Length'))

    // Stream the image data to the API response
    const readableStream = Readable.from(imageData.body)
    readableStream.pipe(res)
  }
  