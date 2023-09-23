import { Box, Typography } from '@mui/material'

const Lineups = ({lineups}) => {
	// console.log(lineups)

	// lineups &&
	// lineups.map((lineup, index) => {
	// 	return (
	// 		<Box key={index}>
	// 			{lineup.team.name}
	// 		</Box>
	// 	)
	// })
	return lineups.map((lineup, index) => {
		console.log(lineup)
		return (
			<Box key={index}>
				<Box sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(4, 1fr)',
				}}>
					<Typography>{lineup.team.name}</Typography>
					<Typography>{lineup.formation}</Typography>
					<Box sx={{
						width: '28px',
						height: '28px',
						gridColumn: 4
					}}>
						<img src={lineup.team.logo} alt='team badge' />
					</Box>
				</Box>
				<Box>
					<Typography component='h2'>{lineup.}</Typography>
				</Box>
			</Box>
		)
	})
}

export default Lineups