// import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Outlet, useParams } from 'react-router-dom'
import { getFixtureData } from '../api'
import MatchDetails from './MatchDetails'
import MatchDetailsNav from "./MatchDetailsNav"

const MatchDetailsLayout = () => {

	const { fixtureId } = useParams()
  
  const { data, isLoading } = useQuery({
      queryKey: ['matchDetails', fixtureId],
      queryFn: () => getFixtureData(fixtureId)
    })
  
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