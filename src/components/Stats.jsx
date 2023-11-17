// import { Box, Typography } from '@mui/material';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import { fetchLeagueData, fetchProbability } from '../api';
import LeagueTable from './LeagueTable';
// import LeagueTableLayout from './LeagueTableLayout';
import LeaguePosition from './LeaguePosition';
import LeagueTableKey from './LeagueTableKey';
import MatchStats from './MatchStats';
import Probability from './Probability';


const probabilityLoader = () => (fetchProbability())

const Stats = () => {

	const {statistics} = useOutletContext()
	const {predictions: {percent}, teams} = useLoaderData()
	console.log(teams)
	const {league: {standings: [standings]}} = fetchLeagueData()

	return (
		statistics.length === 0 ?
		<>
			<Probability percent={percent} teams={teams} />
			<h3 style={{textAlign: 'center', fontSize: '.75rem', color: '#bdc1c6', paddingTop: '1.25em'}}>STANDINGS</h3>
			<div style={{width: '97%', margin: '0 auto'}}>
				<LeagueTable>
					{standings.map((team, {id}) => {
						return <LeaguePosition  key={id} team={team} homeTeam={teams.home.name} awayTeam={teams.away.name} />
					})}
				</LeagueTable>
				<LeagueTableKey />
			</div>
		</>
		:
		<>
			<MatchStats statistics={statistics} />
			<h3 style={{textAlign: 'center', fontSize: '.75rem', color: '#bdc1c6', paddingTop: '1.25em'}}>STANDINGS</h3>
			<div style={{width: '97%', margin: '0 auto'}}>
				<LeagueTable>
					{standings.map((team, {id}) => {
						return <LeaguePosition  key={id} team={team} homeTeam={teams.home.name} awayTeam={teams.away.name} />
					})}
				</LeagueTable>
				<LeagueTableKey />
			</div>
		</>
	)
}

export { probabilityLoader };
export default Stats