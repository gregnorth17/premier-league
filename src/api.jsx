import axios from 'axios';

// const apiKey = process.env.API_KEY;


const headers =  {
				"x-apisports-key":"e6ada454a96b14b4c730492bfbac7357",
			}



const seasonYear = new Date().getFullYear()

const endPoints = [
  `https://v3.football.api-sports.io/players/topscorers?league=39&season=2023`,
  `https://v3.football.api-sports.io/players/topassists?league=39&season=2023`,
  `https://v3.football.api-sports.io/players/topyellowcards?league=39&season=2023`,
  `https://v3.football.api-sports.io/players/topredcards?league=39&season=2023`
]

// export const getLeagueData = async () => (
//   await axios.get(`https://v3.football.api-sports.io/standings?league=39&season=2023`, {headers}).then(res => res.data)
// )

export const getFixtures = async () => (
  await axios.get(`https://v3.football.api-sports.io/fixtures?league=39&season=2023`, {headers}).then(res => res.data)
)

export const getFixtureData = async fixtureId => (
  await axios.get(`https://v3.football.api-sports.io/fixtures?id=${fixtureId}`, {headers})
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