import { useLoaderData, useParams, } from 'react-router-dom';
import { fetchFixtures } from '../api';
import Fixture from '../components/Fixture';
import Fixtures from '../components/Fixtures';

const fixturesLoader = () => (fetchFixtures())


const Matches = ({resultFilter}) => {

	const {id : paramsId} = useParams()
	const fixtures = useLoaderData()

	console.log(resultFilter)


	// const displayFixtures = typeFilter ? 
	// 	fixtures.filter(({teams: {away: {name: awayTeam}, home: {name: homeTeam}}}) =>
	// 		awayTeam.toLowerCase() === typeFilter || 
	// 		homeTeam.toLowerCase() === typeFilter) 
	// 		:
	// 	fixtures

	const displayFixtures = paramsId ?
		fixtures.filter(({teams: {away: {id: awayId, winner: awayWin}, home: {id: homeId, winner: homeWin}}}) => {
			if(awayId == paramsId || homeId == paramsId){return true}
			USE .find 
			// if(resultFilter === 'draw' && awayWin === null){return true}
		})
		:
		fixtures
	
		// use result filter and id of team to filter results depending on win lose or draw

	// const buttonFilter = displayFixtures.map(fixture => {
	// 	if(resultFilter === 'win' &&
	// 		fixture.teams.away.id == paramsId &&	fixture.teams.away.winner) {
	// 			return fixture
	// 		}
	// })

	console.log(displayFixtures)

	return (
		<Fixtures>
			{displayFixtures.map(fixture => <Fixture key={fixture.fixture.id} fixture={fixture} />)}
		</Fixtures>
	)
}

export { fixturesLoader };
export default Matches