import { Outlet, useLoaderData } from 'react-router-dom'
import { fetchFixture } from '../api'
import MatchDetails from './MatchDetails'
import MatchDetailsNav from "./MatchDetailsNav"

const fixtureLoader = ( {params} ) => {
	console.log(params)
	return fetchFixture()
}

const MatchDetailsLayout = () => {
	
	const fixture = useLoaderData()
	console.log(fixture)
	const {statistics, lineups} = fixture

	return (
		<>
			<MatchDetails fixture={fixture}  />
			<div style ={{background: '#212121', maxWidth: '632px', margin: '0 auto'}}>
				<MatchDetailsNav />
				<Outlet context={{statistics, lineups}}  />
			</div>
		</>
	)
	
}

export { fixtureLoader }
export default MatchDetailsLayout