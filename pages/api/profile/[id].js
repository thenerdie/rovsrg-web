export default function handler(req, res) {
    fetch(encodeURI(`http://161.35.49.68/api/profiles?userid=${req.query.id}&auth=${process.env.rcsauth}`), {
      method: "GET"
    }).then(data => {
      res.status(200).json(data.body)
    })
}