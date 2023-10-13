import Fixture from '../components/Fixture';
import Fixtures from '../components/Fixtures';

const Matches = ({fixtures}) => {
	console.log(fixtures);
	return (
		<>	
			{fixtures &&
			<Fixtures>
				{fixtures.map(fixture => <Fixture key={fixture.fixture.id} fixture={fixture} />)}
			</Fixtures>}
		</>
	)
}

export default Matches