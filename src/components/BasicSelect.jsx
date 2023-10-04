import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useContext, useState } from 'react'
import { YearContext } from '../App'

const BasicSelect = () => {
	const {setSeasonYear} = useContext(YearContext)
	// console.log(setSeasonYear)
	const [year, setYear] = useState('');

  const handleChange = (event) => {
		console.log(event.target.value)
    // setYear(event.target.value);
		setSeasonYear(event.target.value)
  };
	return (
    <Box mt={2} sx={{ maxWidth: 120 }}>
      <FormControl  fullWidth>
        <InputLabel color='primary' id="demo-simple-select-label">Season</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={2023}>2023-24</MenuItem>
          <MenuItem value={2022}>Twenty</MenuItem>
          <MenuItem value={2021}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
	)
}

export default BasicSelect