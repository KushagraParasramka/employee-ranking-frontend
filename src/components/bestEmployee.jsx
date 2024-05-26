import React from 'react'
import "../style-components/bestEmployee.css"

function BestEmpl({bestEmployee}) {
  return (
	<>
		<div className='best-emp-dp-container'>
			<img src={bestEmployee.dp} className='best-emp-dp'/>
		</div>
		<div className='best-emp-details'>
			<div style={{ fontWeight: 'bold', fontSize: '2vw', marginBottom: '10px' }}>EMPLOYEE OF THE MONTH</div>
			<div style={{ fontSize: '1.5vw', color: '#333', marginBottom: '5px' }}>{bestEmployee.name}</div>
			<div style={{ fontSize: '1vw', color: '#666' }}>{bestEmployee.post}</div>
		</div>
	</>
  )
}

export default BestEmpl