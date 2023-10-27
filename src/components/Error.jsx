import { useRouteError } from 'react-router-dom'

const Error = () => {
	const {message} = useRouteError()
	return (
		<>
		<h1 style={{color:'#fff'}}>Error: {message}</h1>
		</>
	)
}

export default Error