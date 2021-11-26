export default function handler(req, res) {
    fetch(encodeURI(`${process.env.PARSE_URL}/functions/profile?userid=${req.query.id}`), {
      method: "POST",
      headers: {
        "X-Parse-Application-Id": process.env.PARSE_APP_ID
      }
    }).then(data => {
      res.status(200).json(data.body)
    })
}