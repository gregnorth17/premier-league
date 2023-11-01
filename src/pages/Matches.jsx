import { useLoaderData, useSearchParams } from 'react-router-dom';
import { fetchFixtures } from '../api';
import Fixture from '../components/Fixture';
import Fixtures from '../components/Fixtures';

const fixturesLoader = () => (fetchFixtures())


const Matches = () => {
	// console.log(fixtures)

	const fixtures = useLoaderData()

	const [searchParams, setSearchParams] = useSearchParams()

	const typeFilter = searchParams.get('type')

	const displayFixtures = typeFilter ? 
		fixtures.filter(({teams: {away: {name: awayTeam}, home: {name: homeTeam}}}) =>
			awayTeam.toLowerCase() === typeFilter || 
			homeTeam.toLowerCase() === typeFilter) 
			:
		fixtures

	console.log(displayFixtures)

	console.log(typeFilter)

	return (
		<Fixtures>
			{displayFixtures.map(fixture => <Fixture key={fixture.fixture.id} fixture={fixture} />)}
		</Fixtures>
	)
}

export { fixturesLoader };
export default Matches