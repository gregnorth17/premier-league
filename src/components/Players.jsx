import { useLoaderData } from 'react-router-dom'
import { fetchPlayers } from '../api'


const playersLoader = () => (fetchPlayers())

const Players = () => {
  const { players } = useLoaderData()
  console.log(players)

  const style = {
    maxWidth: '110px',
    height: '190px',
    border: '.5px solid #3c4043',
    borderRadius: '10px',
    overflow: 'hidden',
  }

  const playersHTML = players.map(({photo, name, position, index}) => {
    return (
      <div style={style} key={index}>
        <img src={photo} alt="player" />
        <h3 style={{color: '#bdc1c6', fontSize: '.875rem', margin: 0}}>{name}</h3>
        <span style={{color: '#9aa0a6', fontSize: '.75rem'}}>{position}</span>
      </div>
    )
  })

	return (
    <section style={{
      display: 'flex',
      // gridTemplateColumns: 'repeat(7, 1fr)'
      margin: '0 auto',
      flexWrap: 'wrap',
      gap: '.75em',
      width: '752px'
      }}>
      {playersHTML}
    </section>
	)
}

export { playersLoader }
export default Players