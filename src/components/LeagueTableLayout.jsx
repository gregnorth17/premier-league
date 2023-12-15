// import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import LeagueTable from "../components/LeagueTable"
import BasicSelect from './BasicSelect'
import LeagueTableKey from './LeagueTableKey'
// import { queryClient } from ''
import { useQuery } from "@tanstack/react-query"
import LeaguePosition from './LeaguePosition'
// import { fetchLeagueData } from "../api"

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
}
// return await axios.get('https://dummyjson.com/products/1').then(res => res)



const LeagueTableLayout = () => {

  // const { data } = useQuery(leagueTableQuery())
  // // const { data } = useQuery(leagueTableQuery())
  // console.log(data)
  

  const {data, error, isLoading} = useQuery({
    queryKey: ['leagueTable'],
    queryFn: () => getLeagueData(),
    staleTime: 60000
  })
      
  console.log(data)
  // // const {league: {standings: [standings]}} = data
  // if(isLoading) {return <h2>Loading ...</h2>}

  if(isLoading) return <h1>Loading...</h1>

	return (
		<>
      <BasicSelect />
			<LeagueTable>
        
        {/* {data[0].form} */}
        {/* {data?.title} */}
				{data.response[0].league.standings[0]?.map((team, {id}) => <LeaguePosition key={id} team={team} />)}
			</LeagueTable>
			<LeagueTableKey />
		</>
	)
}

// export { leagueTableLoader }
export default LeagueTableLayout