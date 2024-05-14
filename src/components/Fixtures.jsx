import { Box } from '@mui/material'

const Fixtures = ({children}) => {
	return (
		<Box 
      className='fixtures'
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '650px',
        margin: '0 auto',
        padding: '0 .5em'
      }}
    >
			{children}
		</Box>
	)
}

export default Fixtures