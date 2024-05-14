import { useRouteError } from 'react-router-dom'

const Error = () => {
	const {message} = useRouteError()
	return (
		<>
		{/* <h1 style={{color:'#fff'}}>Error: {message}</h1> */}
      <h1>Hhhhmmmm something went wrong. Try again later</h1>
		</>
	)
}

export default Error