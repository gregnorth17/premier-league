import Box from '@mui/material/Box'


const LeagueKey = () => {
	return (
		<Box>
			<Box display='flex'>
				<Box sx={{
					backgroundColor: '#4285F4',
					height: '8px',
					width: '8px',
					alignSelf: 'center',
					marginRight: '1em'
				}}>
				</Box>
				<Box>
					UEFA Champions League group stage
				</Box>
			</Box>
			<Box display='flex'>
				<Box sx={{
					backgroundColor: '#FA7B17',
					height: '8px',
					width: '8px',
					alignSelf: 'center',
					marginRight: '1em'
				}}>
				</Box>
				<Box>
					Europa League group stage
				</Box>
			</Box>
			<Box display='flex'>
				<Box sx={{
					backgroundColor: '#34A853',
					height: '8px',
					width: '8px',
					alignSelf: 'center',
					marginRight: '1em'
				}}>
				</Box>
				<Box>
					Europa Conference League qualifiers
				</Box>
			</Box>
			<Box display='flex'>
				<Box sx={{
					backgroundColor: '#EA4335',
					height: '8px',
					width: '8px',
					alignSelf: 'center',
					marginRight: '1em'
				}}>
				</Box>
				<Box>
					Relegation
				</Box>
			</Box>
		</Box>
	)
}

export default LeagueKey