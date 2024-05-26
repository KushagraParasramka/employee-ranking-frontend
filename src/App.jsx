import { useState, useEffect } from 'react'
import data from "../public/data.js"
import './App.css'
import Employees from './components/employeeTable.jsx'
import BestEmpl from './components/bestEmployee.jsx'
import Logo from "./assets/creative-cloud.png";

function App() {
  const [employeeData, setEmployeeData] = useState(null)
  const date = new Date();
  const currentDate = date.toDateString();
  const currentTime = date.toLocaleTimeString();

    useEffect(() => {
      const sortedData = [...data].sort((a,b) => b.workhrs - a.workhrs)
      setEmployeeData(sortedData);

    },[])

  return (
    <>

    {/* header contains logo and date and time */}
      <div className='header'>
        <div className='title-container'>
          <div className='logo-container'>
            <img src={Logo} className='logo'/>
          </div>
          <div className='title' >Employee Activity Dashboard</div>
        </div>
        <div className='date-container'>
          <div>{currentDate}</div>
          <div>{currentTime}</div>
        </div>
      </div>

{/* this block contains the two main components :- employee table, best employee card */}
      <div className='component-container'>
      <div className='best-emp-container'>
        {employeeData ? 
            (
              // render the card
              <BestEmpl bestEmployee={employeeData[0]} />
            ) :
            (
              <div>Loading...</div>
            )
          }
        </div>
        <div className='all-emp-container'>
          {employeeData ? 

            (
              // render the table
              <Employees employeeData={employeeData} />
            ) :
            (
              <div>Loading...</div>
            )
          }
        </div>
        
      </div>
      
    </>
  )
}

export default App
