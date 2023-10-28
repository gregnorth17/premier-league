
const year = new Date().getFullYear()

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
	console.log(data)
	return data
}

const fetchFixtures = () => {
	const res = localStorage.getItem('fixtures')
	const data = JSON.parse(res)

	return data
}

const fetchFixture = () => {
	const res = localStorage.getItem('fixture')
	const data = JSON.parse(res)

	return data
}

export { fetchFixture, fetchFixtures, fetchLeagueData }

