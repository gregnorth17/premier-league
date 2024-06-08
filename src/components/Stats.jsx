// import { Box, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { useQuery } from '@tanstack/react-query'
import { useOutletContext, useParams } from 'react-router-dom'
import { getPrediction } from '../api'
import LeagueTableLayout from './LeagueTableLayout'
import MatchStats from './MatchStats'
import Probability from './Probability'

const Stats = () => {

  const { fixtureId } = useParams()
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['probability'],
    queryFn: () => getPrediction(fixtureId),
    refetchOnWindowFocus: false
  })

  try {
    const outletContext = useOutletContext()
  
    if(isLoading) return <CircularProgress />
    if(error) return <h1>Something went wrong, try again later</h1>

    return (
      outletContext.statistics.length > 0 ?
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
      :
       <>
        <Probability percent={data.data.response[0].predictions.percent} teams={data.data.response[0].teams} />
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

export default Stats