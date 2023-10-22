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
	
	const style = {
		color: '#bdc1c6', 
		borderBottom: `1px solid #3c4043`,
		fontSize: '.875rem',
		fontWeight: 'bold',
		padding: '.5em'
	}

	return (
		<TableRow sx={{
					borderLeft: `${getLeftBorder(description)}`
		}}>
			<TableCell sx={[style, {display: 'flex', alignItems: 'center'}]}>
					<Typography 
						align='center' 
						sx={{
							width: '25px',
							color: '#bdc1c6',
							fontSize: '.875rem',
							fontWeight: 'bold'
						}}
					>
						{rank}
					</Typography>
					<Box 
					sx={{
					display: 'flex',
					width: '25px',
					margin: '0 .5em'}} 
					>
						<img src={logo} />
					</Box>
					<Link style={{
								textDecoration: 'none',
								color: '#bdc1c6'
					}} to={`/${id}`}><Typography sx={{fontSize: '14px'}}>{name}</Typography></Link>
			</TableCell>
			<TableCell sx={style} align="center">{played}</TableCell>
			<TableCell sx={style} align="center">{win}</TableCell>
			<TableCell sx={style} align="center">{draw}</TableCell>
			<TableCell sx={style} align="center">{lose}</TableCell>
			<TableCell sx={style} align="center">{goalsFor}</TableCell>
			<TableCell sx={style} align="center">{against}</TableCell>
			<TableCell sx={style} align="center">{goalsDiff}</TableCell>
			<TableCell sx={style} align="center">{points}</TableCell>
		</TableRow>
	)
}

export default LeaguePosition