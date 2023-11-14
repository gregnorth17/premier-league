import { createContext, useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Error from './components/Error'
import Layout from './components/Layout'
import { leagueTableLoader } from './components/LeagueTableLayout'
import Lineups from './components/Lineups'
import MatchDetailsLayout, { fixtureLoader } from './components/MatchDetailsLayout'
import Stats, { probabilityLoader } from './components/Stats'
import TeamPage, { teamPageLoader } from './components/TeamPage'
import Home from './pages/Home'
import Matches, { fixturesLoader } from './pages/Matches'
import NotFound from './pages/NotFound'
import SeasonStats, { seasonStatsLoader } from './pages/SeasonStats'

const Context = createContext()

const App = () => {
	// const YearContext = createContext()
	// export { YearContext }
	
	
	const [team, setTeam] = useState({})
	console.log(team)
	const router = createBrowserRouter(createRoutesFromElements(
		<>
			<Route path='/' element={<Layout />}  >
				<Route index loader={leagueTableLoader} element={<Home  />} errorElement={<Error />}/>
				{/* <Route index loader={leagueLoader}  element={<YearContext.Provider value={{setSeasonYear, seasonYear}}><Home  /></YearContext.Provider>} /> */}
				<Route path='matches' loader={fixturesLoader} element={<Matches />} />
				<Route path='seasonstats' loader={seasonStatsLoader} element={<SeasonStats />} />
				<Route path='*' element={<NotFound />} />
			</Route>
			<Route path=':id/matches' loader={fixturesLoader} action={teamPageLoader} element={<TeamPage />} />
			<Route path=':id/matches' loader={fixturesLoader} action={teamPageLoader} element={<TeamPage />} />
			<Route path='matches/:fixtureId/' element={<MatchDetailsLayout />} loader={fixtureLoader}>
				<Route index element={<Stats />} loader={probabilityLoader}  />
				<Route path='lineups' element={<Lineups />}  />
			</Route>
		</>
	))

  return (
		<Context.Provider value={{team, setTeam}}>
			<RouterProvider router={router} />
		</Context.Provider>
  )
}
	
export { Context }
export default App
