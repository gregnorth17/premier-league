import { Outlet } from 'react-router-dom'
import MatchDetailsNav from "./MatchDetailsNav"

const MatchDetailsLayout = () => {
	return (
		<>
			<MatchDetailsNav />
			<Outlet />
		</>
	)
}

export default MatchDetailsLayout