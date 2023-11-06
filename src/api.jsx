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

const seasonYear = new Date().getFullYear()

const fetchLeagueData = () => {
	const res = localStorage.getItem('league')
	// if(!res.ok) {
	// 	throw {
	// 		message: "Failed to fetch data", 
	// 		statusText: res.statusText,
	// 		status: res.status
	// 	}
	// }
	// const res = localStorage.getItem('league')
	const data = JSON.parse(res)
	return data
}

const fetchFixtures = () => {
		const res = localStorage.getItem('fixtures')
		const data = JSON.parse(res)

		return data

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

export { fetchFixture, fetchFixtures, fetchLeagueData, fetchProbability, fetchSeasonStats }

