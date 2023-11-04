// import { Box, Typography } from '@mui/material';
// import {fixtureLoader} from '../api'
import { useLoaderData, useOutletContext } from 'react-router-dom';
import { fetchProbability } from '../api';
import Probability from './Probability';

const probabilityLoader = () => (fetchProbability())

const Stats = () => {

	const {statistics} = useOutletContext()

	const {predictions: {percent}, teams} = useLoaderData()

	console.log(teams)
	
	console.log(statistics)

	return (
		statistics.length === 0 ?
		<Probability percent={percent} teams={teams} /> :
		<h1>stats</h1>
	)

	// const [
	// 	homeStats,
	// 	awayStats,
	// 	homeBadge,
	// 	awayBadge,

	// ] = [
	// 		statistics[0]?.statistics,
	// 		statistics[1]?.statistics, 
	// 		statistics[0]?.team.logo,
	// 		statistics[1]?.team.logo
	// 	]

	// console.log(homeStats)

	// const teamStatsHTML = homeStats?.map(({value, type}, index) => {

	// 	const getStatValue = statValue => statValue === null ? '-' : statValue

	// 	return (
	// 		<>
	// 			<Typography color='#bdc1c6' variant='body2' align='center'>{getStatValue(value)}</Typography>
	// 			<Typography color='#bdc1c6' variant='body2' align='center' gridColumn={3} gutterBottom>{type}</Typography>
	// 			<Typography color='#bdc1c6' variant='body2' align='center' gridColumn={5}>{getStatValue(awayStats[index].value)}</Typography>
	// 		</>
	// 	)
	// })

	// return (
	// 	<Box sx={{
	// 		display: 'grid',
	// 		gridTemplateColumns: 'repeat(5, 1fr)',
	// 		marginTop: '.75em'
	// 	}}>
	// 		<Box justifySelf='center'  width='24px' height='24px'>
	// 			<img src={homeBadge}/>
	// 		</Box>
	// 		<Typography color='#bdc1c6' align='center' gridColumn={3} component='h2' variant='body1' gutterBottom>TEAM STATS</Typography>
	// 		<Box justifySelf='center' gridColumn={5} width='24px' height='24px'>
	// 			<img src={awayBadge}/>
	// 		</Box>
	// 		{teamStatsHTML}
	// 	</Box>
	// )
}

export { probabilityLoader };
export default Stats