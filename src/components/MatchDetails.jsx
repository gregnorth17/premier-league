import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const MatchDetails = ({fixture}) => {
  console.log(fixture)
  try {
    const {
      events,
      league: {name: leagueName},
      fixture: {date, status: {short: matchStatus}},
      teams: {
        away: {name: awayTeam, logo: awayBadge}, 
        home: {name: homeTeam, logo: homeBadge}
      },
      goals: {away: awayGoals, home: homeGoals}
    }
    = fixture
  
    const checkGoals = team => (
      events?.filter(({team: {name}, type}) => name === team && type === "Goal")
            .map(({player: {id, name}, time: {elapsed}, detail}) => 
              (
                <Typography whiteSpace='nowrap' key={id} color='#9aa0a6' variant='body2' gutterBottom>
                  {name} {`${elapsed}'`} {detail === "Own Goal" && "(OG)"}
                </Typography>
              )
            )									
    )
      
      // 	// const checkCards = team => (
      // 	// 	events.filter(({team: {name}, type}) => name === team && type === "Card")
      // 	// 				.map(({player: {id, name}, time: {elapsed}}) => 
      // 	// 					(
      // 	// 						<Typography key={id} variant='body2'>
      // 	// 							{name} {`${elapsed}'`}
      // 	// 						</Typography>
      // 	// 					)
      // 	// 				)									
      // 	// )
    
    const underlineHover = {'&:hover': {textDecoration: 'underline'}}

    const displayMatchStatus = matchStatus => (matchStatus === 'Not Started' ? '' : matchStatus)
  
    return (
        <Box>
          <Box sx={{display:'flex',  p:'1.25em 0 1.25em 1.25em', background:'#212121'}}  >
            <Link to='..' relative='path'><ArrowBackIcon sx={{color: '#ffffff', mr:'.25em'}}/></Link>
            <Typography fontWeight='bold' color='#ffffff'>{homeTeam} vs {awayTeam}</Typography>
          </Box>
          <Box sx={{background: '#212121', maxWidth:'632px', m:'0 auto'}}  >
            <Box pb='.5em'>
              <Box sx={{
                p: '.75em 2.25em 0em',
              }}>
                <Box sx={{display: 'flex', flexWrap: 'wrap', mb: '2em'}}>
                  <Typography sx={[underlineHover, {color: '#c58af9', fontSize:'rem', whiteSpace: 'nowrap'}]}>{leagueName}</Typography>
                  <Typography ml='1em' color='#9aa0a6'>{new Date(date).toLocaleDateString()}</Typography>
                  <Typography ml='auto' color='#bdc1c6'>{displayMatchStatus(matchStatus)}</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '0 2em'}}>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '20%'
                  }}
                  >
                    <Box  sx={{
                      margin: '1em 0',
                      paddingTop: '.5em',
                      height: '48px',
                      width: '48px',
                      alignSelf: 'center',
                      justifySelf: 'center',
                      textAlign: 'center'
                    }}>
                      <img src={homeBadge} alt="Home team badge" />
                    </Box>
                    <Typography sx={underlineHover} fontWeight='bold' color='#e8eaed' align='center' noWrap>{homeTeam}</Typography>

                    {/* <h4 style={{textAlign: 'center', margin: '0'}}>team name</h4> */}
                  </Box>
                  <Typography color='#bdc1c6' variant='h4' alignSelf='center' justifySelf='center'>{homeGoals}</Typography>
                  <Box alignSelf='center' justifySelf='center'>
                    {
                      matchStatus === "Not Started"?
                      <Typography color='#bdc1c6'>vs</Typography>:
                      <HorizontalRuleIcon sx={{color: '#bdc1c6'}} />
                    }
                  </Box>
                  <Typography color='#bdc1c6' variant='h4' alignSelf='center' justifySelf='center'>{awayGoals}</Typography>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '20%'
                  }}
                  >
                    <Box  sx={{
                      margin: '1em 0',
                      paddingTop: '.5em',
                      height: '48px',
                      width: '48px',
                      alignSelf: 'center',
                      justifySelf: 'center',
                      textAlign: 'center',
                      
                    }}>
                      <img src={awayBadge} alt="Home team badge" />
                    </Box>
                    <Typography sx={underlineHover} fontWeight='bold' color='#e8eaed' align='center'>{awayTeam}</Typography>
                  </Box>
                </Box>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '1em'
                  // padding: '0 2em'
                }}>
                  <Box>
                    {checkGoals(homeTeam)}
                  </Box>
                  {homeGoals > 0 || awayGoals > 0 ?
                    <SportsSoccerIcon
                      sx={{
                        justifySelf: 'center',
                        alignSelf: 'center',
                        color: '#fff'
                        }}
                    />
                  :
                  ''
                  }
                  <Box>
                    {checkGoals(awayTeam)}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
    )
    

  } catch(error) {
    console.error(error)
  }
}

export default MatchDetails