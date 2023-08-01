import maps from "../../maps.json"
import { legacyRatingToMMR } from "../../utils"

export default function handler(req, res) {
    fetch(encodeURI(`http://161.35.49.68/api/scores/player?userid=${req.query.id}&auth=${process.env.rcsauth}`), {
      method: "GET"
    })
    .then(response => response.json())
    .then(json => Array.from(json))
    .then(data => {
      const plays = data.map(play => {
        return {
          ...play,
          Map: maps.filter(map => map.AudioMD5Hash == play.SongMD5Hash)[0],
          Rating: play.Rating ? legacyRatingToMMR(play.Rating.Overall) : 500,
        }
      });

      res.status(200).json(plays)
    })

    // console.log(body)

    // res.status(200).json(plays)
}