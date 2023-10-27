import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import SeasonStatsTable from '../components/SeasonStatsTable';

const SeasonStats = ({seasonStats}) => {

	const tableTitles = ['Goals', 'Assists', 'Yellow Cards', 'Red Cards']

	try {

		return (
			<TableContainer sx={{ maxWidth: '752px', background: '#202124', margin: '0 auto' }} component={Paper}>
					{seasonStats.map((stats, index) => <SeasonStatsTable key={index} stats={stats} title={tableTitles[index]} />)}
			</TableContainer>
		)
		
	} catch(e) {
		console.error(e)
	}
}

export default SeasonStats