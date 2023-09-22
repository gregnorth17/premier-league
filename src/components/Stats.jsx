import { Box, Typography } from '@mui/material'

const Stats = ({stats}) => {

	console.log(stats)

	const homeStats = stats[0].statistics
	const awayStats = stats[1].statistics

	const teamStatsHTML = homeStats.map((stat, index) => {

		const getStatValue = statValue => statValue === null ? '-' : statValue

		return (
			<>
				<Typography variant='body2' align='center'>{getStatValue(stat.value)}</Typography>
				<Typography variant='body2' align='center' gridColumn={3}>{stat.type}</Typography>
				<Typography variant='body2' align='center' gridColumn={5}>{getStatValue(awayStats[index].value)}</Typography>
			</>
		)
	})

	return (
		<Box sx={{
			display: 'grid',
			gridTemplateColumns: 'repeat(5, 1fr)',
		}}>
			<Box justifySelf='center'  width='24px' height='24px'>
				<img src={stats[0].team.logo}/>
			</Box>
			<Typography align='center' gridColumn={3} component='h2' variant='body1'>TEAM STATS</Typography>
			<Box justifySelf='center' gridColumn={5} width='24px' height='24px'>
				<img src={stats[1].team.logo}/>
			</Box>
			{teamStatsHTML}
		</Box>
	)
}

export default Stats