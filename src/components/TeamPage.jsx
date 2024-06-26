import { useSearchParams } from 'react-router-dom'
import line from '../assets/draw.svg'
import cross from '../assets/lose.svg'
import tick from '../assets/win.svg'
import Matches from '../pages/Matches'

export const TeamPage = () => {

	const [searchParams, setSearchParams] = useSearchParams()

	const resultFilter = searchParams.get('result')

	return (
		<>
		<div>
      <h2 style={{fontSize: '.875rem', color: '#bdc1c6', margin: '', textAlign: 'center'}}>Filter results:</h2>
			<div style={{
        maxWidth: '650px',
        margin: '0 auto 8px'
      }}>
        <div className='filter-btns'
          style={{
            display: 'flex', 
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
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
			</div>
			<Matches resultFilter={resultFilter} />
		</div>
		</>
	)
}

export default TeamPage