

const Probability = ({percent, teams}) => {
	return (
		<div style={{
			margin:'0 auto',
			display: 'grid',
			gridTemplateColumns: 'repeat(3, 1fr)',
			width: '90%'
		}}>
			<div style={{gridColumn: '1 / span 3', color: '#bdc1c6', textAlign:'center', fontWeight: '800', margin: '1em', fontSize: '.75rem'}}>WIN PROBABILITY</div>
			<div style={{textAlign: 'left', color: '#bdc1c6', fontWeight: '600', fontSize: '.75rem'}} width='33%'>{teams.home.name}</div>
			<div style={{textAlign: 'center', color: '#bdc1c6', fontWeight: '600', fontSize: '.75rem'}}  width='33%'>Draw</div>
			<div style={{textAlign: 'right', color: '#bdc1c6', fontWeight: '600', fontSize: '.75rem'}}  width='33%'>{teams.away.name}</div>
			<div style={{textAlign: 'left', color: '#FFB4A4', fontSize: '.75rem'}} width='33%'>{percent.home}</div>
			<div style={{textAlign: 'center', color: '#D6D6D6', fontSize: '.75rem'}}  width='33%'>{percent.draw}</div>
			<div style={{textAlign: 'right', color: '#FFB4A4', paddingBottom: '1em', fontSize: '.75rem'}}  width='33%'>{percent.away}</div>
			<div style={{display: 'flex', gridColumn: '1 / span 3'}}>
				<div style={{background: '#FFB4A4', height: '10px', width: `${percent.home}`, borderRight: '1px solid #212121'}}></div>
				<div style={{background: '#D6D6D6', width: `${percent.draw}`}}></div>
				<div style={{background: '#FFB4A4', width: `${percent.away}`, borderLeft: '1px solid #212121'}}></div>
			</div>
		</div>
	)
}

export default Probability