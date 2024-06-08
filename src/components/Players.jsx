import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getPlayers } from '../api'


const Players = () => {

  const { id } = useParams()

  const {data, isLoading, error } = useQuery({
    queryKey: ['players'],
    queryFn: () => getPlayers(id)
  })

  const style = {
    maxWidth: '110px',
    maxHeight: '190px',
    border: '.5px solid #3c4043',
    borderRadius: '10px',
    overflow: 'hidden',
  }

  if(isLoading) return <Box sx={{ textAlign: 'center' }}><CircularProgress /></Box>
  if(error) return <h1>Something went wrong, try again later</h1>

  const playersHTML = data?.response[0].players.map(({photo, name, position, index}) => {
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
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '.75em',
        maxWidth: '752px',
        margin: '0 auto'
    }}>
        {playersHTML}
    </section>
	)
}

export default Players