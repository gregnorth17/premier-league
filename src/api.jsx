import axios from 'axios';

const seasonYear = new Date().getFullYear()

const endPoints = [
  `https://v3.football.api-sports.io/players/topscorers?league=39&season=2023`,
  `https://v3.football.api-sports.io/players/topassists?league=39&season=2023`,
  `https://v3.football.api-sports.io/players/topyellowcards?league=39&season=2023`,
  `https://v3.football.api-sports.io/players/topredcards?league=39&season=2023`
]

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

// https://v3.football.api-sports.io/fixtures?fixtures?id=${fixtureId}

export const getFixtureData = async fixtureId => (
  await axios.request(getData(`fixture`, {id: fixtureId}))
             .then(response => response.data)
)

export const getSeasonStats = () => (
  Promise.all(endPoints.map(endPoint => axios.get(`${endPoint}`,{headers})
  .then(res => [...res.data.response])))
)

export const getProbability = async fixtureId => (
  await axios.get(`https://v3.football.api-sports.io/predictions?fixture=${fixtureId}`, {headers})
)

export const getPlayers = async teamId => (
  await axios.get(`https://v3.football.api-sports.io/players/squads?team=${teamId}`, {headers})
)