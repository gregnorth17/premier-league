import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import Lineups from './Lineups'
// import MatchDetailsNav from './MatchDetailsNav'
import MatchDetailsLayout from './MatchDetailsLayout'
import Stats from './Stats'


const MatchDetails = () => {

	const [fixture, setFixture] = useState(null)
	
	const {fixtureId} = useParams()
	console.log(fixtureId)

	try {
		// useEffect(() => {
		// 	fetch(`https://v3.football.api-sports.io/fixtures?id=${fixtureId}`, {
		// 				headers: {
		// 					"x-apisports-key": "e6ada454a96b14b4c730492bfbac7357"
		// 				}
		// 			})
		// 			.then(response => response.json())
		// 			.then(data => {
		// 				console.log(data)
		// 				setFixture(data.response[0])
		// 				localStorage.setItem('fixture', JSON.stringify(data.response[0]))
		// 	})
		// },[fixtureId])
	
		useEffect(() => {
			const fixture = window.localStorage.getItem('fixture')
			setFixture(JSON.parse(fixture))
		}, [])
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
								<Typography whiteSpace='nowrap' key={id} color='#9aa0a6' variant='body2' gutterBottom>
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

		const underlineHover = {'&:hover': {textDecoration: 'underline'}}
	
		return (
			fixture && 
				<Box sx={{background: '#171717'}}>
					<Box sx={{display:'flex',  p:'1.25em 0 1.25em 1.25em', background:'#212121'}}  >
						<Link to='..' relative='path'><ArrowBackIcon sx={{color: '#ffffff', mr:'.25em'}}/></Link>
						<Typography fontWeight='bold' color='#ffffff'>{homeTeam} vs {awayTeam}</Typography>
					</Box>
					<Box sx={{background: '#212121', maxWidth:'632px', m:'0 auto'}}  >
						<Box mb='.5em'>
							<Box sx={{
								display: 'grid',
								gridTemplateColumns: 'repeat(5, 1fr)',
								gap: '1.25em .5em',
								p: '.75em 2.25em 0em' 
							}}>
								<Typography sx={[underlineHover, {color: '#c58af9', fontSize:'rem', whiteSpace: 'nowrap'}]}>{leagueName}</Typography>
								<Typography color='#9aa0a6'>{new Date(date).toLocaleDateString()}</Typography>
								<Typography color='#bdc1c6' align='center' gridColumn={5}>{matchStatus}</Typography>
								<Box  sx={{
									height: '48px',
									width: '48px',
									justifySelf: 'center',
									alignSelf: 'center'
								}}>
									<img src={homeBadge} alt="Home team badge" />
								</Box>
								<Typography color='#bdc1c6' variant='h4' alignSelf='center' justifySelf='center'>{homeGoals}</Typography>
								{/* <Typography alignSelf='center' justifySelf='center'>-</Typography> */}
								<Box alignSelf='center' justifySelf='center'>
									<HorizontalRuleIcon sx={{color: '#bdc1c6'}} />
								</Box>
								<Typography color='#bdc1c6' variant='h4' alignSelf='center' justifySelf='center'>{awayGoals}</Typography>
								<Box sx={{
									height: '48px',
									width: '48px',
									justifySelf: 'center',
									alignSelf: 'center'
								}}>
									<img src={awayBadge} alt="Away team badge"/>
								</Box>
								<Typography sx={underlineHover} fontWeight='bold' color='#e8eaed' align='center'>{homeTeam}</Typography>
								<Typography sx={underlineHover} fontWeight='bold' color='#e8eaed' gridColumn={5}  align='center'>{awayTeam}</Typography>
								<Box gridColumn={1}>
									{checkGoals(homeTeam)}
								</Box>
								{homeGoals || awayGoals &&
									<SportsSoccerIcon 
										sx={{
											gridColumn: 3,
											justifySelf: 'center',
											alignSelf: 'center',
											color: '#fff'
											}}
									/>
								}
								<Box gridColumn={5}>
									{checkGoals(awayTeam)}
								</Box>
							</Box>
						</Box>
						<Routes>
							<Route element={<MatchDetailsLayout />}>
								<Route index element={<Stats stats={statistics} />}  />
								<Route path='lineups' element={<Lineups lineups={lineups} />}  />
							</Route>
						</Routes>
					</Box>
				</Box>
		)

	} catch (err) {
		console.error(err)
	}
		
}

export default MatchDetails