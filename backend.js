import axios from 'axios'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'

const PORT = 8000
const app = express()

app.listen(8000, () => console.log(`Listening on ${PORT}`))

app.use(cors())

const baseUrl = 'https://v3.football.api-sports.io/'

const makeGetRequest = (baseUrl, endpoint, params) => {
  const options = {
    method: 'GET',
    url: `${baseUrl}${endpoint}`,
    params: params,
    headers: {
      "x-apisports-key": process.env.VITE_API_KEY
    }
  }
  return options
}

app.get('/', (req, res) => {
  console.log(req.query)

  axios.request(makeGetRequest(baseUrl, 'standings?', {league: '39', season: '2023'}))
                        .then(response => res.json(response.data))
                        .catch(error => {console.error.error(error)})
})



app.get('/matches', (req, res) => {
  axios.request(makeGetRequest(baseUrl, 'fixtures?', {league: 39, season: 2023})).then(response => res.json(response.data))
                        .catch(error => {console.error.error(error)})
})
const url = new URLSearchParams()
console.log(url)

// const baseUrl = 'http://localhost:8000'
//   const queryParams = new URLSearchParams({
//     endpoint: 'fixtures?',
//     params2: `id=${fixtureId}`



// app.get('/matches', (req, res) => {
//   // fixtures?fixtures?id=${fixtureId}
//   console.log(req.query)
//   axios.request(getOptions(baseUrl, 'fixtures?league=39&season=2023')).then(response => res.json(response.data))
//                         .catch(error => {console.error.error(error)})
// })




// const headers =  {
// 				"x-apisports-key": apiKey,
// 			}

// app.get('/home', (req, res) => {
//   res.json(axios.get(`https://v3.football.api-sports.io/standings?league=39&season=2023`, {headers}).then(res => res.data))
// })
