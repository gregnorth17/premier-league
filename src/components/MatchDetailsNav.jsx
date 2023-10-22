import { NavLink } from 'react-router-dom';

const MatchDetailsNav = () => {

	const style = {
		textDecoration: 'none',
		color: '#9aa0a6',
		textTransform: 'uppercase',
		padding: '.875em 1.5em',
		borderBottom: '3px solid transparent',
		fontSize: '.75rem',
		fontWeight: 'bold',
		letterSpaceing: 0
	}

	const activeStyle = {
		textDecoration: 'none',
		color: '#fff',
		textTransform: 'uppercase',
		padding: '.875em 1.5em',
		borderBottom: '3px solid #fff',
		background: '#171717',
		fontSize: '.75rem',
		fontWeight: 'bold',
		letterSpaceing: 0
	}

	const getStyles = isActive => isActive ? activeStyle : style

  return (
		<nav style={{display: 'flex', justifyContent: 'center', background: '#303134', borderTop: '.5px solid #9aa0a6'}}>
			<NavLink className='match-details-nav-link' style={({isActive}) => getStyles(isActive)} to='lineups'>
				lineup
			</NavLink>
			<NavLink className='match-details-nav-link' style={({isActive}) => getStyles(isActive)} end  to='.'>
				stats
			</NavLink>
		</nav>
	)
}

export default MatchDetailsNav