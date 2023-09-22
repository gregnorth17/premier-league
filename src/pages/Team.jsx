// import TeamData from '../components/TeamData'
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const Team = ({teams}) => {
	const {id} = useParams()
	console.log(id);
	console.log(teams)
	
	try{
		const team = teams.find(team => team.team.id == id)
		console.log(team)
		
		const {founded, logo: badge, name } = team.team
		const { address, capacity, city, image, stadium } = team.venue
	
		// set up like google football, use click down button for info stadium etc, underneath new nav
	
		return (
			<Box>
				{/* <ArrowBackIcon />
				<div>
					<img src={badge} alt="team badge" />
				</div>
				<div>{name}</div> */}
				{/* <div>{city}</div> */}
				{/* <div>Founded: {founded}</div> */}
				<Box sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(4, 75px )',
					alignItems: 'center',
				}}>
					<Box justifySelf='center' width={45}>
						<img src={badge} alt="team badge" />
					</Box>
					<Typography textAlign='center'>{name}</Typography>
					<Typography textAlign='center'>5</Typography>
					<Typography>FT</Typography>
					<Box width={45}>
						<img src={badge} alt="team badge" />
					</Box>
					<Typography>{name}</Typography>
					<Typography>5</Typography>
					<Typography>FT</Typography>
				</Box>
			</Box>
		)
	} catch(error) {
		console.error(error)
	}
}

export default Team