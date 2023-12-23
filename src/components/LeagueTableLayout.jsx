// import { useLoaderData } from 'react-router-dom'
import LeagueTable from "../components/LeagueTable"
import BasicSelect from './BasicSelect'
import LeagueTableKey from './LeagueTableKey'
// import { queryClient } from ''
import { useQuery } from "@tanstack/react-query"
import LeaguePosition from './LeaguePosition'
// import { fetchLeagueData } from "../api"
import CircularProgress from '@mui/material/CircularProgress'
import axios from "axios"

// const leagueTableQuery = () => ({
//   queryKey: ['leagueTable'],
//   queryFn: async () => fetchLeagueData(),
//   // staleTime: 10000 * 5 * 5
// })

// const leagueTableLoader = 
//   (queryClient) =>
//   async () => {
//     const query = leagueTableQuery()
//     return (
//       queryClient.getQueryData(query.queryKey) ??
//       (await queryClient.fetchQuery(query))
//     )
//   }

const headers =  {
				"x-apisports-key": "e6ada454a96b14b4c730492bfbac7357",
			}

const getLeagueData = async () => {
  return await axios.get(`https://v3.football.api-sports.io/standings?league=39&season=2023`, {headers}).then(res => res.data)
  // return await axios.get('https://dummyjson.com/products/1').then(res => res)
}



const LeagueTableLayout = ({homeTeam, awayTeam}) => {

  // const { data } = useQuery(leagueTableQuery())
  // // const { data } = useQuery(leagueTableQuery())
  // console.log(data)
  const oneDay = 60000 * 60 * 24

  const {data, isRefetching, isLoading, error} = useQuery({
    queryKey: ['leagueTable'],
    queryFn: () => getLeagueData(),
    // staleTime: 60000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: oneDay
  })
  console.log(isRefetching)    
  console.log(data)
  // // const {league: {standings: [standings]}} = data
  // if(isLoading) {return <h2>Loading ...</h2>}

  if(isLoading) return <CircularProgress />
  if(error) return <h1>Something went wrong, try again later</h1>

	return (
		<>
      <BasicSelect />
			<LeagueTable>
				{data?.response[0].league.standings[0].map((team, {id}) => <LeaguePosition key={id} team={team} homeTeam={homeTeam} awayTeam={awayTeam} />)}
			</LeagueTable>
			<LeagueTableKey />
		</>
	)
}

// export { leagueTableLoader }
export default LeagueTableLayout