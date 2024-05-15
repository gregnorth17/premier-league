import axios from 'axios'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'

const PORT = 8000
const app = express()

app.listen(8000, () => console.log(`Listening on ${PORT}`))

app.use(cors())

const baseUrl = 'https://v3.football.api-sports.io/'

const makeGetRequest = (baseUrl, endpoint) => {
  const options = {
    method: 'GET',
    url: 'https://v3.football.api-sports.io/standings?league=39&season=2023',
    headers: {
      "x-apisports-key": process.env.VITE_API_KEY
    }
  }

  axios.request(options).then(response => res.json(response.data))
                        .catch(error => {console.error.error(error)})
}

app.get('/', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://v3.football.api-sports.io/standings?league=39&season=2023',
    headers: {
      "x-apisports-key": process.env.VITE_API_KEY
    }
  }

  axios.request(options).then(response => res.json(response.data))
                        .catch(error => {console.error.error(error)})
})



// const headers =  {
// 				"x-apisports-key": apiKey,
// 			}

// app.get('/home', (req, res) => {
//   res.json(axios.get(`https://v3.football.api-sports.io/standings?league=39&season=2023`, {headers}).then(res => res.data))
// })
