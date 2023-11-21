import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../App'

import line from '../assets/draw.svg'
import cross from '../assets/lose.svg'
import tick from '../assets/win.svg'

const LeaguePosition = ({team, homeTeam, awayTeam}) => {
	const { setTeam } = useContext(Context)
	// console.log(team)
	const { id: paramsId } = useParams()
	const navigate = useNavigate()

	const {
		form,
		rank,
		goalsDiff,
		points,
		description,
		team: {logo, id, name},
		all: {played, win, draw, lose, goals: {for: goalsFor, against}}
	} = team

	const teamName = paramsId == id ? name : ""

	const lastFive = [...form].map((match, index) => {
		if(match === 'W') {return <img key={index} src={tick} />}
		if(match === 'L') {return <img key={index} src={cross} />}
		if(match === 'D') {return <img key={index} src={line} />}
	})


	const handleClick = () => {
		navigate(`${id}`)
		setTeam(name)
	}

	const teamNameLink = name.replace(/ /g, '').toLowerCase()

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
		<>
			<tr style={{
					borderLeft: `${getLeftBorder(description)}`,
					background: `${getBackgroundColor(name, homeTeam, awayTeam)}`
				}}
				className='league-position'
			>
				<td style={style}>
					<div style={{display: 'flex', alignItems: 'center'}}>
						<div style={{marginRight: '.5em'}}>{rank}</div>
						<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '.5em'}}>
							<img style={{width: '25px', height: '25px'}} src={logo} alt="" />
						</div>
						<div onClick={() => handleClick()} className='league-position-link'  style={{color: '#bdc1c6'}}>{name}</div>
					</div>
				</td>
				<td style={style} align="center">{played}</td>
				<td style={style} align="center">{win}</td>
				<td style={style} align="center">{draw}</td>
				<td style={style} align="center">{lose}</td>
				<td style={style} align="center">{goalsFor}</td>
				<td style={style} align="center">{against}</td>
				<td style={style} align="center">{goalsDiff}</td>
				<td style={style} align="center">{points}</td>
				<td style={style} align="center"><div style={{display: 'flex', justifyContent: 'center'}}>{lastFive}</div></td>
			</tr>
		</>
	)
}

export default LeaguePosition