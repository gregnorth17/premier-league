import Paper from '@mui/material/Paper'
import TableContainer from '@mui/material/TableContainer'
import { useLoaderData } from 'react-router-dom'
import { fetchSeasonStats } from '../api'
import SeasonStatsTable from '../components/SeasonStatsTable'

const seasonStatsLoader = ({params}) => {
	console.log(params)
	return fetchSeasonStats()
}

const SeasonStats = () => {
	const seasonStats = useLoaderData()
	console.log(seasonStats)
	const tableTitles = ['Goals', 'Assists', 'Yellow Cards', 'Red Cards']

	return (
		<TableContainer sx={{ maxWidth: '752px', background: '#202124', margin: '0 auto' }} component={Paper}>
				{seasonStats.map((stats, index) => <SeasonStatsTable key={index} stats={stats} title={tableTitles[index]} />)}
		</TableContainer>
	)
}


export { seasonStatsLoader }
export default SeasonStats