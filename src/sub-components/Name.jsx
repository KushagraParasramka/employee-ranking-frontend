import React from 'react'
import "../style-components/Name.css"

function Name({employee}) {
  return (
	<div className='name-container'>
		<img src={employee.dp} className='profilepicture' />
		{employee.name}
	</div>
  )
}

export default Name