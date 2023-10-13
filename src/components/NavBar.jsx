import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar = () => {
	
	const navItems = ['matches', 'news', 'table', 'stats', 'players']

  return (
		<AppBar sx={{ background: '#3F1052', marginBottom:'.25em' }} position="static">
    <Box sx={{maxWidth: '752px'}}>
				<Box sx={{
					display: 'flex',
					alignItems: 'center',
					// justifyContent: 'center',
					padding: '1em 0 0 1em'
				}}>
					<Box sx={{
						borderRadius: '50%',
						width: '35px',
						height: '35px',
						backgroundColor: '#FFFFFF',
						mr: '.625em'
					}}>
						<img  src={logo} alt="Premier League logo"/>
					</Box>
					<Typography align='right' variant="body1" component="h1" >
						Premier League
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
								<Link style={{
									textDecoration: 'none',
									color: '#FFFFFF',
									}} to={`/${item}`}><ListItemText primary={item}/></Link>
							</ListItemButton>
						</ListItem>
					))}
					</List>
				</Box>
    </Box>
		</AppBar>
  );
}

export default NavBar