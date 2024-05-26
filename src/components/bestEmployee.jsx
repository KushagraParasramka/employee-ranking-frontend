import React from 'react'
import "../style-components/bestEmployee.css"

function BestEmpl({bestEmployee}) {
  return (
	<>
		<div className='best-emp-dp-container'>
			<img src={bestEmployee.dp} className='best-emp-dp'/>
		</div>
		<div className='best-emp-details'>
			<div className='best-title'>EMPLOYEE OF THE MONTH</div>
			<div className='best-name'>{bestEmployee.name}</div>
			<div className='best-post'>{bestEmployee.post}</div>
		</div>
	</>
  )
}

export default BestEmpl