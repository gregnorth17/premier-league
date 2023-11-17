import { Button } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import Matches from '../pages/Matches'
// import NavBar from './NavBar'


const teamPageLoader = ({ params }) => {
	console.log(params)
	return null
}

const TeamPage = () => {

	const [searchParams, setSearchParams] = useSearchParams()

	const resultFilter = searchParams.get('result')

	return (
		<>
		<div>
			<Button variant='outlined' color='error' onClick={() => setSearchParams({result: 'win'})}>Win</Button>
			<Button variant='outlined' color='error' onClick={() => setSearchParams({result: 'lose'})}>Lose</Button>
			<Button variant='outlined' color='error' onClick={() => setSearchParams({result: 'draw'})}>Draw</Button>
			<Button variant='outlined' color='error' onClick={() => setSearchParams({})}>Clear</Button>
			<Matches resultFilter={resultFilter} />
			{/* <Form>
				<input type="text" placeholder='Name' />
				<br />
				<input type="text" placeholder='Email' />
			</Form> */}
		</div>
		</>
	)
}

export { teamPageLoader }
export default TeamPage