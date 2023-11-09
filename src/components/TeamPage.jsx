import { Button } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import Matches from '../pages/Matches'
// import NavBar from './NavBar'
import TeamPageNavBar from './TeamPageNavBar'


const TeamPage = () => {

	const [searchParams, setSearchParams] = useSearchParams()

	const resultFilter = searchParams.get('result')

	

	return (
		<>
		<TeamPageNavBar />
		<div>
			<Button variant='outlined' color='error' onClick={() => setSearchParams({result: 'win'})}>Win</Button>
			<Button variant='outlined' color='error' onClick={() => setSearchParams({result: 'lose'})}>Lose</Button>
			<Button variant='outlined' color='error' onClick={() => setSearchParams({result: 'draw'})}>Draw</Button>
			<Button variant='outlined' color='error' onClick={() => setSearchParams({})}>Clear</Button>
			<Matches resultFilter={resultFilter} />
		</div>
		</>
	)
}

export default TeamPage