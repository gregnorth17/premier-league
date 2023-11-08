import { useLocation, useSearchParams } from 'react-router-dom'
import Matches from '../pages/Matches'


const TeamPage = () => {

	const [searchParams, setSearchParams] = useSearchParams()

	const resultFilter = searchParams.get('result')

	const location = useLocation()

	location.state = resultFilter

	const handleClick = (key, value) => {
		setSearchParams(prevParams => {
			if (value === null) {
				prevParams.delete(key)
			} else {
				prevParams.set(key, value)
			}
			return prevParams
		})
	}

	return (
		<div>
			{/* <button><Link onClick={()=> handleClick()} to='?result=win'>Win</Link></button>
			<button><Link to='?result=lose'>Lose</Link></button>
			<button><Link to='?result=draw'>Draw</Link></button>
			<button><Link to='.'>Clear</Link></button> */}
			<button onClick={() => setSearchParams({result: 'win'})}>Win</button>
			<button onClick={() => setSearchParams({result: 'lose'})}>Lose</button>
			<button onClick={() => setSearchParams({result: 'draw'})}>Draw</button>
			<button onClick={() => setSearchParams({})}>clear</button>
			<Matches resultFilter={resultFilter} />
		</div>
	)
}

export default TeamPage