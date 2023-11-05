import { useLoaderData } from 'react-router-dom'
import { fetchLeagueData } from '../api'
import LeaguePosition from '../components/LeaguePosition'
import LeagueTable from "../components/LeagueTable"
import PromReg from '../components/PromReg'
import PromRegData from '../components/PromRegData'
import { competitions } from '../data'

const leagueTableLoader = () => (fetchLeagueData())

const LeagueTableLayout = () => {

	const {league: {standings: [standings]}} = useLoaderData()
	
	return (
		<>
			<LeagueTable>
				{standings.map((team, {id}) => <LeaguePosition key={id} team={team} />)}
			</LeagueTable>
			<PromReg>
				{competitions.map(({name, color}) => <PromRegData key={name} name={name} color={color} />)}
			</PromReg>
		</>
	)
}

export { leagueTableLoader }
export default LeagueTableLayout