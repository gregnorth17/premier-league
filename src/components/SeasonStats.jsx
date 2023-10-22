import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const SeasonStats = ({topScorers}) => {
	console.log(topScorers)

	const cellStyle = {
		padding: '0 0 0 1em',
		borderBottom: `1px solid #3c4043`,
	}

	try {
		return (
			<TableContainer sx={{ maxWidth: '752px', background: '#202124', margin: '0 auto' }} component={Paper}>
				<Table aria-label="simple table">
					<caption style={{ captionSide:'top', fontSize: '1rem', color: '#bdc1c6', fontWeight: '500' }}>Goals</caption>
					<TableHead>
						<TableRow>
							<TableCell sx={{borderBottom: `1px solid #3c4043`,color: '#9aa0a6'}} colSpan={3}>Player</TableCell>
							<TableCell sx={{borderBottom: `1px solid #3c4043`,color: '#9aa0a6'}} align="center" >Goals</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
					{topScorers.map(
						(
							{
							player: {firstname, lastname, photo},
							statistics: [{team: {name, logo}, goals: {total}}]
							},
							index
						) => 
							{
								if(index < 10) { 
								return (
										<TableRow key={index}>
											<TableCell align='center' sx={[cellStyle, {color:'#bdc1c6', fontWeight: 'bold'}]}>{index + 1}</TableCell>
											<TableCell sx={[cellStyle, {width: '54px', padding: '.5em'}]}>
												<Box sx={{display: 'flex', alignItems: 'center'}}>
													<img style={{
														height: '42px',
														width: '42px',
														borderRadius: '50%'
														}} 
														src={photo} alt="Player" />
												</Box>
											</TableCell>
											<TableCell sx={[cellStyle, {fontWeight: '600', color: '#bdc1c6', paddingLeft: '.75em'}]}>{firstname} {lastname}
												<Box display='flex'>
													<Box sx={{width: '24px', height: '24px'}}>
														<img src={logo} alt="Team badge" />
													</Box>
													<Typography sx={{color: '#9aa0a6'}}>{name}</Typography>
												</Box>
											</TableCell>
											<TableCell align='center' sx={[cellStyle, {color:'#bdc1c6', fontWeight: 'bold'}]}>{total}</TableCell>
										</TableRow>									
									)
								}
							}
						)}
					</TableBody>
				</Table>
			</TableContainer>
		)
	} catch(e) {
		console.error(e)
	}
}

export default SeasonStats

// {
// 	topScorers.map(({player: {photo, firstname, secondname},
// 									statistics: {team: {name, logo}, goals: {total}}}, index) => (
// 											console.log(photo, firstname, secondname, name, logo, total, index)
// 											// {/* <TableRow key={index}>
												
// 	))
// }  