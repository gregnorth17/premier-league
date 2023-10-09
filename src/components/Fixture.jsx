import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Fixture = ({fixture}) => {
	console.log(fixture)
	try{
		const {
			fixture: {id},
			teams: {
				away: {winner: awayTeamWon, logo: awayTeamBadge, name: awayTeamName},
				home: {winner: homeTeamWon, logo: homeTeamBadge, name: homeTeamName}
			},
			goals: {away: awayTeamScore, home: homeTeamScore},
			fixture: {status: {short}, date}
		} = fixture

		const matchDate = new Date(date).toDateString().slice(0, 11)
		const time = new Date(date).toLocaleTimeString().slice()

		const displayArrow = team => (
			team ? <ArrowLeftIcon sx={{position: 'absolute', paddingBottom: '3px'}} /> : ""
		)

		const styles = {
			color: '#bdc1c6',
			fontWeight: 'bold'
		}

		const winnerStyles = team => (
			team ? styles : ""
		)

		return (
			<Link style={{
				textDecoration: 'none',
				color: '#9aa0a6',
				background: 'rgb(32,33,36)'
				}} to={`/matches/${id}`}>
				<Box sx={{
						display: 'grid',
						gridTemplateColumns: '40px 135px auto 106px',
						alignItems: 'center',
						// maxWidth: '322.5px',
						border: '1px solid rgb(60,64,67)',
						// padding: '1em',
						height: '7em',
						padding: '1em 0 1em 1em'
				}}>
					<Box sx={{
						width: '24px',
						height: '24px',
						justifySelf: 'center',
					}}
					>
						<img src={homeTeamBadge} alt="home team badge" />
					</Box>
					<Typography sx={winnerStyles(homeTeamWon)}  variant='body2'>{homeTeamName}</Typography>
					<Typography sx={winnerStyles(homeTeamWon)}   position='relative' variant='body2' textAlign='center'>{homeTeamScore} {displayArrow(homeTeamWon)}</Typography>
					<Box sx={{
						width: '24px',
						height: '24px',
						justifySelf: 'center'
					}}
					>
						<img src={awayTeamBadge} alt="away team badge" />
					</Box>
					<Typography sx={winnerStyles(awayTeamWon)}   variant='body2'>{awayTeamName}</Typography>
					<Typography sx={winnerStyles(awayTeamWon)}  position='relative' variant='body2' textAlign='center'>{awayTeamScore} {displayArrow(awayTeamWon)}</Typography>
					{
						short === "FT" ?
						<Box gridRow={'1 / 3'} gridColumn={4}>
							<Typography sx={{fontSize: '0.75rem'}}	align='center' variant='body2'>{short}</Typography>
							<Typography sx={{fontSize: '0.75rem'}} align='center' variant='body2'>{new Date(date).toDateString().slice(0, 11)}</Typography>
						</Box>
						:
						<Box sx={styles} gridRow={'1 / 3'} gridColumn={4}>
							<Typography sx={{fontSize: '0.75rem'}} align='center' variant='body2' gridRow={1} gridColumn={4}>{matchDate}</Typography>
							<Typography sx={{fontSize: '0.75rem'}} align='center' variant='body2'>{time.slice(0, 5)}</Typography>
						</Box>
					}
				</Box>
			</Link>
		)
	} catch(e){
		console.error(e)
	}
}

export default Fixture