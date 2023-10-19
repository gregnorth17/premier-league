import { Box, Typography } from '@mui/material'

const PromReg = ({children}) => {
	return (
		<Box sx={{background: '#202124', padding: '.5em 0 0 .5em'}}>
			<Box sx={{ 
				maxWidth: 400, 
				// margin: '.5em',
				padding: '1em',
				background: '#424548',
				borderRadius: '10px',
				color: '#bdc1c6' 
			}}>
				<Typography sx={{fontSize: '.75em', fontWeight: 'bold'}} variant='subtitle1' gutterBottom>Promotion/Relegation</Typography>
				{children}
			</Box>
		</Box>
	)
}

export default PromReg