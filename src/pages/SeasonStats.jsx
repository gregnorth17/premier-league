import Paper from '@mui/material/Paper'
import TableContainer from '@mui/material/TableContainer'
import { useQuery } from '@tanstack/react-query'
import { getSeasonStats } from '../api'
import SeasonStatsTable from '../components/SeasonStatsTable'

// const seasonStatsLoader = ({params}) => {
// 	console.log(params)
// 	return fetchSeasonStats()
// }

const SeasonStats = () => {
    
  const tableTitles = ['Goals', 'Assists', 'Yellow Cards', 'Red Cards']

  const oneDay = 6000 * 6 * 24

  const {data} = useQuery({
    queryKey: ['seasonStats'],
    queryFn: () => getSeasonStats(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: oneDay
  })

  console.log(data)

	return (
		<TableContainer sx={{ maxWidth: '752px', background: '#202124', margin: '0 auto' }} component={Paper}>
				{data?.map((stats, index) => <SeasonStatsTable key={index} stats={stats} title={tableTitles[index]} />)}
		</TableContainer>
	)
}


// export { seasonStatsLoader }
export default SeasonStats