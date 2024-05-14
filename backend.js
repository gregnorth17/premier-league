import express from 'express'
// import cors from 'cors'
import axios from 'axios'
// import { configDotenv } from 'dotenv'

const PORT = 8000
const app = express()

const apiKey = import.meta.env.VITE_API_KEY

app.listen(8000, () => console.log(`Listening on ${PORT}`))

app.get('/', (req, res) => {
  res.json('ahoy there')
})

const headers =  {
				"x-apisports-key": apiKey,
			}

app.get('/home', (req, res) => {
  res.json(axios.get(`https://v3.football.api-sports.io/standings?league=39&season=2023`, {headers}).then(res => res.data))
})
