import React from 'react';
import Name from '../sub-components/Name.jsx';
import Changes from '../sub-components/Changes.jsx';
import "../style-components/employeeTable.css";
import medal1 from "../assets/medal1.png";
import medal2 from "../assets/medal2.png";
import medal3 from "../assets/medal3.png";

function Employees({employeeData}) {
  return (
	
	<>
		<table className='employees-data'>
			<thead>
        		<tr>
					<th></th>
          			<th>Rank</th>
					<th>Name</th>
					<th>Designation</th>
					<th>Work hours</th>
					<th>Change</th>
        		</tr>
      		</thead>
			<tbody>
        		{
					employeeData.map((employee,i) => (
						<tr key={employee.id} className={i%2===0 ? "grey" : "white"}>
							<td>{i===0 ? <img src={medal1} className='medal'/> 
								: i===1 ? <img src={medal2} className='medal' /> 
								: i===2 ? <img src={medal3} className='medal' /> 
								: ""}</td>
							<td>{i+1}</td>
							<td>
								<Name employee={employee}/>
							</td>
							<td>{employee.post}</td>
							<td>
								7({employee.workhrs})
							</td>
							<td>
								<Changes employee={employee}/>
							</td>
						</tr>
					))
				}
      		</tbody>
		</table>
		
	</>
  )
}

export default Employees
