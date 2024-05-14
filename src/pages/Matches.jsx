import { useParams } from 'react-router-dom'
// import { Context } from '../App';
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { useQuery } from '@tanstack/react-query'
import { getFixtures } from '../api'
import Fixture from '../components/Fixture'
import Fixtures from '../components/Fixtures'

const Matches = ({resultFilter}) => {

	const {id : paramsId} = useParams()

  const oneDay = 60000 * 60 * 24

  const {data, isLoading, error} = useQuery({
    queryKey: ['fixtures'],
    queryFn: () => getFixtures(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: oneDay
  })

  if(isLoading) return <Box sx={{ textAlign: 'center' }}><CircularProgress  /></Box>
  if(error) return <h1>Something went wrong, try again later</h1>

	const teamFixtures = paramsId &&
    data?.response.filter(({teams: {away: {id: awayId}, home: {id: homeId}}}) => awayId == paramsId || homeId == paramsId)
	
	const filterTeamFixtures = paramsId ? 
	
		teamFixtures?.filter(({teams: {
                                   away: {id: awayId, winner: awayWin}, 
                                   home: {id: homeId, winner: homeWin}
                                  },
                           goals: {away: awayGoals, home: homeGoals},
                           fixture: {status: {short}}}) => {

			if(resultFilter === 'draw' && awayGoals === homeGoals && short === 'FT' ) {return true}

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

export default Matches