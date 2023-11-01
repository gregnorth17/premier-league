import { Box, Typography } from '@mui/material'
import { useOutletContext } from 'react-router-dom'


const Lineups = () => {
	const {lineups} = useOutletContext()
	console.log(lineups)
	// try children
	const lineupsHTML = lineups.map(
		(
			{
				formation, startXI, substitutes,
				coach: {name: managerName}, 
				team: {name: teamName, logo}
			},
			index
		) => {
			// style={{background: '#212121', maxWidth:'632px'}}
			return (
				<Box sx={{background: '#212121'}} color='#bdc1c6' background='#212121' width='50%' key={index}>
					<Box sx={{
						display: 'grid',
						gridTemplateColumns: 'repeat(3, auto)'
					}}>
						<Typography color='#e8eaed' component='h3' variant='subtitle2'>{teamName.toUpperCase()}</Typography>
						<Typography align='center'>{formation}</Typography>
						<Box sx={{
							width: '28px',
							height: '28px',
							gridColumn: 3
						}}>
							<img src={logo} alt='team badge'/>
						</Box>
					</Box>
					<Box>
						<Typography  color='#e8eaed' component='h3' variant='subtitle2' gutterBottom>MANAGER</Typography>
						<Typography variant='body2'  ml='1em' gutterBottom>{managerName}</Typography>
						<Typography color='#e8eaed' variant='subtitle2' gutterBottom>STARTING XI</Typography>
						{startXI.map(({player: {id, name, number}}) => <Typography variant='body2' ml='1em' gutterBottom key={id}>{number} {name}</Typography>)}
						<Typography color='#e8eaed' variant='subtitle2' gutterBottom>SUBSTITUTES</Typography>
						{substitutes.map(({player: {id, name, number}}) => <Typography variant='body2' ml='1em' gutterBottom key={id}>{number} {name}</Typography>)}
					</Box>
			</Box>
			)
		})
		return (
			<Box sx={{
				display: 'flex',
				padding: '1em',
				gap: '1em'
			}}>
				{lineupsHTML}
			</Box>
		)
}

export default Lineups