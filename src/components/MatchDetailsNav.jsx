import { NavLink, useParams } from 'react-router-dom';

const MatchDetailsNav = () => {

	// const navItems = ['lineups', 'stats']
	const {fixtureId} = useParams()
	console.log(fixtureId)

	const style = {
		textDecoration: 'none',
		color: '#9aa0a6',
		textTransform: 'uppercase',
		padding: '1em 1.5em',
		borderBottom: '3px solid transparent'
	}

	const activeStyle = {
		textDecoration: 'none',
		color: '#fff',
		textTransform: 'uppercase',
		padding: '1em 1.5em',
		borderBottom: '3px solid #fff',
	}

	const getStyles = isActive => isActive ? activeStyle : style

  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar sx={{
		// 		background: '#303134',
		// 	}} position="static"
		// 	>
		// 		<Box sx={{
		// 			display: 'flex',
		// 			alignItems: 'center'
		// 		}}>
		// 		</Box>
		// 		<Box sx={{ 
		// 			display: 'flex', 
		// 			justifyContent: 'center'
		// 		}}>
		// 			<List sx={{ 
		// 				display: 'flex',
		// 				maxWidth: '752px',
		// 				padding: 0
		// 				}}
		// 			disablePadding
		// 			>
		// 			{navItems.map((item) => (
		// 				<ListItem sx={{
		// 					padding: 0,
		// 					paddingLeft: ".75em"
		// 				}} 
		// 				key={item} 
		// 				>
		// 					<ListItemButton sx={{ 
		// 						textAlign: 'center',
		// 						textTransform: 'uppercase',
		// 						padding: '.75em 0',
		// 						}}
								
		// 					>
								
		// 						<NavLink style={{
		// 							fontSize: '2rem',
		// 							textDecoration: 'none',
		// 							color: '#FFFFFF'
		// 							}} to={item === 'stats' ? '.' : `${item}`}><ListItemText primary={item}/></NavLink>
		// 					</ListItemButton>
		// 				</ListItem>
		// 			))}
		// 			</List>
		// 		</Box>
    //   </AppBar>
    // </Box>
		<nav style={{display: 'flex', justifyContent: 'center', background: '#303134', borderTop: '.5px solid #9aa0a6'}}>
			<NavLink className='nav-link' style={({isActive}) => getStyles(isActive)} to='lineups'>
				lineup
			</NavLink>
			<NavLink className='nav-link' style={({isActive}) => getStyles(isActive)} end  to='.'>
				stats
			</NavLink>
		</nav>
	)
}

export default MatchDetailsNav