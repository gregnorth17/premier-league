import { Box } from '@mui/material'
import LeagueTableLayout from '../components/LeagueTableLayout'

const Home = () => {
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