import { NavLink, useParams } from 'react-router-dom';

const TeamPageNavBar = () => {
	const { id } = useParams()
	console.log(id);
	return (
		<header>
			<nav>
				<NavLink to={`${id}/matches`}>matches</NavLink>
				<NavLink to={`${id}/matches`}>table</NavLink>
				<NavLink to={`${id}/matches`}>stats</NavLink>
			</nav>
		</header>
	)
}

export default TeamPageNavBar