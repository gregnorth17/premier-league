import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Box, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Context } from '../App'
import { teamColors } from '../data'



const TeamPageNavBar = () => {
	const [teamColor, setTeamColor] = useState(null)
  const { teamName } = useContext(Context)

	useEffect(() => {
		setTeamColor(teamColors.filter(({name}) => name === teamName)
														.map(({background}) => background)
								)
	}, [teamName])

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
		background: teamColor
	}

	const getStyles = isActive => isActive ? activeStyle : style

  return (
		<header>
			<Box style={{background: teamColor}}>
				<Link to='/' style={{ maxWidth: '180px', display: 'flex', alignItems: 'center', textDecoration: 'none', background: teamColor, padding: '.75em 0 0 1.5em' }}>
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
			<nav style={{ display: 'flex', justifyContent: 'center',  background: teamColor, marginBottom: '.5em'}}>
					<NavLink end to='.' className='team-page-nav-link' style={({isActive}) => getStyles(isActive)}>
						matches
					</NavLink>
					<NavLink to='table' className='team-page-nav-link' style={({isActive}) => getStyles(isActive)}>
						table
					</NavLink>
					<NavLink to='players' className='team-page-nav-link' style={({isActive}) => getStyles(isActive)}>
						players
					</NavLink>
			</nav>
		</header>
	)
}

export default TeamPageNavBar