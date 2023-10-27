import { useLoaderData, useSearchParams } from 'react-router-dom';
import { fetchFixtures } from '../api';
import Fixture from '../components/Fixture';
import Fixtures from '../components/Fixtures';

const fixturesLoader = () => (fetchFixtures())


const Matches = () => {
	// console.log(fixtures)

	const fixtures = useLoaderData()
	console.log(fixtures)

	const [searchParams, setSearchParams] = useSearchParams()

	const typeFilter = searchParams.get('type')

	

		// const displayFixtures = typeFilter ? 
		// 	fixtures.filter(
		// 		(	fixture,
		// 			{teams: {away: {name: awayTeam}, home: {name: homeTeam}}}

		// 		) =>  {
		// 			if(homeTeam.toLowerCase() === typeFilter ||  awayTeam.toLowerCase() === typeFilter) {
		// 				return fixture
		// 		}}
		// 	) :
		// 	fixtures

		// const displayFixtures = typeFilter ? 
			// fixtures.filter(fixture => {if(fixture.teams.home.toLowerCase() === typeFilter) {return fixture}}) :
		const displayFixtures = typeFilter ? 
			fixtures.filter(({teams: {away: {name: awayTeam}, home: {name: homeTeam}}}) =>
				awayTeam.toLowerCase() === typeFilter || 
				homeTeam.toLowerCase() === typeFilter) 
				:
			fixtures

		console.log(displayFixtures)

		console.log(typeFilter)
	
		return (
			<>	
				{fixtures &&
				<Fixtures>
					{displayFixtures.map(fixture => <Fixture key={fixture.fixture.id} fixture={fixture} />)}
				</Fixtures>}
			</>
		)
}

export { fixturesLoader };
export default Matches