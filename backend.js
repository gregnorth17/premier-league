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
  const leagueId = req.query.league
  const season = req.query.season
  return axios.request(getData('standings?', {league: leagueId, season: season}))
              .then(response => res.json(response.data))
              .catch(error => console.error(error))
})

app.get('/matches', (req, res) => {

  return axios.request(getData('fixtures?', {league: '39', season: '2023'}))
            .then(response => res.json(response.data))
            .catch(error => console.error(error))
})

app.get(`/fixture/`, (req, res) => {
  const fixtureId = req.query.id
  return axios.request(getData('fixtures?', {id: fixtureId}))
              .then(response => res.json(response.data))
              .catch(error => console.error(error))
})

app.get('/prediction', (req, res) => {
  const fixtureId = req.query.id
  return axios.request(getData('predictions?', {fixture: fixtureId}))
              .then(response => res.json(response.data))
              .catch(error => console.error(error))
})

app.get('/players', (req, res) => {
  const id = req.query.id
  return axios.request(getData('players/squads?', {team: id}))
              .then(response => res.json(response.data))
              .catch(error => console.error(error))
})

app.get('/stats', (req, res) => {

  // const endpoints = [
  //   'topscorers?',
  //   'topassits?',
  //   'topyellowcards?',
  //   'topredcards?'
  // ]

  const urls = [
  `https://v3.football.api-sports.io/players/topscorers?league=39&season=2023`,
  `https://v3.football.api-sports.io/players/topassists?league=39&season=2023`,
  `https://v3.football.api-sports.io/players/topyellowcards?league=39&season=2023`,
  `https://v3.football.api-sports.io/players/topredcards?league=39&season=2023`
]

  // const urls = endpoints.map(endpoint => getData(`players/${endpoint}`, {league: '39',season: '2023'}))
  // console.log(urls)

  return Promise.all(urls.map(url => axios.get(url, {
    headers: {
      "x-apisports-key": process.env.VITE_API_KEY
    }
  })))
    .then(response => response)

})
  

  // return Promise.all(urls.map(url => axios.get(url)))
  //               .then(response => console.log(response))
  // return axios.all(urls.map(url => axios.get(url)))
  //             .then(response => {
  //               console.log(typeof(response))
  //               return res.json(response.data)
  //             })

                // .then(response => {
                //   console.log(response)
                //   return res.json([...response.data.response])
                // })
//                 .catch(error => console.error(error))
// })
  
//   endpoints.map(endpoint => axios.request(getData(`players/${endpoint}`, {league: '39', season: '2023'})))
//                                         .then(response => {
//                                         console.log(response)
//                                         return res.json([...response.data.response])
//                                         })
//                                         .catch(error => console.error(error))
                                    
// })
                                  
                                  // return axios.requests(getData('players/', {team: req.query.team)
// return await Promise.all(endpoints.map(endpoint => axios.request(getData(`stats`))))
//                                                     .then(res => [...res.data.response])