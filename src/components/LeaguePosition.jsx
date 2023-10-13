import { Box, Typography } from '@mui/material'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Link } from 'react-router-dom'
const LeaguePosition = ({team}) => {
	
	const {
		rank,
		goalsDiff,
		points,
		description,
		team: {logo, id, name},
		all: {played, win, draw, lose, goals: {for: goalsFor, against}}
	} = team

	const promotionColor = {
		"Promotion - Champions League (Group Stage: )" : "#4285F4",
		"Promotion - Europa League (Group Stage: )" : "#FA7B17",
		"Promotion - Europa Conference League (Qualification: )" : "#34A853",
		"Relegation - Championship" : "#EA4335"
	}

	const getLeftBorder = description => description ? `3px solid ${promotionColor[description]}` : '3px solid transparent'

	return (
		
		<TableRow sx={{
					borderLeft: `${getLeftBorder(description)}`
		}}>
			<TableCell sx={{
					display: 'flex',
				}}>
					
					<Typography 
						align='center' 
						sx={{width: '25px'}}
					>
						{rank}
					</Typography>
					<Box sx={{
					display: 'flex',
					width: '25px',
					margin: '0 .5em'

					}} >
						<img src={logo} />
					</Box>
					<Link style={{
								textDecoration: 'none',
								color: '#000'
								}} to={`/${id}`}><Typography>{name}</Typography></Link>
			</TableCell>
			<TableCell align="center">{played}</TableCell>
			<TableCell align="center">{win}</TableCell>
			<TableCell align="center">{draw}</TableCell>
			<TableCell align="center">{lose}</TableCell>
			<TableCell align="center">{goalsFor}</TableCell>
			<TableCell align="center">{against}</TableCell>
			<TableCell align="center">{goalsDiff}</TableCell>
			<TableCell align="center">{points}</TableCell>
		</TableRow>
	)
}

export default LeaguePosition