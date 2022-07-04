// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  fetch(encodeURI(`http://161.35.49.68/api/profiles/top?auth=${process.env.rcsauth}`)).then(data => {
    res.status(200).json(data.body)
  })
}
