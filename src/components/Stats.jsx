// import { Box, Typography } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
// import { fetchLeagueData, fetchProbability } from '../api';
// import LeagueTable from './LeagueTable';
import LeagueTableLayout from './LeagueTableLayout';
// import LeaguePosition from './LeaguePosition';
import MatchStats from './MatchStats';
// import Probability from './Probability';
// import LeagueTableLayout from './LeagueTableLayout';


// const probabilityLoader = () => (fetchProbability())

const Stats = () => {
  
	// const {statistics} = useOutletContext()
  try {
    const outletContext = useOutletContext()
    console.log(outletContext)
    // const {predictions: {percent}, teams} = useLoaderData()
    // console.log(teams)
    // const {league: {standings: [standings]}} = fetchLeagueData()
  
    return (
      // <h1>ahoy there</h1>
      // statistics.length !== 0 &&
      // <>
      // 	<Probability percent={percent} teams={teams} />
      // 	<h3 style={{textAlign: 'center', fontSize: '.75rem', color: '#bdc1c6', paddingTop: '1.25em'}}>STANDINGS</h3>
      // 	<div style={{width: '97%', margin: '0 auto'}}>
      // 		<LeagueTable>
      // 			{standings.map((team, {id}) => {
      // 				return <LeaguePosition  key={id} team={team} homeTeam={teams.home.name} awayTeam={teams.away.name} />
      // 			})}
      // 		</LeagueTable>
      // 		<LeagueTableKey />
      // 	</div>
      // </>
      // :
      <>
        <MatchStats statistics={outletContext?.statistics} />
        <h3 style={{textAlign: 'center', fontSize: '.75rem', color: '#bdc1c6', paddingTop: '1.25em'}}>STANDINGS</h3>
        <div style={{width: '97%', margin: '0 auto'}}>
          <LeagueTableLayout 
            homeTeam={outletContext?.teams.home.name} 
            awayTeam={outletContext?.teams.away.name} 
          />
        </div>
      </>
    )
  } catch(error) {
    console.error(error)
  }
}

// export { probabilityLoader };
export default Stats