import { Box, Typography } from '@mui/material'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Link } from 'react-router-dom'
const LeaguePosition = ({team}) => {
	// console.log(team)
	const promotionColor = {
		"Promotion - Champions League (Group Stage: )" : "#4285F4",
		"Promotion - Europa League (Group Stage: )" : "#FA7B17",
		"Promotion - Europa Conference League (Qualification: )" : "#34A853",
		"Relegation - Championship" : "#EA4335"
	}
	// const teamId = useParams()
	// console.log(teamId)
	const getLeftBorder = team => team.description ? `3px solid ${promotionColor[team.description]}` : '3px solid transparent'

	return (
		
			<TableRow sx={{
						borderLeft: `${getLeftBorder(team)}`
			}}>
				<TableCell sx={{
						display: 'flex',
						// alignItems: 'center',
					}}>
						
						<Typography 
							align='center' 
							sx={{width: '25px'}}
						>
							{team.rank}
						</Typography>
						<Box sx={{
						display: 'flex',
						// alignSelf: 'center',
						width: '25px',
						// height: '40px'
						margin: '0 .5em'

						}} >
							<img src={team.team.logo} />
						</Box>
						<Link to={`/${team.team.id}`}><Typography>{team.team.name}</Typography></Link>
				</TableCell>
				<TableCell align="center">{team.all.played}</TableCell>
				<TableCell align="center">{team.all.win}</TableCell>
				<TableCell align="center">{team.all.draw}</TableCell>
				<TableCell align="center">{team.all.lose}</TableCell>
				<TableCell align="center">{team.all.goals.for}</TableCell>
				<TableCell align="center">{team.all.goals.against}</TableCell>
				<TableCell align="center">{team.goalsDiff}</TableCell>
				<TableCell align="center">{team.points}</TableCell>
			</TableRow>
	)
}

export default LeaguePosition