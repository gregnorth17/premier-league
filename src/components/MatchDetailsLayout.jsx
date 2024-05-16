import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
// import { getFixtureData } from '../api'
import MatchDetails from './MatchDetails'
import MatchDetailsNav from './MatchDetailsNav'


const MatchDetailsLayout = () => {

	const { fixtureId } = useParams()

  const getFixtureData = () => {
    return JSON.parse(localStorage.getItem('fixture'))
  }
  
  const { data, isLoading } = useQuery({
      queryKey: ['matchDetails', fixtureId],
      queryFn: () => getFixtureData()
    })

  if(isLoading) return <Box sx={{ textAlign: 'center' }}><CircularProgress /></Box>
  // if(data?.response?.length === 0) return <h1 className='error'>Something went wrong, try again later</h1>
  
  console.log(data)
  // fixture={data?.response[0]} THIS IS THE REAL ONE
	return (
		<>
			<MatchDetails fixture={data}   />
			<div style ={{background: '#212121', maxWidth: '632px', margin: '0 auto'}}>
				<MatchDetailsNav />
				{/* <Outlet context={data?.response[0]}  /> */}
			</div>
		</>
	)
}

export default MatchDetailsLayout