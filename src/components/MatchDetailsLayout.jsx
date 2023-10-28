import { Outlet, useLoaderData } from 'react-router-dom'
import { fetchFixture } from '../api'
import MatchDetails from './MatchDetails'
import MatchDetailsNav from "./MatchDetailsNav"

const fixtureLoader = () => (fetchFixture())

const MatchDetailsLayout = () => {
	
	const fixture = useLoaderData()
	
	const {statistics, lineups} = fixture

	return (
		<>
			<MatchDetails fixture={fixture}  />
			<MatchDetailsNav />
			<Outlet context={{statistics, lineups}}  />
		</>
	)
}

export { fixtureLoader }
export default MatchDetailsLayout