

const Probability = ({percent, teams}) => {
	console.log(percent)
	console.log(teams)
	return (
		<table style={{margin:'0 auto'}} width='90%'>
			<thead>
				{/* <tr>
					<th colSpan='3'>WIN PROBABILITY</th>
				</tr> */}
				<tr>
					<th style={{width: '33%'}} align="left">{teams.home.name}</th>
					<th style={{width: '33%'}} align="center">Draw</th>
					<th style={{width: '33%'}} align="right">{teams.away.name}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{percent.home}</td>
					<td>{percent.draw}</td>
					<td>{percent.away}</td>
				</tr>
				<tr>
					<td style={{background: '#FFB4A4', height: '10px', width: `${percent.home}`}}></td>
					<td style={{background: '#D6D6D6', width: `${percent.draw}`}}></td>
					<td style={{background: '#FFB4A4', width: `${percent.away}`}}></td>
				</tr>
			</tbody>
			
		</table>
	)
}

export default Probability