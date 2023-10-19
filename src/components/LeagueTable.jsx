import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const LeagueTable = ({children}) => {

	const cellStyle = {
		color: '#bdc1c6',
		borderBottom: '1px solid #3c4043'
	}

	return (
		<>
			<TableContainer>
      <Table  sx={{ marginX: 'auto', background: '#202124'}} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={cellStyle}>Club</TableCell>
            <TableCell sx={cellStyle} align="center">MP</TableCell>
            <TableCell sx={cellStyle} align="center">W</TableCell>
            <TableCell sx={cellStyle} align="center">D</TableCell>
            <TableCell sx={cellStyle} align="center">L</TableCell>
						<TableCell sx={cellStyle} align="center">GF</TableCell>
            <TableCell sx={cellStyle} align="center">GA</TableCell>
            <TableCell sx={cellStyle} align="center">GD</TableCell>
            <TableCell sx={cellStyle} align="center">Pts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
					{children}
        </TableBody>
      </Table>
    </TableContainer>
			
		</>
	)
}

export default LeagueTable