import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const NavBar = ({logo, name}) => {

	const navItems = ['matches', 'news', 'table', 'stats', 'players']

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{
				backgroundColor: '#3F1052'
			}} position="static"
			>
				<Box sx={{
					display: 'flex',
					alignItems: 'center',
					
					// maxWidth: '100px'
				}}>
					<Box sx={{
						borderRadius: '50%',
						width: '50px',
						height: '50px',
						backgroundColor: '#fff',
						padding: '.2em'
					}} >
						<img  src={logo} alt="Premier League logo"/>
					</Box>
					<Typography align='right' variant="body1" component="h1" >
						{name}
					</Typography>
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
								<Link to={`/${item}`}><ListItemText primary={item}/></Link>
							</ListItemButton>
						</ListItem>
					))}
					</List>
				</Box>
      </AppBar>
    </Box>
  );
}

export default NavBar