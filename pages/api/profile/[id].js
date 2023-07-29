export default async function handler(req, res) {
  const profile = await fetch(encodeURI(`${process.env.RCS_BASE_URL}/profiles?userid=${req.query.id}&auth=${process.env.RCS_API_KEY}`))

  res.status(200).json(await profile.json())
}