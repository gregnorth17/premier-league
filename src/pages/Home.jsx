import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'
import LeagueTableLayout from '../components/LeagueTableLayout'

const Home = () => {
	const location = useLocation()
	console.log(location)
	return (
		<>
			<Box sx={{ maxWidth: '752px', marginX: 'auto'}}>
			{/* <BasicSelect /> */}
				<LeagueTableLayout />
			</Box>
		</>
	)	
}

export default Home