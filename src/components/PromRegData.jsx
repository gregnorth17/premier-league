import { Box, Typography } from '@mui/material'

const PromRegData = ({name, color}) => {
	return (
				<Box display='flex'>
				<Box sx={{
					backgroundColor: `${color}`,
					height: '8px',
					width: '8px',
					alignSelf: 'center',
					marginRight: '1em'
				}}>
				</Box>
				<Typography variant='body2'>
					{name}
				</Typography>
			</Box>
	)
}

export default PromRegData