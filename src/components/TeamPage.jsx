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
			<div style={{display: 'flex', alignItems: 'center', width: '650px', margin: '0 auto 8px'}}>
				<h2 style={{fontSize: '.875rem', color: '#bdc1c6', margin: '0'}}>Filter results:</h2>

				<button onClick={() => setSearchParams({result: 'win'})} 
								className={`
									filter-button
									${resultFilter === 'win' ? 'selected' : ''}`}>
					<img src={tick} alt="Green tick" />
					Win
				</button>

				<button onClick={() => setSearchParams({result: 'lose'})} 
								className={`
									filter-button
									${resultFilter === 'lose' ? 'selected' : ''}`}>
					<img src={cross} alt="Red cross" />
					Lose
				</button>

				<button onClick={() => setSearchParams({result: 'draw'})} 
								className={`
									filter-button
									${resultFilter === 'draw' ? 'selected' : ''}`}>
					<img style={{marginRight: '.5em'}} src={line} alt="Grey line" />
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