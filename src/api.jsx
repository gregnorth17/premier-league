import axios from 'axios'

const headers =  {
				"x-apisports-key": "e6ada454a96b14b4c730492bfbac7357",
			}

// fetch(`https://v3.football.api-sports.io/standings?league=39&season=${seasonYear}
// fetch(`https://v3.football.api-sports.io/fixtures?league=39&season=${seasonYear}`
// fetch('https://v3.football.api-sports.io/teams?league=39&season=2022'
// 	fetch(`https://v3.football.api-sports.io/fixtures?id=${fixtureId}`, {

const seasonYear = new Date().getFullYear()

const url = new URL(document.location)

const endPoints = [
  `https://v3.football.api-sports.io/players/topscorers?league=39&season=2023`,
  `https://v3.football.api-sports.io/players/topassists?league=39&season=2023`,
  `https://v3.football.api-sports.io/players/topyellowcards?league=39&season=2023`,
  `https://v3.football.api-sports.io/players/topredcards?league=39&season=2023`
]

export const getLeagueData = async () => (
  await axios.get(`https://v3.football.api-sports.io/standings?league=39&season=2023`, {headers}).then(res => res.data)
)

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

const fetchProbability = () => {
	// fetch(, {
	// 		headers: {
	// 			"x-apisports-key": "e6ada454a96b14b4c730492bfbac7357"
	// 		}
	// 	})
	// 	.then(response => response.json())
	// 	.then(data => {
	// 		console.log(data)
	// 		localStorage.setItem('prediction', JSON.stringify(data))
	// 		return data
	// 	})
	const res = localStorage.getItem('prediction')
	const data = JSON.parse(res)

	return data.response[0]
}

const fetchPlayers = () => {
  // fetch(`https://v3.football.api-sports.io/players/squads?team=40`, {
	// 		headers: {
	// 			"x-apisports-key": "e6ada454a96b14b4c730492bfbac7357"
	// 		}
	// 	})
	// 	.then(response => response.json())
	// 	.then(data => {
	// 		console.log(data)
	// 		localStorage.setItem('players', JSON.stringify(data))
	// 		return data
	// 	})
    // const res = localStorage.getItem('players')
    // const data = JSON.parse(res)

    const res = localStorage.getItem('players')
    const data = JSON.parse(res)

    return data.response[0]
    
}

export {
  fetchPlayers,
  fetchProbability
}

