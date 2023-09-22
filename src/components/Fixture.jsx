import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const Fixture = ({fixture}) => {
	console.log(fixture)
	const {logo: homeTeamBadge, name: homeTeamName} = fixture.teams.home
	const homeTeamScore = fixture.goals.home

	const {logo: awayTeamBadge, name: awayTeamName} = fixture.teams.away
	const awayTeamScore = fixture.goals.away

	const status = fixture.fixture.status.short
	const date = fixture.fixture.date
	
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
		<Link to={`/matches/${fixture.fixture.id}`}>
			<Box sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(4, 1fr)',
					alignItems: 'center',
					maxWidth: '375px',
					border: '1px solid #3c4043',
					padding: '1em'
			}}>
				<Box sx={{
					width: '24px',
					height: '24px',
					justifySelf: 'center'
				}}
				>
					<img src={homeTeamBadge} alt="home team badge" />
				</Box>
				<Typography variant='body2' >{homeTeamName}</Typography>
				<Typography variant='body2' textAlign='center'>{homeTeamScore}</Typography>
				<Typography>{status}</Typography>
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
				{/* <Typography>FT</Typography> */}
			</Box>
		</Link>
	)
}

export default Fixture