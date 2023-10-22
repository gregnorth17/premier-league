import { Box } from '@mui/material'

const Fixtures = ({children}) => {
	return (
		<Box sx={{
			display: 'grid',
			gridTemplateColumns: 'repeat(2, 322.5px)',
			maxWidth: '650px',
			margin: '0 auto',
			// border: '1px solid rgb(60,64,67)'
			
			
		}}>
			{children}
		</Box>
	)
}

export default Fixtures