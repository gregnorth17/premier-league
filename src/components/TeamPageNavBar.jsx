import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { Context } from '../App';

const TeamPageNavBar = () => {
	// get team name and display it in the nav bar
	const { id } = useParams()

	const {team: {name}} = useContext(Context)
	
	const style = {
		textDecoration: 'none',
		color: '#9aa0a6',
		textTransform: 'uppercase',
		padding: '1em 1.5em',
		borderBottom: '3px solid transparent',
		fontSize: '.875rem',
		textAlign: 'center'
	}

	const activeStyle = {
		textDecoration: 'none',
		color: '#fff',
		textTransform: 'uppercase',
		padding: '1em 1.5em',
		borderBottom: '3px solid #fff',
		fontSize: '.875rem',
		textAlign: 'center',
		background: '#522763'

	}

	const getStyles = isActive => isActive ? activeStyle : style

  return (
		<header>
			<Box style={{background: '#3F1052'}}>
				<Link to='/' style={{ maxWidth: '180px', display: 'flex', alignItems: 'center', textDecoration: 'none', background: '#3F1052', padding: '.75em 0 0 1.5em' }}>
					<Box 
					sx={{
						borderRadius: '50%',
						width: '35px',
						height: '35px',
						mr: '.625em'
					}}>
						{/* <img src={logo} alt="Premier League logo"/> */}
					</Box>
					<Typography whiteSpace='nowrap' color='#ffffff'>{name}</Typography>
				</Link>
			</Box>
			<nav style={{ display: 'flex', justifyContent: 'center',  background: '#3F1052', marginBottom: '.5em'}}>
					<NavLink to='.' className='nav-link' style={({isActive}) => getStyles(isActive)} >
						matches
					</NavLink>
					<NavLink to='table' className='nav-link' style={({isActive}) => isActive ? activeStyle : style}>
						table
					</NavLink>
					<NavLink to={`${id}/seasonstats`} className='nav-link' style={({isActive}) => isActive ? activeStyle : style}>
						stats
					</NavLink>
			</nav>
		</header>
	)
}
export default TeamPageNavBar