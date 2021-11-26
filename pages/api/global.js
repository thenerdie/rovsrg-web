// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  fetch(encodeURI(`${process.env.PARSE_URL}/classes/Global?where={"Allowed": true}&order=-Rating`), {
    headers: {
      "X-Parse-Application-Id": process.env.PARSE_APP_ID
    }
  }).then(data => {
    res.status(200).json(data.body)
  })
}
