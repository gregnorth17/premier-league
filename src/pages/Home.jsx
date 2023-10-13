import { Box } from '@mui/material'
// import { useContext } from 'react'
// import { YearContext } from '../App'
import BasicSelect from '../components/BasicSelect'
import LeaguePosition from '../components/LeaguePosition'
import LeagueTable from "../components/LeagueTable"
import PromReg from '../components/PromReg'
import PromRegData from '../components/PromRegData'
import { competitions } from '../data'

// import Team from "./components/Team"

const Home = ({localLeagueData}) => {
		// const context = useContext(YearContext)
		// console.log(context)
		return (
		<>
			{localLeagueData &&
			<>
					{/* <NavBar /> */}
					<Box sx={{ maxWidth: '752px', marginX: 'auto'}}>
					<BasicSelect />
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