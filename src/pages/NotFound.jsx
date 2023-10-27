import { Link } from "react-router-dom"


const NotFound = () => {
	return (
		<div style={{height: '80vh'}}>
			<div style={{color: '#FFFFFF', maxWidth: '650px', margin:'0 auto', paddingTop: '2em' }}>
				<h1>Much like Everton's chances of staying up this year, the page you were looking for is nowhere to be seen.</h1>
				<Link style={{textDecoration: 'none', textTransform: 'uppercase', background:'#FFFFFF', fontSize: '1.5rem', fontWeight: '800', padding: '.75em 1.25em', borderRadius: '5px' }} to='/'>Return Home</Link>
			</div>
		</div>
	)
}

export default NotFound