import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { teamColors } from '../data';

const TeamPageNavBar = () => {
	const [teamName, setTeamName] = useState(null)
	const [teamColor, setTeamColor] = useState(null)
	const location = useLocation()
	console.log(location)
	
	useEffect(() => {
		setTeamName(location.state?.name)
		const [{...colors}] = teamColors.filter(({name}) => name === location.state.name)
	}, [])

	console.log(colors)
	
	const background = colors ? colors.background : '#3F1052'

	
	const style = {
		textDecoration: 'none',
		color: '#ffffff',
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
		background: background
	}

	// '#522763'

	const getStyles = isActive => isActive ? activeStyle : style

  return (
		<header>
			<Box style={{background: background}}>
				<Link to='/' style={{ maxWidth: '180px', display: 'flex', alignItems: 'center', textDecoration: 'none', background: background, padding: '.75em 0 0 1.5em' }}>
					<Box 
					sx={{
						borderRadius: '50%',
						width: '35px',
						height: '35px',
						mr: '.625em'
					}}>
					</Box>
					<ArrowBackIcon style={{color: '#fff', marginRight: '.25em'}} background='#fff' />
					<Typography whiteSpace='nowrap' color='#ffffff'>{teamName}</Typography>
				</Link>
			</Box>
			<nav style={{ display: 'flex', justifyContent: 'center',  background: background, marginBottom: '.5em'}}>
					<NavLink end to='.' className='team-page-nav-link' style={({isActive}) => getStyles(isActive)}>
						matches
					</NavLink>
					<NavLink to='table' className='team-page-nav-link' style={({isActive}) => getStyles(isActive)}>
						table
					</NavLink>
					<NavLink to='seasonstats' className='team-page-nav-link' style={({isActive}) => getStyles(isActive)}>
						stats
					</NavLink>
			</nav>
		</header>
	)
}
export default TeamPageNavBar