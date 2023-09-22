import { Box } from '@mui/material'

const Fixtures = ({children}) => {
	return (
		<Box sx={{
			display: 'grid',
			gridTemplateColumns: 'repeat(2, auto)',
			maxWidth: '752px',
			margin: '0 auto'
		}}>
			{children}
		</Box>
	)
}

export default Fixtures