import CircularProgress from '@mui/material/CircularProgress'
import Paper from '@mui/material/Paper'
import TableContainer from '@mui/material/TableContainer'
import { useQuery } from '@tanstack/react-query'
import { getSeasonStats } from '../api'
import SeasonStatsTable from '../components/SeasonStatsTable'

const SeasonStats = () => {
    
  const tableTitles = ['Goals', 'Assists', 'Yellow Cards', 'Red Cards']

  const oneDay = 6000 * 6 * 24

  const {data, isLoading, error} = useQuery({
    queryKey: ['seasonStats'],
    queryFn: () => getSeasonStats(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: oneDay
  })

  if(isLoading) return <CircularProgress />
  if(error) return <h1>Something went wrong, try again later</h1>

	return (
		<TableContainer sx={{ maxWidth: '752px', background: '#202124', margin: '0 auto' }} component={Paper}>
				{data?.map((stats, index) => <SeasonStatsTable key={index} stats={stats} title={tableTitles[index]} />)}
		</TableContainer>
	)
}

export default SeasonStats