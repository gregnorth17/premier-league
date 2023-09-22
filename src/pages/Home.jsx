import { Box } from '@mui/material'
import BasicSelect from '../components/BasicSelect'
import LeaguePosition from '../components/LeaguePosition'
import LeagueTable from "../components/LeagueTable"
import NavBar from "../components/NavBar"
import PromReg from '../components/PromReg'
import PromRegData from '../components/PromRegData'
import { competitions } from '../data'

// import Team from "./components/Team"

const Home = ({localLeagueData}) => {

		return (
		<>
			{localLeagueData &&
			<>
					<NavBar logo={localLeagueData.league.logo} name={localLeagueData.league.name} />
					<BasicSelect />
					<Box sx={{ maxWidth: '752px', marginX: 'auto'}}>
						<LeagueTable>
							{localLeagueData.league.standings[0].map(team => <LeaguePosition key={team.team.id} team={team} />)}
						</LeagueTable>
						<PromReg>
							{competitions.map(({name, color}) => <PromRegData key={name} name={name} color={color} />)}
						</PromReg>
					</Box>
			</>
			}
		</>
	)
	// <Team key={teams.team.id}>{teams.team.name}
	
}

export default Home