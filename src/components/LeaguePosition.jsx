import { Box, Typography } from '@mui/material'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
// import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
// import { Context } from '../App'

import line from '../assets/draw.svg'
import cross from '../assets/lose.svg'
import tick from '../assets/win.svg'

const LeaguePosition = ({team, homeTeam, awayTeam}) => {
	// const { setTeam } = useContext(Context)
	console.log(team)
	const { id: paramsId } = useParams()

	const {
		form,
		rank,
		goalsDiff,
		points,
		description,
		team: {logo, id, name},
		all: {played, win, draw, lose, goals: {for: goalsFor, against}}
	} = team

	const lastFive = [...form].map((match, index) => {
		if(match === 'W') {return <img key={index} src={tick} />}
		if(match === 'L') {return <img key={index} src={cross} />}
		if(match === 'D') {return <img key={index} src={line} />}
	})




	// const teamNameLink = name.replace(/ /g, '').toLowerCase()

	const promotionColor = {
		"Promotion - Champions League (Group Stage: )" : "#4285F4",
		"Promotion - Europa League (Group Stage: )" : "#FA7B17",
		"Promotion - Europa Conference League (Qualification: )" : "#34A853",
		"Relegation - Championship" : "#EA4335"
	}

	const getLeftBorder = description => description ? `3px solid ${promotionColor[description]}` : '3px solid transparent'
	
	const getBackgroundColor = (name, probHomeTeam, probAwayTeam) => {
		return probHomeTeam === name || probAwayTeam === name || id == paramsId  ? '#424548' : ''
	}

	const style = {
		color: '#bdc1c6', 
		borderBottom: `1px solid #3c4043`,
		fontSize: '.875rem',
		fontWeight: 'bold',
		padding: '.5em'
	}

	return (
		<TableRow sx={{
					borderLeft: `${getLeftBorder(description)}`,
					background: `${getBackgroundColor(name, homeTeam, awayTeam)}`,
					'&:hover': {
						background: '#424548'
					}
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
					<Link  style={{
								textDecoration: 'none',
								color: '#bdc1c6'
					}} to={`${id}`}><Typography  sx={{fontSize: '14px'}}>{name}</Typography></Link>
			</TableCell>
			<TableCell sx={style} align="center">{played}</TableCell>
			<TableCell sx={style} align="center">{win}</TableCell>
			<TableCell sx={style} align="center">{draw}</TableCell>
			<TableCell sx={style} align="center">{lose}</TableCell>
			<TableCell sx={style} align="center">{goalsFor}</TableCell>
			<TableCell sx={style} align="center">{against}</TableCell>
			<TableCell sx={style} align="center">{goalsDiff}</TableCell>
			<TableCell sx={style} align="center">{points}</TableCell>
			<TableCell sx={style} align="center">{lastFive}</TableCell>
		</TableRow>
	)
}

export default LeaguePosition