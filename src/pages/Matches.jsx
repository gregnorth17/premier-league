import Fixture from '../components/Fixture';
import Fixtures from '../components/Fixtures';
import NavBar from '../components/NavBar';

const Matches = ({fixtures}) => {
	console.log(fixtures);
	return (
		<>	
			<NavBar />
			{fixtures &&
			<Fixtures>
				{fixtures.map(fixture => <Fixture key={fixture.fixture.id} fixture={fixture} />)}
			</Fixtures>}
		</>
	)
}

export default Matches