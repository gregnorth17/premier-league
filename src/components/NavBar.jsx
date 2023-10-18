import { Box, Typography } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/leaguelogo.png'

const NavBar = () => {
	
	// const navItems = ['matches', 'news', 'table', 'stats', 'players']

	const style = {
		textDecoration: 'none',
		color: '#9aa0a6',
		textTransform: 'uppercase',
		padding: '1em 1.5em',
		borderBottom: '3px solid transparent'
	}

	const activeStyle = {
		textDecoration: 'none',
		color: '#fff',
		textTransform: 'uppercase',
		padding: '1em 1.5em',
		borderBottom: '3px solid #fff',
	}

	const getStyles = isActive => isActive ? activeStyle : style


  return (
		<header>
			<Link to='/' style={{display: 'flex', alignItems: 'center', textDecoration: 'none', background: '#3F1052', padding: '.75em 0 0 1.5em'}}>
				<Box sx={{
								borderRadius: '50%',
								width: '35px',
								height: '35px',
								// backgroundColor: '#FFFFFF',
								mr: '.625em'
							}}>
								<img  src={logo} alt="Premier League logo"/>
				</Box>
				<Typography   color='#ffffff'>Premier League</Typography>
			</Link>
			<nav style={{ display: 'flex', justifyContent: 'center',  background: '#3F1052', marginBottom: '.5em'}}>
					<NavLink to='matches' className='nav-link' style={({isActive}) => getStyles(isActive)} >
						matches
					</NavLink>
					<NavLink to='table' className='nav-link' style={({isActive}) => isActive? activeStyle : style}>
						table
					</NavLink>
					<NavLink to='stats' className='nav-link' style={({isActive}) => isActive? activeStyle : style}>
						stats
					</NavLink>
					<NavLink to='players' className='nav-link' style={({isActive}) => isActive? activeStyle : style}>
						players
					</NavLink>
			</nav>
		</header>
	)
			// <header>
      //       <Link to="/">
			// 				<Box sx={{
			// 					borderRadius: '50%',
			// 					width: '35px',
			// 					height: '35px',
			// 					backgroundColor: '#FFFFFF',
			// 					mr: '.625em'
			// 				}}>
			// 					<img  src={logo} alt="Premier League logo"/>
			// 				</Box>
			// 			</Link>
			// 			<Typography variant="body1" component="h1" >
			// 				Premier League
			// 			</Typography>
			// 			<Box sx={{
			// 				background: '#3F1052'
			// 			}}>
      //       <nav>
			// 				{
			// 					navItems.map(item => 
			// 						<NavLink style={{
			// 							textDecoration: 'none',
			// 							color: '#fff',
			// 							fontSize: '.875rem',
			// 							textTransform: 'uppercase'
			// 							}}  
			// 							to={`/${item}`} key={item}
			// 						>
			// 							{item}
			// 						</NavLink>)
			// 					}
      //           {/* <NavLink 
      //               to="/host"
      //               style={({isActive}) => isActive ? activeStyles : null}
      //           >
      //               Host
      //           </NavLink>
      //           <NavLink 
      //               to="/about"
      //               style={({isActive}) => isActive ? activeStyles : null}
      //           >
      //               About
      //           </NavLink>
      //           <NavLink 
      //               to="/vans"
      //               style={({isActive}) => isActive ? activeStyles : null}
      //           >
      //               Vans
      //           </NavLink> */}
      //       </nav>
							
			// 			</Box>
      //   </header>
	// 	<AppBar sx={{ background: '#3F1052', margin:'0 auto 0.25em'}} position="static">
  //   <Box sx={{maxWidth: '500px',
	// 						display: 'flex',
	// 						flexDirection: 'column',
	// 						alignItems: 'center'
	// 					}}>
	// 				<Box sx={{
	// 					display: 'flex',
	// 					alignItems: 'center',
	// 					justifyContent: 'flex-start',
	// 					// // padding: '1em 0 0 1em'
	// 					// maxWidth: '50%'
	// 				}}>
	// 					<Box sx={{
	// 						borderRadius: '50%',
	// 						width: '35px',
	// 						height: '35px',
	// 						backgroundColor: '#FFFFFF',
	// 						mr: '.625em'
	// 					}}>
	// 						<img  src={logo} alt="Premier League logo"/>
	// 					</Box>
	// 					<Typography variant="body1" component="h1" >
	// 						Premier League
	// 					</Typography>
	// 				</Box>
	// 			<Box sx={{ 
	// 				display: 'flex', 
	// 				justifyContent: 'center'
	// 			}}>
	// 				<List sx={{ 
	// 					display: 'flex',
	// 					maxWidth: '752px',
	// 					padding: 0
	// 					}}
	// 				disablePadding
	// 				>
	// 				{navItems.map((item) => (
	// 					<ListItem sx={{
	// 						padding: 0,
	// 						paddingLeft: ".75em",
							
	// 					}} 
	// 					key={item} 
	// 					>
	// 						<ListItemButton sx={{ 
	// 							textAlign: 'center',
								
	// 							// textTransform: 'uppercase',
	// 							padding: '.75em 0',
	// 							}}
								
	// 						>
	// 							<NavLink style={{
	// 								textDecoration: 'none',
	// 								color: '#FFFFFF',
	// 								// textTransform: 'uppercase'
	// 								}} to={`/${item}`}><ListItemText primary={item}/></NavLink>
	// 						</ListItemButton>
	// 					</ListItem>
	// 				))}
	// 				</List>
	// 			</Box>
  //   </Box>
	// 	</AppBar>
  // )
}

// import AdbIcon from '@mui/icons-material/Adb';
// import MenuIcon from '@mui/icons-material/Menu';
// import AppBar from '@mui/material/AppBar';
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Toolbar from '@mui/material/Toolbar';
// import Tooltip from '@mui/material/Tooltip';
// import Typography from '@mui/material/Typography';
// import { useState } from 'react';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function NavBar() {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [anchorElUser, setAnchorElUser] = useState(null);
// 	const navItems = ['matches', 'news', 'table', 'stats', 'players']

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {navItems.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {navItems.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

export default NavBar