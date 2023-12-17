import { useParams } from 'react-router-dom'
// import { Context } from '../App';
import CircularProgress from '@mui/material/CircularProgress'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Fixture from '../components/Fixture'
import Fixtures from '../components/Fixtures'

// const fixturesLoader = () => {
// 	// const url = new URL(request.url)
// 	// console.log(url)
// 	return fetchFixtures()
// }

const Matches = ({resultFilter}) => {

  const headers =  {
				"x-apisports-key": "e6ada454a96b14b4c730492bfbac7357",
			}

	const {id : paramsId} = useParams()
  
  const getFixtures = async () => {
    return await axios.get(`https://v3.football.api-sports.io/fixtures?league=39&season=2023`, {headers}).then(res => res.data)
  }

  const oneDay = 60000 * 60 * 24

  const {data, isLoading, error} = useQuery({
    queryKey: ['fixtures'],
    queryFn: () => getFixtures(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: oneDay
  })

  // console.log(fixtures)

  console.log(data)

  if(isLoading) return <CircularProgress />
  if(error) return <h1>Something went wrong, try again later</h1>

	
	const teamFixtures = paramsId &&
	data?.response.filter(({teams: {away: {id: awayId}, home: {id: homeId}}}) => awayId == paramsId || homeId == paramsId)
	
	// const {team, setTeam} = useContext(Context)
	// console.log(setTeam)
	
	// useEffect(() => {

	// 	const {
	// 		teams: {
	// 			away: {id: awayId, name: awayTeam},
	// 			home: {name: homeTeam}
	// 		}
	// 	} = teamFixtures[0]
	
	// 	awayId == paramsId ? setTeam(awayTeam) : setTeam(homeTeam)
	// }, [paramsId])

	
	const filterTeamFixtures = paramsId ? 
	
		teamFixtures?.filter(({teams: {away: {id: awayId, winner: awayWin}, home: {id: homeId, winner: homeWin}}}) => {

			if(resultFilter === 'draw' && awayWin === null) {return true}

			if(resultFilter === null ) {return teamFixtures}

			if(resultFilter === 'win' &&
				awayWin === true && awayId == paramsId ||
				resultFilter === 'win' &&
				homeWin === true && homeId == paramsId) {
					return true
				}

			if(resultFilter === 'lose' &&
				awayWin === false && awayId == paramsId ||
				resultFilter === 'lose' &&
				homeWin === false && homeId == paramsId
			) {
				return true
			}
	})
	:
	data.response

	return (
		<Fixtures>
			{filterTeamFixtures.map(fixture => <Fixture key={fixture.fixture.id} fixture={fixture} />)}
		</Fixtures>
	)
}

// export { fixturesLoader };
export default Matches