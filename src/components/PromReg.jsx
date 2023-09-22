import { Box, Typography } from '@mui/material'

const PromReg = ({children}) => {
	return (
		<Box sx={{ 
			maxWidth: 650, 
			margin: '.75em auto',
			padding: '0.5em'
		}}>
			<Typography variant='subtitle1' gutterBottom>Promotion/Relegation</Typography>
			{children}
		</Box>
	)
}

export default PromReg