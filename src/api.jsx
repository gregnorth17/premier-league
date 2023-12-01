
const headers =  {
				"x-apisports-key": "e6ada454a96b14b4c730492bfbac7357",
			}

// fetch(`https://v3.football.api-sports.io/standings?league=39&season=${seasonYear}
// fetch(`https://v3.football.api-sports.io/fixtures?league=39&season=${seasonYear}`
// fetch('https://v3.football.api-sports.io/teams?league=39&season=2022'
// 	fetch(`https://v3.football.api-sports.io/fixtures?id=${fixtureId}`, {


// const topScorersUrl = fetch(`https://v3.football.api-sports.io/players/topscorers?league=39&season=${seasonYear}`, headers).then(resp => resp.json())
	// const assistsUrl = fetch(`https://v3.football.api-sports.io/players/topassists?league=39&season=${seasonYear}`, headers).then(resp => resp.json())
	// const yellowCardUrl = fetch(`https://v3.football.api-sports.io/players/topyellowcards?league=39&season=${seasonYear}`, headers).then(resp => resp.json())
	// const redCardUrl = fetch(`https://v3.football.api-sports.io/players/topredcards?league=39&season=${seasonYear}`, headers).then(resp => resp.json())

	// Promise.all([topScorersUrl, assistsUrl, yellowCardUrl, redCardUrl])
	// 	.then(data => {
	// 		console.log(data)
	// 		const seasonData = data.map(data => [...data.response])
	// 		localStorage.setItem(`seasonStats${seasonYear}`, JSON.stringify(seasonData))
	// 		// setSeasonStats(data)
	// 	})

  // if(!res.ok) {
	// 	throw {
	// 		message: "Failed to fetch data", 
	// 		statusText: res.statusText,
	// 		status: res.status
	// 	}
	// }

const seasonYear = new Date().getFullYear()

const url = new URL(document.location)
console.log(url)

const fetchLeagueData = () => {

  //  const data = useQuery(['league'], () => {

  //   return fetch(`https://v3.football.api-sports.io/standings?league=39&season=2023`, {headers})
  //           .then(res => res.json())
  //           .then(data => {
  //             console.log(data)
  //             return data.response[0]
  //           })
  // })

  const getApiData = async () =>  {
    const res = await fetch(`https://v3.football.api-sports.io/standings?league=39&season=${seasonYear}`, {headers})
    const data = await res.json()
    localStorage.setItem(`league${seasonYear}`, JSON.stringify(data.response[0]))

    return data.response[0]
  }

  const checkLocalStorage = () => {
      const data = localStorage.getItem(`league${seasonYear}`)
      return data !== null ? JSON.parse(data) : getApiData()
  }

  return checkLocalStorage()
}

const fetchFixtures = async () => {

  const getApiData = async () =>  {
    const res = await fetch(`https://v3.football.api-sports.io/fixtures?league=39&season=${seasonYear}`, {headers})
    const data = await res.json()
    localStorage.setItem(`fixtures${seasonYear}`, JSON.stringify(data.response[0]))

    return data.response
  }

  const checkLocalStorage = () => {
      const data = localStorage.getItem(`fixtures${seasonYear}`)
      return data !== null ? JSON.parse(data) : getApiData()
  }

  return checkLocalStorage()
}

const fetchFixture = () => {
	// 867946
	// 1035326
// 	fetch(`https://v3.football.api-sports.io/fixtures?id=867946`,{
// 	headers: {
// 				"x-apisports-key": "e6ada454a96b14b4c730492bfbac7357"
// 	}
// })
// 	.then(res => res.json())
// 	.then(data => {
// 		console.log(data)
// 		localStorage.setItem('fixtureLiv', JSON.stringify(data))
// 		return data
// 	})
	const res = localStorage.getItem('fixtureLiv')
	const data = JSON.parse(res)

	return data.response[0]
}

const fetchSeasonStats = () => {
	const res = localStorage.getItem('seasonStats')
	const data = JSON.parse(res)

	return data.map(stat => stat.response)
}

const fetchProbability = () => {
	// fetch(`https://v3.football.api-sports.io/predictions?fixture=1035326`, {
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
  fetchFixture,
  fetchFixtures,
  fetchLeagueData, fetchPlayers, fetchProbability,
  fetchSeasonStats
}

