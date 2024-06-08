import axios from 'axios';

const seasonYear = new Date().getFullYear()

// const endpoints = [
//   `https://v3.football.api-sports.io/players/topscorers?league=39&season=2023`,
//   `https://v3.football.api-sports.io/players/topassists?league=39&season=2023`,
//   `https://v3.football.api-sports.io/players/topyellowcards?league=39&season=2023`,
//   `https://v3.football.api-sports.io/players/topredcards?league=39&season=2023`
// ]



const getData = (endpoint, params) => {
  const baseUrl = 'http://localhost:8000/'
  const options = {
    method: 'GET',
    url: `${baseUrl}${endpoint}`,
    params: params
  }
  return options
}

export const getLeagueData = async () => (
  await axios.request(getData('', {league: '39', season: '2023'}))
             .then(response => response.data)
)

export const getFixtures = async () => (
  await axios.request(getData('matches', {league: '39', season: '2023'}))
             .then(response => response.data)
)

export const getFixtureData = async fixtureId => {
  console.log(fixtureId)
  return await axios.request(getData(`fixture`, {id: fixtureId}))
                    .then(response => response.data)
}

export const getSeasonStats = async () => {
  return await axios.request('http://localhost:8000/stats')
                    .then(response => {
                      console.log(response)
                      return response
                    })
  // return await axios.get(getData('stats'))
  //                   .then(response => console.log(response))
  // return await axios.request(getData(`stats`), {league: '39', season: '2023'})
  //                   .then(response => {
  //                     console.log(response)
  //                     return response
  //                   })
}

// export const getSeasonStats = () => (
//   Promise.all(endPoints.map(endPoint => axios.get(`${endPoint}`,{headers})
//   .then(res => [...res.data.response])))
// )

export const getPrediction = async fixtureId => (
  await axios.request(getData('prediction', {id: fixtureId}))
             .then(response => response.data)
)

export const getPlayers = async id => (
  await axios.request(getData('players', {id}))
             .then(response => response.data)
)