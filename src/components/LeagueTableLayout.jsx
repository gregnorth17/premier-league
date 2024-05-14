import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { useQuery } from "@tanstack/react-query"
import { getLeagueData } from '../api'
import LeagueTable from "../components/LeagueTable"
import LeaguePosition from './LeaguePosition'
import LeagueTableKey from './LeagueTableKey'

const LeagueTableLayout = ({homeTeam, awayTeam}) => {
  // check error
  const oneDay = 60000 * 60 * 24

  // const getLeagueData = async () => {
  //   return await axios.get('/.netlify/functions/leagueDataApi').then(res => res.data)
  //   // console.log(data)
  // }

  const {data, isLoading, error} = useQuery({
    queryKey: ['leagueTable'],
    queryFn: () => getLeagueData(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: oneDay
  })

  // const query = useQuery({
  //   queryKey: ['leagueTable'],
  //   queryFn: () => getLeagueData(),
  //   refetchOnMount: false,
  //   refetchOnWindowFocus: false,
  //   refetchInterval: oneDay
  // })

  // console.log(query)
  

  // console.log(data)
  // console.log(error)

  if(isLoading) return <Box sx={{ textAlign: 'center' }}><CircularProgress  /></Box>
  // if(error) return <h1>Something went wrong, try again later</h1>

	return (
		<>
			<LeagueTable >
				{data?.response[0].league.standings[0].map((team, {id}) => <LeaguePosition key={id} team={team} homeTeam={homeTeam} awayTeam={awayTeam} />)}
			</LeagueTable>
			<LeagueTableKey />
		</>
	)
}

export default LeagueTableLayout