import { Box } from '@mui/material'
import BasicSelect from '../components/BasicSelect'
import LeaguePosition from '../components/LeaguePosition'
import LeagueTable from "../components/LeagueTable"
import PromReg from '../components/PromReg'
import PromRegData from '../components/PromRegData'
import { competitions } from '../data'

const Home = ({localLeagueData}) => {
		
		return (
		<>
			{localLeagueData &&
			<>
				<Box sx={{ maxWidth: '752px', marginX: 'auto'}}>
				<BasicSelect />
					<LeagueTable>
						{localLeagueData.league.standings[0].map((team, {id}) => <LeaguePosition key={id} team={team} />)}
					</LeagueTable>
					<PromReg>
						{competitions.map(({name, color}) => <PromRegData key={name} name={name} color={color} />)}
					</PromReg>
				</Box>
			</>
			}
		</>
	)	
}

export default Home