import Paper from '@mui/material/Paper'
import TableContainer from '@mui/material/TableContainer'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import SeasonStatsTable from '../components/SeasonStatsTable'

// const seasonStatsLoader = ({params}) => {
// 	console.log(params)
// 	return fetchSeasonStats()
// }

const SeasonStats = () => {

  const headers =  {
				"x-apisports-key": "e6ada454a96b14b4c730492bfbac7357",
			}

  const endPoints = [
    `https://v3.football.api-sports.io/players/topscorers?league=39&season=2023`,
    `https://v3.football.api-sports.io/players/topassists?league=39&season=2023`,
    `https://v3.football.api-sports.io/players/topyellowcards?league=39&season=2023`,
    `https://v3.football.api-sports.io/players/topredcards?league=39&season=2023`
  ]

	const tableTitles = ['Goals', 'Assists', 'Yellow Cards', 'Red Cards']

  const getSeasonStats = () => (
    Promise.all(endPoints.map(endPoint => axios.get(`${endPoint}`,{headers})
                                             .then(res => [...res.data.response])))
  )

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