import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useContext } from 'react'
import { YearContext } from '../App'

const BasicSelect = () => {
	
	const {setSeasonYear, seasonYear} = useContext(YearContext)

  const handleChange = (event) => {
		console.log(event.target.value)
		setSeasonYear(event.target.value)
  }

	return (
		<Box sx={{background: '#303134', padding: '.25em 0', borderBottom: '1px solid #3c4043'}}>
			<Box p={1} sx={{maxWidth: 120}}>
				<FormControl variant='standard' fullWidth>
					<InputLabel sx={{color: '#9aa0a6'}}  id="demo-simple-select-label">Season</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={seasonYear}
						label="Age"
						onChange={handleChange}
						sx={{fontWeight: 'bold', color: '#4487f6', }}
					>
						<MenuItem value={2023}>2023-24</MenuItem>
						<MenuItem value={2022}>2022-23</MenuItem>
						<MenuItem value={2021}>2021-22</MenuItem>
						<MenuItem value={2020}>2020-21</MenuItem>
						<MenuItem value={2019}>2019-20</MenuItem>
						<MenuItem value={2018}>2018-19</MenuItem>
						<MenuItem value={2017}>2017-18</MenuItem>
						<MenuItem value={2016}>2016-17</MenuItem>
						<MenuItem value={2015}>2015-16</MenuItem>
						<MenuItem value={2014}>2014-15</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</Box>
	)
}

export default BasicSelect