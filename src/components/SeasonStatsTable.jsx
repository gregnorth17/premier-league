import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const SeasonStatsTable = ({stats, title}) => {

	const cellStyle = {
		padding: '0 0 0 1em',
		borderBottom: `1px solid #3c4043`
	}

	const tableDataHTML = stats.map(
		(
			{
				player: {name, photo}, 
				statistics: [
						{
							cards: {yellow, red}, 
							goals: {total, assists},
							team: {name : teamName, logo}
					}
				] 
			}, 
			index
		) => {
		if(index < 5) {
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
					<TableCell sx={[cellStyle, {fontWeight: '600', color: '#bdc1c6', paddingLeft: '.75em'}]}>{name}
						<Box display='flex'>
							<Box sx={{width: '24px', height: '24px'}}>
								<img src={logo} alt="Team badge" />
							</Box>
							<Typography sx={{color: '#9aa0a6'}}>{teamName}</Typography>
						</Box>
					</TableCell>
					<TableCell align='center' sx={[cellStyle, {color:'#bdc1c6', fontWeight: 'bold'}]}>
						{title === 'Goals' && total}
						{title === 'Assists' && assists}
						{title === 'Red Cards' && red}
						{title === 'Yellow Cards' && yellow}
					</TableCell>
				</TableRow>									
			)
		}
	})
	
	return (
		<Table key={``} aria-label="simple table">
			<caption style={{ captionSide:'top', fontSize: '1rem', color: '#bdc1c6', fontWeight: '500' }}>{title}</caption>
			<TableHead>
				<TableRow>
					<TableCell sx={{borderBottom: `1px solid #3c4043`,color: '#9aa0a6'}} colSpan={3}>Player</TableCell>
					<TableCell sx={{borderBottom: `1px solid #3c4043`,color: '#9aa0a6'}} align="center">{title}</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>		
				{tableDataHTML}
			</TableBody>
		</Table>
	)
}

export default SeasonStatsTable