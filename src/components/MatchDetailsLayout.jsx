import CircularProgress from '@mui/material/CircularProgress'
import { useQuery } from '@tanstack/react-query'
import { Outlet, useParams } from 'react-router-dom'
import { getFixtureData } from '../api'
import MatchDetails from './MatchDetails'
import MatchDetailsNav from './MatchDetailsNav'


const MatchDetailsLayout = () => {

	const { fixtureId } = useParams()
  
  const { data, isLoading, error } = useQuery({
      queryKey: ['matchDetails', fixtureId],
      queryFn: () => getFixtureData(fixtureId)
    })

  if(isLoading) return <CircularProgress />
  if(error) return <h1>Something went wrong, try again later</h1>
  
	return (
		<>
			<MatchDetails fixture={data?.data.response[0]}  />
			<div style ={{background: '#212121', maxWidth: '632px', margin: '0 auto'}}>
				<MatchDetailsNav />
				<Outlet context={data?.data.response[0]}  />
			</div>
		</>
	)
}

export default MatchDetailsLayout