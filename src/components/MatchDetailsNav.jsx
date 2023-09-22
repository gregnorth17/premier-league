import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const MatchDetailsNav = () => {

	const navItems = ['lineups', 'stats']
	
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{
			}} position="static"
			>
				<Box sx={{
					display: 'flex',
					alignItems: 'center'
				}}>
				</Box>
				<Box sx={{ 
					display: 'flex', 
					justifyContent: 'center'
				}}>
					<List sx={{ 
						display: 'flex',
						maxWidth: '752px',
						padding: 0
						}}
					disablePadding
					>
					{navItems.map((item) => (
						<ListItem sx={{
							padding: 0,
							paddingLeft: ".75em"
						}} 
						key={item} 
						>
							<ListItemButton sx={{ 
								textAlign: 'center',
								textTransform: 'uppercase',
								padding: '.75em 0'
								}}
								
							>
								<Link to={`${item}`}><ListItemText primary={item}/></Link>
							</ListItemButton>
						</ListItem>
					))}
					</List>
				</Box>
      </AppBar>
    </Box>
  );
}

export default MatchDetailsNav