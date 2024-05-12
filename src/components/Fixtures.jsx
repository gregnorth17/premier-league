import { Box } from '@mui/material'

const Fixtures = ({children}) => {
	return (
		<Box 
      className='fixtures'
      sx={{
        display: 'grid',
        // gridTemplateColumns: 'repeat(2, auto)',
        
        gridTemplateColumns: 'repeat(2, minmax(300px, 2fr) )',
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