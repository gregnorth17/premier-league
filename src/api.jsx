import axios from 'axios';

const seasonYear = new Date().getFullYear()

const endPoints = [
  `https://v3.football.api-sports.io/players/topscorers?league=39&season=2023`,
  `https://v3.football.api-sports.io/players/topassists?league=39&season=2023`,
  `https://v3.football.api-sports.io/players/topyellowcards?league=39&season=2023`,
  `https://v3.football.api-sports.io/players/topredcards?league=39&season=2023`
]

export const getLeagueData = async () => {
  const options = {
    method: 'GET',
    url: 'http://localhost:8000',
    params: {league: '39', season: '2023'}
  }
  return await axios.request(options).then(res => res.data)
  // await axios.get(`http://localhost:8000`).then(res => res.data)
}

export const getFixtures = async () => {
  const options = {
    method: 'GET',
    url: 'http://localhost:8000/matches',
    params: {league: '39', season: '2023'}
  }
  return await axios.get(`http://localhost:8000/matches`).then(res => res.data)
}

// https://v3.football.api-sports.io/fixtures?fixtures?id=${fixtureId}

export const getFixtureData = async fixtureId => (
  await axios.get(`http://localhost:8000/matches/id=${fixtureId}`).then(res => res.data)
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