import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import SeasonStatsData from './SeasonStatsData'

const SeasonStats = ({topScorers}) => {
	console.log(topScorers)

	try {
		return (
			<TableContainer sx={{ maxWidth: '752px', background: '#202124', margin: '0 auto' }} component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell colSpan={3}>Player</TableCell>
							<TableCell align="right">Goals</TableCell>
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
							(
							<TableRow key={index}>
								<TableCell>{index + 1}</TableCell>
								<TableCell>
									<Box>
										<img style={{
											height: '54px',
											width: '54px',
											borderRadius: '50%'
											}} 
											src={photo} alt="Player" />
									</Box>
								</TableCell>
								<TableCell>{firstname} {lastname}
									<Box display='flex'>
										<Box sx={{width: '24px', height: '24px'}}>
											<img src={logo} alt="Team badge" />
										</Box>
										<Typography>{name}</Typography>
									</Box>
								</TableCell>

								<TableCell>{total}</TableCell>
							</TableRow>									
						))}
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