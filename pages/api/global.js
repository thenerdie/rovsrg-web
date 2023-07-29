// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const top = await fetch(encodeURI(`${process.env.RCS_BASE_URL}/profiles/top?auth=${process.env.RCS_API_KEY}`))

  res.status(200).json(await top.json())
}
