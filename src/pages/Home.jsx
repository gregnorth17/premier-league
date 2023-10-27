import { Box } from '@mui/material'
import { useLoaderData } from 'react-router-dom'
import { fetchLeagueData } from '../api'
// import BasicSelect from '../components/BasicSelect'
import LeaguePosition from '../components/LeaguePosition'
import LeagueTable from "../components/LeagueTable"
import PromReg from '../components/PromReg'
import PromRegData from '../components/PromRegData'
import { competitions } from '../data'

const loader = () => {
	return fetchLeagueData()
}


const Home = () => {

	const {league: {standings : [standings]}} = useLoaderData()
	// const data = useLoaderData()
	// const [standings] = data.league.standings
	// standings.flat(1)
	console.log(standings)
	// console.log(data)

	// const [standings] = data.league.standings

	// console.log(standings)

		
	return (
		<>
			<Box sx={{ maxWidth: '752px', marginX: 'auto'}}>
			{/* <BasicSelect /> */}
				<LeagueTable>
					{standings.map((team, {id}) => <LeaguePosition key={id} team={team} />)}
				</LeagueTable>
				<PromReg>
					{competitions.map(({name, color}) => <PromRegData key={name} name={name} color={color} />)}
				</PromReg>
			</Box>
		</>
	)	
}

export { loader }
export default Home