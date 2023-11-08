import { useLoaderData, useParams, } from 'react-router-dom';
import { fetchFixtures } from '../api';
import Fixture from '../components/Fixture';
import Fixtures from '../components/Fixtures';

const fixturesLoader = () => (fetchFixtures())


const Matches = ({resultFilter}) => {

	const {id : paramsId} = useParams()
	const fixtures = useLoaderData()

	const teamFixtures = paramsId &&
		fixtures.filter(({teams: {away: {id: awayId}, home: {id: homeId}}}) => awayId == paramsId || homeId == paramsId)

	
	const filterTeamFixtures = paramsId ? 
	
		teamFixtures.filter(({teams: {away: {id: awayId, winner: awayWin}, home: {id: homeId, winner: homeWin}}}) => {

			if(resultFilter === 'draw' && awayWin === null) {return true}

			if(resultFilter === null ) {return teamFixtures}

			if(resultFilter === 'win' &&
				awayWin === true && awayId == paramsId ||
				resultFilter === 'win' &&
				homeWin === true && homeId == paramsId) {
					return true
				}

			if(resultFilter === 'lose' &&
				awayWin === false && awayId == paramsId ||
				resultFilter === 'lose' &&
				homeWin === false && homeId == paramsId
			) {
				return true
			}
	})
	:
	fixtures

	return (
		<Fixtures>
			{filterTeamFixtures.map(fixture => <Fixture key={fixture.fixture.id} fixture={fixture} />)}
		</Fixtures>
	)
}

export { fixturesLoader };
export default Matches