import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const Fixture = ({fixture}) => {
	console.log(fixture)

	try{
		const {
			teams: {
				away: {logo: awayTeamBadge, name: awayTeamName},
				home: {logo: homeTeamBadge, name: homeTeamName}
			},
			goals: {away: awayTeamScore, home: homeTeamScore},
			fixture: {status: {long, short}, date}
		} = fixture

		const matchDate = new Date(date).toDateString().slice(0, 11)
		const time = new Date(date).toLocaleTimeString().slice()

		console.log(short)
		return (
			// <Box sx={{
			// 	display: 'flex',
			// 	justifyContent: 'space-between',
			// 	width: '375px',
			// 	border: '1px solid #3c4043',
			// 	padding: '1em'
				
			// }}>
			// 	<Box  display='flex' flexDirection='column' alignItems='space-between'>
			// 		<Box width='100%' display='flex' alignItems='center' mb='.5em'>
			// 			<Box sx={{
			// 				width: '24px',
			// 				height: '24px',
			// 				mr: '1em'
			// 			}}
			// 			>
			// 				<img src={homeTeamBadge} alt="home team club badge" />
			// 			</Box>
			// 			<Typography sx={{
			// 				mr: '1em'
			// 			}} variant='body1'>{homeTeamName}</Typography>
			// 			<Typography variant='body1'>{homeTeamScore}</Typography>
			// 		</Box>
			// 		<Box display='flex' alignItems='center'>
			// 			<Box sx={{
			// 				width: '24px',
			// 				height: '24px',
			// 				mr: '1em'
			// 			}}>
			// 				<img src={awayTeamBadge} alt="away team club badge" />
			// 			</Box>
			// 			<Typography variant='body1'>{awayTeamName}</Typography>
			// 			<Typography variant='body1'>{awayTeamScore}</Typography>
			// 		</Box>
			// 	</Box>
			// 	<Box justifySelf='end' alignItems='center' >
			// 		<Typography align='right'>{status}</Typography>
			// 		<Typography align='center'>{date.toDateString}</Typography>
			// 	</Box>
			// </Box>
			<Link style={{
				textDecoration: 'none',
				color: '#9aa0a6',
				background: 'rgb(32,33,36)'
				}} to={`/matches/${fixture.fixture.id}`}>
				<Box sx={{
						display: 'grid',
						gridTemplateColumns: '40px auto 1fr auto',
						alignItems: 'center',
						maxWidth: '375px',
						border: '1px solid rgb(60,64,67)',
						padding: '1em',
						height: '7em',
				}}>
					<Box sx={{
						width: '24px',
						height: '24px',
						justifySelf: 'center'
					}}
					>
						<img src={homeTeamBadge} alt="home team badge" />
					</Box>
					<Typography variant='body2'>{homeTeamName}</Typography>
					<Typography variant='body2' textAlign='center'>{homeTeamScore}</Typography>
					{/* <Typography align='center'>
						{
							short === "FT" ? short : ""
						}
					</Typography> */}
					<Box sx={{
						width: '24px',
						height: '24px',
						justifySelf: 'center'
					}}
					>
						<img src={awayTeamBadge} alt="away team badge" />
					</Box>
					<Typography variant='body2'>{awayTeamName}</Typography>
					<Typography variant='body2' textAlign='center'>{awayTeamScore}</Typography>
					{/* <Typography variant='body2' gridColumn={4}>
						{new Date(date).toDateString().slice(0, 11)}
						{
							!short === "FT" &&
							new Date(date).toLocaleTimeString().slice(0,5)
							}
					</Typography> */}
					{
						short === "FT" ?
						<>
							<Typography align='center' variant='body2' gridRow={1} gridColumn={4}>{short}</Typography>
							<Typography variant='body2' gridColumn={4}>{new Date(date).toDateString().slice(0, 11)}</Typography>
						</>
						:
						<>
							<Typography gridRow={1} gridColumn={4}>{matchDate}</Typography>
							<Typography gridColumn={4}>{time}</Typography>
						</>
					}
					{/* <Box gridRow='1/2' gridColumn={4}>
					</Box> */}
				</Box>
			</Link>
		)
	} catch(e){
		console.error(e)
	}
}

export default Fixture