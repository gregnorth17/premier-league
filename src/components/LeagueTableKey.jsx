import { competitions } from '../data'
import PromReg from './PromReg'
import PromRegData from './PromRegData'

const LeagueTableKey = () => {
	return (
		<PromReg>
				{competitions.map(({name, color}) => <PromRegData key={name} name={name} color={color} />)}
		</PromReg>
	)
}

export default LeagueTableKey