import { useSearchParams } from 'react-router-dom'
import Matches from '../pages/Matches'
// import NavBar from './NavBar'
import line from '../assets/draw.svg'
import cross from '../assets/lose.svg'
import tick from '../assets/win.svg'


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
				<h3 style={{color: '#bdc1c6'}}>Filter results</h3>
			<div style={{display: 'flex'}}>

				<button onClick={() => setSearchParams({result: 'win'})} 
								className='filter-button'>
					<img src={tick} alt="Green tick" />
					Win
				</button>

				<button onClick={() => setSearchParams({result: 'lose'})} 
								className='filter-button'>
					<img src={cross} alt="Red cross" />
					Lose
				</button>

				<button onClick={() => setSearchParams({result: 'draw'})} 
								className='filter-button'>
					<img style={{marginRight: '.5em'}} src={line} alt="Grey" />
					Draw
				</button>

				<button onClick={() => setSearchParams({})} 
								className='filter-button'>
					Clear
				</button>

			</div>
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