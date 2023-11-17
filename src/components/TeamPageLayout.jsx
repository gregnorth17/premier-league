import { Outlet } from 'react-router-dom'
import TeamPageNavBar from "./TeamPageNavBar"

const TeamPageLayout = () => {
	
	return (
		<>
			<TeamPageNavBar />
			<Outlet />
		</>
	)
}

export default TeamPageLayout