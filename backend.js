import axios from 'axios'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'

const PORT = 8000
const app = express()

app.listen(8000, () => console.log(`Listening on ${PORT}`))

app.use(cors())

const getData = (endpoint, params) => {
  const baseUrl = 'https://v3.football.api-sports.io/'
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
  return axios.request(getData('standings?', {league: '39', season: '2023'}))
              .then(response => res.json(response.data))
              .catch(error => {console.error(error)})
})

app.get('/matches', (req, res) => {
  return axios.request(getData('fixtures?', {league: '39', season: '2023'}))
              .then(response => res.json(response.data))
              .catch(error => {console.error(error)})
})

app.get(`/fixture/`, (req, res) => {
  // fixtures?fixtures?id=${fixtureId}
  console.log(req, req.query.id)
  const fixtureId = req.query.id
  return axios.request(getData('fixtures?', {id: fixtureId}))
              .then(response => res.json(response.data))
              .catch(error => {console.error(error)})
})




// const headers =  {
// 				"x-apisports-key": apiKey,
// 			}

// app.get('/home', (req, res) => {
//   res.json(axios.get(`https://v3.football.api-sports.io/standings?league=39&season=2023`, {headers}).then(res => res.data))
// })
