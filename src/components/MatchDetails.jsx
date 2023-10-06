import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import Lineups from './Lineups'
import MatchDetailsNav from './MatchDetailsNav'
import Stats from './Stats'


const MatchDetails = () => {
	const [fixture, setFixture] = useState(null)
	
	
	// let goals
	// if(fixture) {goals = fixture.events.filter(event => event.type === "Goal")}
	
	// console.log((goals))
	
	// const checkGoals = (team) => {
		// 	return fixture.events.filter(event => event.team.name === team && event.type === "Goal")
		// 											.map(event => <Typography key={event.player.id}>{event.player.name} {event.time.elapsed}</Typography>)
		// }
	const {fixtureId} = useParams()

	try {
		useEffect(() => {
			fetch(`https://v3.football.api-sports.io/fixtures?id=${fixtureId}`, {
						headers: {
							"x-apisports-key": "e6ada454a96b14b4c730492bfbac7357"
						}
					})
					.then(response => response.json())
					.then(data => {
						console.log(data)
						setFixture(data.response[0])
						localStorage.setItem('fixture', JSON.stringify(data.response[0]))
			})
		},[fixtureId])
	
		console.log(fixture)
	
		const {
			events,
			statistics,
			lineups,
			league: {name: leagueName},
			fixture: {date, status: {long: matchStatus}},
			teams: {
							away: {name: awayTeam, logo: awayBadge}, 
							home: {name: homeTeam, logo: homeBadge}
						},
			goals: {away: awayGoals, home: homeGoals}
		} 
		= fixture
	
		const checkGoals = team => (
			events.filter(({team: {name}, type}) => name === team && type === "Goal")
						.map(({player: {id, name}, time: {elapsed}, detail}) => 
							(
								<Typography key={id} variant='body2'>
									{name} {`${elapsed}'`} {detail === "Own Goal" && "(OG)"}
								</Typography>
							)
						)									
		)
	
		// const checkCards = team => (
		// 	events.filter(({team: {name}, type}) => name === team && type === "Card")
		// 				.map(({player: {id, name}, time: {elapsed}}) => 
		// 					(
		// 						<Typography key={id} variant='body2'>
		// 							{name} {`${elapsed}'`}
		// 						</Typography>
		// 					)
		// 				)									
		// )
	
		return (
			fixture && 
				<Box maxWidth='632px' m='0 auto'>
					<Box display='flex' m='1em 0'>
						<Link to='/matches'><ArrowBackIcon/></Link>
						<Typography>{homeTeam} vs {awayTeam}</Typography>
					</Box>
					<Box mb='.5em'>
						<Box sx={{
							display: 'grid',
							gridTemplateColumns: 'repeat(5, 1fr)',
							gap: '1.25em .5em'
						}}>
							<Typography>{leagueName}</Typography>
							<Typography>{new Date(date).toLocaleDateString()}</Typography>
							<Typography align='center' gridColumn={5}>{matchStatus}</Typography>
							<Box  sx={{
								height: '48px',
								width: '48px',
								justifySelf: 'center',
								alignSelf: 'center'
							}}>
								<img src={homeBadge} alt="Home team badge" />
							</Box>
							<Typography variant='h3' alignSelf='center' justifySelf='center'>{homeGoals}</Typography>
							{/* <Typography alignSelf='center' justifySelf='center'>-</Typography> */}
							<Box alignSelf='center' justifySelf='center'>
								<HorizontalRuleIcon />
							</Box>
							<Typography variant='h3' alignSelf='center' justifySelf='center'>{awayGoals}</Typography>
							<Box sx={{
								height: '48px',
								width: '48px',
								justifySelf: 'center',
								alignSelf: 'center'
							}}>
								<img src={awayBadge} alt="Away team badge"/>
							</Box>
							<Typography align='center'>{homeTeam}</Typography>
							<Typography gridColumn={5}  align='center'>{awayTeam}</Typography>
							<Box gridColumn={1}>
								{checkGoals(homeTeam)}
							</Box>
							{homeGoals || awayGoals &&
								<SportsSoccerIcon 
									sx={{
										gridColumn: 3,
										justifySelf: 'center',
										alignSelf: 'center'
										}}
								/>
							}
							<Box gridColumn={5}>
								{checkGoals(awayTeam)}
							</Box>
						</Box>
					</Box>
					<MatchDetailsNav />
					<Routes>
						<Route path='/stats' element={<Stats stats={statistics} />}  />
						<Route path='/lineups' element={<Lineups lineups={lineups} />}  />
					</Routes>
				</Box>
		)

	} catch (err) {
		console.error(err)
	}
		
}

export default MatchDetails