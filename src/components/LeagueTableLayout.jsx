import { useLoaderData } from 'react-router-dom'
import { fetchLeagueData } from '../api'
import LeaguePosition from '../components/LeaguePosition'
import LeagueTable from "../components/LeagueTable"
import BasicSelect from './BasicSelect'
import LeagueTableKey from './LeagueTableKey'

const leagueTableLoader = () => (fetchLeagueData())

const LeagueTableLayout = () => {

	const {league: {standings: [standings]}} = useLoaderData()
	
	return (
		<>
      <BasicSelect />
			<LeagueTable>
				{standings.map((team, {id}) => <LeaguePosition key={id} team={team} />)}
			</LeagueTable>
			<LeagueTableKey />
		</>
	)
}

export { leagueTableLoader }
export default LeagueTableLayout