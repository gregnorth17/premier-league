import { createContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import TeamData from './components/TeamData'
// import Club from './pages/Club'
import MatchDetails from './components/MatchDetails'
import Home from "./pages/Home"
import Matches from './pages/Matches'
import Team from './pages/Team'

const YearContext = createContext()

export { YearContext }

function App() {
	// const [leagueData, setLeagueData] = useState(null)
	const [localLeagueData, setLocalLeagueData] = useState(null)
	const [teams, setTeams] = useState(null)
	const [fixtures, setFixtures] = useState(null)
	const [fixture, setFixture] = useState(null)
	const year = new Date().getFullYear()
	const [seasonYear, setSeasonYear] = useState(year)

	console.log(seasonYear)
	
	
	// setLeague(data.response[0].league)
	// useEffect(() => {
	// 		const getLeagueData = async () => {
				
	// 				const response = await fetch("https://v3.football.api-sports.io/standings?league=39&season=2022", {
	// 					headers: {
	// 						"x-apisports-key": "e6ada454a96b14b4c730492bfbac7357",
	// 					}
	// 				})
	// 				const data = await response.json()
	// 				// console.log(data)
	// 				setLeagueData(data.response)
	// 				// return data.response[0].league
				
	// 		} 
			// getLeagueData()
			// console.log(leagueData)
			useEffect(() => {
				fetch(`https://v3.football.api-sports.io/standings?league=39&season=${seasonYear}`, {
						headers: {
							"x-apisports-key": "e6ada454a96b14b4c730492bfbac7357",
						}
				})
				.then(response => response.json())
				.then(data => {
					// console.log(data.response[0])
					// localStorage.setItem('league', JSON.stringify(data.response[0]))
					setLocalLeagueData(data.response[0])
				})
				fetch('https://v3.football.api-sports.io/fixtures?league=39&season=2022', {
					headers: {
						"x-apisports-key": "e6ada454a96b14b4c730492bfbac7357"
					}
				})
				.then(response => response.json())
				.then(data => {
					console.log(data)
					// localStorage.setItem('fixtures', JSON.stringify(data.response))
					setFixtures(data.response)
				})
			}, [seasonYear])
			
			// fetch('https://v3.football.api-sports.io/teams?league=39&season=2022', {
			// 	headers: {
			// 		"x-apisports-key": "e6ada454a96b14b4c730492bfbac7357"
			// 	}
			// })
			// .then(response => response.json())
			// .then(data => {
			// 	console.log(data)
			// 	localStorage.setItem('teams', JSON.stringify(data.response))
			// })
				
		

		// useEffect(() => {
		// 	if(window.localStorage) {

		// 		const league = window.localStorage.getItem('league')
		// 		league !== null ? setLocalLeagueData(JSON.parse(league)) : null

		// 		// const teams = window.localStorage.getItem('teams')
		// 		// teams !== null ? setTeams(JSON.parse(teams)) : null

		// 		const fixtures = window.localStorage.getItem('fixtures')
		// 		fixtures !== null ? setFixtures(JSON.parse(fixtures)) : null

		// 		// const fixture = window.localStorage.getItem('fixture')
		// 		// setFixture(JSON.parse(fixture))
		// 	}
		// }, [])
	
  return (
		<Routes>
				<Route path='/' element={<YearContext.Provider value={{setSeasonYear}}><Home localLeagueData={localLeagueData} /></YearContext.Provider>} />
				<Route path='/:id' element={<Team teams={teams} />} />
				<Route path='/matches' element={<Matches fixtures={fixtures} />} />
				<Route path='/matches/:fixtureId/*' element={<MatchDetails fixture={fixture} />} />
				<Route path='/table' element={<Home localLeagueData={localLeagueData} />} />
		</Routes>
  )
}
export default App
